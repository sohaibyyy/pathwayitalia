import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { allPrograms, PROGRAM_CATEGORIES, universities } from "@/data/universities";
import { PageHeader } from "@/components/site/PageHeader";
import { ProgramCard } from "@/components/site/ProgramCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/programs")({
  head: () =>
    pageHead({
      title: "English-taught bachelor's programmes in Italy | PathwayItalia",
      description:
        "Filter English-taught bachelor's programmes at Italian universities by subject, university and language, with links to every official programme page.",
      path: "/programs",
    }),
  component: ProgramsPage,
});

const categories = ["All", ...PROGRAM_CATEGORIES] as const;

function ProgramsPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [uni, setUni] = useState("all");
  const [englishOnly, setEnglishOnly] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPrograms.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (uni === "all" || p.university.slug === uni) &&
        (!englishOnly || p.language === "english") &&
        (!q || `${p.name} ${p.university.name} ${p.campus}`.toLowerCase().includes(q)),
    );
  }, [category, uni, englishOnly, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: allPrograms.length };
    for (const p of allPrograms) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title={
          <>
            Study in Italy. <span className="accent-serif">In English.</span>
          </>
        }
        lead="Every programme below was checked on the university's own website, and each one links to its official page. Some are taught entirely in English; others offer English and Italian versions, so always confirm the language of your intake."
      />

      <section className="section pt-10 lg:pt-14">
        <div className="container-page">
          <div className="card p-5 sm:p-6">
            <fieldset>
              <legend className="field-label">Subject</legend>
              <div className="mt-1 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      category === c
                        ? "border-ocean bg-ocean text-ivory"
                        : "border-input bg-transparent text-ocean hover:border-ocean"
                    }`}
                  >
                    {c}{" "}
                    <span className={category === c ? "text-ivory/75" : "text-ink-soft"}>
                      ({counts[c] ?? 0})
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_1fr_auto] md:items-end">
              <label className="block">
                <span className="field-label">Search</span>
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
                    placeholder="e.g. finance, design, Milan"
                    className="field-input pl-10"
                  />
                </span>
              </label>
              <label className="block">
                <span className="field-label">University</span>
                <select
                  value={uni}
                  onChange={(e) => setUni(e.target.value)}
                  className="field-input"
                >
                  <option value="all">All universities</option>
                  {universities.map((u) => (
                    <option key={u.slug} value={u.slug}>
                      {u.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex min-h-[2.875rem] cursor-pointer items-center gap-2.5 text-[0.9375rem] font-medium text-ocean">
                <input
                  type="checkbox"
                  checked={englishOnly}
                  onChange={(e) => setEnglishOnly(e.target.checked)}
                  className="h-5 w-5 accent-[var(--ocean)]"
                />
                Entirely in English only
              </label>
            </div>
          </div>

          <p className="mt-8 text-ink-soft" role="status" aria-live="polite">
            Showing <strong className="text-ocean">{filtered.length}</strong> of{" "}
            {allPrograms.length} programmes
          </p>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProgramCard key={p.university.slug + p.name + p.campus} p={p} />
              ))}
            </div>
          ) : (
            <div className="card mt-6 p-10 text-center">
              <p className="font-display text-2xl text-ocean">No programmes match those filters.</p>
              <button
                type="button"
                className="btn btn-outline mt-6"
                onClick={() => {
                  setCategory("All");
                  setUni("all");
                  setEnglishOnly(false);
                  setQuery("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="mt-12 text-center text-ink-soft">
            Don't see your programme? Ask us; this list covers the universities we work with most.{" "}
            <Link to="/apply" className="link-inline">
              Get in touch
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
