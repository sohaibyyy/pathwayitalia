import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Euro, Globe2, Landmark, Palette } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";
import { photos } from "@/data/photos";
import { services } from "@/data/services";
import { programCount, universities } from "@/data/universities";
import { icons } from "@/components/site/icons";
import { Photo, PhotoCredit } from "@/components/site/Photo";
import { SectionHeading } from "@/components/site/PageHeader";
import { StudentBase } from "@/components/site/StudentBase";
import { UniversityCard } from "@/components/site/UniversityCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "PathwayItalia: bachelor's degrees in Italy, guided from application to arrival",
      description:
        "PathwayItalia helps international students get into English-taught bachelor's programmes at Italy's leading universities, from choosing a course to arriving in Italy. Led by Sohaib Jehanzeb.",
      path: "/",
    }),
  component: Home,
});

const reasons = [
  {
    icon: Landmark,
    title: "Historic universities",
    desc: "Italy is home to some of the oldest universities in the world, alongside modern business and technical schools.",
  },
  {
    icon: Euro,
    title: "Affordable tuition",
    desc: "Public universities charge income-based fees that are usually far lower than in the UK or US.",
  },
  {
    icon: Globe2,
    title: "Taught in English",
    desc: "A growing range of bachelor's degrees are taught in English, with large international student communities.",
  },
  {
    icon: Palette,
    title: "Culture and quality of life",
    desc: "Food, art, design and a Mediterranean lifestyle, in cities built for students.",
  },
];

function Home() {
  const hero = photos.hero;
  const featured = universities.filter((u) => u.photo).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ocean-deep">
        <img
          src={hero.lg}
          srcSet={`${hero.sm} 960w, ${hero.lg} 1920w`}
          sizes="100vw"
          width={hero.width}
          height={hero.height}
          alt={hero.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/45 to-ocean-deep/30" />
        <div className="container-page relative z-10 pb-16 pt-36 lg:pb-24">
          <p className="eyebrow eyebrow-on-dark">Bachelor's degrees in Italy</p>
          <h1 className="h-display mt-5 max-w-4xl text-ivory">
            Your path to <span className="accent-serif-on-dark">Italy</span> starts here
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 sm:text-xl">
            Bachelor's degrees at Italy's leading universities, guided from application to arrival.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/apply" className="btn btn-accent">
              Start your application <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/programs" className="btn btn-outline-light">
              Explore {programCount} programmes
            </Link>
          </div>
          <PhotoCredit photo={hero} onDark className="mt-12 max-w-md" />
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Photo
            photo={photos.about}
            className="reveal"
            imgClassName="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
          <div className="reveal">
            <SectionHeading
              eyebrow="About us"
              title={
                <>
                  We are <span className="accent-serif">PathwayItalia</span>
                </>
              }
            />
            <p className="lead mt-6">
              PathwayItalia helps international students navigate the journey of enrolling in
              Italian universities. Founded by{" "}
              <strong className="font-semibold text-ocean">{site.founder}</strong>, we guide you
              from choosing the right university to landing in Italy, every step of the way.
            </p>
            <p className="mt-4 text-ink-soft">
              We treat each student's pathway as a personal story, and we only point you to
              programmes we have checked on the universities' own websites.
            </p>
            <Link to="/universities" className="link-arrow mt-8">
              See the universities we work with <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Our services"
              title={
                <>
                  Every step. <span className="accent-serif">Covered.</span>
                </>
              }
              lead="From the first idea to the first day on campus: a guided journey, not a paperwork maze."
            />
            <Link to="/services" className="link-arrow shrink-0">
              All services in detail <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <li key={s.slug} className="reveal card flex flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl text-bronze" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ocean">{s.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-ink-soft">{s.summary}</p>
                </li>
              );
            })}
            <li className="reveal flex flex-col justify-center rounded-2xl bg-ocean p-6 text-ivory">
              <p className="font-display text-xl">Not sure where to start?</p>
              <p className="mt-2 text-[0.9375rem] text-ivory/85">
                A free first call helps us map your options.
              </p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm mt-5 self-start"
              >
                Book a call
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Why Italy (condensed) */}
      <section className="section bg-ocean">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              onDark
              eyebrow="La dolce vita"
              title={
                <>
                  Why <span className="accent-serif-on-dark">Italy?</span>
                </>
              }
              lead="More than a degree: a way of life."
            />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="reveal rounded-2xl border border-ivory/15 bg-ivory/[0.06] p-6"
              >
                <span className="icon-tile icon-tile-on-dark">
                  <r.icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl text-ivory">{r.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ivory/80">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentBase />

      {/* Featured universities */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Le università"
              title={
                <>
                  Italy's <span className="accent-serif">leading</span> institutions
                </>
              }
              lead={`${universities.length} universities and academies with English-taught bachelor's programmes, checked on their official websites.`}
            />
            <Link to="/universities" className="link-arrow shrink-0">
              <Building2 size={16} aria-hidden="true" /> All {universities.length} universities
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((u) => (
              <div key={u.slug} className="reveal h-full">
                <UniversityCard u={u} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
