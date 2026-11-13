/**
 * Universities and their English-taught bachelor's programmes.
 *
 * HOW TO UPDATE
 * - Every programme below was checked against the university's own website on
 *   the `lastVerified` date of its university. When you re-check a university,
 *   update its `lastVerified` and `catalogueYear`.
 * - `status: "verified"` (the default) means the programme name, language,
 *   duration and campus were read from the official page linked in `url`.
 * - `status: "pending-approval"` means the university itself lists the
 *   programme as not yet approved.
 * - `status: "unverified"` means the official sources disagree or the detail
 *   could not be confirmed. These are labelled UNVERIFIED on the site.
 * - `language: "english"` = the official page says the whole programme is
 *   taught in English. `language: "english-track"` = the official page lists
 *   both Italian and English (an English-taught version/track exists, but
 *   students should confirm the details with the university).
 * - Photos live in `src/data/photos.ts` (with their licence credits).
 */

import type { PhotoKey } from "./photos";

export const PROGRAM_CATEGORIES = [
  "Business & Economics",
  "Engineering & Tech",
  "Design & Architecture",
  "Law & Politics",
  "Life Sciences",
  "Fashion & Arts",
  "Social Sciences & Humanities",
] as const;

export type ProgramCategory = (typeof PROGRAM_CATEGORIES)[number];
export type ProgramLanguage = "english" | "english-track";
export type VerificationStatus = "verified" | "pending-approval" | "unverified";

export interface Program {
  /** Exact official programme name, as written on the university website. */
  name: string;
  /** City / campus where it is taught. */
  campus: string;
  category: ProgramCategory;
  language: ProgramLanguage;
  /** Official programme page (or the official list page if there is no programme page). */
  url: string;
  /** Duration in years. Defaults to 3. */
  years?: number;
  /** Degree type. Defaults to the university's `degreeType`. */
  degree?: string;
  /** Defaults to "verified". */
  status?: VerificationStatus;
  /** Short note shown under the programme (curriculum, caveats, etc.). */
  note?: string;
}

export interface University {
  slug: string;
  name: string;
  /** English or short name used in tight spaces. */
  shortName: string;
  city: string;
  kind: "Public university" | "Private university" | "Private academy";
  tags: string[];
  overview: string;
  website: string;
  /** Official page that lists the programmes (the source used for verification). */
  programmesSource: string;
  /** Default degree type for this university's programmes. */
  degreeType: string;
  /** Academic year of the official catalogue that was checked. */
  catalogueYear: string;
  /** What the official site says about the 2027/28 intake. */
  intakeNote: string;
  /** ISO date the data was last checked against the official website. */
  lastVerified: string;
  /** Key into src/data/photos.ts, or null if no properly licensed photo was found. */
  photo: PhotoKey | null;
  programs: Program[];
}

const VERIFIED_ON = "2026-11-13";

export const universities: University[] = [
  {
    slug: "bocconi",
    name: "Università Bocconi",
    shortName: "Bocconi",
    city: "Milan",
    kind: "Private university",
    tags: ["Economics", "Management", "Finance"],
    overview:
      "A private university in Milan focused on economics, management, finance, political science, data science and law. Almost all of its bachelor's programmes are taught in English.",
    website: "https://www.unibocconi.it/en",
    programmesSource: "https://www.unibocconi.it/en/programs/bachelor-science-programs",
    degreeType: "Bachelor of Science",
    catalogueYear: "2026/27",
    intakeNote:
      "Programme list as published on the official site in November 2026. Check the admissions page for 2027/28 deadlines.",
    lastVerified: VERIFIED_ON,
    photo: "bocconi",
    programs: [
      {
        name: "Economics",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/economics",
      },
      {
        name: "Finance",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/finance",
      },
      {
        name: "Management",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/management",
        note: 'Listed under programmes "In English"; the page also mentions Italian.',
      },
      {
        name: "Management and Computer Science",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/management-and-computer-science",
      },
      {
        name: "Management for the Arts and Cultures",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/management-arts-and-cultures",
      },
      {
        name: "International Politics and Government",
        campus: "Milan",
        category: "Law & Politics",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/international-politics-and-government",
      },
      {
        name: "Mathematical and Computing Sciences for Artificial Intelligence",
        campus: "Milan",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.unibocconi.it/en/programs/bachelor-science/mathematical-and-computing-sciences-artificial-intelligence",
      },
      {
        name: "World Bachelor in Business",
        campus: "Milan, Los Angeles, Hong Kong",
        category: "Business & Economics",
        language: "english",
        years: 4,
        url: "https://www.unibocconi.it/en/programs/bachelor-science/world-bachelor-business",
        note: "Four-year programme run with USC Marshall and HKUST.",
      },
      {
        name: "Bachelor in Global Law",
        campus: "Milan",
        category: "Law & Politics",
        language: "english",
        degree: "Bachelor's degree (School of Law)",
        url: "https://www.unibocconi.it/en/programs/law/bachelor-global-law",
      },
    ],
  },
  {
    slug: "bologna",
    name: "Università di Bologna",
    shortName: "Bologna",
    city: "Bologna",
    kind: "Public university",
    tags: ["Multidisciplinary", "Multi-campus"],
    overview:
      "A large public university with campuses in Bologna, Forlì, Ravenna, Rimini and Cesena, widely regarded as the oldest university in the Western world. It offers English-taught bachelor's degrees in economics, politics, engineering and the life sciences.",
    website: "https://www.unibo.it/en",
    programmesSource: "https://www.unibo.it/en/study/first-and-single-cycle-degree",
    degreeType: "First cycle degree (Laurea)",
    catalogueYear: "2026/27",
    intakeNote:
      "Taken from the official 2026/27 programme catalogue (the latest published in November 2026). The 2027/28 catalogue was not yet online.",
    lastVerified: VERIFIED_ON,
    photo: "bologna",
    programs: [
      {
        name: "Business and Economics",
        campus: "Bologna",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6609",
      },
      {
        name: "Economics and Finance",
        campus: "Bologna",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6646",
      },
      {
        name: "Economics, Politics and Social Sciences",
        campus: "Bologna",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6647",
      },
      {
        name: "Management and Economics",
        campus: "Forlì",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6614",
      },
      {
        name: "Economics of Tourism and Cities",
        campus: "Rimini",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6645",
      },
      {
        name: "Business Economics",
        campus: "Rimini",
        category: "Business & Economics",
        language: "english-track",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6611",
        note: "Taught in English and Italian, with one or more international curricula.",
      },
      {
        name: "Statistical Sciences",
        campus: "Bologna",
        category: "Business & Economics",
        language: "english-track",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6661",
        note: "Taught in English and Italian, with one or more international curricula.",
      },
      {
        name: "International Studies",
        campus: "Forlì",
        category: "Law & Politics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6650",
      },
      {
        name: "European Studies",
        campus: "Bologna and Forlì",
        category: "Law & Politics",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6653",
        note: "Joint degree.",
      },
      {
        name: "Building Construction Engineering",
        campus: "Ravenna",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6623",
      },
      {
        name: "Genomics",
        campus: "Bologna",
        category: "Life Sciences",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6343",
      },
      {
        name: "Biology of Human and Environmental Health",
        campus: "Padua and Bologna",
        category: "Life Sciences",
        language: "english",
        url: "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/5909",
        note: "Joint degree with the University of Padua.",
      },
    ],
  },
  {
    slug: "cattolica",
    name: "Università Cattolica del Sacro Cuore",
    shortName: "Cattolica",
    city: "Milan",
    kind: "Private university",
    tags: ["Economics", "Psychology", "International Relations"],
    overview:
      "A private university with its main campus in central Milan and further campuses in Brescia, Piacenza, Cremona and Rome. Its English-taught bachelor's degrees cover economics, finance, communication, psychology and international relations.",
    website: "https://www.unicatt.it/en.html",
    programmesSource: "https://www.unicatt.it/en/corsi/triennale.html",
    degreeType: "Undergraduate degree (Laurea)",
    catalogueYear: "2027/28",
    intakeNote:
      "The official programme pages show applications open for 2027/28 (Food production management still showed 2026/27).",
    lastVerified: VERIFIED_ON,
    photo: "cattolica",
    programs: [
      {
        name: "Economics and Management",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/economics-and-management-milano.html",
      },
      {
        name: "Finance",
        campus: "Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/finance-milano.html",
      },
      {
        name: "Business and Finance",
        campus: "Brescia",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/business-and-finance-brescia.html",
      },
      {
        name: "International business management",
        campus: "Piacenza",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/international-business-management-piacenza.html",
      },
      {
        name: "International Relations and Global Affairs - IRGA",
        campus: "Milan",
        category: "Law & Politics",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/international-relations-and-global-affairs--irga-milano.html",
      },
      {
        name: "Communication Management - COMMA",
        campus: "Milan",
        category: "Social Sciences & Humanities",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/communication-management-comma-milano.html",
      },
      {
        name: "Criminology",
        campus: "Milan",
        category: "Social Sciences & Humanities",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/criminology-milano.html",
      },
      {
        name: "Psychology",
        campus: "Milan",
        category: "Social Sciences & Humanities",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/psychology-milano.html",
      },
      {
        name: "Food production management",
        campus: "Piacenza",
        category: "Life Sciences",
        language: "english",
        url: "https://www.unicatt.it/en/corsi/triennale/food-production-management-piacenza.html",
        note: "Official page still showed applications for 2026/27 when checked.",
      },
    ],
  },
  {
    slug: "politecnico-di-milano",
    name: "Politecnico di Milano",
    shortName: "PoliMi",
    city: "Milan",
    kind: "Public university",
    tags: ["Engineering", "Architecture", "Design"],
    overview:
      "Italy's largest technical university, teaching engineering, architecture and design across campuses in Milan, Lecco, Cremona, Piacenza and Mantova. Most bachelor's degrees are taught in Italian; a small number are taught in English.",
    website: "https://www.polimi.it/en",
    programmesSource: "https://www.polimi.it/en/education/laurea-programmes",
    degreeType: "Bachelor of Science (Laurea)",
    catalogueYear: "2026/27",
    intakeNote:
      "Programme list as published on the official site in November 2026 (pages refer to the 2026/27 regulations). Check admissions for 2027/28 dates.",
    lastVerified: VERIFIED_ON,
    photo: "polimi",
    programs: [
      {
        name: "Engineering Science",
        campus: "Milan (Leonardo and Bovisa)",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.polimi.it/en/education/laurea-programmes/programme-detail/engineering-science",
      },
      {
        name: "Industrial Engineering",
        campus: "Piacenza",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.polimi.it/en/education/laurea-programmes/programme-detail/industrial-engineering",
      },
      {
        name: "Process Engineering",
        campus: "Cremona",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.polimi.it/en/education/laurea-programmes/programme-detail/process-engineering",
      },
      {
        name: "Civil Engineering",
        campus: "Milan (Leonardo)",
        category: "Engineering & Tech",
        language: "english-track",
        url: "https://www.polimi.it/en/education/laurea-programmes/programme-detail/civil-engineering",
        note: "Official language: Italian or English.",
      },
      {
        name: "Interaction Design",
        campus: "Lecco",
        category: "Design & Architecture",
        language: "english",
        url: "https://www.polimi.it/en/education/laurea-programmes/programme-detail/interaction-design",
      },
      {
        name: "Architectural Design",
        campus: "Milan (Leonardo), Piacenza, Mantova",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.polimi.it/en/education/laurea-programmes/programme-detail/architectural-design",
        note: "Official language: Italian or English.",
      },
    ],
  },
  {
    slug: "luiss",
    name: "Luiss Guido Carli",
    shortName: "Luiss",
    city: "Rome",
    kind: "Private university",
    tags: ["Business", "Politics", "Law"],
    overview:
      "A private university in Rome specialising in business, economics, political science and law, with several bachelor's degrees taught entirely in English.",
    website: "https://www.luiss.it/en",
    programmesSource: "https://www.luiss.it/en/courses-and-masters-programmes/undergraduate-school",
    degreeType: "Bachelor's degree (Laurea)",
    catalogueYear: "2027/28",
    intakeNote:
      "Luiss announced on 23 October 2026 that applications for 2027/28 bachelor's programmes are open.",
    lastVerified: VERIFIED_ON,
    photo: "luiss",
    programs: [
      {
        name: "Business Administration",
        campus: "Rome",
        category: "Business & Economics",
        language: "english",
        url: "https://www.luiss.it/en/courses-and-masters-programmes/undergraduate-school/business-administration",
      },
      {
        name: "Economics and Business",
        campus: "Rome",
        category: "Business & Economics",
        language: "english",
        url: "https://www.luiss.it/en/courses-and-masters-programmes/undergraduate-school/economics-and-business",
      },
      {
        name: "Management and Artificial Intelligence",
        campus: "Rome",
        category: "Business & Economics",
        language: "english",
        url: "https://www.luiss.it/en/courses-and-masters-programmes/undergraduate-school/management-and-artificial-intelligence",
      },
      {
        name: "Politics: Philosophy and Economics",
        campus: "Rome",
        category: "Law & Politics",
        language: "english",
        url: "https://www.luiss.it/en/courses-and-masters-programmes/undergraduate-school/politics-philosophy-and-economics",
      },
      {
        name: "Global Law",
        campus: "Rome",
        category: "Law & Politics",
        language: "english",
        url: "https://www.luiss.it/en/courses-and-masters-programmes/undergraduate-school/global-law",
      },
    ],
  },
  {
    slug: "padova",
    name: "Università di Padova",
    shortName: "Padua",
    city: "Padua",
    kind: "Public university",
    tags: ["Sciences", "Psychology", "Engineering"],
    overview:
      "One of Italy's oldest and largest public universities, based in Padua in the Veneto region. It offers English-taught bachelor's degrees in psychology, engineering, the sciences and economics.",
    website: "https://www.unipd.it/en",
    programmesSource: "https://www.unipd.it/en/corsi-laurea-lingua-inglese",
    degreeType: "Bachelor's degree (Laurea)",
    catalogueYear: "2026/27, with 2027/28 additions",
    intakeNote:
      'From the official list of degrees "taught exclusively in English". Three programmes are announced as new for 2027/28 and still to be approved.',
    lastVerified: VERIFIED_ON,
    photo: "padova",
    programs: [
      {
        name: "Psychological science",
        campus: "Padua",
        category: "Social Sciences & Humanities",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/psychological-science",
      },
      {
        name: "Techniques and methods in psychological science",
        campus: "Padua",
        category: "Social Sciences & Humanities",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/techniques-and-methods-psychological-science",
      },
      {
        name: "Italian Medieval and Renaissance studies",
        campus: "Padua",
        category: "Social Sciences & Humanities",
        language: "english",
        status: "unverified",
        url: "https://www.unipd.it/en/corsi-di-laurea/italian-medieval-and-renaissance-studies",
        note: 'On the official English-taught list, but its own page says "Italian and English".',
      },
      {
        name: "Information Engineering",
        campus: "Padua",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/information-engineering",
      },
      {
        name: "Economics, Governance and Decision-Making",
        campus: "Padua",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/economics-governance-and-decision-making",
      },
      {
        name: "Earth and Climate Dynamics",
        campus: "Padua",
        category: "Life Sciences",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/earth-and-climate-dynamics",
      },
      {
        name: "Biology of Human and Environmental Health",
        campus: "Padua and Bologna",
        category: "Life Sciences",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/biology-human-and-environmental-health",
        note: "Joint degree with the University of Bologna.",
      },
      {
        name: "Animal care",
        campus: "Legnaro",
        category: "Life Sciences",
        language: "english",
        url: "https://www.unipd.it/en/corsi-di-laurea/animal-care",
      },
      {
        name: "Management, Finance and Business Analytics",
        campus: "Padua",
        category: "Business & Economics",
        language: "english",
        status: "pending-approval",
        url: "https://www.unipd.it/en/corsi-laurea-lingua-inglese",
        note: "New programme for 2027/28, still to be approved.",
      },
      {
        name: "Food Safety for Global Health",
        campus: "Padua",
        category: "Life Sciences",
        language: "english",
        status: "pending-approval",
        url: "https://www.unipd.it/en/corsi-laurea-lingua-inglese",
        note: "New programme for 2027/28, still to be approved. Campus not yet published.",
      },
      {
        name: "Innovative Technologies in Agriculture",
        campus: "Padua",
        category: "Life Sciences",
        language: "english",
        status: "pending-approval",
        url: "https://www.unipd.it/en/corsi-laurea-lingua-inglese",
        note: "New programme for 2027/28, still to be approved. Campus not yet published.",
      },
    ],
  },
  {
    slug: "torino",
    name: "Università di Torino",
    shortName: "Turin",
    city: "Turin",
    kind: "Public university",
    tags: ["Business", "Economics", "Law"],
    overview:
      "A large public university in Turin, in north-west Italy, covering almost every academic field. A small number of its bachelor's degrees are taught entirely in English.",
    website: "https://www.unito.it",
    programmesSource: "https://www.unito.it/didattica/offerta-formativa/corsi-di-studio",
    degreeType: "Bachelor's degree (Laurea)",
    catalogueYear: "2026/27",
    intakeNote:
      "From the official 2026/27 course catalogue (the latest published in November 2026). The 2027/28 catalogue was not yet online.",
    lastVerified: VERIFIED_ON,
    photo: "torino",
    programs: [
      {
        name: "Business & Management",
        campus: "Turin",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unito.it/didattica/offerta-formativa/corsi-di-studio/business-management",
      },
      {
        name: "Economics and Finance with Data Science",
        campus: "Turin",
        category: "Business & Economics",
        language: "english",
        url: "https://www.unito.it/didattica/offerta-formativa/corsi-di-studio/economics-and-finance-data-science",
      },
      {
        name: "Global Law and Transnational Legal Studies",
        campus: "Turin",
        category: "Law & Politics",
        language: "english",
        url: "https://www.unito.it/didattica/offerta-formativa/corsi-di-studio/global-law-and-transnational-legal-studies",
      },
    ],
  },
  {
    slug: "trento",
    name: "Università di Trento",
    shortName: "Trento",
    city: "Trento",
    kind: "Public university",
    tags: ["Law", "Sciences", "Technology"],
    overview:
      "A mid-sized public university in the alpine city of Trento. Most bachelor's degrees are taught in Italian; one is taught entirely in English, and a few combine English and Italian.",
    website: "https://www.unitn.it/en",
    programmesSource: "https://www.unitn.it/en/study/courses",
    degreeType: "Bachelor's degree (Laurea)",
    catalogueYear: "2026/27",
    intakeNote:
      "From the official course list as published in November 2026. Check the programme's call for applications for 2027/28 dates.",
    lastVerified: VERIFIED_ON,
    photo: "trento",
    programs: [
      {
        name: "Comparative, European and International Legal Studies",
        campus: "Trento",
        category: "Law & Politics",
        language: "english",
        url: "https://www.unitn.it/en/study/courses",
        note: "Known as CEILS. The individual programme page could not be opened from our checking environment, so the link goes to the official course list.",
      },
    ],
  },
  {
    slug: "politecnico-di-torino",
    name: "Politecnico di Torino",
    shortName: "PoliTo",
    city: "Turin",
    kind: "Public university",
    tags: ["Engineering", "Architecture"],
    overview:
      "A public technical university in Turin for engineering and architecture. Several bachelor's degrees are offered in English, either entirely or alongside an Italian version.",
    website: "https://www.polito.it/en",
    programmesSource: "https://www.polito.it/en/education/bachelor-s-degree-programmes",
    degreeType: "Bachelor's degree (Laurea)",
    catalogueYear: "2026/27",
    intakeNote:
      "Programme list as published on the official site in November 2026. Check admissions for 2027/28 dates.",
    lastVerified: VERIFIED_ON,
    photo: "polito",
    programs: [
      {
        name: "Civil and Environmental Engineering",
        campus: "Turin (Engineering Campus)",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes/civil-and-environmental-engineering",
      },
      {
        name: "Electronic and Communications Engineering",
        campus: "Turin (Engineering Campus)",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes/electronic-and-communications-engineering",
      },
      {
        name: "Food Tech for Ecological Transition",
        campus: "Turin and Pollenzo",
        category: "Engineering & Tech",
        language: "english",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes",
        note: "No programme page on polito.it when checked; link goes to the official list.",
      },
      {
        name: "Computer Engineering",
        campus: "Turin (Engineering Campus)",
        category: "Engineering & Tech",
        language: "english-track",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes/computer-engineering",
        note: "Official programme languages: Italian and English.",
      },
      {
        name: "Mechanical Engineering",
        campus: "Turin (Engineering Campus)",
        category: "Engineering & Tech",
        language: "english-track",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes/mechanical-engineering",
        note: "Official programme languages: Italian and English.",
      },
      {
        name: "Automotive Engineering",
        campus: "Turin (Engineering Campus)",
        category: "Engineering & Tech",
        language: "english-track",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes/automotive-engineering",
        note: "Official programme languages: Italian and English.",
      },
      {
        name: "Architecture",
        campus: "Turin (Architecture, Design and Planning Campus)",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.polito.it/en/education/bachelor-s-degree-programmes/architecture",
        note: "Official programme languages: Italian and English.",
      },
    ],
  },
  {
    slug: "istituto-marangoni",
    name: "Istituto Marangoni",
    shortName: "Marangoni",
    city: "Milan",
    kind: "Private academy",
    tags: ["Fashion", "Design", "Luxury"],
    overview:
      "A private fashion, design and art school with Italian campuses in Milan and Florence. Its three-year courses in Italy are offered in Italian and English.",
    website: "https://www.istitutomarangoni.com/en",
    programmesSource:
      "https://www.istitutomarangoni.com/en/fashion-courses/fashion-design/ba-3-years",
    degreeType: "Three-year BA course",
    catalogueYear: "2027/28",
    intakeNote: "Official pages list intakes in January 2027 and September 2027.",
    lastVerified: VERIFIED_ON,
    photo: "marangoni",
    programs: [
      {
        name: "Fashion Design & Accessories (Womenswear / Menswear)",
        campus: "Milan, Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/fashion-courses/bachelor-degrees/fashion-design/fashion-design-accessories-womenswear-menswear",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Fashion Communication & Image",
        campus: "Milan, Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/fashion-courses/bachelor-degrees/fashion-styling/fashion-communication-image",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Fashion Management & Brand Strategies",
        campus: "Milan, Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/fashion-courses/bachelor-degrees/fashion-business/fashion-management-brand-strategies",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Fashion Management, Digital Communication and Media",
        campus: "Milan, Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/fashion-courses/bachelor-degrees/fashion-business/fashion-management-digital-communication-and-media",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Fashion Product",
        campus: "Milan, Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/fashion-courses/bachelor-degrees/fashion-business/fashion-product",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Art Direction for Beauty & Fashion",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english",
        url: "https://www.istitutomarangoni.com/en/fragrances-and-cosmetics/bachelor-degrees/beauty-image/art-direction-for-beauty-fashion",
      },
      {
        name: "Interior Design",
        campus: "Milan",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/design-courses/bachelor-degrees/interior-design/interior-design",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Product design",
        campus: "Milan",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/design-courses/bachelor-degrees/product-design/product-design-2",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Visual Design",
        campus: "Milan",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/design-courses/bachelor-degrees/visual-design/visual-design",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Arts Curating",
        campus: "Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/art-courses/bachelor-degrees/art-curating-and-business/arts-curating",
        note: "Intake language: Italian or English.",
      },
      {
        name: "Multimedia Arts",
        campus: "Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.istitutomarangoni.com/en/art-courses/bachelor-degrees/multimedia-art/multimedia-arts",
        note: "Intake language: Italian or English.",
      },
    ],
  },
  {
    slug: "ied",
    name: "IED Istituto Europeo di Design",
    shortName: "IED",
    city: "Milan",
    kind: "Private academy",
    tags: ["Design", "Fashion", "Visual Arts"],
    overview:
      "A private design school with Italian campuses in Milan, Rome, Florence, Turin, Cagliari and Como. Many of its three-year Bachelor of Arts courses are offered in English as well as Italian.",
    website: "https://www.ied.edu",
    programmesSource: "https://www.ied.edu/courses/three-years-diploma",
    degreeType: "Bachelor of Arts (three-year course, 180 credits)",
    catalogueYear: "2027/28",
    intakeNote:
      "Official course pages list start dates in October 2027 (some also January 2027 or January 2028). Only campuses where the page lists English are shown.",
    lastVerified: VERIFIED_ON,
    photo: null,
    programs: [
      {
        name: "Fashion Design",
        campus: "Milan, Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/fashion-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Fashion Marketing and Communication",
        campus: "Florence, Rome (English only); Milan",
        category: "Fashion & Arts",
        language: "english",
        url: "https://www.ied.edu/courses/florence/three-years-diploma/fashion-marketing-and-communication",
        note: "English only in Florence and Rome; Italian or English in Milan.",
      },
      {
        name: "Fashion Styling and Art Direction",
        campus: "Florence (English only); Milan",
        category: "Fashion & Arts",
        language: "english",
        url: "https://www.ied.edu/courses/florence/three-years-diploma/Fashion-Stylist",
        note: "English only in Florence; Italian or English in Milan.",
      },
      {
        name: "Jewelry Design",
        campus: "Milan (English only); Rome",
        category: "Fashion & Arts",
        language: "english",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/jewelry-design",
        note: "English only in Milan; Italian or English in Rome.",
      },
      {
        name: "Art and Curatorial Practice",
        campus: "Florence",
        category: "Fashion & Arts",
        language: "english",
        url: "https://www.ied.edu/courses/florence/three-years-diploma/art-and-curatorial-practice",
      },
      {
        name: "Arts and Communication",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/art-and-communication",
        note: "Languages: English, Italian.",
      },
      {
        name: "Marketing and Management for Creative Industries",
        campus: "Florence (English only); Milan",
        category: "Business & Economics",
        language: "english",
        url: "https://www.ied.edu/courses/florence/three-years-diploma/marketing-and-management-for-creative-industries",
        note: "English only in Florence; Italian or English in Milan.",
      },
      {
        name: "Interior Design",
        campus: "Milan, Rome, Florence, Turin",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/interior-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Product Design",
        campus: "Milan, Rome",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/product-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Transportation Design",
        campus: "Turin",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.ied.edu/courses/turin/three-years-diploma/transportation-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Communication Design",
        campus: "Milan, Turin",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/communication-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Graphic Design and Art Direction",
        campus: "Milan, Rome",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/graphic-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Illustration",
        campus: "Florence",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/florence/three-years-diploma/illustration",
        note: "Languages: English, Italian.",
      },
      {
        name: "Illustration and Animation",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/illustration-and-animation",
        note: "Languages: Italian, English.",
      },
      {
        name: "Photography",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/photography",
        note: "Languages: Italian, English.",
      },
      {
        name: "CG Animation and Game Design",
        campus: "Milan",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/cg-animation",
        note: "Languages: Italian, English.",
      },
      {
        name: "Sound Design",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/sound-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Cinema",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/cinema",
        note: "Languages: Italian, English.",
      },
      {
        name: "Video Design",
        campus: "Milan",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/milan/three-years-diploma/video-design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Cinema and Video Design",
        campus: "Rome",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.ied.edu/courses/rome/three-years-diploma/video-design-and-film-making",
        note: "Languages: Italian, English.",
      },
    ],
  },
  {
    slug: "naba",
    name: "NABA Nuova Accademia di Belle Arti",
    shortName: "NABA",
    city: "Milan",
    kind: "Private academy",
    tags: ["Design", "Fashion", "Visual Arts"],
    overview:
      "A private academy of fine arts with campuses in Milan and Rome. Its three-year Bachelor of Arts courses are offered in Italian and English.",
    website: "https://www.naba.it/en",
    programmesSource: "https://www.naba.it/en",
    degreeType: "Bachelor of Arts (BA), 180 credits",
    catalogueYear: "2027/28",
    intakeNote: "Official pages list start dates in February 2027 and October 2027.",
    lastVerified: VERIFIED_ON,
    photo: "naba",
    programs: [
      {
        name: "Design",
        campus: "Milan, Rome",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/design",
        note: "Languages: Italian, English.",
      },
      {
        name: "Graphic Design and Visual Communication",
        campus: "Milan, Rome",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/graphic-design-art-direction-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Creative Technologies",
        campus: "Milan",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/creative-technologies-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Set Design",
        campus: "Milan",
        category: "Design & Architecture",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/set-design-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Fashion Design",
        campus: "Milan, Rome",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/fashion-design-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Fashion Marketing Management",
        campus: "Milan, Rome",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/fashion-marketing-management",
        note: "Languages: Italian, English.",
      },
      {
        name: "Film and Animation",
        campus: "Milan, Rome",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/film-animation-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Comics and Visual Storytelling",
        campus: "Milan, Rome",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/comics-and-visual-storytelling-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Visual Arts",
        campus: "Milan, Rome",
        category: "Fashion & Arts",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/painting-visual-arts-courses",
        note: "Languages: Italian, English.",
      },
      {
        name: "Marketing and Management for Creative Business",
        campus: "Milan",
        category: "Business & Economics",
        language: "english-track",
        url: "https://www.naba.it/en/undergraduate/marketing-management-for-creative-business",
        note: "Languages: Italian, English. No start date was published when checked.",
      },
    ],
  },
  {
    slug: "link-campus",
    name: "Link Campus University",
    shortName: "Link Campus",
    city: "Rome",
    kind: "Private university",
    tags: ["Politics", "Business", "Communication"],
    overview:
      "A private university in Rome. Three of its bachelor's degrees include a curriculum taught in English for international students.",
    website: "https://www.unilink.it",
    programmesSource:
      "https://www.unilink.it/international/discover-our-english-courses/bachelor-degree-courses",
    degreeType: "Bachelor's degree (Laurea)",
    catalogueYear: "Not stated on the official page",
    intakeNote:
      "The official English-courses page does not state an academic year. Confirm 2027/28 availability with the university.",
    lastVerified: VERIFIED_ON,
    photo: "linkCampus",
    programs: [
      {
        name: "Business and Institutional Economics and Management (L-18)",
        campus: "Rome",
        category: "Business & Economics",
        language: "english-track",
        url: "https://www.unilink.it/international/discover-our-english-courses/bachelor-degree-courses",
        note: "English curricula: International Management and Finance; Sport Management.",
      },
      {
        name: "Political Science, Diplomacy and Government of Administration (L-36)",
        campus: "Rome",
        category: "Law & Politics",
        language: "english-track",
        url: "https://www.unilink.it/international/discover-our-english-courses/bachelor-degree-courses",
        note: "English curriculum: International Politics and Crisis Management.",
      },
      {
        name: "Communication Sciences, Media and Digital Technologies (L-20)",
        campus: "Rome",
        category: "Social Sciences & Humanities",
        language: "english-track",
        url: "https://www.unilink.it/international/discover-our-english-courses/bachelor-degree-courses",
        note: "English curriculum: Media and Digital Innovation.",
      },
    ],
  },
];

/* ---------- helpers ---------- */

export interface ProgramWithUniversity extends Program {
  university: University;
}

export const allPrograms: ProgramWithUniversity[] = universities.flatMap((u) =>
  u.programs.map((p) => ({ ...p, university: u })),
);

export function getUniversity(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function programYears(p: Program): number {
  return p.years ?? 3;
}

export function programDegree(p: Program, u: University): string {
  return p.degree ?? u.degreeType;
}

export function programStatus(p: Program): VerificationStatus {
  return p.status ?? "verified";
}

export const programCount = allPrograms.length;
export const fullyEnglishCount = allPrograms.filter((p) => p.language === "english").length;

export function formatVerifiedDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
