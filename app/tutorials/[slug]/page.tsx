import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { affiliateLinks } from "@/src/data/affiliateLinks";
import {
  getTutorialBySlug,
  publishedTutorials,
  tutorials,
} from "@/src/data/tutorials";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ecammfornoobs.com";

type TutorialPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return publishedTutorials.map((tutorial) => ({ slug: tutorial.slug }));
}

export async function generateMetadata({
  params,
}: TutorialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    return {
      title: "Tutorial Not Found | Ecamm for Noobs",
      description: "The requested tutorial could not be found.",
    };
  }

  return {
    title: `${tutorial.title} | Ecamm Tutorial`,
    description: `${tutorial.description} Watch this Ecamm and Ecamm Live tutorial from Ecamm for Noobs.`,
    openGraph: {
      title: `${tutorial.title} | Ecamm for Noobs`,
      description: tutorial.description,
      url: `${SITE_URL}/tutorials/${tutorial.slug}`,
      images: tutorial.imageSrc ? [{ url: tutorial.imageSrc }] : undefined,
      type: "article",
    },
  };
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial || tutorial.status === "coming-soon") {
    notFound();
  }

  const related = tutorials
    .filter(
      (item) =>
        item.status === "published" &&
        item.slug !== tutorial.slug &&
        item.tags.some((tag) => tutorial.tags.includes(tag)),
    )
    .slice(0, 3);

  return (
    <main className="tutorial-page">
      <nav className="tutorial-breadcrumbs" aria-label="Tutorial navigation">
        <Link href="/tutorials" className="btn btn-secondary">
          Back to Tutorials
        </Link>
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
      </nav>

      <header className="tutorial-head">
        <p className="section-kicker">Solution {tutorial.episode}</p>
        <h1>{tutorial.title}</h1>
        <p>{tutorial.description}</p>
      </header>

      <section className="tutorial-video-block">
        <div className="tutorial-detail-video-frame">
          <iframe
            src={tutorial.youtubeUrl}
            title={tutorial.title}
            className="h-full w-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a
          className="btn btn-secondary tutorial-detail-cta"
          href={affiliateLinks.tutorialModal}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply This In Ecamm
        </a>
      </section>

      <section className="tutorial-affiliate-strip">
        <div className="tutorial-affiliate-copy">
          <p className="affiliate-badge-kicker">
            Official <span className="affiliate-badge-brand">Ecamm</span> Partner
            Link
          </p>
          <p className="affiliate-badge-title">
            Try Ecamm free to support more rapid Ecamm solutions.
          </p>
        </div>
        <a
          className="btn btn-orange tutorial-affiliate-cta"
          href={affiliateLinks.heroCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Ecamm Free
        </a>
      </section>

      <section className="tutorial-copy-block">
        <h2>What this tutorial covers</h2>
        <p>
          This short walkthrough explains a single Ecamm workflow clearly so you
          can apply it immediately and move on with your stream setup.
        </p>
        <ul>
          <li>Where this feature is found inside Ecamm</li>
          <li>What to check first if something is not working</li>
          <li>How to confirm the fix before you go live</li>
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="tutorial-related-block">
          <h2>Related tutorials</h2>
          <div className="tutorial-related-links">
            {related.map((item) => (
              <Link key={item.id} href={`/tutorials/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
