import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { photos, type Photo } from "@/data/photos";
import { universities } from "@/data/universities";
import { site } from "@/data/site";
import { heroVideo } from "@/data/video";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/credits")({
  head: () =>
    pageHead({
      title: "Photo credits | PathwayItalia",
      description: "Authors and licences of the photographs used on the PathwayItalia website.",
      path: "/credits",
    }),
  component: CreditsPage,
});

function CreditsPage() {
  const missing = universities.filter((u) => !u.photo);
  return (
    <>
      <PageHeader
        eyebrow="Credits"
        title="Photo credits"
        lead="Photographs on this site come from Wikimedia Commons, used under the licences below, or are used with permission. Each has been resized and converted to WebP; no other changes were made."
      />
      <section className="section pt-10 lg:pt-14">
        <div className="container-page">
          <h2 className="font-display text-2xl">Video</h2>
          <div className="card mt-4 flex gap-4 p-4 md:max-w-[calc(50%-0.625rem)]">
            <img
              src={heroVideo.poster.sm}
              alt=""
              width={120}
              height={68}
              loading="lazy"
              className="h-20 w-28 shrink-0 rounded-lg object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold text-ocean">
                {heroVideo.credit.title} (homepage background video)
              </p>
              <p className="mt-1 text-ink-soft">
                By{" "}
                <a
                  href={heroVideo.credit.creatorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-inline"
                >
                  {heroVideo.credit.creator}
                </a>{" "}
                via{" "}
                <a
                  href={heroVideo.credit.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-inline"
                >
                  {heroVideo.credit.source}
                </a>{" "}
                ·{" "}
                <a
                  href={heroVideo.credit.licenseUrl}
                  target="_blank"
                  rel="noreferrer license"
                  className="link-inline"
                >
                  {heroVideo.credit.license}
                </a>
                . Trimmed to a loop, audio removed and re-encoded.
              </p>
            </div>
          </div>

          <h2 className="mt-12 font-display text-2xl">Photographs</h2>
          <ul className="mt-4 grid gap-5 md:grid-cols-2">
            {Object.entries(photos as Record<string, Photo>).map(([key, p]) => (
              <li key={key} className="card flex gap-4 p-4">
                <img
                  src={p.sm}
                  alt=""
                  width={120}
                  height={80}
                  loading="lazy"
                  className="h-20 w-28 shrink-0 rounded-lg object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-ocean">{p.caption}</p>
                  <p className="mt-1 text-ink-soft">
                    By{" "}
                    {p.source ? (
                      <a href={p.source} target="_blank" rel="noreferrer" className="link-inline">
                        {p.author}
                      </a>
                    ) : (
                      p.author
                    )}{" "}
                    ·{" "}
                    {p.licenseUrl ? (
                      <a
                        href={p.licenseUrl}
                        target="_blank"
                        rel="noreferrer license"
                        className="link-inline"
                      >
                        {p.license}
                      </a>
                    ) : (
                      p.license
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {site.showPlaceholders && missing.length > 0 && (
            <p className="placeholder-box mt-8 p-5 text-sm font-medium">
              No properly licensed photo was found yet for: {missing.map((u) => u.name).join(", ")}.
              These show a placeholder until one is added.
            </p>
          )}
          <p className="mt-8 text-sm text-ink-soft">
            Country flags from the{" "}
            <a href="https://github.com/lipis/flag-icons" className="link-inline">
              flag-icons
            </a>{" "}
            project (MIT licence). University names belong to their respective institutions;
            PathwayItalia is independent and not affiliated with them.{" "}
            <Link to="/" className="link-inline">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
