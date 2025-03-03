import { Card, CardContent } from "./ui/card"
import { Code2, Database, Server, Globe, Layers, Cloud } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      skills: ["TypeScript", "Python", "C++", "SQL"],
    },
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["React.js", "Recoil", "Redux", "TailwindCSS"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "Prisma ORM"],
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["AWS", "Docker", "Kubernetes", "CloudFlare Workers"],
    },
    {
      title: "Tools & Practices",
      icon: <Layers className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub", "Agile", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            I've worked with a variety of technologies and tools throughout my career. Here's a snapshot of my technical
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Development Approach</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design",
              "Performance Optimization",
              "Clean Code",
              "Test-Driven Development",
              "Agile Methodology",
              "Trunk Based Development",
              "Feature Flagging",
            ].map((approach, index) => (
              <span key={index} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                {approach}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

