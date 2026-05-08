import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { affiliateLinks } from "@/src/data/affiliateLinks";
import { getTutorialBySlug, tutorials } from "@/src/data/tutorials";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ecammfornoobs.com";

type TutorialPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tutorials.map((tutorial) => ({ slug: tutorial.slug }));
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

  const metadataTitle = tutorial.seoTitle ?? `${tutorial.title} | Ecamm Tutorial`;
  const metadataDescription =
    tutorial.seoDescription ??
    `${tutorial.description} Watch this Ecamm and Ecamm Live tutorial from Ecamm for Noobs.`;

  return {
    title: metadataTitle,
    description: metadataDescription,
    openGraph: {
      title: tutorial.seoTitle ?? `${tutorial.title} | Ecamm for Noobs`,
      description: metadataDescription,
      url: `${SITE_URL}/tutorials/${tutorial.slug}`,
      images: tutorial.imageSrc ? [{ url: tutorial.imageSrc }] : undefined,
      type: "article",
    },
  };
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }
  const isComingSoon = tutorial.status === "comingSoon";

  const related =
    tutorial.relatedTutorialSlugs && tutorial.relatedTutorialSlugs.length > 0
      ? tutorial.relatedTutorialSlugs
          .map((relatedSlug) => getTutorialBySlug(relatedSlug))
          .filter((item): item is NonNullable<typeof item> => item !== undefined)
          .filter(
            (item) => item.status === "published" && item.slug !== tutorial.slug,
          )
      : tutorials
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
        {isComingSoon ? (
          <div className="tutorial-upcoming-notice" role="status" aria-live="polite">
            <p className="tutorial-upcoming-notice-title">Currently in production</p>
            <p>New tutorial coming soon.</p>
          </div>
        ) : (
          <>
            <div
              className={`tutorial-detail-video-frame ${
                tutorial.videoAspect === "landscape"
                  ? "tutorial-detail-video-frame-landscape"
                  : ""
              }`}
            >
              <iframe
                src={tutorial.youtubeUrl ?? ""}
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
          </>
        )}
      </section>

      {!isComingSoon ? (
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
      ) : null}

      <section className="tutorial-copy-block">
        {isComingSoon ? (
          <section className="tutorial-article-section">
            <h2>Currently in production</h2>
            <p>This tutorial is being prepared and will be published soon.</p>
          </section>
        ) : tutorial.detailContent ? (
          <>
            <section className="tutorial-article-section">
              <h2>{tutorial.detailContent.problemHeading}</h2>
              {tutorial.detailContent.problemParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {tutorial.detailContent.keyIdeaHeading &&
              tutorial.detailContent.keyIdeaText ? (
                <aside className="tutorial-key-idea">
                  <h3>{tutorial.detailContent.keyIdeaHeading}</h3>
                  <p>{tutorial.detailContent.keyIdeaText}</p>
                </aside>
              ) : null}
              {tutorial.detailContent.explanationSections?.map((section) => (
                <div key={section.heading} className="tutorial-explanation-section">
                  <h4>{section.heading}</h4>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </section>

            <section className="tutorial-article-section">
              <h3>{tutorial.detailContent.stepsHeading}</h3>
              {tutorial.detailContent.stepsIntro ? (
                <p>{tutorial.detailContent.stepsIntro}</p>
              ) : null}
              <ol>
                {tutorial.detailContent.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {tutorial.detailContent.stepsFollowUpParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="tutorial-article-section">
              <h3>{tutorial.detailContent.commonMistakeHeading}</h3>
              {tutorial.detailContent.commonMistakeParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
            {tutorial.detailContent.affiliateRecommendationsHeading ||
            tutorial.detailContent.affiliateRecommendationsIntroParagraphs
              ?.length ||
            tutorial.detailContent.affiliateRecommendations?.length ||
            tutorial.detailContent.affiliateDisclosure ? (
              <section className="tutorial-article-section">
                {tutorial.detailContent.affiliateRecommendationsHeading ? (
                  <h3>{tutorial.detailContent.affiliateRecommendationsHeading}</h3>
                ) : null}
                {tutorial.detailContent.affiliateRecommendationsIntroParagraphs?.map(
                  (paragraph) => <p key={paragraph}>{paragraph}</p>,
                )}
                {tutorial.detailContent.affiliateRecommendations &&
                tutorial.detailContent.affiliateRecommendations.length > 0 ? (
                  <div className="tutorial-contextual-tools-grid">
                    {tutorial.detailContent.affiliateRecommendations.map((item) => (
                      <article
                        key={item.name}
                        className="tutorial-contextual-tool-card"
                      >
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <a
                          className="tool-link"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                      </article>
                    ))}
                  </div>
                ) : null}
                {tutorial.detailContent.affiliateDisclosure ? (
                  <p className="tutorial-contextual-tools-disclosure">
                    {tutorial.detailContent.affiliateDisclosure}
                  </p>
                ) : null}
              </section>
            ) : null}
            {tutorial.detailContent.nextStepsHeading ||
            tutorial.detailContent.nextStepsIntro ||
            tutorial.detailContent.nextStepsTutorialSlugs?.length ? (
              <section className="tutorial-article-section">
                {tutorial.detailContent.nextStepsHeading ? (
                  <h3>{tutorial.detailContent.nextStepsHeading}</h3>
                ) : null}
                {tutorial.detailContent.nextStepsIntro ? (
                  <p>{tutorial.detailContent.nextStepsIntro}</p>
                ) : null}
                {tutorial.detailContent.nextStepsTutorialSlugs &&
                tutorial.detailContent.nextStepsTutorialSlugs.length > 0 ? (
                  <ul>
                    {tutorial.detailContent.nextStepsTutorialSlugs
                      .map((nextSlug) => getTutorialBySlug(nextSlug))
                      .filter(
                        (item): item is NonNullable<typeof item> =>
                          item !== undefined && item.status === "published",
                      )
                      .map((item) => (
                        <li key={item.slug}>
                          <Link href={`/tutorials/${item.slug}`}>{item.title}</Link>
                        </li>
                      ))}
                  </ul>
                ) : null}
              </section>
            ) : null}
            {tutorial.detailContent.closingNote ? (
              <section className="tutorial-article-section">
                <p>{tutorial.detailContent.closingNote}</p>
              </section>
            ) : null}
          </>
        ) : (
          <>
            <h2>What this tutorial covers</h2>
            <p>
              This short walkthrough explains a single Ecamm workflow clearly so
              you can apply it immediately and move on with your stream setup.
            </p>
            <ul>
              <li>Where this feature is found inside Ecamm</li>
              <li>What to check first if something is not working</li>
              <li>How to confirm the fix before you go live</li>
            </ul>
          </>
        )}
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
