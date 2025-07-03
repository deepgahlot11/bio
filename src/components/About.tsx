const About = () => {
  return (
    <section className="py-20 px-6 bg-background section-bg-animation">
      <div className="floating-dots">
        <div className="dot-1"></div>
        <div className="dot-2"></div>
        <div className="dot-3"></div>
        <div className="dot-4"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-reveal flex items-center justify-center gap-2">
            About Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-primary animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto text-reveal delay-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-reveal delay-2">
            <p className="text-muted-foreground leading-relaxed">
              Adept at leveraging innovative technologies to drive efficiency
              and enhance user experience. Strong communicator with a passion
              for mentoring and fostering collaborative environments. Committed
              to continuous learning and improvement in fast-paced tech
              landscapes.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Experienced in architecting scalable microservices, implementing
              cloud-native solutions, and leading cross-functional teams to
              deliver high-quality products on time.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Passionate about building robust software solutions that solve
              real-world problems and create meaningful impact for users and
              businesses.
            </p>
          </div>

          <div className="bg-gradient-card p-8 rounded-xl shadow-card card-hover text-reveal delay-3">
            <h3 className="text-xl font-medium text-foreground mb-6">
              Core Expertise
            </h3>
            <div className="space-y-4">
              {[
                "Backend Development (Java, Spring Boot, Microservices)",
                "Frontend Development (React, Angular, TypeScript)",
                "Cloud Architecture (AWS, Azure, Kubernetes, Docker)",
                "Data Technologies (PostgreSQL, MySQL, Redis, Elastic Search)",
                "DevOps & Monitoring (Jenkins, Prometheus, Grafana, Sleuth)",
                "Team Leadership & Solution Architecture",
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
