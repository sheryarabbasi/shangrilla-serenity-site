import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: gallery1, alt: "Shangrilla House Bhurban - Elegant seating area with stunning Murree mountain views" },
    { id: 2, src: gallery2, alt: "Luxury guest house bedroom in Bhurban with natural light and modern amenities" },
    { id: 3, src: gallery3, alt: "Charming entrance of holiday home in Bhurban near Murree" },
    { id: 4, src: gallery4, alt: "Beautiful terrace at Shangrilla House with outdoor seating and mountain views" },
    { id: 5, src: gallery5, alt: "Interior design of premium guest house in Bhurban Pakistan" },
    { id: 6, src: gallery6, alt: "Breathtaking Murree and Nathia Gali mountain view from Shangrilla House room" },
    { id: 7, src: gallery7, alt: "Cozy family-friendly bedroom at Bhurban holiday home with comfortable seating" },
    { id: 8, src: gallery8, alt: "Well-appointed luxury bedroom suite in Bhurban guest house near Murree" },
    { id: 9, src: gallery9, alt: "Bright elegant bedroom at Shangrilla House Bhurban vacation rental" },
    { id: 10, src: gallery10, alt: "Spacious terrace with mountain view seating at Shangrilla House Bhurban guest house" },
    { id: 11, src: gallery11, alt: "Panoramic Murree hills view from Shangrilla House Bhurban holiday home" },
    { id: 12, src: gallery12, alt: "Beautiful rainbow over Murree mountains visible from Shangrilla House terrace" },
    { id: 13, src: gallery13, alt: "Stunning mountain vista from covered terrace at Bhurban luxury guest house" },
    { id: 14, src: gallery14, alt: "Golden sunset view over Murree and Nathia Gali from Shangrilla House Bhurban" },
    { id: 15, src: gallery15, alt: "Winter snow scenery near Shangrilla House Bhurban - perfect for snow lovers" },
    { id: 16, src: gallery16, alt: "Night view of Murree hills from Shangrilla House Bhurban vacation rental" },
    { id: 17, src: gallery17, alt: "Peaceful mountain scenery from balcony at Shangrilla House guest house Bhurban" },
    { id: 18, src: gallery18, alt: "Exterior view of Shangrilla House Bhurban - premium holiday home near Murree" }
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Photo Gallery - Shangrilla House Bhurban
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our luxury guest house near Murree with stunning mountain views and modern amenities
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
