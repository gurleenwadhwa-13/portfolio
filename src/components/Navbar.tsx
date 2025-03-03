"use client"

import { useState, useEffect } from "react"
import { icons, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("hero")
          }}
        >
          GW
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`${activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
          <div className="ml-2">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`justify-start ${
                  activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

