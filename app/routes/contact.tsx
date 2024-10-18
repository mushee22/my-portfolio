import type { MetaFunction } from "@remix-run/node";
import BreadCrumb from "~/components/BreadCrumb";
import ContactSection from "~/components/pages/contact/sections/ContactSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <BreadCrumb name="contacts" description="Who am I"/>
      <ContactSection/>
    </>
  );
}