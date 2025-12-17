import { Code, Wrench, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Web",
    color: "primary",
    skills: [
      { name: "C", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Productivity",
    color: "secondary",
    skills: [
      { name: "MS Office", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Git", level: 70 },
      { name: "Figma", level: 60 },
    ],
  },
  {
    icon: Rocket,
    title: "Development Areas",
    color: "accent",
    skills: [
      { name: "Web Development", level: 85 },
      { name: "App Development", level: 70 },
      { name: "Prompt Engineering", level: 90 },
      { name: "UI/UX Design", level: 65 },
    ],
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          category.color === "primary"
                            ? "bg-gradient-to-r from-primary to-primary/60"
                            : category.color === "secondary"
                            ? "bg-gradient-to-r from-secondary to-secondary/60"
                            : "bg-gradient-to-r from-accent to-accent/60"
                        }`}
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
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
