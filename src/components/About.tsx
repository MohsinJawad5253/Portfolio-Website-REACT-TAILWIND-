import { Card } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating spaces that blend functionality with aesthetic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Hatim Merchant
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an architect having 3+ years of experience in this field, specializing in 
                residential and interior design. My approach combines innovative design thinking 
                with practical solutions to create spaces that truly reflect my clients' vision 
                and lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my career, I've developed expertise in sustainable design practices, 
                project management, and client collaboration. I believe that great architecture 
                emerges from understanding both the functional needs and emotional aspirations 
                of the people who inhabit the spaces I design.
              </p>
            </div>

            {/* Education */}
            <Card className="p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-architectural-pink rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    Bachelor of Architecture (B.Arch) - 4-year degree
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Specialized in Residential and Interior Design
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Values & Philosophy */}
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-architectural-sage rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Design Philosophy</h4>
                  <p className="text-muted-foreground">
                    "Great architecture is not just about creating beautiful spaces, but about 
                    understanding how people live, work, and connect within those spaces."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Mission</h4>
                  <p className="text-muted-foreground">
                    To transform architectural concepts into reality by creating sustainable, 
                    functional, and aesthetically pleasing spaces that enhance the quality 
                    of life for their inhabitants.
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg shadow-elegant">
                <div className="text-xl font-bold text-primary">B.Arch</div>
                <div className="text-sm text-muted-foreground">Degree</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-elegant">
                <div className="text-xl font-bold text-primary">2021</div>
                <div className="text-sm text-muted-foreground">Started Career</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;