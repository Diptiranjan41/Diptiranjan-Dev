import { ArrowRight, ExternalLink, Github, Sparkles, Eye, Zap, Shield, Award } from "lucide-react";
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
    tags: ["React", "Python", "FastApi", "Mysql", ],
    demoUrl: "https://ai-resume-z5s5.vercel.app/",
    githubUrl: "https://github.com/Diptiranjan41/AI-Resume",
    featured: true,
    category: "AI"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Advanced animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-[128px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] animate-spin-slow" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50% at 50% 0%,#000_70%,transparent_110%)]" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${20 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Advanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Animated rings */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-72 h-72 border border-primary/20 rounded-full animate-ping-slow" />
            <div className="absolute w-56 h-56 border border-primary/30 rounded-full animate-pulse" />
            <div className="absolute w-40 h-40 border border-primary/40 rounded-full animate-pulse-slow" />
          </div>

          {/* Main title with 3D glass effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-3xl rounded-full" />
            
            <div className="relative px-12 py-6 backdrop-blur-xl bg-background/30 rounded-3xl border-2 border-primary/30 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <h2 className="text-5xl md:text-6xl font-extrabold">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              
              {/* Floating icons */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-pulse" />
              <Zap className="absolute -bottom-4 -left-4 w-8 h-8 text-primary animate-pulse delay-700" />
              <Award className="absolute top-1/2 -right-8 w-6 h-6 text-primary/60 animate-bounce" />
            </div>
          </div>

          {/* Description with advanced glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-xl opacity-75" />
              <div className="relative backdrop-blur-xl bg-background/40 rounded-2xl p-6 border border-primary/30">
                <p className="text-lg text-muted-foreground/90">
                  Here are some of my recent projects. Each project was carefully
                  crafted with attention to detail, performance, and user experience.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid - All cards equal size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="group relative h-full">
                {/* Multi-layer glass effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-2xl opacity-30 blur-md" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-2xl opacity-20 blur-xl" />
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-10 blur-2xl" />
                
                {/* Main card - Fixed height for equal sizing */}
                <div className="relative backdrop-blur-xl bg-background/40 rounded-2xl overflow-hidden border border-primary/30 shadow-2xl h-full flex flex-col">
                  {/* Animated top bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  
                  {/* Image container - Fixed height */}
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-overlay z-10" />
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+Image";
                      }}
                    />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/50 rounded-full blur-md" />
                          <div className="relative px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1">
                            <Sparkles size={12} />
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Category tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm" />
                        <div className="relative px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-primary text-xs font-medium">
                          {project.category}
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech stack preview */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-background/70 border border-primary/30 text-foreground/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content section - Flex-grow to fill remaining space */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-foreground/90 line-clamp-2 min-h-[3.5rem]">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground/80 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Action buttons */}
                    <div className="mt-auto">
                      {/* Divider */}
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          {/* Demo link */}
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-2.5 rounded-xl backdrop-blur-md bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 group/btn"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <ExternalLink size={18} className="relative" />
                          </a>
                          
                          {/* GitHub link (if available) */}
                          {project.githubUrl !== "#" && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative p-2.5 rounded-xl backdrop-blur-md bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 group/btn"
                              aria-label={`View GitHub repository for ${project.title}`}
                            >
                              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                              <Github size={18} className="relative" />
                            </a>
                          )}
                        </div>
                        
                        {/* View project link */}
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary flex items-center gap-1 group/link"
                        >
                          <span>View Project</span>
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA with advanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-3xl" />
          
          <div className="relative inline-block group/cta">
            {/* Multiple glow rings */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -inset-2 border border-primary/30 rounded-full animate-ping-slow" />
            <div className="absolute -inset-4 border border-primary/20 rounded-full animate-pulse-slow" />
            
            <a
              className="relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-primary/40 to-primary/20 border-2 border-primary/40 text-primary-foreground font-semibold text-lg overflow-hidden group/btn shadow-2xl"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Diptiranjan41"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              
              {/* Content */}
              <Github size={28} className="relative" />
              <span className="relative">Explore More Projects on GitHub</span>
              <ArrowRight size={20} className="relative group-hover/btn:translate-x-2 transition-transform duration-300" />
              
              {/* Sparkle effects */}
              <Sparkles size={16} className="absolute -top-2 -right-2 text-primary animate-pulse" />
              <Sparkles size={12} className="absolute -bottom-2 -left-2 text-primary/70 animate-pulse delay-700" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 6s ease-in-out infinite reverse;
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};