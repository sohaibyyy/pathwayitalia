/**
 * Student Base section on the homepage.
 *
 * `code` is the ISO 3166-1 alpha-2 country code used by the `flag-icons`
 * package (lower case). To add a country: add a line here AND add the
 * matching import in src/components/site/StudentBase.tsx.
 *
 * The headline says "15+ countries"; update `studentCountryCount` if that changes.
 */
export const studentCountries = [
  { code: "pt", name: "Portugal" },
  { code: "us", name: "USA" },
  { code: "lb", name: "Lebanon" },
  { code: "ae", name: "UAE" },
  { code: "cm", name: "Cameroon" },
  { code: "id", name: "Indonesia" },
  { code: "ca", name: "Canada" },
  { code: "nz", name: "New Zealand" },
  { code: "in", name: "India" },
  { code: "pk", name: "Pakistan" },
  { code: "es", name: "Spain" },
  { code: "br", name: "Brazil" },
  { code: "ar", name: "Argentina" },
  { code: "mv", name: "Maldives" },
] as const;

/** The number shown in the animated counter ("15+ countries"). */
export const studentCountryCount = 15;

/**
 * Student testimonials, supplied by Sohaib with the students' permission.
 * `detail` (e.g. where the student is from) is optional.
 */
export const testimonials: { quote: string; name: string; detail?: string }[] = [
  {
    quote:
      "PathwayItalia was there for me 24/7, and I never had to worry about a thing during my final year of high school.",
    name: "Rohan Joshi",
    detail: "USA",
  },
  {
    quote:
      "They helped me with every step, and the whole thing was really transparent. Applications, enrollments, visa, etc. were all done on time!",
    name: "Sarah Malik",
  },
];
