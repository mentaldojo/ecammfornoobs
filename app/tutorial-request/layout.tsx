import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Ecamm Tutorial | Ecamm for Noobs",
  description:
    "Request a beginner-focused Ecamm tutorial if you cannot find your exact issue in the tutorial library.",
  alternates: {
    canonical: "/tutorial-request",
  },
};

export default function TutorialRequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
