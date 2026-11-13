import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Only the homepage has a photo behind the header.
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero
          ? "bg-gradient-to-b from-ocean-deep/70 to-transparent"
          : "border-b border-border bg-ivory/95 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" className="flex flex-col leading-none" aria-label={`${site.name} home`}>
          <span
            className={`font-display text-[1.6rem] tracking-tight ${overHero ? "text-ivory" : "text-ocean"}`}
          >
            Pathway<span className={overHero ? "text-gold" : "text-terracotta"}>Italia</span>
          </span>
          <span
            className={`mt-1 text-[0.6875rem] font-medium tracking-[0.08em] ${
              overHero ? "text-ivory/85" : "text-ink-soft"
            }`}
          >
            led by {site.founder}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform hover:after:scale-x-100 ${
                overHero ? "text-ivory after:bg-gold" : "text-ocean after:bg-terracotta"
              }`}
              activeProps={{ className: "after:scale-x-100", "aria-current": "page" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/apply"
            className={`btn btn-sm hidden sm:inline-flex ${overHero ? "btn-accent" : "btn-primary"}`}
          >
            Apply now <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              overHero ? "text-ivory" : "text-ocean"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-ivory lg:hidden"
        >
          <div className="container-page flex flex-col py-4">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="border-b border-border py-3.5 text-lg text-ocean"
              activeProps={{ className: "font-semibold text-terracotta", "aria-current": "page" }}
            >
              Home
            </Link>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border py-3.5 text-lg text-ocean"
                activeProps={{ className: "font-semibold text-terracotta", "aria-current": "page" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/apply" className="btn btn-primary mt-5">
              Apply now <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
