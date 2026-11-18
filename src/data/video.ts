/**
 * Homepage hero video. Real footage (not AI-generated), downloaded from Pexels
 * and re-encoded for the web. See VIDEO_CREDITS.md for the full record.
 *
 * To switch back to the Florence photo, set `enabled: false`.
 */
import mp4_1080 from "@/assets/video/hero-roman-forum-1080.mp4";
import webm_1080 from "@/assets/video/hero-roman-forum-1080.webm";
import mp4_720 from "@/assets/video/hero-roman-forum-720.mp4";
import webm_720 from "@/assets/video/hero-roman-forum-720.webm";
import posterLg from "@/assets/video/hero-roman-forum-poster-lg.webp";
import posterSm from "@/assets/video/hero-roman-forum-poster-sm.webp";

export const heroVideo = {
  enabled: true,
  /** Desktop and tablet (width 768px and up). */
  large: { webm: webm_1080, mp4: mp4_1080 },
  /** Phones. */
  small: { webm: webm_720, mp4: mp4_720 },
  poster: { lg: posterLg, sm: posterSm, width: 1920, height: 1080 },
  alt: "Time-lapse of the Roman Forum in Rome at golden hour, with the Colosseum in the distance",
  credit: {
    creator: "Super Lunar",
    creatorUrl: "https://www.pexels.com/@super-lunar-3180156/",
    source: "Pexels",
    title: "A Time-Lapse of the Roman Forum",
    sourceUrl: "https://www.pexels.com/video/a-time-lapse-of-the-roman-forum-4840514/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
} as const;
