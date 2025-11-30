import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Portfolio from "../assets/portfolio.pdf";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero pt-16">
      <div className="container-width section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-architectural-blue font-medium tracking-wide uppercase text-sm">
                Professional Architect
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Architect| Residential & Interior Design Specialist
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I am an architect with over 3 years of experience in residential and interior design, 
                passionate about transforming ideas into functional spaces that inspire and endure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("#portfolio")}
                  className="group"
                >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="architectural"
                size="xl"
                asChild // Add this prop
              >
                <a href={Portfolio} target="_blank" rel='noopener noreferrer'>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-architectural-pink shadow-lifted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-architectural-blue/20 to-architectural-sage/20 flex items-center justify-center">
                  <div className="text-6xl text-architectural-blue/30">💀</div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-xl shadow-elegant"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-architectural-sage rounded-lg shadow-elegant"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;