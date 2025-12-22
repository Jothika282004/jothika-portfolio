import { Award, ExternalLink, Calendar } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const certifications = [
  {
    title: "Add Your Certification",
    issuer: "Issuing Organization",
    date: "Month Year",
    credentialUrl: "#",
    description: "Brief description of the certification.",
  },
  {
    title: "Add Another Certification",
    issuer: "Issuing Organization",
    date: "Month Year",
    credentialUrl: "#",
    description: "Brief description of the certification.",
  },
];

const CertificationsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">
              Certifications
            </h2>
            <Award className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my skills.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  {/* View Credential Link */}
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Message */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <p className="text-muted-foreground/60 text-sm italic">
            Update this section with your actual certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
