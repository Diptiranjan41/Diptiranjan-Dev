import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/95 border-b border-primary/10 shadow-lg" 
          : "py-5 bg-transparent"
      )}
    >
      {/* Background glow effect - simplified */}
      {isScrolled && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        </div>
      )}

      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo with clean design */}
        <a
          className="text-xl font-bold text-primary flex items-center group"
          href="#hero"
          onClick={() => setActiveItem("Home")}
        >
          <span className="relative z-10 text-4xl font-bold">
            <span className="relative">
              <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                Diptiranjan
              </span>
              {/* Simple underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>{" "}
            <span className="text-primary">Dev</span>
          </span>
        </a>

        {/* Desktop nav - clean design */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={cn(
                "relative px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-300",
                activeItem === item.name && "text-primary font-medium"
              )}
            >
              {/* Simple active indicator */}
              {activeItem === item.name && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary" />
              )}
              
              {/* Item name */}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile menu button - clean design */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 relative"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu - clean design */}
        <div
          className={cn(
            "fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Simple background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          </div>

          {/* Simple menu container */}
          <div className="relative w-[90%] max-w-md">
            <div className="flex flex-col space-y-4 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "relative px-8 py-4 text-foreground/80 hover:text-primary transition-colors duration-300 text-center border-b border-primary/10 last:border-0",
                    activeItem === item.name && "text-primary font-medium"
                  )}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {/* Simple active indicator */}
                  {activeItem === item.name && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary" />
                  )}
                  
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3);
        }
        
        .hover\\:text-shadow-glow:hover {
          text-shadow: 0 0 8px rgba(var(--primary-rgb), 0.3);
        }
      `}</style>
    </nav>
  );
};