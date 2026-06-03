import heroImg from "@/assets/hero-italy.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Italian coastal stairway draped in bougainvillea"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/30 via-terracotta/20 to-ivory" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 lg:pt-56 lg:pb-32 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <span className="reveal inline-block text-ivory/90 tracking-[0.3em] text-xs uppercase mb-6">
            Bachelor's Programs · Italy
          </span>
          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-8xl text-ivory leading-[1.02] max-w-4xl">
            Your Path to <em className="text-gold not-italic">Italy</em> Starts Here
          </h1>
          <p className="reveal mt-8 max-w-xl text-lg text-ivory/85 leading-relaxed">
            Bachelor's degrees at Italy's finest universities — guided from
            application to arrival.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-gold text-ocean px-7 py-3.5 text-sm font-medium hover:bg-gold/90 transition-all hover:scale-[1.02]"
            >
              Explore Our Services
            </a>
            <a
              href="#apply"
              className="rounded-full border border-ivory/60 text-ivory px-7 py-3.5 text-sm font-medium hover:bg-ivory/10 backdrop-blur-sm transition-all"
            >
              Apply Now
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mx-auto text-ivory/80 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="block h-10 w-px bg-ivory/60 animate-pulse" />
        </a>
      </div>
    </section>
  );
}
