import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { photos } from "@/data/photos";
import { universities } from "@/data/universities";
import { site } from "@/data/site";
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
        lead="All photographs on this site come from Wikimedia Commons and are used under the licences below. Each has been resized and converted to WebP; no other changes were made."
      />
      <section className="section pt-10 lg:pt-14">
        <div className="container-page">
          <ul className="grid gap-5 md:grid-cols-2">
            {Object.entries(photos).map(([key, p]) => (
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
                    <a href={p.source} target="_blank" rel="noreferrer" className="link-inline">
                      {p.author}
                    </a>{" "}
                    ·{" "}
                    <a
                      href={p.licenseUrl}
                      target="_blank"
                      rel="noreferrer license"
                      className="link-inline"
                    >
                      {p.license}
                    </a>
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
