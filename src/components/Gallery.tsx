import livingRoom4 from "@/assets/new-gallery/Living_Room_4.png.asset.json";
import livingRoom3 from "@/assets/new-gallery/Living_Room_3.png.asset.json";
import room1 from "@/assets/new-gallery/Room_1.png.asset.json";
import room12 from "@/assets/new-gallery/Room_1.2.png.asset.json";
import room31 from "@/assets/new-gallery/Room_3.1.png.asset.json";
import view1 from "@/assets/new-gallery/View_1.png.asset.json";
import view2 from "@/assets/new-gallery/View_2.png.asset.json";
import view6 from "@/assets/new-gallery/View_6.png.asset.json";
import view10 from "@/assets/new-gallery/View_10.png.asset.json";
import view11 from "@/assets/new-gallery/View_11.png.asset.json";
import view12 from "@/assets/new-gallery/View_12.png.asset.json";
import view15 from "@/assets/new-gallery/View_15.png.asset.json";
import view16 from "@/assets/new-gallery/view_16.png.asset.json";
import view17 from "@/assets/new-gallery/View_17.png.asset.json";
import view18 from "@/assets/new-gallery/View_18.png.asset.json";
import view20 from "@/assets/new-gallery/View_20.png.asset.json";
import view22 from "@/assets/new-gallery/View_22.png.asset.json";
import view23 from "@/assets/new-gallery/View_23.png.asset.json";
import view24 from "@/assets/new-gallery/View_24.png.asset.json";
import room21 from "@/assets/new-gallery/Room_2.1.png.asset.json";

const Gallery = () => {
  const images = [
    { id: 1, src: view6.url, alt: "Exterior view of Shangrilla House Bhurban - premium pagoda-style holiday home near Murree" },
    { id: 2, src: livingRoom4.url, alt: "Spacious living room at Shangrilla House Bhurban with elegant green sofas and wood ceiling" },
    { id: 3, src: livingRoom3.url, alt: "Grand wooden staircase and hall in Bhurban luxury guest house near Murree" },
    { id: 4, src: room1.url, alt: "Cozy master bedroom with king-size bed at Shangrilla House Bhurban" },
    { id: 5, src: room12.url, alt: "Bedroom seating area with tan armchairs at Bhurban family guest house" },
    { id: 6, src: room31.url, alt: "Charming bedroom lounger by the window at Shangrilla House Bhurban" },
    { id: 7, src: view2.url, alt: "Front terrace with outdoor dining at Shangrilla House Bhurban holiday home" },
    { id: 8, src: view1.url, alt: "Breathtaking Murree mountain view from Shangrilla House Bhurban terrace" },
    { id: 9, src: view10.url, alt: "Panoramic Bhurban hills and valley view from Shangrilla House" },
    { id: 10, src: view11.url, alt: "Lush green Bhurban hillside scenery near Shangrilla House guest house" },
    { id: 11, src: room21.url, alt: "Serene bedroom with warm lighting at Shangrilla House Bhurban guest house" },
    { id: 12, src: view22.url, alt: "Open window with Murree mountain view from bedroom at Shangrilla House Bhurban" },
    { id: 13, src: view12.url, alt: "Blooming pink roses in the garden at Shangrilla House Bhurban" },
    { id: 14, src: view16.url, alt: "Vibrant garden with daisies and roses at Shangrilla House Bhurban holiday home" },
    { id: 15, src: view17.url, alt: "Daisy meadow and parking area at Shangrilla House Bhurban guest house" },
    { id: 16, src: view15.url, alt: "Bird perched on pine tree overlooking Bhurban hills near Shangrilla House" },
    { id: 17, src: view18.url, alt: "Peaceful view of Shangrilla House Bhurban surrounded by lush greenery and mountains" },
    { id: 18, src: view20.url, alt: "Starry night sky over Bhurban valley lights from Shangrilla House terrace" },
    { id: 19, src: view23.url, alt: "Moonlit sunset over Murree hills with city lights from Shangrilla House Bhurban" },
    { id: 20, src: view24.url, alt: "Night view of Bhurban valley and mountain lights from Shangrilla House guest house" }
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
