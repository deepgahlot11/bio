import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SocialLinks />
      <Projects />
    </div>
  );
};

export default Index;
