import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">© {currentYear} Gurleen Wadhwa. All rights reserved.</p>
          </div>

          <div className="flex items-center">
            <p className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

