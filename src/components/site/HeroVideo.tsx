import { useEffect, useRef, useState } from "react";
import { heroVideo } from "@/data/video";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/** Video is skipped (poster only) for reduced motion, Data Saver and slow connections. */
function shouldPlayVideo(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (conn?.saveData) return false;
  if (conn?.effectiveType && ["slow-2g", "2g", "3g"].includes(conn.effectiveType)) return false;
  return true;
}

/**
 * Full-bleed background video for the homepage hero.
 *
 * The poster is a normal <img> rendered on the server, so it is the first thing
 * that paints (and the page's LCP image). The <video> is only added in the
 * browser, after checking motion and connection preferences, and fades in once
 * it is actually playing. If it never plays, the poster simply stays.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const { poster, alt } = heroVideo;
  const [play, setPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [small, setSmall] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setSmall(window.matchMedia("(max-width: 767px)").matches);
    setPlay(shouldPlayVideo());
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (reduce.matches) {
        setPlay(false);
        setPlaying(false);
      }
    };
    reduce.addEventListener("change", onChange);
    return () => reduce.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!play || !v) return;
    // Set as properties too: some mobile browsers only honour muted autoplay this way.
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => setPlaying(false));
  }, [play, small]);

  const src = small ? heroVideo.small : heroVideo.large;
  const fit = "absolute inset-0 h-full w-full object-cover object-center";

  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src={poster.lg}
        srcSet={`${poster.sm} 960w, ${poster.lg} 1920w`}
        sizes="100vw"
        width={poster.width}
        height={poster.height}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className={fit}
      />
      {play && (
        <video
          key={small ? "small" : "large"}
          ref={videoRef}
          className={`${fit} transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={small ? poster.sm : poster.lg}
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          onPlaying={() => setPlaying(true)}
        >
          <source src={src.webm} type="video/webm" />
          <source src={src.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

/** Small attribution line shown directly below the hero. */
export function HeroVideoCredit() {
  const c = heroVideo.credit;
  const link = "underline decoration-ink-soft/40 underline-offset-2 hover:text-ink";
  return (
    <p className="text-xs leading-snug text-ink-soft">
      Video:{" "}
      <a href={c.creatorUrl} target="_blank" rel="noreferrer" className={link}>
        {c.creator}
      </a>{" "}
      via{" "}
      <a href={c.sourceUrl} target="_blank" rel="noreferrer" className={link}>
        {c.source}
      </a>{" "}
      —{" "}
      <a href={c.licenseUrl} target="_blank" rel="noreferrer license" className={link}>
        {c.license}
      </a>
    </p>
  );
}
