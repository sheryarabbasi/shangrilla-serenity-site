import { Home, Users, Mountain } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Home,
      title: "Comfortable Accommodation",
      description: "Well-appointed rooms designed for your comfort and relaxation"
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Perfect for families seeking quality time together in a peaceful setting"
    },
    {
      icon: Mountain,
      title: "Scenic Location",
      description: "Nestled in the beautiful mountains of Bhurban with breathtaking views"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Welcome to Shangrilla House
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a haven of peace and tranquility where families come together to create 
            unforgettable memories. Our guest house offers the perfect blend of comfort, 
            serenity, and natural beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
