import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Heart, 
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Residential Design",
    "Interior Design", 
    "Commercial Spaces",
    "3D Visualization",
    "Consultation",
    "Technical Drawing"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold">Hatim Merchant</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional architect with 3+ years of experience in residential and interior design. 
              Creating functional spaces that inspire and endure.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>hatim@domain.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <p className="text-primary-foreground/80 text-sm">
              Ready to start your next project? Get in touch today.
            </p>
            
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full"
                onClick={() => scrollToSection("#contact")}
              >
                Start a Project
              </Button>
              
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/mohsin-jawadwala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a 
                    href="mailto:mohsin@jawadwala.com"
                    aria-label="Send Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-primary-foreground/80">
              <span>© {currentYear} Jawadwala Mohsin Shabbir. Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in Mumbai</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;