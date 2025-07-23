import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const heroText = `💻 I'm a Full Stack Web Developer crafting 🌐 responsive and ⚙️ scalable 
web apps using React, Node.js, and MongoDB. I focus on clean UI, robust backend logic, and
 real-world solutions. 🎯 Currently preparing for placements and exploring freelance
 opportunities worldwide to build impactful, user-friendly projects with modern technologies.`;
const words = heroText.split(" ");

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-4 border-[#0F1729] group-hover:border-purple-500 transition-all duration-300 flex justify-center items-center overflow-hidden">
                <img
                  src="src/components/vicky.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Diptiranjan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Mahapatra
            </span>
          </h1>

          {/* Word-by-word motion paragraph */}
          <motion.div
            className="text-lg text-muted-foreground leading-relaxed flex flex-wrap justify-center gap-1"
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
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Call-to-action button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
