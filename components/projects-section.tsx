import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Chat Application",
      description:
        "A real-time chat application powered by OpenAI GPT-4, featuring context-aware conversations, code highlighting, and markdown support.",
      image: "/ai-chat-interface-with-modern-ui.jpg",
      tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for scalability and performance.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      image: "/task-management-kanban.png",
      tags: ["Next.js", "MongoDB", "Socket.io", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      title: "ML Image Classifier",
      description:
        "Machine learning application that classifies images using custom-trained models. Features drag-and-drop upload and real-time predictions.",
      image: "/machine-learning-image-classification-app.jpg",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/preview/project4.png",
      tags: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for developers to showcase their work. Features markdown support, SEO optimization, and analytics.",
      image: "/portfolio-cms-admin-interface.jpg",
      tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A selection of my recent work showcasing full-stack and AI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
