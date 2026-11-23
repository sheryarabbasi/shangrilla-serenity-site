import livingRoom4 from "@/assets/gallery/Living_Room_4.jpg";
import livingRoom3 from "@/assets/gallery/Living_Room_3.jpg";
import room1 from "@/assets/gallery/Room_1.jpg";
import room12 from "@/assets/gallery/Room_1.2.jpg";
import room31 from "@/assets/gallery/Room_3.1.jpg";
import view1 from "@/assets/gallery/View_1.jpg";
import view2 from "@/assets/gallery/View_2.jpg";
import view6 from "@/assets/gallery/View_6.jpg";
import view10 from "@/assets/gallery/View_10.jpg";
import view11 from "@/assets/gallery/View_11.jpg";
import view12 from "@/assets/gallery/View_12.jpg";
import view15 from "@/assets/gallery/View_15.jpg";
import view16 from "@/assets/gallery/view_16.jpg";
import view17 from "@/assets/gallery/View_17.jpg";
import view18 from "@/assets/gallery/View_18.jpg";
import view20 from "@/assets/gallery/View_20.jpg";
import view22 from "@/assets/gallery/View_22.jpg";
import view23 from "@/assets/gallery/View_23.jpg";
import view24 from "@/assets/gallery/View_24.jpg";
import room21 from "@/assets/gallery/Room_2.1.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: view6, alt: "Exterior view of Shangrilla House Bhurban - premium pagoda-style holiday home near Murree" },
    { id: 2, src: livingRoom4, alt: "Spacious living room at Shangrilla House Bhurban with elegant green sofas and wood ceiling" },
    { id: 3, src: livingRoom3, alt: "Grand wooden staircase and hall in Bhurban luxury guest house near Murree" },
    { id: 4, src: room1, alt: "Cozy master bedroom with king-size bed at Shangrilla House Bhurban" },
    { id: 5, src: room12, alt: "Bedroom seating area with tan armchairs at Bhurban family guest house" },
    { id: 6, src: room31, alt: "Charming bedroom lounger by the window at Shangrilla House Bhurban" },
    { id: 7, src: view2, alt: "Front terrace with outdoor dining at Shangrilla House Bhurban holiday home" },
    { id: 8, src: view1, alt: "Breathtaking Murree mountain view from Shangrilla House Bhurban terrace" },
    { id: 9, src: view10, alt: "Panoramic Bhurban hills and valley view from Shangrilla House" },
    { id: 10, src: view11, alt: "Lush green Bhurban hillside scenery near Shangrilla House guest house" },
    { id: 11, src: room21, alt: "Serene bedroom with warm lighting at Shangrilla House Bhurban guest house" },
    { id: 12, src: view22, alt: "Open window with Murree mountain view from bedroom at Shangrilla House Bhurban" },
    { id: 13, src: view12, alt: "Blooming pink roses in the garden at Shangrilla House Bhurban" },
    { id: 14, src: view16, alt: "Vibrant garden with daisies and roses at Shangrilla House Bhurban holiday home" },
    { id: 15, src: view17, alt: "Daisy meadow and parking area at Shangrilla House Bhurban guest house" },
    { id: 16, src: view15, alt: "Bird perched on pine tree overlooking Bhurban hills near Shangrilla House" },
    { id: 17, src: view18, alt: "Peaceful view of Shangrilla House Bhurban surrounded by lush greenery and mountains" },
    { id: 18, src: view20, alt: "Starry night sky over Bhurban valley lights from Shangrilla House terrace" },
    { id: 19, src: view23, alt: "Moonlit sunset over Murree hills with city lights from Shangrilla House Bhurban" },
    { id: 20, src: view24, alt: "Night view of Bhurban valley and mountain lights from Shangrilla House guest house" }
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
