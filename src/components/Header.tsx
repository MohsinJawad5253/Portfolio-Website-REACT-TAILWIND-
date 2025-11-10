import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Experiences",
    href: "#experience"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-width section-padding">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl  text-primary font-bold">Hatim Merchant</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                  {item.name}
                </button>)}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("#contact")}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigation.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                  {item.name}
                </button>)}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full" onClick={() => scrollToSection("#contact")}>
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;