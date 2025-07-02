import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/johndoe/taskapp",
      image: "📋"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard that aggregates weather data from multiple APIs and provides insightful analytics with interactive charts.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      image: "🌤️"
    },
    {
      title: "Social Media Scheduler",
      description: "An automated social media posting tool with content calendar, analytics tracking, and multi-platform support for businesses.",
      tech: ["Vue.js", "Express.js", "MongoDB", "Redis"],
      liveUrl: "https://social-scheduler.com",
      githubUrl: "https://github.com/johndoe/social-scheduler",
      image: "📱"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built, each solving real-world problems with modern technology stacks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card shadow-card border-border hover:shadow-soft transition-all duration-300 group">
              <div className="p-8">
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{project.image}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Project Details */}
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1 group-hover:shadow-soft transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;