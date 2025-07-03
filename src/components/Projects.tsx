import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Company Research AI Platform",
      description:
        "This project is a full-stack AI-driven platform for company research and information extraction. It combines React frontend, Spring Boot backend with JWT-based auth, LangGraph AI agent using FastAPI and Gemini/Tavily APIs, all containerized using Docker and orchestrated via Docker Compose.",
      tech: [
        "React",
        "Java",
        "Spring Boot",
        "Spring Security",
        "Python",
        "LangGraph",
        "AI Agent",
        "PostgreSQL",
        "Docker",
        "Nginx",
        "FastAPI",
        "Gemini",
        "Tavily API",
      ],
      liveUrl: "https://react-frontend-k26s.onrender.com/",
      githubUrl: "https://github.com/deepgahlot11/company_research_platform",
      image: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ai-gradient"
              x1="0"
              y1="0"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563eb" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient
              id="ai-shimmer"
              x1="0"
              y1="0"
              x2="44"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill="url(#ai-gradient)"
            fillOpacity="0.12"
          />
          <text
            x="8"
            y="30"
            fontFamily="'Inter',sans-serif"
            fontWeight="bold"
            fontSize="22"
            fill="url(#ai-gradient)"
          >
            A
          </text>
          <text
            x="25"
            y="30"
            fontFamily="'Inter',sans-serif"
            fontWeight="bold"
            fontSize="22"
            fill="url(#ai-gradient)"
          >
            I
          </text>
          <g>
            <rect
              x="7"
              y="33"
              width="30"
              height="4"
              rx="2"
              fill="url(#ai-shimmer)"
              className="ai-shimmer"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-background section-bg-animation">
      <div className="floating-dots">
        <div className="dot-1"></div>
        <div className="dot-2"></div>
        <div className="dot-3"></div>
        <div className="dot-4"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built, each solving real-world
            problems with modern technology stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-card shadow-card border-border card-hover transition-all duration-300 group"
            >
              <div className="p-8">
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{project.image}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
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
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex-1 group-hover:shadow-soft transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
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
