import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "RIndia – Responsive Restaurant Website",
    description:
      "Modern restaurant website built with React and Tailwind CSS, showcasing menus, contact, and branding for enhanced online presence.",
    image: "/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://rindia.netlify.app",
    githubUrl: "https://github.com/Diptiranjan41",
    featured: true,
    category: "Frontend"
  },
  {
    id: 2,
    title: "Go Vicky Go – Travel Planner",
    description:
      "Smart travel planner with interactive maps and destination recommendations. Currently under development.",
    image: "/project2.png",
    tags: ["React", "TailwindCSS", "API"],
    demoUrl: "https://go-vicky-go-h2i2-git-main-diptiranjan-mahaptras-projects.vercel.app/",
    githubUrl: "https://github.com/Diptiranjan41/Go-Vicky-Go",
    featured: false,
    category: "Fullstack"
  },
  {
    id: 3,
    title: "AI Career Recommendation Platform",
    description:
      "AI-driven platform that recommends personalized career paths and matches students with relevant internships.",
    image: "/project3.png",
    tags: ["React", "Python", "FastApi", "Mysql"],
    demoUrl: "https://ai-resume-z5s5.vercel.app/",
    githubUrl: "https://github.com/Diptiranjan41/AI-Resume",
    featured: true,
    category: "AI"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            🚀 Featured <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="group relative h-full">
                {/* Glassmorphism card */}
                <div className="relative backdrop-blur-md bg-background/40 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl h-full flex flex-col">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project";
                      }}
                    />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <div className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1">
                          <Sparkles size={12} />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Category tag */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-primary text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex justify-between items-center pt-3 border-t border-primary/10">
                      <div className="flex space-x-2">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                          aria-label={`View live demo`}
                        >
                          <ExternalLink size={16} />
                        </a>
                        
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                            aria-label={`View GitHub repository`}
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                      
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all duration-300"
                      >
                        <span>View Project</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Diptiranjan41"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all duration-300 font-medium"
          >
            <Github size={20} />
            <span>Explore More Projects on GitHub</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Custom styles */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5),
                       0 0 20px rgba(var(--primary-rgb), 0.3);
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};