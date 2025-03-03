import { Card, CardContent } from "./ui/card"

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Gurleen Wadhwa"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Engineer specializing in full-stack web development</h3>

            <p className="text-muted-foreground">
              I'm a passionate software engineer with experience in building scalable web applications using modern
              technologies. My expertise spans across frontend and backend development, with a focus on creating
              efficient, user-friendly solutions.
            </p>

            <p className="text-muted-foreground">
              With a background in Computer Science from Dalhousie University, I've worked on various projects ranging
              from methane emissions platforms to personal finance applications. I enjoy tackling complex problems and
              continuously learning new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium mb-2">Name:</h4>
                <p className="text-muted-foreground">Gurleen Wadhwa</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email:</h4>
                <p className="text-muted-foreground">gurleenwadhwa3@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location:</h4>
                <p className="text-muted-foreground">Halifax, NS, Canada</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

