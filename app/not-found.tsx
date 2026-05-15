import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: This page could not be found.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <p className="section-kicker">404</p>
        <h1>Page not found</h1>
        <p className="legal-updated">
          The page you are looking for does not exist.
        </p>
      </header>
    </main>
  );
}
