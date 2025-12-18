import { Trophy, Award, Medal, Star, Crown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const honours = [
  {
    icon: Trophy,
    title: "Add Your Award Title",
    organization: "Issuing Organization",
    year: "Year",
    description: "Brief description of the award and achievement.",
  },
  {
    icon: Award,
    title: "Add Your Achievement",
    organization: "Issuing Organization",
    year: "Year",
    description: "Brief description of the achievement.",
  },
  {
    icon: Medal,
    title: "Add Your Recognition",
    organization: "Issuing Organization",
    year: "Year",
    description: "Brief description of the recognition.",
  },
];

const HonoursSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="honours" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">
              Honours & Awards
            </h2>
            <Crown className="w-8 h-8 text-accent" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and achievements throughout my academic and professional journey.
          </p>
        </div>

        {/* Honours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {honours.map((honour, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <honour.icon className="w-8 h-8 text-accent" />
                  </div>
                  {/* Decorative Star */}
                  <Star className="absolute -top-2 -right-2 w-5 h-5 text-primary fill-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {honour.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {honour.organization}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary mb-3">
                    {honour.year}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {honour.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Message */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <p className="text-muted-foreground/60 text-sm italic">
            Update this section with your actual honours and awards
          </p>
        </div>
      </div>
    </section>
  );
};

export default HonoursSection;
