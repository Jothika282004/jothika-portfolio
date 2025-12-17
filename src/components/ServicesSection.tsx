import { Globe, Smartphone, Palette, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Designing responsive, modern, and user-friendly websites that capture attention and deliver results.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Developing functional and intuitive applications that provide seamless user experiences.",
    gradient: "from-secondary to-purple-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful interfaces with focus on user experience and modern design principles.",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description:
      "Leveraging AI tools to enhance development workflows and create innovative solutions.",
    gradient: "from-primary to-secondary",
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            With experience across <span className="text-primary">5 minor projects</span> and{" "}
            <span className="text-secondary">2 major projects</span> in web development, I bring
            creative solutions to every challenge.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-6 group hover:scale-105 transition-all duration-500 relative overflow-hidden ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-foreground transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
