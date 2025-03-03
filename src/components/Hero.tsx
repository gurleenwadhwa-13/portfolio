import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-primary/20">
          <img
            src="/placeholder.svg?height=128&width=128"
            alt="Gurleen Wadhwa"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Gurleen Wadhwa</h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Software Engineer — React.js, Node.js, Python
        </h2>

        <p className="text-lg max-w-2xl mb-8">
          Building scalable web applications with modern technologies. Passionate about creating efficient,
          user-friendly solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button onClick={scrollToContact}>Contact Me</Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a
            href="mailto:gurleenwadhwa3@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

