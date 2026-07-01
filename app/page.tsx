import { GridField } from "@/components/layout/GridField";
import { Grain } from "@/components/layout/Grain";
import { CoordinateReadout } from "@/components/layout/CoordinateReadout";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <GridField />
      <Grain />
      <CoordinateReadout />
      <Header />

      <main id="top">
        <Hero />
        <About />
        <Work />
        <Process />
        <SkillsMarquee />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
