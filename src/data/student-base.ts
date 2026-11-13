/**
 * Student Base section on the homepage.
 *
 * `code` is the ISO 3166-1 alpha-2 country code used by the `flag-icons`
 * package (lower case). To add a country: add a line here AND add the
 * matching import in src/components/site/StudentBase.tsx.
 *
 * TODO(Sohaib): ADD REMAINING COUNTRIES. The headline says "15+ countries";
 * only the seven below have been supplied so far.
 */
export const studentCountries = [
  { code: "pt", name: "Portugal" },
  { code: "us", name: "USA" },
  { code: "lb", name: "Lebanon" },
  { code: "ae", name: "UAE" },
  { code: "cm", name: "Cameroon" },
  { code: "id", name: "Indonesia" },
  { code: "ca", name: "Canada" },
] as const;

/** The number shown in the animated counter ("15+ countries"). */
export const studentCountryCount = 15;

/**
 * TODO(Sohaib): real testimonials go here. Leave empty until you have real
 * quotes with permission to publish them. Nothing is invented on the site.
 */
export const testimonials: { quote: string; name: string; detail: string }[] = [];
