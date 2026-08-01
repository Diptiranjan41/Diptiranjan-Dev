import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
const skills = [
  // Programming Languages
  { name: "Java", level: 80, category: "language" },
  { name: "Python", level: 75, category: "language" },
  { name: "JavaScript", level: 90, category: "language" },


  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },

  // Database
  { name: "MongoDB", level: 70, category: "database" },
  { name: "SQL", level: 75, category: "database" },

  // Tools & DevOps
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects - matching About section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary glow-text">Skills</span>
        </h2>

        {/* Category Buttons with Glassmorphism + Glow */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-all duration-300 relative group",
                "hover:shadow-glow-lg backdrop-blur-sm",
                activeCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-background/30 text-foreground border-primary/20 backdrop-blur-md"
              )}
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with Glassmorphism + Glow */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative"
              >
                {/* Glassmorphism base with glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
                
                {/* Card content with glassmorphism */}
                <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-primary/80 to-primary h-2 rounded-full relative"
                    >
                      {/* Glow effect on progress bar */}
                      <div className="absolute inset-0 bg-primary/30 blur-sm" />
                    </motion.div>
                  </div>

                  <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground/90 group-hover:text-primary/80 transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5),
                       0 0 20px rgba(var(--primary-rgb), 0.3),
                       0 0 30px rgba(var(--primary-rgb), 0.1);
        }
        
        .shadow-glow {
          box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5),
                      0 0 20px rgba(var(--primary-rgb), 0.3);
        }
        
        .hover\\:shadow-glow-lg:hover {
          box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.5);
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};