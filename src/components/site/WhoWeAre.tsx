import whoImg from "@/assets/who-we-are.jpg";

export function WhoWeAre() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <img
            src={whoImg}
            alt="Italian architecture courtyard"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border-2 border-gold rounded-sm -z-0" />
        </div>

        <div className="reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta">
            Chapter One
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ocean leading-tight">
            We Are <em className="text-terracotta not-italic">PathwayItalia</em>
          </h2>
          <div className="my-8 h-px w-24 bg-blush" />
          <p className="text-lg text-ocean/75 leading-relaxed">
            PathwayItalia helps international students navigate the journey of
            enrolling in Italian universities. Founded by{" "}
            <strong className="text-ocean">Sohaib Jehanzeb</strong>, we guide
            you from choosing the right university to landing in Italy — every
            step of the way.
          </p>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Aspirational. Warm. Sophisticated. We treat each student's pathway
            as a personal story worth telling.
          </p>
        </div>
      </div>
    </section>
  );
}
