import type { MetaFunction } from "@remix-run/node";
import AboutSection from "~/components/pages/home/sections/AboutSection";
import ContactSection from "~/components/pages/home/sections/ContactSection";

import HeroSection from "~/components/pages/home/sections/HeroSection";
import Projects from "~/components/pages/home/sections/Projects";
import Quote from "~/components/pages/home/sections/Quote";
import SkillSection from "~/components/pages/home/sections/SkillSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroSection />
      <Quote />
      <Projects />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}


