import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "WhyImBroke - AI Expense Manager",
      description:
        "An innovative personal finance application leveraging AI to empower college students in making informed financial decisions.",
      details: [
        "Developing backend APIs to manage user accounts, transactions, and budgets, establishing a solid foundation for future feature integrations and AI-driven functionalities.",
        "Prioritizing a scalable and maintainable application by focusing on a well-defined data model and intuitive basic UI as the initial development phase.",
        "Actively implementing CSV import functionality to enable users to seamlessly import historical financial data. Plaid integration for secure automated bank account syncing is planned as a subsequent development milestone.",
      ],
      technologies: ["JavaScript", "React.js", "Recoil", "Express.js", "Node.js", "AWS", "GitHub"],
      image: "/placeholder.svg?height=300&width=600",
      github: "#",
      demo: "#",
    },
    {
      title: "Methane Emissions Platform",
      description:
        "A comprehensive platform for monitoring and analyzing methane emissions data with advanced visualization capabilities.",
      details: [
        "Developed modular React components with Redux for the frontend interface.",
        "Created Python-Flask API endpoints integrated with MongoDB for efficient data retrieval.",
        "Implemented GIS tools like Mapbox API and Deck GL for impactful emissions data visualizations.",
      ],
      technologies: ["React.js", "Redux", "Python", "Flask", "MongoDB", "Mapbox API", "Deck GL"],
      image: "/placeholder.svg?height=300&width=600",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, experience, and projects.",
      details: [
        "Built with React, TypeScript, and TailwindCSS for a clean, modern interface.",
        "Implemented responsive design for optimal viewing on all devices.",
        "Integrated dark/light mode toggle for enhanced user experience.",
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "ShadCN UI"],
      image: "/placeholder.svg?height=300&width=600",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Here are some of the projects I've worked on. Each project represents different skills and challenges I've
            tackled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

