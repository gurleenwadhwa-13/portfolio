"use client"
import { ArrowDown, Mail } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { BsTwitterX } from "react-icons/bs"
import { Button } from "./ui/button"
import { PulseBeams } from "./ui/pulsebeams"
import { motion } from "framer-motion"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <PulseBeams className="mb-8 w-full max-w-4xl mx-auto pointer-events-none">
          <motion.div
            className="backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-xl p-8 shadow-xl border border-slate-200/50 dark:border-white/10 relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 dark:from-blue-500/30 dark:via-purple-600/30 dark:to-blue-500/30 rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>

            <motion.div variants={contentVariants} initial="hidden" animate="visible" className="relative z-10">
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 dark:from-slate-50 dark:via-white dark:to-slate-200"
                variants={itemVariants}
              >
                Hi, I'm Gurleen Wadhwa
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-blue-600 dark:text-blue-200/80 mb-6"
                variants={itemVariants}
              >
                I moved across the globe to pursue Computer Science when I was 18, so far so good.
              </motion.h2>

              <motion.p className="text-lg max-w-2xl mb-8 text-slate-700 dark:text-slate-300" variants={itemVariants}>
              Exploring my interests in Compilers, Distributed Systems
              </motion.p>

              <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
                <Button
                  onClick={scrollToContact}
                  className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 dark:bg-blue-500 dark:hover:bg-blue-600 pointer-events-auto"
                >
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="bg-white/80 border-slate-200 hover:bg-slate-100 text-slate-800 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white transition-all duration-300 pointer-events-auto"
                >
                  <a
                    href="https://drive.google.com/file/d/1FUt7a8sW7QjKWwCKTTlGssD1csQWA8zP/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div className="flex justify-center gap-6" variants={itemVariants}>
                <a
                  href="mailto:gurleenwadhwa3@gmail.com"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-200 pointer-events-auto"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gurleen-wadhwa-56829a1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-200 pointer-events-auto"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/gurleenwadhwa-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-200 pointer-events-auto"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/GurleenWadhwa1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-200 pointer-events-auto"
                  aria-label="Twitter"
                >
                  <BsTwitterX className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </PulseBeams>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="animate-bounce text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

