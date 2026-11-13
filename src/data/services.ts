/**
 * The seven PathwayItalia services.
 * `icon` is the name of a lucide-react icon mapped in src/components/site/icons.ts.
 *
 * NOTE(Sohaib): the `detail` and `includes` text is a first draft written from
 * the existing site copy and FAQ. Please review it so it matches exactly what
 * you offer.
 */
export interface Service {
  slug: string;
  icon:
    | "GraduationCap"
    | "BookOpen"
    | "FileText"
    | "School"
    | "Stamp"
    | "PiggyBank"
    | "PlaneLanding";
  title: string;
  summary: string;
  detail: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "university-selection",
    icon: "GraduationCap",
    title: "University Selection",
    summary: "Finding the right institution for your goals.",
    detail:
      "Italy has public universities, private universities and specialist academies, each with different fees, entry routes and teaching styles. We help you compare them and build a shortlist that fits your grades, budget and ambitions.",
    includes: [
      "A conversation about your goals, grades and budget",
      "A balanced shortlist of universities to apply to",
      "Public versus private: costs, class sizes and entry routes explained",
    ],
  },
  {
    slug: "program-selection",
    icon: "BookOpen",
    title: "Program Selection",
    summary: "Matching your passion with the right degree.",
    detail:
      "Programme names can be confusing, and not every degree is taught in English. We match you with bachelor's programmes that are actually available in English and that lead where you want to go.",
    includes: [
      "English-taught programmes checked against official university websites",
      "Entry requirements mapped for each programme",
      "Guidance on entrance tests and portfolios where they apply",
    ],
  },
  {
    slug: "application-assistance",
    icon: "FileText",
    title: "Application Assistance",
    summary: "We handle the paperwork, you focus on the future.",
    detail:
      "Each university has its own portal, deadlines and document rules. We give you a personalised checklist and guide you through every application so nothing is missed.",
    includes: [
      "A personalised document checklist",
      "Support with your motivation letter",
      "Deadline tracking across all your applications",
    ],
  },
  {
    slug: "enrollment-support",
    icon: "School",
    title: "Enrollment Support",
    summary: "Confirming your place at your dream university.",
    detail:
      "An offer is only the start. We help you accept your place, complete pre-enrolment and get your documents recognised so your seat is secured.",
    includes: [
      "Accepting your offer and confirming your place",
      "Pre-enrolment on the Universitaly portal",
      "Guidance on the Dichiarazione di Valore and document legalisation",
    ],
  },
  {
    slug: "visa-guidance",
    icon: "Stamp",
    title: "Visa Guidance",
    summary: "Navigating Italian student visa requirements.",
    detail:
      "Non-EU students need a national Type D study visa. We explain what your consulate asks for and help you prepare a complete application in good time.",
    includes: [
      "What the Type D student visa requires",
      "Preparing proof of funds, accommodation and health insurance",
      "What to do after you arrive: the permesso di soggiorno",
    ],
  },
  {
    slug: "scholarship-search",
    icon: "PiggyBank",
    title: "Scholarship Search",
    summary: "Uncovering funding opportunities for you.",
    detail:
      "Italy offers regional needs-based scholarships as well as university merit awards. We help you find the ones you can apply for and meet their deadlines.",
    includes: [
      "Regional DSU scholarships explained",
      "University merit awards and fee reductions",
      "Help preparing scholarship applications on time",
    ],
  },
  {
    slug: "on-arrival-support",
    icon: "PlaneLanding",
    title: "On-Arrival Support",
    summary: "Helping you settle into life in Italy.",
    detail:
      "The first weeks involve a lot of practical steps. We help you with the essentials so you can focus on starting your studies.",
    includes: [
      "Finding safe student accommodation",
      "Getting your codice fiscale (tax code)",
      "Residence permit and local registration steps",
    ],
  },
];
