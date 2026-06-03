import bg from "@/assets/why-italy.jpg";

const reasons = [
  { icon: "🏛️", title: "World-Class Education", desc: "Home to the oldest universities on Earth." },
  { icon: "💶", title: "Affordable Tuition", desc: "Significantly lower costs vs. UK/US." },
  { icon: "🌍", title: "International Community", desc: "Thriving expat & student culture." },
  { icon: "🍕", title: "Quality of Life", desc: "Food, art, culture, climate — unmatched." },
  { icon: "🎨", title: "Creative Capital", desc: "Epicenter of design, fashion, and architecture." },
];

export function WhyItaly() {
  return (
    <section id="why-italy" className="relative py-28 lg:py-40 overflow-hidden">
      <img src={bg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/85 via-ocean/75 to-ocean/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">La Dolce Vita</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl text-ivory">
            Why <em className="text-gold not-italic">Italy?</em>
          </h2>
          <p className="mt-6 text-ivory/80 text-lg">
            More than a degree — a way of life.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`reveal rounded-2xl p-8 backdrop-blur-md bg-ivory/10 border border-ivory/20 hover:bg-ivory/15 hover:-translate-y-1 transition-all duration-500 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="text-4xl mb-5">{r.icon}</div>
              <h3 className="font-display text-2xl text-ivory">{r.title}</h3>
              <p className="mt-3 text-ivory/75 leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
