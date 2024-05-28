import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PastProjects from "@/components/PastProjects";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiu Studios - Scale your business with Software",
  description: "We specialize in transforming your vision into reality with our innovative software solutions. Whether you're a startup looking to make a mark or an established business aiming to scale new heights, our expert team is here to handle the technical complexities while you focus on driving your success.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <PastProjects />
      <Faq />
      <Team />
      <Contact />
      <Clients />
    </main>
  );
}
