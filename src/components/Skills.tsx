import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ruler, 
  PenTool, 
  Users, 
  Target, 
  Building, 
  Lightbulb,
  Layers,
  Calculator
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Calculator,
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "SketchUp", level: 90 },
        { name: "Revit", level: 85 },
        { name: "3ds Max", level: 80 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "V-Ray Rendering", level: 75 }
      ]
    },
    {
      title: "Design Skills",
      icon: PenTool,
      skills: [
        { name: "Architectural Design", level: 95 },
        { name: "Interior Design", level: 90 },
        { name: "Space Planning", level: 92 },
        { name: "3D Visualization", level: 85 },
        { name: "Sustainable Design", level: 80 },
        { name: "Landscape Design", level: 70 }
      ]
    },
    {
      title: "Management Skills",
      icon: Users,
      skills: [
        { name: "Project Management", level: 88 },
        { name: "Client Relations", level: 92 },
        { name: "Team Leadership", level: 85 },
        { name: "Budget Planning", level: 80 },
        { name: "Quality Control", level: 90 },
        { name: "Time Management", level: 95 }
      ]
    },
    {
      title: "Specialized Knowledge",
      icon: Building,
      skills: [
        { name: "Building Codes", level: 90 },
        { name: "Construction Methods", level: 85 },
        { name: "Material Selection", level: 88 },
        { name: "Structural Basics", level: 75 },
        { name: "MEP Coordination", level: 70 },
        { name: "Green Building", level: 80 }
      ]
    }
  ];

  const certifications = [
    "Certified Professional Architect",
    "AutoCAD Certified Professional",
    "LEED Green Associate",
    "Project Management Professional (PMP)"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set developed through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-elegant hover:shadow-lifted transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-architectural-pink rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-architectural-blue transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Strengths */}
          <Card className="p-6 shadow-elegant">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-architectural-sage rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Core Competencies</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Residential Design",
                "Interior Planning",
                "Project Management", 
                "Client Consultation",
                "Technical Drawing",
                "3D Modeling",
                "Site Analysis",
                "Construction Documentation"
              ].map((competency, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{competency}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 shadow-elegant">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-accent rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;