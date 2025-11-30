import { Heart, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground/70">
            <span>© {currentYear} Mahmoud's Portfolio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-foreground/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>by mahmoud :)</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex gap-4 ml-4">
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
