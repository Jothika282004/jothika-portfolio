import { GraduationCap, Sparkles, Lightbulb, Heart } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}>
            <p className="text-primary font-medium mb-2">Get To Know</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Card */}
            <div className={`glass-card p-8 ${inView ? "animate-slide-in-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-heading font-semibold text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a <span className="text-primary">Prompt Engineer</span> and{" "}
                <span className="text-secondary">Software Developer</span> with a
                strong interest in prompting, web technologies, and application
                development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am passionate about creating modern websites and apps that solve
                real-world problems and deliver meaningful user experiences.
              </p>
            </div>

            {/* Education Card */}
            <div className={`glass-card p-8 ${inView ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">
                    B.E. Computer Science and Engineering
                  </h4>
                  <p className="text-muted-foreground">SRM TRP Engineering College</p>
                  <p className="text-sm text-primary">Expected Graduation: 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Traits */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Lightbulb, title: "Curiosity", desc: "Always eager to learn new technologies" },
              { icon: Heart, title: "Passion", desc: "Love for creating meaningful solutions" },
              { icon: Sparkles, title: "Creativity", desc: "Thinking outside the box" },
            ].map((trait, index) => (
              <div
                key={trait.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <trait.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {trait.title}
                </h4>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
