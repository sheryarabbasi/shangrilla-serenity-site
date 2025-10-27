import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us in the serene mountains of Bhurban
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Shangrilla House Bhurban<br />
                  Bhurban, Murree<br />
                  Punjab, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">How to Reach</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Located in the heart of Bhurban, easily accessible from major cities. 
                  The scenic mountain route offers breathtaking views along the journey.
                </p>
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  <a 
                    href="https://maps.app.goo.gl/QsLbEqsv2xyTk3JGA?g_st=com.google.maps.preview.copy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-elevated animate-fade-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.4!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiA3M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Shangrilla House Bhurban Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
