const Gallery = () => {
  // Placeholder for gallery images - will be updated with user's uploaded images
  const images = [
    { id: 1, alt: "Guest house exterior view" },
    { id: 2, alt: "Comfortable bedroom" },
    { id: 3, alt: "Mountain scenery" },
    { id: 4, alt: "Dining area" },
    { id: 5, alt: "Garden view" },
    { id: 6, alt: "Living room" }
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
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground">
                    {image.alt}
                  </p>
                  <p className="text-sm text-muted-foreground/60 mt-2">
                    Image {image.id}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            * Gallery images will be added from your uploaded photos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
