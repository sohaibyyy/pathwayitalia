import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { universities, formatVerifiedDate } from "@/data/universities";
import { PageHeader } from "@/components/site/PageHeader";
import { UniversityCard } from "@/components/site/UniversityCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/universities/")({
  head: () =>
    pageHead({
      title: "Italian universities with English-taught bachelor's degrees | PathwayItalia",
      description:
        "Bocconi, Bologna, Politecnico di Milano, Luiss, Padua, Cattolica and more: Italian universities and academies offering bachelor's programmes taught in English.",
      path: "/universities",
    }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  const latest = universities
    .map((u) => u.lastVerified)
    .sort()
    .at(-1)!;
  return (
    <>
      <PageHeader
        eyebrow="Le università"
        title={
          <>
            Italy's <span className="accent-serif">leading</span> institutions
          </>
        }
        lead={`${universities.length} universities and academies with English-taught bachelor's programmes. Each programme list was checked on the institution's official website (last checked ${formatVerifiedDate(latest)}).`}
      />
      <section className="section">
        <div className="container-page">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u) => (
              <li key={u.slug} className="reveal h-full">
                <UniversityCard u={u} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Not sure which university fits you?" />
    </>
  );
}
