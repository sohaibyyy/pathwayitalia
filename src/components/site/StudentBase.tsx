import { useEffect, useRef, useState } from "react";
import { Globe2, Quote } from "lucide-react";
import { studentCountries, studentCountryCount, testimonials } from "@/data/student-base";
import { site } from "@/data/site";

// SVG flags from the flag-icons package (MIT). Add an import here for each new country.
import pt from "flag-icons/flags/4x3/pt.svg";
import us from "flag-icons/flags/4x3/us.svg";
import lb from "flag-icons/flags/4x3/lb.svg";
import ae from "flag-icons/flags/4x3/ae.svg";
import cm from "flag-icons/flags/4x3/cm.svg";
import id from "flag-icons/flags/4x3/id.svg";
import ca from "flag-icons/flags/4x3/ca.svg";
import nz from "flag-icons/flags/4x3/nz.svg";
import inFlag from "flag-icons/flags/4x3/in.svg"; // "in" is a reserved word in JavaScript
import pk from "flag-icons/flags/4x3/pk.svg";
import es from "flag-icons/flags/4x3/es.svg";
import br from "flag-icons/flags/4x3/br.svg";
import ar from "flag-icons/flags/4x3/ar.svg";
import mv from "flag-icons/flags/4x3/mv.svg";

const flags: Record<string, string> = {
  pt,
  us,
  lb,
  ae,
  cm,
  id,
  ca,
  nz,
  in: inFlag,
  pk,
  es,
  br,
  ar,
  mv,
};

function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target); // SSR / no-JS shows the real number
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, durationMs]);
  return { ref, value };
}

export function StudentBase() {
  const { ref, value } = useCountUp(studentCountryCount);

  return (
    <section className="section bg-ivory" aria-labelledby="student-base-heading">
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="reveal">
            <p className="eyebrow">Our student base</p>
            <h2 id="student-base-heading" className="h-section mt-4 text-ocean">
              A global student community, with students from{" "}
              <span className="accent-serif">{studentCountryCount}+ countries</span>
            </h2>
          </div>
          <div className="reveal flex items-baseline gap-3 lg:justify-end">
            <span
              ref={ref}
              className="font-display text-7xl leading-none text-ocean tabular-nums lg:text-8xl"
              aria-hidden="true"
            >
              {value}+
            </span>
            <span className="text-lg font-medium text-ink-soft" aria-hidden="true">
              countries
            </span>
            <span className="sr-only">{studentCountryCount}+ countries</span>
          </div>
        </div>

        <ul className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {studentCountries.map((c) => (
            <li key={c.code} className="card flex items-center gap-3 px-4 py-3.5">
              <img
                src={flags[c.code]}
                alt=""
                width={36}
                height={27}
                loading="lazy"
                className="h-[27px] w-9 shrink-0 rounded-[3px] object-cover shadow-[0_0_0_1px_rgb(0_0_0/0.08)]"
              />
              <span className="font-medium text-ocean">{c.name}</span>
            </li>
          ))}
          {/* Shown after the last country so the list doesn't read as complete. */}
          <li className="flex items-center gap-3 rounded-2xl border border-dashed border-ocean/30 bg-transparent px-4 py-3.5">
            <Globe2 size={24} className="shrink-0 text-terracotta" aria-hidden="true" />
            <span className="font-medium italic text-ocean">and many more…</span>
          </li>
        </ul>

        {testimonials.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="card p-8">
                <Quote className="text-terracotta" aria-hidden="true" />
                <blockquote className="mt-4 font-display text-xl text-ocean">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-ink-soft">
                  <strong className="text-ocean">{t.name}</strong>
                  {t.detail && <> · {t.detail}</>}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          site.showPlaceholders && (
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[1, 2].map((n) => (
                <div key={n} className="placeholder-box p-8">
                  <Quote aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em]">
                    Testimonial placeholder {n}
                  </p>
                  <p className="mt-2 text-sm">
                    A real student quote goes here, with their permission. Add it in
                    src/data/student-base.ts.
                  </p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
}
