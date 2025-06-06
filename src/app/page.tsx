import AskAI from "@/components/common/AskAI";
import Nav from "@/components/common/Nav";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
        <Nav />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <Footer />
        <AskAI />
    </main>
  );
}
