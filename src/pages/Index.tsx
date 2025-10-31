import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Amenities from "@/components/Amenities";
import Rules from "@/components/Rules";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <VideoGallery />
      <Amenities />
      <Rules />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
