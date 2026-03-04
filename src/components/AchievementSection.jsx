import { ArrowRight, Award, Sparkles, Star, Trophy, Medal, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const AchievementSection = () => {
  const certificates = [
    {
      title: "Meta Front-End Certificate",
      link: "https://coursera.org/share/meta-cert-link",
      issuer: "Meta",
      date: "2024",
      icon: "🌟"
    },
    {
      title: "Google UX Design Certificate",
      link: "/pdfs/ux.pdf",
      issuer: "Google",
      date: "2023",
      icon: "🎨"
    },
    {
      title: "Git & GitHub – Udemy",
      link: "https://udemy.com/certificate/git-github-link",
      issuer: "Udemy",
      date: "2024",
      icon: "🔧"
    },
    {
      title: "JS Algorithms – BOORD INFINITY",
      link: "/pdfs/dsajava.pdf",
      issuer: "BOORD INFINITY",
      date: "2023",
      icon: "💻"
    },
  ];

  const internships = [
    {
      title: "FullStack Web dev – CodeAlpha",
      link: "/pdfs/CodeAlpha.pdf",
      company: "CodeAlpha",
      duration: "3 months",
      icon: "🚀"
    },
    {
      title: "Web Dev – Bharat Intern",
      link: "https://yourdomain.com/bharat-certificate.pdf",
      company: "Bharat Intern",
      duration: "2 months",
      icon: "💼"
    },
    {
      title: "UX Intern – Oasis Infobyte",
      link: "https://yourdomain.com/oasis-certificate.pdf",
      company: "Oasis Infobyte",
      duration: "2 months",
      icon: "🎯"
    },
    {
      title: "UI Intern – LetsGrowMore",
      link: "https://yourdomain.com/letsgrowmore-certificate.pdf",
      company: "LetsGrowMore",
      duration: "1 month",
      icon: "✨"
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="achievements">
      {/* Clean background with only gradient orbs */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs - kept for ambiance */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/8 rounded-full blur-[128px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[128px] animate-spin-slow" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Title Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Main title with glass effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl rounded-full" />
            
            <div className="relative px-12 py-6 backdrop-blur-xl bg-background/30 rounded-3xl border-2 border-primary/30 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <h2 className="text-5xl md:text-7xl font-extrabold">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              
              {/* Minimal floating icons */}
              <Trophy className="absolute -top-4 -right-4 w-6 h-6 text-primary/60 animate-bounce" />
              <Medal className="absolute -bottom-4 -left-4 w-6 h-6 text-primary/60 animate-pulse delay-700" />
            </div>
          </div>

          {/* Stats counter - kept as is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center gap-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative backdrop-blur-md bg-background/40 rounded-2xl px-6 py-3 border border-primary/30">
                <span className="text-2xl font-bold text-primary">8+</span>
                <span className="ml-2 text-sm text-muted-foreground">Certifications</span>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative backdrop-blur-md bg-background/40 rounded-2xl px-6 py-3 border border-primary/30">
                <span className="text-2xl font-bold text-primary">4+</span>
                <span className="ml-2 text-sm text-muted-foreground">Internships</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group/section relative"
          >
            {/* Section glow effect - simplified */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl opacity-0 group-hover/section:opacity-100 blur-xl transition-all duration-700" />
            
            <div className="relative">
              {/* Section header - cleaned up */}
              <div className="relative mb-8 inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-lg opacity-70" />
                
                <h3 className="relative text-3xl md:text-4xl font-bold px-8 py-4">
                  <span className="absolute inset-0 bg-background/40 backdrop-blur-xl rounded-2xl border-2 border-primary/30 shadow-2xl" />
                  <span className="relative flex items-center gap-4">
                    <GraduationCap className="relative w-8 h-8 text-primary" />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Certificates
                    </span>
                  </span>
                </h3>
              </div>

              {/* Certificate cards container */}
              <div className="relative">
                <div className="space-y-5 relative">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group/item relative"
                    >
                      {/* Single layer glow effect - simplified */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-2xl opacity-0 group-hover/item:opacity-100 blur-md transition-all duration-500" />
                      
                      {/* Card content with glassmorphism */}
                      <div className="relative backdrop-blur-xl bg-background/40 rounded-2xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-2xl overflow-hidden">
                        {/* Minimal corner accents */}
                        <div className="absolute top-0 left-0 w-12 h-12">
                          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-xl" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-12 h-12">
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />
                        </div>
                        
                        {/* Top gradient line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover/item:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            {/* Icon with simple glow */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center text-2xl transform group-hover/item:scale-105 transition-all duration-300">
                                {cert.icon}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground/90 group-hover/item:text-primary transition-colors duration-300 text-lg">
                                {cert.title}
                              </h4>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary/80">
                                  {cert.issuer}
                                </span>
                                <span className="text-xs text-muted-foreground/70">
                                  {cert.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn relative px-6 py-2.5 rounded-xl overflow-hidden self-end sm:self-auto"
                          >
                            {/* Button glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-300" />
                            
                            {/* Button background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary/30 rounded-xl" />
                            
                            {/* Button content */}
                            <span className="relative flex items-center gap-2 text-primary font-medium">
                              View
                              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group/section relative"
          >
            {/* Section glow effect - simplified */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl opacity-0 group-hover/section:opacity-100 blur-xl transition-all duration-700" />
            
            <div className="relative">
              {/* Section header - cleaned up */}
              <div className="relative mb-8 inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-lg opacity-70" />
                
                <h3 className="relative text-3xl md:text-4xl font-bold px-8 py-4">
                  <span className="absolute inset-0 bg-background/40 backdrop-blur-xl rounded-2xl border-2 border-primary/30 shadow-2xl" />
                  <span className="relative flex items-center gap-4">
                    <Briefcase className="relative w-8 h-8 text-primary" />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Internships
                    </span>
                  </span>
                </h3>
              </div>

              {/* Internship cards container */}
              <div className="relative">
                <div className="space-y-5 relative">
                  {internships.map((intern, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="group/item relative"
                    >
                      {/* Single layer glow effect - simplified */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-2xl opacity-0 group-hover/item:opacity-100 blur-md transition-all duration-500" />
                      
                      {/* Card content with glassmorphism */}
                      <div className="relative backdrop-blur-xl bg-background/40 rounded-2xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-2xl overflow-hidden">
                        {/* Minimal corner accents */}
                        <div className="absolute top-0 right-0 w-12 h-12">
                          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-12 h-12">
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-xl" />
                        </div>
                        
                        {/* Top gradient line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover/item:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            {/* Icon with simple glow */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center text-2xl transform group-hover/item:scale-105 transition-all duration-300">
                                {intern.icon}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground/90 group-hover/item:text-primary transition-colors duration-300 text-lg">
                                {intern.title}
                              </h4>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary/80">
                                  {intern.company}
                                </span>
                                <span className="text-xs text-muted-foreground/70">
                                  {intern.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <motion.a
                            href={intern.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn relative px-6 py-2.5 rounded-xl overflow-hidden self-end sm:self-auto"
                          >
                            {/* Button glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-300" />
                            
                            {/* Button background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary/30 rounded-xl" />
                            
                            {/* Button content */}
                            <span className="relative flex items-center gap-2 text-primary font-medium">
                              View
                              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slow 6s ease-in-out infinite reverse;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};