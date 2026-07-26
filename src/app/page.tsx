import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";
import { CareerJourney } from "@/components/career/CareerJourney";
import { SkillTree } from "@/components/skills/SkillTree";
import { Projects } from "@/components/projects/Projects";
import { GitHubPanel } from "@/components/github/GitHubPanel";
import { Achievements } from "@/components/achievements/Achievements";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CareerJourney />
      <SkillTree />
      <Projects />
      <GitHubPanel />
      <Achievements />
      <Contact />
    </>
  );
}
