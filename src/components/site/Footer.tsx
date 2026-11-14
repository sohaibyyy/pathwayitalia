import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/data/site";

function TikTokIcon() {
  // lucide-react has no TikTok glyph, so this one is inline.
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.3 0 .58.06.85.14V9.62a6.37 6.37 0 0 0-.85-.06A6.34 6.34 0 0 0 3.1 15.9a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.78a8.13 8.13 0 0 0 4.81 1.57V7.02a4.85 4.85 0 0 1-1-.33z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const linkClass = "text-ivory/80 transition-colors hover:text-gold";

  return (
    <footer className="bg-ocean-deep text-ivory/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-display text-3xl text-ivory">
            Pathway<span className="text-gold">Italia</span>
          </Link>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-sm text-[0.9375rem] text-ivory/75">
            Guiding international students into Italy's universities, from the first application to
            the first day on campus. Led by {site.founder}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-ivory">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/apply" className={linkClass}>
                Apply and book a meeting
              </Link>
            </li>
            <li>
              <Link to="/credits" className={linkClass}>
                Photo credits
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-ivory">
            Contact
          </h2>
          <a
            href={`mailto:${site.email}`}
            className={`mt-4 flex min-h-11 items-center gap-2 text-[0.9375rem] ${linkClass}`}
          >
            <Mail size={18} aria-hidden="true" /> {site.email}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={`mt-1 flex min-h-11 items-center gap-2 text-[0.9375rem] ${linkClass}`}
          >
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp: +39 389 447 3103
          </a>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="PathwayItalia on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="PathwayItalia on TikTok"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-sm text-ivory/70 sm:flex-row">
          <span>
            © {year} {site.name}
          </span>
          <span>Made with warmth in the Mediterranean.</span>
        </div>
      </div>
    </footer>
  );
}
