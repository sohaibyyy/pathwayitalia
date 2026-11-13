/**
 * Site-wide settings. Edit these values rather than hunting through components.
 */
export const site = {
  name: "PathwayItalia",
  tagline: "Italy, Simplified.",
  founder: "Sohaib Jehanzeb",
  /** Canonical production URL, no trailing slash. Used for canonical links, Open Graph and the sitemap. */
  url: "https://pathwayitalia.it",
  email: "info@pathwayitalia.it",
  instagram: "https://instagram.com/pathwayitalia",
  tiktok: "https://tiktok.com/@pathwayitalia",

  /**
   * Meeting booking link.
   * TODO(Sohaib): confirm this Cal.com page is live and is the one you want people to use.
   */
  bookingUrl: "https://cal.com/pathwayitalia",

  /**
   * Apply form delivery.
   * TODO(Sohaib): create a free access key at https://web3forms.com (it sends
   * submissions to info@pathwayitalia.it) and set it as the environment
   * variable VITE_WEB3FORMS_KEY in Vercel. Until a key is set, the form falls
   * back to opening the visitor's email app with their answers pre-filled.
   */
  web3formsKey: (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ?? "",

  /**
   * Shows the dashed "placeholder" boxes (remaining countries, testimonials,
   * missing university photos). Set to false to hide them on the live site.
   */
  showPlaceholders: true,
} as const;

export const navLinks = [
  { to: "/universities", label: "Universities" },
  { to: "/programs", label: "Programs" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
] as const;
