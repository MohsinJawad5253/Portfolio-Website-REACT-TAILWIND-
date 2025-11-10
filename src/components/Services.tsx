import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Palette, 
  Building2, 
  Ruler, 
  Eye, 
  FileText,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete architectural design solutions for homes, from concept to completion. Creating spaces that reflect your lifestyle and vision.",
      features: [
        "Custom home design",
        "Renovation planning",
        "Space optimization",
        "Building permits assistance"
      ],
      color: "architectural-pink"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Transform your interiors with thoughtful design that combines aesthetics with functionality for every room.",
      features: [
        "Space planning",
        "Material selection",
        "Furniture layout",
        "Color consultation"
      ],
      color: "architectural-sage"
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Professional design services for offices, retail spaces, and commercial buildings that enhance productivity and brand image.",
      features: [
        "Office planning",
        "Retail design",
        "Commercial renovations",
        "Compliance consulting"
      ],
      color: "accent"
    },
    {
      icon: FileText,
      title: "Consultation Services",
      description: "Expert architectural consultation for project planning, feasibility studies, and design reviews.",
      features: [
        "Design review",
        "Feasibility studies",
        "Code compliance",
        "Cost estimation"
      ],
      color: "muted"
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "Bring your projects to life with realistic 3D renderings and virtual walkthroughs before construction begins.",
      features: [
        "Photorealistic renders",
        "Virtual walkthroughs",
        "Design presentations",
        "Material visualization"
      ],
      color: "architectural-pink"
    },
    {
      icon: Ruler,
      title: "Technical Drawing",
      description: "Precise architectural drawings and construction documentation for seamless project execution.",
      features: [
        "Construction drawings",
        "Technical details",
        "As-built documentation",
        "CAD services"
      ],
      color: "architectural-sage"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Services Offered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive architectural and design services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 shadow-elegant hover:shadow-lifted transition-all duration-300 group cursor-pointer">
              <div className="space-y-6">
                {/* Icon */}
                <div className={`p-4 bg-${service.color} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-architectural-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-architectural-pink transition-colors duration-300"
                  onClick={() => scrollToSection("#contact")}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              My Design Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure your project is completed on time, within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your vision, requirements, and project goals"
              },
              {
                step: "02", 
                title: "Design Development",
                description: "Creating initial concepts and design proposals for review"
              },
              {
                step: "03",
                title: "Refinement",
                description: "Incorporating feedback and finalizing the design details"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Providing complete documentation and project support"
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-architectural-pink rounded-full flex items-center justify-center mx-auto shadow-elegant">
                  <span className="text-xl font-bold text-primary">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-primary">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;