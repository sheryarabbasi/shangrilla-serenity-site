import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: gallery1, alt: "Elegant seating area with mountain view" },
    { id: 2, src: gallery2, alt: "Spacious bedroom with natural light" },
    { id: 3, src: gallery3, alt: "Charming entrance with traditional architecture" },
    { id: 4, src: gallery4, alt: "Beautiful terrace with outdoor seating" },
    { id: 5, src: gallery5, alt: "Interior reflection in decorative mirror" },
    { id: 6, src: gallery6, alt: "Breathtaking mountain view from room" },
    { id: 7, src: gallery7, alt: "Cozy bedroom with comfortable seating" },
    { id: 8, src: gallery8, alt: "Well-appointed bedroom suite" },
    { id: 9, src: gallery9, alt: "Bright bedroom with elegant curtains" }
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful spaces and stunning surroundings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
