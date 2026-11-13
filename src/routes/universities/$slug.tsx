import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarCheck, ExternalLink, Info, MapPin } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { photos } from "@/data/photos";
import { formatVerifiedDate, getUniversity, PROGRAM_CATEGORIES } from "@/data/universities";
import { Photo, PhotoPlaceholder } from "@/components/site/Photo";
import { ProgramCard } from "@/components/site/ProgramCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/universities/$slug")({
  loader: ({ params }) => {
    const u = getUniversity(params.slug);
    if (!u) throw notFound();
    return { slug: u.slug };
  },
  head: ({ params }) => {
    const u = getUniversity(params.slug);
    if (!u) return { meta: [{ title: "University not found | PathwayItalia" }] };
    return pageHead({
      title: `${u.name}: English-taught bachelor's programmes | PathwayItalia`,
      description:
        `${u.name} in ${u.city}: ${u.programs.length} English-taught bachelor's programmes, checked on the official website. ${u.overview}`.slice(
          0,
          300,
        ),
      path: `/universities/${u.slug}`,
    });
  },
  component: UniversityPage,
});

function UniversityPage() {
  const { slug } = Route.useLoaderData();
  const u = getUniversity(slug)!;
  const photo = u.photo ? photos[u.photo] : null;
  const programs = u.programs.map((p) => ({ ...p, university: u }));
  const groups = PROGRAM_CATEGORIES.map((c) => ({
    c,
    items: programs.filter((p) => p.category === c),
  })).filter((g) => g.items.length);

  return (
    <>
      <section className="border-b border-border bg-sand/60 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <div className="container-page">
          <Link to="/universities" className="link-arrow text-sm">
            <ArrowLeft size={16} aria-hidden="true" /> All universities
          </Link>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p className="flex items-center gap-1.5 font-medium text-ink-soft">
                <MapPin size={18} aria-hidden="true" /> {u.city} · {u.kind}
              </p>
              <h1 className="h-display mt-3 text-ocean">{u.name}</h1>
              <p className="lead mt-6">{u.overview}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {u.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <a href={u.website} target="_blank" rel="noreferrer" className="btn btn-primary mt-8">
                Official website <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            {photo ? (
              <Photo
                photo={photo}
                eager
                sizes="(min-width: 1024px) 520px, 100vw"
                imgClassName="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
            ) : (
              <PhotoPlaceholder name={u.name} className="aspect-[4/3] w-full" />
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Bachelor's programmes in English</p>
              <h2 className="h-section mt-3 text-ocean">
                {u.programs.length} programme{u.programs.length === 1 ? "" : "s"} at {u.shortName}
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <CalendarCheck size={18} aria-hidden="true" /> Checked on the official website on{" "}
              {formatVerifiedDate(u.lastVerified)}
            </p>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-border bg-card p-4 text-[0.9375rem] text-ink-soft">
            <Info size={20} className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
            <p>
              <strong className="text-ocean">2027/28 intake:</strong> {u.intakeNote} Source:{" "}
              <a href={u.programmesSource} target="_blank" rel="noreferrer" className="link-inline">
                official programme list
              </a>
              .
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.c} className="mt-12">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">
                {g.c}
              </h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <ProgramCard key={p.name + p.campus} p={p} showUniversity={false} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title={`Thinking about ${u.shortName}?`}
        text="We can tell you how admission works, what to prepare and how it compares with your other options."
      />
    </>
  );
}
