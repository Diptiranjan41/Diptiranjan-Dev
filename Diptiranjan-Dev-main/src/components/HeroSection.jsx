import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const heroText = `👨‍💻 Software Engineer crafting 🌐 responsive and ⚙️ scalable 
web applications using React, Node.js, and MongoDB. I focus on clean UI, robust backend logic, 
and real-world solutions. 🎯 Currently preparing for placements and exploring freelance
opportunities worldwide to build impactful, user-friendly projects with modern technologies.`;
const words = heroText.split(" ");

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background glow effects - only primary color */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse delay-500" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Profile Image with Glassmorphism + Glow */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              {/* Glow rings - only primary color */}
              <div className="absolute -inset-3 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="absolute -inset-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-75 blur-2xl transition-all duration-500" />
              
              {/* Glassmorphism container */}
              <div className="relative w-44 h-44 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 flex justify-center items-center overflow-hidden shadow-2xl">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image */}
                <img
                  src="/vicky.jpg"
                  alt="Diptiranjan Mahapatra"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Hero Name - removed underline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Diptiranjan
            </span>
            <span className="relative ml-2 opacity-0 animate-fade-in-delay-2">
              <span className="text-primary">
                {" "}
                Mahapatra
              </span>
              {/* Glow dot - only primary color */}
              <span className="absolute -top-2 -right-4 w-2 h-2 bg-primary rounded-full animate-ping shadow-glow" />
              <span className="absolute -top-2 -right-4 w-2 h-2 bg-primary rounded-full shadow-glow" />
            </span>
          </h1>

          {/* Word-by-word motion paragraph with Glassmorphism */}
          <motion.div
            className="relative max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {/* Glassmorphism background - only primary color */}
            <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm rounded-2xl -m-4 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-lg text-muted-foreground leading-relaxed flex flex-wrap justify-center gap-1 relative z-10">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block hover:text-primary transition-colors duration-300 hover:scale-105 relative group/word"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {word}
                  {/* Word glow on hover - only primary color */}
                  <span className="absolute inset-0 bg-primary/10 blur-md opacity-0 group-hover/word:opacity-100 transition-opacity duration-300 rounded" />
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call-to-action button with Glassmorphism + Glow */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 relative group/button">
            {/* Glow rings - only primary color */}
            <div className="absolute -inset-2 bg-primary/30 rounded-full opacity-0 group-hover/button:opacity-50 blur-lg transition-all duration-500" />
            <div className="absolute -inset-4 bg-primary/20 rounded-full opacity-0 group-hover/button:opacity-30 blur-2xl transition-all duration-500" />
            
            <a 
              href="#projects" 
              className="relative cosmic-button bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium overflow-hidden group"
            >
              {/* Button background animation */}
              <span className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Button content */}
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group/scroll">
        {/* Glow background */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300 -z-10" />
        
        <span className="text-sm text-muted-foreground mb-2 group-hover/scroll:text-primary transition-colors duration-300">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary group-hover/scroll:animate-bounce-slow" />
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .cosmic-button {
          position: relative;
          display: inline-block;
          padding: 0.75rem 2rem;
          font-weight: 500;
          border-radius: 9999px;
          background: rgb(139, 92, 246);
          color: white;
          transition: all 0.3s ease;
        }
        
        .cosmic-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
};