import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const reasonOptions = new Set([
  "support",
  "product-review",
  "partnership",
  "other",
]);

type RateEntry = {
  count: number;
  resetAt: number;
};

const globalRateLimitStore = globalThis as typeof globalThis & {
  __contactRateLimitStore?: Map<string, RateEntry>;
};

const rateLimitStore =
  globalRateLimitStore.__contactRateLimitStore ??
  new Map<string, RateEntry>();

globalRateLimitStore.__contactRateLimitStore = rateLimitStore;

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown-ip";
  const userAgent = request.headers.get("user-agent") || "unknown-ua";
  return `${ip}:${userAgent.slice(0, 120)}`;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  entry.count += 1;
  rateLimitStore.set(key, entry);
  return false;
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    const reason = String(body.reason ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Honeypot: silently accept to avoid tipping off bots.
    if (website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid name." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || email.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!reasonOptions.has(reason)) {
      return NextResponse.json(
        { ok: false, error: "Please choose a valid reason." },
        { status: 400 },
      );
    }

    if (message.length < 10 || message.length > 4000) {
      return NextResponse.json(
        { ok: false, error: "Message must be between 10 and 4000 characters." },
        { status: 400 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@ecammfornoobs.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Ecamm for Noobs] ${reason} inquiry from ${name}`,
      text: `Name: ${name}
Email: ${email}
Reason: ${reason}

Message:
${message}
`,
      html: `
        <h2>New contact inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
