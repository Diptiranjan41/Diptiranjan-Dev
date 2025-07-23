import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ServiceSection } from "@/components/ServiceSection";
import { PricingSection } from "@/components/PricingSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AchievementSection } from "../components/AchievementSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServiceSection />
        <ProjectsSection />
        <AchievementSection />
        <PricingSection />

        
        < ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
