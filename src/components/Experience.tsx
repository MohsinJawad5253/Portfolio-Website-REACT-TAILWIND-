import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Architect",
      company: "XYZZY Company",
      duration: "2023 - Present",
      location: "Mumbai, India",
      type: "Full-time",
      responsibilities: [
        "Lead architectural design for residential and commercial projects",
        "Collaborate with cross-functional teams to deliver project milestones",
        "Manage client relationships and project specifications",
        "Oversee design development from concept to construction documentation",
        "Mentor junior architects and design team members"
      ],
      skills: ["AutoCAD", "Project Management", "Client Relations", "Team Leadership"]
    },
    {
      title: "Architect",
      company: "ABC Design Studio",
      duration: "2022 - 2023",
      location: "Mumbai, India",
      type: "Full-time",
      responsibilities: [
        "Developed detailed architectural drawings and 3D visualizations",
        "Assisted in project planning and design development phases",
        "Coordinated with contractors and vendors for project execution",
        "Conducted site visits and quality inspections",
        "Prepared presentation materials for client meetings"
      ],
      skills: ["Architectural Design", "3D Modeling", "Site Coordination", "Quality Control"]
    },
    {
      title: "Junior Architect",
      company: "Design Innovations",
      duration: "2021 - 2022",
      location: "Mumbai, India",
      type: "Full-time",
      responsibilities: [
        "Assisted senior architects in design development",
        "Created technical drawings and construction details",
        "Participated in design reviews and client presentations",
        "Conducted research on building codes and regulations",
        "Supported project documentation and filing"
      ],
      skills: ["Technical Drawing", "Research", "Documentation", "Building Codes"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 3 years of progressive experience in architectural design and project management
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                
                <Card className="ml-0 md:ml-20 p-6 shadow-elegant hover:shadow-lifted transition-shadow duration-300">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Skills Utilized:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="bg-architectural-pink">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;