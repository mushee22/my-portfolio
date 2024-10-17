import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/layout/Footer";
import NavBar from "~/components/layout/NavBar";
import AboutSection from "~/components/sections/AboutSection";
import ContactSection from "~/components/sections/ContactSection";

import HeroSection from "~/components/sections/HeroSection";
import Projects from "~/components/sections/Projects";
import Quote from "~/components/sections/Quote";
import SkillSection from "~/components/sections/SkillSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Protfolio" },
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


