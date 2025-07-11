import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-circles"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-card shadow-card border border-border overflow-hidden">
          <img
            src="/bio/deep.jpg"
            alt="Deep Gahlot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight text-reveal">
            Deep Gahlot
          </h1>
          <p className="text-xl md:text-2xl text-primary font-light text-reveal delay-1">
            Software Developer / Architect
          </p>
        </div>

        {/* Brief Introduction */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-reveal delay-2">
          Results-driven technical manager with extensive experience in
          designing, implementing, and managing robust software solutions.
          Proven track record in leading teams and cross-functional teams and
          delivering high-quality products on time. Good in architecting,
          designing AWS based cloud solutions.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center pt-6 text-reveal delay-3">
          <a
            href="/bio/deep_gahlot_resume.pdf"
            download
            className="group transition-all duration-300 hover:shadow-soft"
          >
            <Button variant="default" size="lg" asChild>
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
