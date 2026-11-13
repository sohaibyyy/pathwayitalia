import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { services } from "@/data/services";
import { icons } from "@/components/site/icons";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Our services: from university choice to arrival in Italy | PathwayItalia",
      description:
        "University and programme selection, applications, enrolment, visa guidance, scholarships and on-arrival support for international students coming to Italy.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={
          <>
            Every step. <span className="accent-serif">Covered.</span>
          </>
        }
        lead="Seven stages, one guide. Use us for the whole journey or just the parts you need help with."
      >
        <nav aria-label="Services on this page" className="mt-8 flex flex-wrap gap-2">
          {services.map((s, i) => (
            <a key={s.slug} href={`#${s.slug}`} className="chip hover:bg-ocean hover:text-ivory">
              {i + 1}. {s.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <section className="section">
        <ol className="container-page space-y-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.slug}
                id={s.slug}
                className="reveal card grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1.2fr_1fr] lg:gap-10 lg:p-10"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="icon-tile h-14 w-14">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl text-bronze" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-3xl text-ocean">{s.title}</h2>
                  <p className="mt-2 font-medium text-terracotta">{s.summary}</p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.detail}</p>
                </div>
                <div className="rounded-xl bg-sand/70 p-5">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-ocean">
                    What's included
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-2.5 text-[0.9375rem] text-ocean">
                        <Check size={18} className="mt-0.5 shrink-0 text-sage" aria-hidden="true" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <CtaBand
        title="Want help with one step, or all seven?"
        text="Packages are tailored to what you need. A free first call is the easiest way to find out what fits."
      />
    </>
  );
}
