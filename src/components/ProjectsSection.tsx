import { ExternalLink, Github, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "THALIR",
    subtitle: "Safety & Empowerment Website",
    description:
      "A social-impact website focused on domestic violence awareness, rescue support, and rehabilitation. Provides job opportunities such as baking, tailoring, candle making, and craft work.",
    tags: ["HTML", "CSS", "JavaScript", "Social Impact"],
    icon: Shield,
    gradient: "from-primary via-cyan-400 to-secondary",
    featured: true,
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Featured Project */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden group ${
                inView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon Section */}
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} p-[2px] group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                        <project.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute -top-2 -right-2 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary font-medium mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-lg border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Highlight */}
                    <div className="glass-card p-4 border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-semibold">Social Impact:</span> This project
                        emphasizes social responsibility, problem-solving, and web development skills
                        to create meaningful change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "5+", label: "Minor Projects" },
            { value: "2", label: "Major Projects" },
            { value: "3", label: "Internships" },
            { value: "100%", label: "Dedication" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
