import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { site } from "@/data/site";

/** The single closing call to action used at the bottom of pages. */
export function CtaBand({
  title = "Ready to begin your path to Italy?",
  text = "Tell us a little about yourself, or book a free call. We will help you work out the right universities and programmes for you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ocean py-16 lg:py-24">
      <div className="container-page flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="h-section text-ivory">{title}</h2>
          <p className="mt-4 text-lg text-ivory/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/apply" className="btn btn-accent">
            Start your application <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light"
          >
            <CalendarDays size={18} aria-hidden="true" /> Book a free call
          </a>
        </div>
      </div>
    </section>
  );
}
