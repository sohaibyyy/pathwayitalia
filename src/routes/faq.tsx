import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Search } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { faqCount, faqGroups } from "@/data/faq";
import { icons } from "@/components/site/icons";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageHead({
      title: "FAQ: studying in Italy as an international student | PathwayItalia",
      description:
        "Answers on admissions, English-taught programmes, student visas, tuition, scholarships, accommodation and life in Italy for international students.",
      path: "/faq",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const groups = useMemo(
    () =>
      faqGroups
        .map((g) => ({
          ...g,
          items: q ? g.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)) : g.items,
        }))
        .filter((g) => g.items.length),
    [q],
  );
  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={
          <>
            Everything you <span className="accent-serif">need to know</span>
          </>
        }
        lead={`${faqCount} questions students ask before moving to Italy, answered honestly. Fees and visa figures change every year, so always confirm them with the official source.`}
      />
      <section className="section pt-10 lg:pt-14">
        <div className="container-page grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <label className="block">
              <span className="field-label">Search the FAQ</span>
              <span className="relative block">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. visa, DSU, housing"
                  className="field-input pl-10"
                />
              </span>
            </label>
            <p className="mt-2 text-sm text-ink-soft" role="status" aria-live="polite">
              {q ? `${shown} matching question${shown === 1 ? "" : "s"}` : `${faqCount} questions`}
            </p>
            <nav aria-label="FAQ topics" className="mt-6 hidden lg:block">
              <ul className="space-y-1">
                {faqGroups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="block rounded-lg px-3 py-2 text-[0.9375rem] text-ocean hover:bg-sand"
                    >
                      {g.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-12">
            {groups.length === 0 && (
              <div className="card p-8 text-center">
                <p className="font-display text-2xl text-ocean">No questions match "{query}".</p>
                <p className="mt-3 text-ink-soft">
                  Ask us directly on the{" "}
                  <Link to="/apply" className="link-inline">
                    Apply page
                  </Link>
                  .
                </p>
              </div>
            )}
            {groups.map((g) => {
              const Icon = icons[g.icon];
              return (
                <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`}>
                  <h2
                    id={`${g.id}-h`}
                    className="flex items-center gap-3 font-display text-2xl text-ocean"
                  >
                    <span className="icon-tile h-10 w-10">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    {g.label}
                  </h2>
                  <div className="mt-5 space-y-3">
                    {g.items.map((it) => (
                      <details key={it.q} className="card group open:border-ocean/30" open={!!q}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-ocean [&::-webkit-details-marker]:hidden">
                          {it.q}
                          <ChevronDown
                            size={20}
                            className="shrink-0 text-terracotta transition-transform group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <p className="px-5 pb-5 leading-relaxed text-ink-soft">{it.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand
        title="Still have a question?"
        text="Send it with the form on the Apply page or book a free call, and we'll answer it for your situation."
      />
    </>
  );
}
