import type { MetaFunction } from "@remix-run/node";
import AboutSection from "~/components/pages/about/sections/AboutSection";
import BreadCrumb from "~/components/BreadCrumb";
import SkillSection from "~/components/pages/about/sections/SkillSection";
import FunFactSection from "~/components/pages/about/sections/FunFactSection";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <>
            <BreadCrumb name="about-me" description="Who am I" />
            <AboutSection />
            <SkillSection />
            <FunFactSection />
        </>
    );
}