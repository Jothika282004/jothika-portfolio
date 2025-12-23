import { Code, Wrench, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Web",
    color: "primary",
    skills: ["C", "HTML", "CSS", "Python", "Java"],
  },
  {
    icon: Wrench,
    title: "Tools & Productivity",
    color: "secondary",
    skills: ["MS Office", "VS Code", "Git", "Figma"],
  },
  {
    icon: Rocket,
    title: "Development Areas",
    color: "accent",
    skills: ["Web Development", "App Development", "Prompt Engineering", "UI/UX Design"],
  },
];

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass-card p-6 md:p-8 group hover:scale-[1.02] transition-transform duration-300 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.color === "primary"
                      ? "bg-primary/20"
                      : category.color === "secondary"
                      ? "bg-secondary/20"
                      : "bg-accent/20"
                  }`}
                >
                  <category.icon
                    className={`w-6 h-6 ${
                      category.color === "primary"
                        ? "text-primary"
                        : category.color === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : category.color === "secondary"
                        ? "bg-secondary/10 text-secondary hover:bg-secondary/20"
                        : "bg-accent/10 text-accent hover:bg-accent/20"
                    } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${catIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
