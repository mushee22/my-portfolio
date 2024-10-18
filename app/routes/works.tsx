import type { MetaFunction } from "@remix-run/node";
import AboutSection from "~/components/pages/about/sections/AboutSection";
import BreadCrumb from "~/components/BreadCrumb";
import SkillSection from "~/components/pages/about/sections/SkillSection";
import FunFactSection from "~/components/pages/about/sections/FunFactSection";
import CompletedProjectSection from "~/components/pages/project/sections/CompletedProjectSection";
import SmallProjectsListSection from "~/components/pages/project/sections/SmallProjectsListSection";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <>
            <BreadCrumb name="projects" description="Who am I" />
            <CompletedProjectSection />
            <SmallProjectsListSection />
        </>
    );
}