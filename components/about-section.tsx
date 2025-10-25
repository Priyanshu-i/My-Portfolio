import { Card } from "@/components/ui/card"
import { Code2, Sparkles, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A passionate developer on a journey to create impactful digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a college student with a deep passion for technology and innovation. My journey in software
                development started with curiosity and has evolved into a commitment to building solutions that make a
                difference.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                As a full-stack developer, I love working across the entire development spectrum—from crafting
                beautiful, responsive frontends to building robust, scalable backends. My recent focus on AI development
                has opened up exciting possibilities for creating intelligent, user-centric applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Full Stack Development</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Building end-to-end web applications with modern frameworks and best practices
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI Development</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Integrating machine learning and AI capabilities into real-world applications
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Rocket className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Always exploring new technologies and staying ahead of industry trends
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
