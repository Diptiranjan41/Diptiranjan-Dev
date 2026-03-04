import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects - using only primary color */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          🧑‍💻About <span className="text-primary glow-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 relative">
            {/* Decorative glass line */}
            <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full shadow-glow" />
            
            <h3 className="text-2xl font-semibold relative">
              Passionate Web Developer & Tech Creator
              <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20 rounded-full shadow-glow-sm" />
            </h3>

            {/* Glassmorphism text container */}
            <div className="backdrop-blur-sm bg-background/30 rounded-xl p-6 border border-primary/10 shadow-lg">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Web Developer with expertise in building responsive, accessible, and high-performance web applications using modern technologies. As a fresher, I strengthen my skills through real-world projects and hands-on practice, preparing myself for both freelance opportunities and placement roles in the tech industry.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-background/30 rounded-xl p-6 border border-primary/10 shadow-lg">
              <p className="text-muted-foreground leading-relaxed">
                💡 I'm passionate about building elegant, scalable solutions to real-world problems using modern web technologies.
                📚 I'm continuously upskilling to stay ahead in the fast-paced web development landscape—preparing for both freelance opportunities and upcoming placement roles with hands-on project experience and industry-ready skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact" 
                className="group relative px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-lg backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative">Get In Touch</span>
              </a>

              <a
                href="/pdfs/Resume.pdf"
                download
                className="group relative px-6 py-2 rounded-full border-2 border-primary/30 text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow-lg overflow-hidden backdrop-blur-sm bg-background/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <span className="relative">Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right column - Glassmorphism Cards with neon glow borders */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 - Web Development */}
            <div className="group relative">
              {/* Glassmorphism base with glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
              
              {/* Card content with glassmorphism */}
              <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm group-hover:bg-primary/30 transition-all duration-300">
                      <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      Web Development
                    </h4>
                    <p className="text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300">
                      Creating responsive websites and web applications with modern frameworks.
                    </p>
                  </div>
                </div>
                
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
              </div>
            </div>

            {/* Card 2 - UI/UX Design */}
            <div className="group relative">
              {/* Glassmorphism base with glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
              
              {/* Card content with glassmorphism */}
              <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm group-hover:bg-primary/30 transition-all duration-300">
                      <User className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      UI/UX Design
                    </h4>
                    <p className="text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300">
                      Designing intuitive user interfaces and seamless user experiences.
                    </p>
                  </div>
                </div>
                
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
              </div>
            </div>

            {/* Card 3 - Project Management */}
            <div className="group relative">
              {/* Glassmorphism base with glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
              
              {/* Card content with glassmorphism */}
              <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm group-hover:bg-primary/30 transition-all duration-300">
                      <Briefcase className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      Project Management
                    </h4>
                    <p className="text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300">
                      Leading projects from conception to completion with agile methodologies.
                    </p>
                  </div>
                </div>
                
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
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
        
        .shadow-glow-sm {
          box-shadow: 0 0 8px rgba(var(--primary-rgb), 0.4);
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