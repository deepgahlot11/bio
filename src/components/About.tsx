const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for clean, 
              efficient code. My journey in software development has taken me through various industries, 
              from startups to enterprise-level applications.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I specialize in modern web technologies including React, Node.js, TypeScript, and cloud 
              architecture. I believe in writing code that not only works but is maintainable, scalable, 
              and delightful to use.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-xl shadow-card">
            <h3 className="text-xl font-medium text-foreground mb-6">Core Expertise</h3>
            <div className="space-y-4">
              {[
                'Frontend Development (React, TypeScript, Next.js)',
                'Backend Development (Node.js, Python, PostgreSQL)',
                'Cloud Architecture (AWS, Docker, Kubernetes)',
                'Team Leadership & Mentoring',
                'Product Strategy & Planning'
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