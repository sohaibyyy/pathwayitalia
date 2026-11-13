/**
 * FAQ content, grouped by topic.
 * `icon` is the name of a lucide-react icon mapped in src/components/site/icons.ts.
 *
 * NOTE(Sohaib): figures such as fees, visa funds and living costs change every
 * year. Answers that contain them say so; please re-check them each cycle.
 */
export interface FaqGroup {
  id: string;
  label: string;
  icon: "FileText" | "GraduationCap" | "Stamp" | "PiggyBank" | "Home" | "Handshake";
  items: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "applications",
    label: "Applications & Admissions",
    icon: "FileText",
    items: [
      {
        q: "What are the entry requirements for Italian universities?",
        a: "Most require a recognised secondary diploma, proof of English (IELTS, TOEFL or Duolingo) and sometimes an entrance exam or portfolio. We map the exact requirements for each university on your shortlist.",
      },
      {
        q: "Do I need to take an entrance exam?",
        a: "Some programmes do require an entrance test, including many at Bocconi and the Politecnico universities, and medical degrees. Others select on grades, a CV or a portfolio. We tell you what applies to you and help you prepare.",
      },
      {
        q: "When do applications open and close?",
        a: "It varies. Many private universities open applications in the autumn of the year before you start; public universities follow the Universitaly pre-enrolment cycle, typically in the first half of the year. Start at least 8 months ahead.",
      },
      {
        q: "Can I apply to multiple universities at once?",
        a: "Yes, and we recommend it. We help you build a balanced shortlist.",
      },
      {
        q: "What documents do I need to apply?",
        a: "Usually your diploma, transcripts, English certificate, passport and a motivation letter, and sometimes a Dichiarazione di Valore. We give you a personalised checklist.",
      },
      {
        q: "Is there an application fee?",
        a: "Many universities charge one, typically somewhere between €50 and €150 per application. The exact amount is on each university's admissions page.",
      },
      {
        q: "What is the Universitaly portal and how do I use it?",
        a: "It is the official Italian government portal for pre-enrolment by international students. We walk you through it step by step.",
      },
      {
        q: "How competitive is admission to Bocconi or Luiss?",
        a: "Highly competitive. Strong academics, English proficiency and a sharp motivation letter matter most.",
      },
    ],
  },
  {
    id: "programs",
    label: "Programs & Academics",
    icon: "GraduationCap",
    items: [
      {
        q: "Are there bachelor's programs fully taught in English in Italy?",
        a: "Yes. Our Programs page lists English-taught bachelor's degrees that we have checked against each university's official website, across business, engineering, design, law, the sciences and more.",
      },
      {
        q: "How long is a bachelor's degree in Italy?",
        a: "Three years (180 ECTS credits). A few programmes, such as Bocconi's World Bachelor in Business, last four.",
      },
      {
        q: "What is the Italian credit system (CFU)?",
        a: "CFU are the same as ECTS credits. One CFU is about 25 hours of study, and a bachelor's degree is 180 CFU.",
      },
      {
        q: "Can I transfer credits from a previous university?",
        a: "Often yes. Each university evaluates transfers case by case.",
      },
      {
        q: "What is the difference between a public and private Italian university?",
        a: "Public universities have lower, income-based fees, larger classes and a broader range of subjects. Private universities charge higher fees and tend to have smaller classes and a stronger international focus.",
      },
      {
        q: "Is an Italian degree recognised internationally?",
        a: "Yes. Italian degrees follow the European Bologna Process, so they are recognised across the EU and widely accepted elsewhere.",
      },
    ],
  },
  {
    id: "visa",
    label: "Visa & Legal Requirements",
    icon: "Stamp",
    items: [
      {
        q: "What type of visa do I need to study in Italy?",
        a: "Non-EU students need a national Type D student visa. EU citizens do not need a visa.",
      },
      {
        q: "How early should I apply for a student visa?",
        a: "As soon as you receive your admission, and at least 60 days before you plan to travel.",
      },
      {
        q: "What documents are required for a Type D student visa?",
        a: "Typically your admission letter, proof of accommodation, proof of financial means, health insurance and a valid passport. Your consulate publishes the exact list.",
      },
      {
        q: "What is a Dichiarazione di Valore and do I need one?",
        a: "It is a declaration issued by an Italian consulate that describes the value of your diploma. Many public universities ask for it, or for an equivalent statement of comparability.",
      },
      {
        q: "Do I need to legalise or apostille my documents?",
        a: "Usually yes. Depending on your country this is done by apostille or by consular legalisation.",
      },
      {
        q: "What happens to my visa if I fail my first year?",
        a: "Renewing your residence permit requires a minimum number of credits each year. We help you understand the rules so you stay on track.",
      },
      { q: "Can I work in Italy on a student visa?", a: "Yes, part-time: up to 20 hours a week." },
      {
        q: "What is the permesso di soggiorno and how do I get it?",
        a: "It is your residence permit. Non-EU students apply within 8 working days of arriving, starting with a kit from the post office.",
      },
    ],
  },
  {
    id: "costs",
    label: "Costs & Scholarships",
    icon: "PiggyBank",
    items: [
      {
        q: "How much does tuition cost at Italian universities?",
        a: "As a rough guide, public universities charge about €900 to €4,000 a year depending on family income, and private universities about €12,000 to €25,000 a year. Check each university's current fee table.",
      },
      {
        q: "Are there scholarships available for international students?",
        a: "Yes. The main ones are regional DSU scholarships, university merit awards and external funds.",
      },
      {
        q: "What is the DSU scholarship?",
        a: "A regional, needs-based scholarship that can cover tuition, housing and meals.",
      },
      {
        q: "What is ERISU / EDISU and how do I apply?",
        a: "They are regional study-rights bodies that run DSU scholarships and student housing. You apply alongside your admission, before the regional deadline.",
      },
      {
        q: "How much money do I need to show for a student visa application?",
        a: "The minimum is set by the Italian government and updated every year. In recent years it has been roughly €6,500 to €7,000 for an academic year. Confirm the current figure with your consulate.",
      },
      {
        q: "What is the average monthly cost of living in Italy as a student?",
        a: "Roughly €800 to €1,400 a month, depending on the city and how you live. Milan and Rome are at the top of that range.",
      },
      {
        q: "Are there merit-based scholarships at private universities?",
        a: "Yes. Bocconi, Luiss and Cattolica all offer merit awards.",
      },
    ],
  },
  {
    id: "life",
    label: "Life in Italy",
    icon: "Home",
    items: [
      {
        q: "How do I find student accommodation in Italy?",
        a: "Through university housing, regional DSU residences or private rentals. We help you find safe options.",
      },
      {
        q: "What is it like being an international student in Italy?",
        a: "Lively, social and well supported in the main university cities, which all have large international student communities.",
      },
      {
        q: "Do I need to speak Italian to live in Italy?",
        a: "Not to start, but the basics help a lot with daily life. We recommend taking a beginner course.",
      },
      {
        q: "What is the Codice Fiscale and how do I get one?",
        a: "It is your Italian tax code, needed for almost everything from a phone contract to a rental agreement. You apply at the Agenzia delle Entrate.",
      },
      {
        q: "How do I register with the local municipality?",
        a: "You register your residence (residenza) at the local town hall, the comune, once you have your permit and a rental contract.",
      },
      {
        q: "What is the TEAM health card and do international students qualify?",
        a: "The TEAM is the European Health Insurance Card, so EU students can use theirs. Non-EU students can enrol in the Italian national health service (SSN) or take private insurance.",
      },
      {
        q: "Is Italy safe for international students?",
        a: "Generally yes. As in any big city, normal common sense applies, and we brief you on your city before you arrive.",
      },
      {
        q: "What cities are best for international students?",
        a: "Milan, Bologna, Rome, Turin, Padua and Florence are the most popular.",
      },
    ],
  },
  {
    id: "pathwayitalia",
    label: "Working with PathwayItalia",
    icon: "Handshake",
    items: [
      {
        q: "What exactly does PathwayItalia help with?",
        a: "Everything from choosing a university to arriving in Italy: applications, enrolment, visa, scholarships and housing.",
      },
      {
        q: "When should I reach out to PathwayItalia?",
        a: "Ideally 8 to 12 months before your intended start date.",
      },
      {
        q: "Can PathwayItalia guarantee my admission?",
        a: "No one can. What we do is improve your chances with a sound strategy and careful preparation.",
      },
      { q: "Do you help with both public and private universities?", a: "Yes, both." },
      {
        q: "How much do PathwayItalia's services cost?",
        a: "We tailor packages to what you need. Book a free consultation to talk it through.",
      },
      {
        q: "How do I get started?",
        a: "Fill in the short form on the Apply page or book a meeting there, and we will be in touch.",
      },
    ],
  },
];

export const faqCount = faqGroups.reduce((n, g) => n + g.items.length, 0);
