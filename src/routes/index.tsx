import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { Services } from "@/components/site/Services";
import { WhyItaly } from "@/components/site/WhyItaly";
import { Universities } from "@/components/site/Universities";
import { Programs } from "@/components/site/Programs";
import { Faq } from "@/components/site/Faq";
import { Apply } from "@/components/site/Apply";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PathwayItalia — Your Path to Italy's Finest Universities" },
      { name: "description", content: "PathwayItalia guides international students through enrolling in Italy's top universities — from application to arrival. Led by Sohaib Jehanzeb." },
      { property: "og:title", content: "PathwayItalia — Bachelor's Degrees in Italy" },
      { property: "og:description", content: "Bachelor's degrees at Italy's finest universities — guided from application to arrival." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&family=League+Spartan:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-ivory text-ocean overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyItaly />
      <Universities />
      <Programs />
      <Faq />
      <Apply />
      <Footer />
    </main>
  );
}
