import { ArrowDown, Eye, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-photo.jpeg";

const RESUME_URL = "/Jothika_Resume.pdf";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border pulse-glow">
              <img
                src={profileAvatar}
                alt="Jothika Gunasekar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute -inset-4 rounded-full border border-secondary/20 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-primary font-medium mb-2 animate-slide-up opacity-0 stagger-1" style={{ animationFillMode: "forwards" }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-slide-up opacity-0 stagger-2" style={{ animationFillMode: "forwards" }}>
              <span className="gradient-text">Jothika</span>{" "}
              <span className="text-foreground">Gunasekar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary font-heading font-semibold mb-6 animate-slide-up opacity-0 stagger-3" style={{ animationFillMode: "forwards" }}>
              Prompt Engineer | Software Developer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-slide-up opacity-0 stagger-4" style={{ animationFillMode: "forwards" }}>
              Passionate about creating innovative websites and apps using modern
              technologies and AI tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up opacity-0 stagger-5" style={{ animationFillMode: "forwards" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  <Eye className="w-5 h-5" />
                  View Portfolio
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
              <Button variant="neon" size="xl" asChild>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
