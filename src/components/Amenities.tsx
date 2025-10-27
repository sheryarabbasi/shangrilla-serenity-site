import { Wifi, Coffee, Car, Wind, Utensils, Shield } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Coffee, name: "Complimentary Breakfast" },
    { icon: Car, name: "Free Parking" },
    { icon: Wind, name: "Air Conditioning" },
    { icon: Utensils, name: "Dining Services" },
    { icon: Shield, name: "24/7 Security" }
  ];

  return (
    <section id="amenities" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <amenity.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-center text-card-foreground">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
