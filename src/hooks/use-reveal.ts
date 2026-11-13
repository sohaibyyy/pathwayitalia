import { useEffect } from "react";

const done = new WeakSet<Element>();

/**
 * Fades in elements with the `.reveal` class as they scroll into view.
 * Uses the Web Animations API instead of toggling classes/attributes so it
 * never touches markup React is still hydrating. Re-runs when `key` changes
 * (pass the current pathname).
 */
export function useReveal(key: string) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = (el: Element) => {
      if (done.has(el)) return;
      done.add(el);
      (el as HTMLElement).animate(
        reduce
          ? [{ opacity: 1 }, { opacity: 1 }]
          : [
              { opacity: 0, transform: "translateY(18px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
        { duration: reduce ? 1 : 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
      );
    };
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    // Observe now and again shortly after, so elements from lazily loaded route chunks are included.
    const observeAll = () =>
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!done.has(el)) io.observe(el);
      });
    observeAll();
    const t = window.setTimeout(observeAll, 400);
    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [key]);
}
