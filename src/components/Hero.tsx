import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Shangrilla House Bhurban
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-light">
          A Serene Retreat for Families
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto opacity-90">
          Experience tranquility in the heart of nature's embrace
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg"
            variant="default"
            onClick={() => scrollToSection('contact')}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth shadow-elevated text-lg px-8 py-6"
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('gallery')}
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-smooth text-lg px-8 py-6"
          >
            View Gallery
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/90">
          <a 
            href="https://maps.app.goo.gl/QsLbEqsv2xyTk3JGA?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
          >
            <MapPin className="w-5 h-5" />
            <span>Bhurban, Pakistan</span>
          </a>
          <a 
            href="tel:+92XXXXXXXXXX"
            className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
