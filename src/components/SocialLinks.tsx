import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepgahlot/",
      description: "Connect with me professionally and view my career journey",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/deepgahlot11",
      description: "Explore my open source projects and contributions",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary section-bg-animation">
      <div className="floating-dots"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <Card key={index} className="p-8 bg-gradient-card shadow-card border-border card-hover transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{link.icon}</span>
                  <h3 className="text-xl font-medium text-foreground">{link.name}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {link.description}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open(link.url, '_blank')}
              >
                Visit {link.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;