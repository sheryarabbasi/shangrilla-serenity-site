import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Shangrilla House</h3>
            <p className="text-background/80 leading-relaxed">
              A serene retreat nestled in the beautiful mountains of Bhurban, 
              perfect for families seeking peace and tranquility.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-background transition-smooth">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-background/80 hover:text-background transition-smooth">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="text-background/80 hover:text-background transition-smooth">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+923175622550" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>+92 317 5622550</span>
              </a>
              <a 
                href="mailto:info@shangrillahouse.com" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>info@shangrillahouse.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>© {currentYear} Shangrilla House Bhurban. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
