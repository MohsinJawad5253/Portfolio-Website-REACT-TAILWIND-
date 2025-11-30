import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Square,
  Home,
  Building
} from "lucide-react";
import lodhaImage from "@/assets/lodha-luxury-residence.avif";
import villaImage from "@/assets/contemporary-villa-design.avif";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Lodha Luxury Residence",
      category: "Residential",
      type: "High-end Residential",
      client: "Lodha Group",
      location: "Mumbai, India",
      year: "2023",
      duration: "8 months",
      area: "3,500 sq ft",
      status: "Completed",
      description: "A luxurious residential project featuring modern architectural elements with sustainable design principles. The project emphasizes open spaces, natural lighting, and premium materials throughout.",
      features: [
        "Sustainable design principles",
        "Smart home integration",
        "Premium material selection",
        "Landscape integration",
        "Energy-efficient systems"
      ],
      role: "Lead Architect",
      responsibilities: [
        "Complete architectural design from concept to completion",
        "Client consultation and requirement analysis",
        "Construction documentation and supervision",
        "Coordination with interior designers and contractors"
      ],
      tags: ["Residential", "Luxury", "Sustainable", "Modern"]
    },
    {
      id: 2,
      title: "Contemporary Villa Design",
      category: "Residential",
      type: "Private Villa",
      client: "Private Client",
      location: "Pune, India",
      year: "2023",
      duration: "6 months",
      area: "4,200 sq ft",
      status: "Under Construction",
      description: "A contemporary villa design that seamlessly blends indoor and outdoor living spaces. Features include a minimalist aesthetic with emphasis on natural materials and panoramic views.",
      features: [
        "Open floor plan design",
        "Floor-to-ceiling windows",
        "Outdoor entertainment area",
        "Modern kitchen design",
        "Master suite with private terrace"
      ],
      role: "Project Architect",
      responsibilities: [
        "Architectural design and planning",
        "Site analysis and environmental considerations",
        "Building permit coordination",
        "Construction administration"
      ],
      tags: ["Contemporary", "Villa", "Open Plan", "Natural Materials"]
    },
    {
      id: 3,
      title: "Urban Apartment Renovation",
      category: "Interior Design",
      type: "Apartment Renovation",
      client: "Private Client",
      location: "Mumbai, India",
      year: "2022",
      duration: "4 months",
      area: "1,800 sq ft",
      status: "Completed",
      description: "Complete renovation of a urban apartment focusing on space optimization and modern interior design. The project transformed a dated space into a contemporary living environment.",
      features: [
        "Space optimization",
        "Modern lighting design",
        "Custom built-in storage",
        "Open kitchen concept",
        "Smart storage solutions"
      ],
      role: "Interior Designer",
      responsibilities: [
        "Interior design and space planning",
        "Material and finish selection",
        "Furniture and lighting design",
        "Project coordination and execution"
      ],
      tags: ["Interior", "Renovation", "Urban", "Space Optimization"]
    },
    {
      id: 4,
      title: "Commercial Office Design",
      category: "Commercial",
      type: "Office Space",
      client: "Tech Startup",
      location: "Bangalore, India",
      year: "2022",
      duration: "5 months",
      area: "2,500 sq ft",
      status: "Completed",
      description: "Modern office design for a growing tech startup. Focus on collaborative spaces, flexible work areas, and brand identity integration throughout the space.",
      features: [
        "Collaborative work spaces",
        "Flexible meeting rooms",
        "Brand integration",
        "Ergonomic design",
        "Natural lighting optimization"
      ],
      role: "Commercial Designer",
      responsibilities: [
        "Space planning and layout design",
        "Brand identity integration",
        "Furniture specification",
        "Project management and execution"
      ],
      tags: ["Commercial", "Office", "Modern", "Collaborative"]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Residential":
        return Home;
      case "Commercial":
        return Building;
      case "Interior Design":
        return Square;
      default:
        return Home;
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent architectural and design projects that demonstrate creativity, functionality, and attention to detail
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);

            return (
              <Card key={project.id} className="overflow-hidden shadow-elegant hover:shadow-lifted transition-all duration-300 group">
                {/* Project Image */}
                <div className="h-64 relative overflow-hidden">
                  {project.id === 1 ? (
                    <img
                      src={lodhaImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : project.id === 2 ? (
                    <img
                      src={villaImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-architectural-blue/20 to-architectural-sage/20"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-background/90">
                        {project.category}
                      </Badge>
                      <Badge
                        variant={project.status === "Completed" ? "default" : "outline"}
                        className={project.status === "Completed" ? "bg-green-600 text-white" : "bg-orange-100 text-orange-800"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-architectural-pink rounded-lg">
                          <CategoryIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-architectural-blue transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{project.type}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Client:</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Area:</span>
                      <span className="font-medium">{project.area}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Role & Responsibilities */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-primary">My Role:</h4>
                      <Badge variant="outline" className="bg-architectural-sage">
                        {project.role}
                      </Badge>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="architectural"
                    className="w-full group"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Discuss Similar Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "50+", icon: "🏆" },
            { label: "Happy Clients", value: "45+", icon: "😊" },
            { label: "Years Experience", value: "3+", icon: "📅" },
            { label: "Design Awards", value: "5", icon: "🎖️" }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center shadow-elegant">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;