import HeroVideoScrub from "@/components/HeroVideoScrub";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import SkillsTicker from "@/components/SkillsTicker";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-pure min-h-screen">
      <Navbar />
      <HeroVideoScrub />
      <About />
      <SkillsTicker />
      <ProjectsShowcase />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
