import { Trophy, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import achievementImage from "@/assets/achievement-ideation.jpeg";

const achievements = [
  {
    image: achievementImage,
    title: "IDEATION Contest - 1st Prize",
    organization: "SRM TRP Engineering College",
    year: "2025",
    description: "Participated in the IDEATION contest and won 1st prize with a cash award at the Chairman - Student Achievers Meet.",
  },
];

const AchievementsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">
              Achievements
            </h2>
            <Trophy className="w-8 h-8 text-accent" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments throughout my academic journey.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Achievement Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  {/* Decorative Stars */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Star className="w-6 h-6 text-primary fill-primary animate-pulse" />
                    <Star className="w-5 h-5 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <Star className="w-4 h-4 text-secondary fill-secondary animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary mb-4">
                    {achievement.year}
                  </span>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {achievement.description}
                  </p>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden rounded-tl-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-secondary/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
