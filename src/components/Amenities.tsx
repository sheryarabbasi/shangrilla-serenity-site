import { Bed, Bath, UtensilsCrossed, Sun, Tv, Zap, UserCheck, Car, Snowflake, Home } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Bed, name: "3 Bedrooms + Living Room" },
    { icon: Bath, name: "2 Full Bathrooms" },
    { icon: UtensilsCrossed, name: "Fully Functional Kitchen" },
    { icon: Sun, name: "Front & Back Terraces" },
    { icon: Home, name: "Built on 1 Kanal" },
    { icon: Tv, name: "TV & Entertainment" },
    { icon: Snowflake, name: "Hot Water & Heaters" },
    { icon: Zap, name: "UPS Backup Power" },
    { icon: UserCheck, name: "24/7 Caretaker" },
    { icon: Car, name: "Huge Parking Space" }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-smooth">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-medium text-center text-card-foreground leading-tight">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-card shadow-soft">
            <h3 className="text-2xl font-semibold mb-6 text-center text-card-foreground">Complete Features List</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Fridge, Microwave, Stove & Full Utensils</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Scenic Views from Both Terraces</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Constructed Over 1 Kanal in Heart of Bhurban</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">TV Entertainment System</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Hot Water Available 24/7</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Room Heaters for Cold Weather</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">UPS Backup for Uninterrupted Power</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">24/7 On-Site Caretaker Service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Huge Dedicated Parking Space</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Family-Friendly Environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
