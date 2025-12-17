import { Briefcase, Award, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    title: "Full Stack Development Internship",
    icon: Briefcase,
    description:
      "Gained hands-on experience in building complete web applications using modern frameworks and technologies.",
    skills: ["React", "Node.js", "Database Management"],
  },
  {
    title: "Cybersecurity Internship",
    icon: Award,
    description:
      "Learned security fundamentals, vulnerability assessment, and best practices for secure application development.",
    skills: ["Security Auditing", "Ethical Hacking", "Network Security"],
  },
  {
    title: "AI Tools Internship",
    icon: BookOpen,
    description:
      "Explored AI-powered development tools and learned to leverage them for efficient software development.",
    skills: ["Prompt Engineering", "AI Integration", "Automation"],
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Experience & <span className="gradient-text">Training</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            As a fresher, I've focused on building strong foundations through
            meaningful internships and training programs.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  inView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background pulse-glow" />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"
                  }`}
                >
                  <div
                    className={`glass-card p-6 inline-block w-full hover:scale-[1.02] transition-transform duration-300 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
