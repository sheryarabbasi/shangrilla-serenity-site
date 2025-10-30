import { Cigarette, Users, Sofa, Wrench, Sparkles, HeartHandshake } from "lucide-react";

const Rules = () => {
  const rules = [
    {
      icon: Users,
      title: "Families Only",
      description: "Only families are allowed. No bachelors or all-male groups."
    },
    {
      icon: Cigarette,
      title: "No Smoking Indoors",
      description: "Smoking is strictly prohibited inside the rooms."
    },
    {
      icon: Sofa,
      title: "Furniture Care",
      description: "Please don't drag furniture as it may damage the floor."
    },
    {
      icon: Wrench,
      title: "Report Damages",
      description: "Any damage must be reported to management immediately."
    },
    {
      icon: Sparkles,
      title: "Cleanliness",
      description: "Please keep the place clean as it was handed over to you."
    },
    {
      icon: HeartHandshake,
      title: "Respect Privacy",
      description: "Respect neighbors' privacy - family-friendly environment maintained."
    }
  ];

  return (
    <section id="rules" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            House Rules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please respect these guidelines to ensure a pleasant stay for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <rule.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Following these simple rules helps us maintain a peaceful and welcoming environment for all our guests. Thank you for your cooperation! 🌄
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;
