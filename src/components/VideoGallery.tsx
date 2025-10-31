const VideoGallery = () => {
  const videos = [
    { id: 1, src: "/videos/view-1.mp4", title: "Stunning Murree mountain view from Shangrilla House Bhurban terrace" },
    { id: 2, src: "/videos/view-2.mp4", title: "Panoramic Nathia Gali hills view from luxury guest house Bhurban" },
    { id: 3, src: "/videos/view-3.mp4", title: "Beautiful mountain scenery from Shangrilla House Bhurban holiday home" },
    { id: 4, src: "/videos/view-4.mp4", title: "Breathtaking valley view from Bhurban vacation rental near Murree" },
    { id: 5, src: "/videos/view-5.mp4", title: "Scenic Murree and Bhurban landscape from Shangrilla House terrace" },
    { id: 6, src: "/videos/view-6.mp4", title: "Mountain vista from premium guest house in Bhurban Pakistan" },
    { id: 7, src: "/videos/view-7.mp4", title: "Peaceful mountain view from Shangrilla House Bhurban balcony" },
    { id: 8, src: "/videos/view-8.mp4", title: "Spectacular Murree hills view from luxury holiday home Bhurban" },
    { id: 9, src: "/videos/view-9.mp4", title: "Amazing Nathia Gali mountain view from Shangrilla House guest house" },
    { id: 10, src: "/videos/view-10.mp4", title: "Gorgeous mountain landscape from Bhurban vacation rental terrace" }
  ];

  return (
    <section id="video-gallery" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Video Gallery - Breathtaking Mountain Views
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the stunning panoramic views of Murree, Bhurban, and Nathia Gali from Shangrilla House
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <video 
                src={video.src}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label={video.title}
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-smooth">
                <p className="text-background text-sm font-medium">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
