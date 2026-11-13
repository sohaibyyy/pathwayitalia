import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import {
  programDegree,
  programStatus,
  programYears,
  type ProgramWithUniversity,
} from "@/data/universities";

export function LanguageBadge({ language }: { language: "english" | "english-track" }) {
  return language === "english" ? (
    <span className="chip chip-sage">Taught in English</span>
  ) : (
    <span className="chip">English &amp; Italian options</span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  if (status === "pending-approval")
    return <span className="chip chip-warn">Awaiting approval</span>;
  if (status === "unverified") return <span className="chip chip-warn">UNVERIFIED</span>;
  return null;
}

export function ProgramCard({
  p,
  showUniversity = true,
}: {
  p: ProgramWithUniversity;
  showUniversity?: boolean;
}) {
  const status = programStatus(p);
  return (
    <article className="card flex flex-col p-6">
      {showUniversity && (
        <Link
          to="/universities/$slug"
          params={{ slug: p.university.slug }}
          className="text-sm font-semibold text-terracotta hover:underline"
        >
          {p.university.name}
        </Link>
      )}
      <h3 className="mt-2 font-display text-xl leading-snug text-ocean">{p.name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{programDegree(p, p.university)}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="chip">{p.campus}</span>
        <span className="chip">{programYears(p)} years</span>
        <LanguageBadge language={p.language} />
        <StatusBadge status={status} />
      </div>
      {p.note && <p className="mt-3 text-sm text-ink-soft">{p.note}</p>}
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        className="link-arrow mt-auto self-start pt-5"
      >
        Official programme page <ExternalLink size={15} aria-hidden="true" />
        <span className="sr-only"> (opens the {p.university.shortName} website)</span>
      </a>
    </article>
  );
}
