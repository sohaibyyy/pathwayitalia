import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ChevronDown, Euro, Globe2, Palette } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";
import { photos } from "@/data/photos";
import { services } from "@/data/services";
import { universities } from "@/data/universities";
import { faqGroups } from "@/data/faq";
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

const steps = [
  {
    title: "Choose",
    desc: "We help you shortlist universities and English-taught programmes that fit your grades, budget and goals.",
  },
  {
    title: "Apply",
    desc: "A personalised checklist, your motivation letter, and every deadline tracked across your applications.",
  },
  {
    title: "Visa",
    desc: "Enrolment, pre-enrolment on Universitaly and a complete student visa application, prepared in good time.",
  },
  {
    title: "Arrive",
    desc: "Accommodation, your codice fiscale and residence permit: the practical steps of your first weeks in Italy.",
  },
];

// Questions shown in the homepage FAQ preview (must match src/data/faq.ts exactly).
const faqPreview = [
  "Are there bachelor's programs fully taught in English in Italy?",
  "How much does tuition cost at Italian universities?",
  "What type of visa do I need to study in Italy?",
  "When should I reach out to PathwayItalia?",
  "Can PathwayItalia guarantee my admission?",
];

function Home() {
  const hero = photos.hero;
  const featured = universities.filter((u) => u.photo).slice(0, 3);
  const faqs = faqGroups.flatMap((g) => g.items).filter((i) => faqPreview.includes(i.q));
  const showFounder = site.founderNote || site.showPlaceholders;

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
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-[60%_center]"
        />
        {/* A single scrim so the headline stays legible over the photo. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(34_58_67/0.92),rgb(34_58_67/0.55)_45%,rgb(34_58_67/0.35))]" />
        <div className="container-page relative z-10 pb-16 pt-36 lg:pb-24">
          <p className="eyebrow eyebrow-on-dark">{site.tagline}</p>
          <h1 className="h-display mt-4 max-w-3xl text-ivory">
            Your path to <span className="accent-serif-on-dark">Italy</span> starts here
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/90">
            Bachelor's degrees at Italy's leading universities, guided from application to arrival.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-accent">
              Book a free consultation <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#how-it-works" className="btn btn-outline-light">
              How it works
            </a>
          </div>
          <PhotoCredit photo={hero} onDark className="mt-12 max-w-md" />
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Photo
            photo={photos.about}
            className="reveal lg:col-span-5"
            imgClassName="aspect-[4/5] w-full rounded-lg object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
          <div className="reveal lg:col-span-6 lg:col-start-7">
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
              <strong className="font-semibold text-ink">{site.founder}</strong>, we guide you from
              choosing the right university to landing in Italy, every step of the way.
            </p>
            <p className="mt-4 text-ink-soft">
              We treat each student's pathway as a personal story, and we only point you to
              programmes we have checked on the universities' own websites.
            </p>
            <Link to="/universities" className="link-arrow mt-6">
              See the universities we work with <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section bg-sand">
        <div className="container-page">
          <div className="reveal">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  Four steps from idea to <span className="accent-serif">arrival</span>
                </>
              }
            />
          </div>
          <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="reveal relative border-l border-ocean/25 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-8"
              >
                <span
                  className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-terracotta md:-top-[5px] md:left-0"
                  aria-hidden="true"
                />
                <p className="font-display text-lg italic text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-ink-soft">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Our services"
              title={
                <>
                  Every step. <span className="accent-serif">Covered.</span>
                </>
              }
              lead="From the first idea to the first day on campus: a guided journey, not a paperwork maze."
            />
            <Link to="/services" className="link-arrow mt-6">
              All services in detail <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 sm:gap-x-12 lg:col-span-8">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <li key={s.slug} className="reveal flex gap-4 border-t border-border py-6">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-terracotta"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-xl">{s.title}</h3>
                    <p className="mt-1 text-[0.9375rem] text-ink-soft">{s.summary}</p>
                  </div>
                </li>
              );
            })}
            <li className="reveal flex flex-col items-start justify-center border-t border-border py-6">
              <p className="font-display text-xl text-ocean">Not sure where to start?</p>
              <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="link-arrow">
                Book a free consultation <ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Italy */}
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
          <div className="mt-12 grid md:grid-cols-3 md:divide-x md:divide-ivory/20">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="reveal border-t border-ivory/20 py-8 md:border-t-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <r.icon size={28} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl text-ivory">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/85">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentBase />

      {/* Founder note */}
      {showFounder && (
        <section className="section bg-sand">
          <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="reveal lg:col-span-4">
              <p className="eyebrow">From the founder</p>
              <h2 className="h-section mt-4">
                A note from <span className="accent-serif">Sohaib</span>
              </h2>
            </div>
            <div className="reveal lg:col-span-7 lg:col-start-6">
              {site.founderNote ? (
                <figure>
                  <blockquote className="font-display text-2xl leading-snug text-ocean">
                    {site.founderNote}
                  </blockquote>
                  <figcaption className="mt-6 text-ink-soft">
                    <strong className="font-semibold text-ink">{site.founder}</strong>, founder of{" "}
                    {site.name}
                  </figcaption>
                </figure>
              ) : (
                <div className="placeholder-box p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em]">
                    Founder note placeholder
                  </p>
                  <p className="mt-2 text-sm">
                    A few sentences from {site.founder}, in his own words, about making the move to
                    Italy as a student. Add it as founderNote in src/data/site.ts.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured universities */}
      <section className="section">
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

      {/* FAQ preview */}
      <section className="section bg-sand">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Everything you <span className="accent-serif">need to know</span>
                </>
              }
            />
            <Link to="/faq" className="link-arrow mt-6">
              Read all the questions <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="reveal lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-ocean/20 last:border-b">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl text-ocean [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-terracotta transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
