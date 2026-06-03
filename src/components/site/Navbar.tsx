import { useEffect, useState } from "react";



const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-italy", label: "Why Italy" },
  { href: "#universities", label: "Universities" },
  { href: "#apply", label: "Apply Now" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 leading-none">
          <div className="flex flex-col">
            <span
              className="text-xl sm:text-2xl tracking-tight"
              style={{
                fontFamily: '"Times New Roman MT", "Times New Roman", Times, serif',
                color: '#fdec71',
              }}
            >
              PathwayItalia
            </span>
            <span
              className="tracking-normal text-right -mt-0.5"
              style={{
                fontFamily: '"League Spartan", sans-serif',
                color: '#ffffff',
                fontSize: '8px',
                fontWeight: 600,
              }}
            >
              led by Sohaib Jehanzeb.
            </span>
          </div>
          <span className="hidden md:inline-block pl-3 ml-1 border-l border-ocean/20 text-[10px] uppercase tracking-[0.28em] text-gold/90">
            Italy, Simplified.
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ocean/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ocean text-gold px-5 py-2.5 text-sm font-medium hover:bg-ocean/90 transition-all hover:gap-3"
        >
          Start Your Journey <span>→</span>
        </a>

        <button
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ocean" />
          <span className="block h-px w-6 bg-ocean" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-ocean"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="rounded-full bg-ocean text-gold px-5 py-3 text-sm font-medium text-center"
          >
            Start Your Journey →
          </a>
        </div>
      )}
    </header>
  );
}
