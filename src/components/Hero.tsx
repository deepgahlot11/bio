import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-card shadow-card border border-border flex items-center justify-center text-4xl font-light text-primary">
          DG
        </div>
        
        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            Deep Gahlot
          </h1>
          <p className="text-xl md:text-2xl text-primary font-light">
            Software Developer/Engineering Manager/Solution Architect
          </p>
        </div>
        
        {/* Brief Introduction */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Results-driven technical manager with extensive experience in designing, implementing, and managing robust software solutions. Proven track record in leading teams and cross-functional teams and delivering high-quality products on time. Good in architecting, designing AWS based cloud solutions.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center items-center pt-6">
          <Button 
            variant="default" 
            size="lg"
            className="group transition-all duration-300 hover:shadow-soft"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;