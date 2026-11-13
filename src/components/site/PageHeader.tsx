import type { ReactNode } from "react";

/** Standard heading block at the top of inner pages (sits below the fixed nav). */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-sand/60 pb-14 pt-32 lg:pb-20 lg:pt-40">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-4 max-w-4xl text-ocean">{title}</h1>
        {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  onDark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${onDark ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      <h2 className={`h-section mt-4 ${onDark ? "text-ivory" : "text-ocean"}`}>{title}</h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-ivory/85" : "text-ink-soft"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
