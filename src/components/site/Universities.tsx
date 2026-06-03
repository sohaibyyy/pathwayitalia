const unis = [
  { name: "Università Bocconi", city: "Milan", tags: ["Business", "Economics"], gradient: "from-terracotta/30 to-gold/20" },
  { name: "Università di Bologna", city: "Bologna", tags: ["World's Oldest", "Multidisciplinary"], gradient: "from-ocean/30 to-sage/20" },
  { name: "Università Cattolica", city: "Milan", tags: ["Humanities", "Law"], gradient: "from-blush/40 to-ivory" },
  { name: "Politecnico di Milano", city: "Milan", tags: ["Engineering", "Design"], gradient: "from-sage/30 to-ocean/20" },
  { name: "LUISS Guido Carli", city: "Rome", tags: ["Politics", "Economics"], gradient: "from-gold/30 to-terracotta/20" },
  { name: "Università di Padova", city: "Padova", tags: ["Sciences", "Medicine"], gradient: "from-ocean/30 to-blush/20" },
];

export function Universities() {
  return (
    <section id="universities" className="py-24 lg:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-terracotta">Le Università</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ocean leading-tight">
              Italy's <em className="text-terracotta not-italic">Finest</em> Institutions
            </h2>
          </div>
          <p className="text-ocean/70 max-w-sm">
            Centuries of academic prestige, modern programs taught in English,
            and futures forged in Italy's most storied cities.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-10 mx-auto max-w-[1400px] snap-x snap-mandatory">
          {unis.map((u) => (
            <article
              key={u.name}
              className="reveal snap-start flex-shrink-0 w-[300px] sm:w-[340px] bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`h-48 bg-gradient-to-br ${u.gradient} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
                <div className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.25em] text-ocean/80">
                  {u.city}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ocean leading-tight">{u.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {u.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-ocean/70">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#apply" className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold font-medium hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
