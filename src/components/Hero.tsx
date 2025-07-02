import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-card shadow-card border border-border flex items-center justify-center text-4xl font-light text-primary">
          JD
        </div>
        
        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-primary font-light">
            Senior Full Stack Developer
          </p>
        </div>
        
        {/* Brief Introduction */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about creating elegant solutions with modern web technologies. 
          Over 8 years of experience building scalable applications and leading development teams.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            variant="default" 
            size="lg"
            className="group transition-all duration-300 hover:shadow-soft"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="transition-all duration-300 hover:shadow-soft"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;