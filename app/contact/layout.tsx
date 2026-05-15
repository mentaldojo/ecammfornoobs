import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ecamm for Noobs | Support and Partnerships",
  description:
    "Contact Ecamm for Noobs for support, product review requests, and partnership inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
