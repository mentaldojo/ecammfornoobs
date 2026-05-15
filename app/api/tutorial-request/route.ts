import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const EMAIL_RATE_LIMIT_MAX_REQUESTS = 3;
const MIN_SUBMIT_TIME_MS = 2500;

const ecammAreaOptions = new Set([
  "scenes",
  "overlays",
  "audio",
  "livestreaming",
  "interview-mode",
  "screen-sharing",
  "comments",
  "profiles",
  "other",
]);

type RateEntry = {
  count: number;
  resetAt: number;
};

const globalRateLimitStore = globalThis as typeof globalThis & {
  __tutorialRequestRateLimitStore?: Map<string, RateEntry>;
  __tutorialRequestEmailRateLimitStore?: Map<string, RateEntry>;
};

const rateLimitStore =
  globalRateLimitStore.__tutorialRequestRateLimitStore ??
  new Map<string, RateEntry>();
const emailRateLimitStore =
  globalRateLimitStore.__tutorialRequestEmailRateLimitStore ??
  new Map<string, RateEntry>();

globalRateLimitStore.__tutorialRequestRateLimitStore = rateLimitStore;
globalRateLimitStore.__tutorialRequestEmailRateLimitStore = emailRateLimitStore;

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown-ip";
  const userAgent = request.headers.get("user-agent") || "unknown-ua";
  return `${ip}:${userAgent.slice(0, 120)}`;
}

function isRateLimited(
  store: Map<string, RateEntry>,
  key: string,
  windowMs: number,
  maxRequests: number,
) {
  const now = Date.now();
  const entry = store.get(key);
  if (!entry || now > entry.resetAt) {
    store.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    return false;
  }
  if (entry.count >= maxRequests) {
    return true;
  }
  entry.count += 1;
  store.set(key, entry);
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

function countUrls(input: string) {
  const matches = input.match(/https?:\/\/|www\./gi);
  return matches ? matches.length : 0;
}

function looksLikeSpam(message: string) {
  const lower = message.toLowerCase();
  const spamPhrases = [
    "crypto",
    "guest post",
    "seo service",
    "backlink",
    "casino",
    "viagra",
  ];
  return spamPhrases.some((phrase) => lower.includes(phrase));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    const requestText = String(body.requestText ?? "").trim();
    const ecammArea = String(body.ecammArea ?? "").trim();
    const website = String(body.website ?? "").trim();
    const company = String(body.company ?? "").trim();
    const startedAt = Number(body.startedAt ?? 0);

    if (website.length > 0 || company.length > 0) {
      return NextResponse.json({ ok: true });
    }
    if (
      Number.isFinite(startedAt) &&
      startedAt > 0 &&
      Date.now() - startedAt < MIN_SUBMIT_TIME_MS
    ) {
      return NextResponse.json({ ok: true });
    }

    const clientKey = getClientKey(request);
    if (
      isRateLimited(
        rateLimitStore,
        clientKey,
        RATE_LIMIT_WINDOW_MS,
        RATE_LIMIT_MAX_REQUESTS,
      )
    ) {
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
        { ok: false, error: "Please enter your name (2 to 100 characters)." },
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

    if (requestText.length < 15 || requestText.length > 4000) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please describe what you are stuck on in at least 15 characters.",
        },
        { status: 400 },
      );
    }
    if (!ecammAreaOptions.has(ecammArea)) {
      return NextResponse.json(
        { ok: false, error: "Please choose which part of Ecamm this is about." },
        { status: 400 },
      );
    }
    if (countUrls(requestText) > 2 || looksLikeSpam(requestText)) {
      return NextResponse.json({ ok: true });
    }
    if (
      isRateLimited(
        emailRateLimitStore,
        email,
        EMAIL_RATE_LIMIT_WINDOW_MS,
        EMAIL_RATE_LIMIT_MAX_REQUESTS,
      )
    ) {
      return NextResponse.json(
        { ok: false, error: "Please wait before sending another request." },
        { status: 429 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@ecammfornoobs.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown-ip";
    const userAgent = request.headers.get("user-agent") || "unknown-ua";

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: "EcammForNoobs tutorial request",
      text: `Tutorial request

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Ecamm area: ${ecammArea || "Not provided"}
IP: ${ip}
User agent: ${userAgent}

What they are stuck on:
${requestText}
`,
      html: `
        <h2>New tutorial request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name || "Not provided")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Ecamm area:</strong> ${escapeHtml(ecammArea || "Not provided")}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p><strong>User agent:</strong> ${escapeHtml(userAgent)}</p>
        <p><strong>What they are stuck on:</strong></p>
        <p>${escapeHtml(requestText).replaceAll("\n", "<br />")}</p>
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
