const steps = [
  { icon: "🎓", title: "University Selection", desc: "Finding the right institution for your goals." },
  { icon: "📚", title: "Program Selection", desc: "Matching your passion with the right degree." },
  { icon: "📋", title: "Application Assistance", desc: "We handle the paperwork, you focus on the future." },
  { icon: "🏫", title: "Enrollment Support", desc: "Confirming your place at your dream university." },
  { icon: "🛂", title: "Visa Guidance", desc: "Navigating Italian student visa requirements." },
  { icon: "💰", title: "Scholarship Search", desc: "Uncovering funding opportunities for you." },
  { icon: "🇮🇹", title: "On-Arrival Support", desc: "Helping you settle into life in Italy." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-gradient-to-b from-ivory to-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta">Our Services</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ocean leading-tight">
            Every Step. <em className="text-gold not-italic">Covered.</em>
          </h2>
          <p className="mt-6 text-lg text-ocean/70">
            From the first dream to the first day on campus — a guided journey,
            not a paperwork maze.
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="flex flex-col gap-8 lg:gap-16">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`reveal grid lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                  <div className="text-6xl mb-3">{s.icon}</div>
                  <div className="font-display text-7xl text-gold/40 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <h3 className="font-display text-3xl text-ocean">{s.title}</h3>
                  <div className="mt-3 h-px w-12 bg-gold" />
                  <p className="mt-4 text-ocean/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
