import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Arolytics",
      period: "Sep 2023 – Oct 2024",
      location: "Halifax, NS, Canada",
      description: [
        "Led full-stack feature development, including secure customer onboarding workflows, MongoDB aggregation pipelines, and API optimizations, improving staging environment performance by 14%.",
        "Supported the rebuild of a methane emissions platform, developing modular React components with Redux and Python-Flask API endpoints integrated with MongoDB.",
        "Refactored Backend Architecture v2, tuning NoSQL Schemas in MongoDB for efficient querying of large-scale environmental datasets.",
        "Designed user-centric interfaces using React, Redux, and TailwindCSS, integrating GIS tools like Mapbox API and Deck GL for impactful emissions data visualizations.",
        "Contributed to a fast-paced Agile team, leveraging Trunk Based Development and Feature Flagging to deliver iterative releases of a methane emissions analysis platform.",
        "Collaborated with cross-functional teams, including UI designers and senior engineers, to align features with client objectives and enhance platform usability.",
      ],
      skills: ["React.js", "Redux", "Python", "Flask", "MongoDB", "TailwindCSS", "Mapbox API", "Deck GL"],
    },
    {
      title: "Software Engineer Intern",
      company: "Arolytics",
      period: "May 2023 – Sept 2023",
      location: "Halifax, NS, Canada",
      description: [
        "Developed REST-APIs and automation scripts with Python, optimizing data workflows and enhancing application performance.",
        "Created initial visualization prototypes using React Charts and Mapbox API, enhancing data transparency for emissions management.",
        "Enhanced onboarding workflows and API documentation during Backend Architecture V2 refactoring efforts.",
      ],
      skills: ["Python", "REST APIs", "React Charts", "Mapbox API", "Documentation"],
    },
    {
      title: "Software Quality Engineer Intern",
      company: "Introhive",
      period: "Jan 2022 – May 2022",
      location: "Halifax, NS, Canada",
      description: [
        "Test Case Development: Revamped test cases for legacy products, enhancing test coverage by 65% and improving readability.",
        "Environment Testing: Regularly performed local and staging environment tests, achieving over 85% accuracy.",
        "QA for Production Releases: Collaborated with two product teams to perform sanity and regression testing for final production releases.",
      ],
      skills: ["Test Case Development", "QA", "Regression Testing", "Environment Testing"],
    },
  ]

  const education = {
    degree: "Bachelor of Computer Science",
    institution: "Dalhousie University",
    location: "Halifax, NS",
    period: "2019 - 2023",
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 md:order-1 md:ml-8">
                <Briefcase className="w-5 h-5" />
              </div>

              <Card className="w-full md:w-[calc(50%-4rem)] md:order-0 md:mr-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                        <span>{exp.company}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{exp.period}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {exp.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Education */}
          <div className="relative flex items-start md:justify-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 md:order-1 md:ml-8">
              <GraduationCap className="w-5 h-5" />
            </div>

            <Card className="w-full md:w-[calc(50%-4rem)] md:order-0 md:mr-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{education.degree}</CardTitle>
                    <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                      <span>{education.institution}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{education.period}</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start md:self-center">
                    {education.location}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

