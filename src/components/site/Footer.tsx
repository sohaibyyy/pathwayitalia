export function Footer() {
  return (
    <footer className="bg-forest text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl text-gold">PathwayItalia</div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold/80">Italy, Simplified.</p>
          <p className="mt-4 text-sm text-ivory/60 italic">Guiding your path to Italy.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center text-sm">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#universities" className="hover:text-gold transition-colors">Universities</a>
          <a href="#apply" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <div className="md:text-right flex flex-col items-center md:items-end gap-4">
          <a
            href="mailto:pathwayitalia@gmail.com"
            className="text-sm text-ivory/60 hover:text-gold transition-colors"
          >
            pathwayitalia@gmail.com
          </a>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/pathwayitalia"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@pathwayitalia"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.3 0 .58.06.85.14V9.62a6.37 6.37 0 0 0-.85-.06A6.34 6.34 0 0 0 3.1 15.9a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.78a8.13 8.13 0 0 0 4.81 1.57V7.02a4.85 4.85 0 0 1-1-.33z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-ivory/50 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© 2025 PathwayItalia. Led by Sohaib Jehanzeb.</span>
          <span>Made with warmth in the Mediterranean.</span>
        </div>
      </div>
    </footer>
  );
}
