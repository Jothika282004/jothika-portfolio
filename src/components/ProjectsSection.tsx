import { Heart, Shield, Stethoscope, Mic, Moon, Train, Baby, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Rail Fence project images
import railfenceWeather from "@/assets/railfence-weather.png";
import railfenceMap from "@/assets/railfence-map.png";
import railfenceMetrics from "@/assets/railfence-metrics.png";
import railfenceTracking from "@/assets/railfence-tracking.png";

const railFenceImages = [
  { src: railfenceWeather, caption: "Railway Weather Map" },
  { src: railfenceMap, caption: "Railway Map Indication" },
  { src: railfenceMetrics, caption: "Key Metrics & Train Schedules" },
  { src: railfenceTracking, caption: "Live Train Tracking" },
];

const minorProjects = [
  {
    title: "THALIR",
    subtitle: "Safety & Empowerment Website",
    description:
      "A social-impact website focused on domestic violence awareness, rescue support, and rehabilitation. Provides financial help through job opportunities like tailoring, craftwork, and candle making.",
    tags: ["HTML", "CSS", "JavaScript", "Social Impact"],
    icon: Shield,
    gradient: "from-primary via-cyan-400 to-secondary",
  },
  {
    title: "DOCTOR FREE",
    subtitle: "Medical Consultancy Platform",
    description:
      "A healthcare website where people can get doctor consultations and medical advice. Users can also order medicines directly through the platform.",
    tags: ["Web Development", "Healthcare", "E-commerce"],
    icon: Stethoscope,
    gradient: "from-secondary via-purple-400 to-accent",
  },
  {
    title: "VOXCRAFT",
    subtitle: "Voice Customizable AI Chatbot",
    description:
      "An AI-powered chatbot with voice customization capabilities. Users can change the chatbot's voice according to their input voice preferences.",
    tags: ["AI", "Voice Recognition", "Chatbot", "Python"],
    icon: Mic,
    gradient: "from-accent via-pink-400 to-primary",
  },
  {
    title: "DROWSY COUNT",
    subtitle: "Sleep Cycle Detector",
    description:
      "A health-focused application that detects sleep cycles and suggests optimal sleep timing based on health recommendations.",
    tags: ["Health Tech", "Python", "Machine Learning"],
    icon: Moon,
    gradient: "from-cyan-400 via-primary to-secondary",
  },
];

const majorProjects = [
  {
    title: "RAIL FENCE",
    subtitle: "Smart Railway Monitoring System",
    description:
      "An intelligent system that senses level crossing gates, generates automatic signals, monitors railway tracks, and suggests the best alternate paths similar to Google Maps navigation.",
    tags: ["IoT", "Sensors", "Navigation", "Automation"],
    icon: Train,
    gradient: "from-primary via-secondary to-accent",
    featured: true,
    hasGallery: true,
  },
  {
    title: "LULLU CARE",
    subtitle: "Infant Care Kit",
    description:
      "A comprehensive infant care kit equipped with camera and microphone to monitor and take care of babies. Provides real-time monitoring and alerts for parents.",
    tags: ["IoT", "Camera", "Audio", "Baby Care"],
    icon: Baby,
    gradient: "from-accent via-primary to-cyan-400",
    featured: true,
    hasGallery: false,
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % railFenceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + railFenceImages.length) % railFenceImages.length);
  };

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

        {/* Major Projects */}
        <div className={`mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            <span className="gradient-text">Major Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {majorProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-[2px] group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}
                    >
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xl font-heading font-bold gradient-text">
                          {project.title}
                        </h4>
                        <div className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-bold rounded-full flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          Major
                        </div>
                      </div>
                      <p className="text-secondary font-medium text-sm mb-2">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Gallery for Rail Fence */}
                      {project.hasGallery && (
                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground mb-3">Project Screenshots:</p>
                          <div className="grid grid-cols-4 gap-2">
                            {railFenceImages.map((image, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => {
                                  setCurrentImageIndex(imgIndex);
                                  setGalleryOpen(true);
                                }}
                                className="aspect-video rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105"
                              >
                                <img
                                  src={image.src}
                                  alt={image.caption}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minor Projects */}
        <div className={`${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            <span className="gradient-text">Minor Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {minorProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} p-[2px] group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}
                    >
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold gradient-text mb-1">
                        {project.title}
                      </h4>
                      <p className="text-secondary font-medium text-sm mb-2">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "4", label: "Minor Projects" },
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

      {/* Image Gallery Dialog */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden">
          <DialogTitle className="sr-only">Rail Fence Project Screenshots</DialogTitle>
          <div className="relative">
            <img
              src={railFenceImages[currentImageIndex].src}
              alt={railFenceImages[currentImageIndex].caption}
              className="w-full h-auto"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-foreground font-medium text-center">
                {railFenceImages[currentImageIndex].caption}
              </p>
              <p className="text-muted-foreground text-sm text-center mt-1">
                {currentImageIndex + 1} / {railFenceImages.length}
              </p>
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 p-4 bg-muted">
            {railFenceImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? "border-primary scale-110"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
