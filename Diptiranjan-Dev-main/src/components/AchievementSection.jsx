import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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

export const AchievementSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            🏆 Achievements & <span className="text-primary glow-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Professional certifications and internship experiences that showcase
            my skills and dedication to continuous learning.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          <div className="backdrop-blur-md bg-background/40 rounded-xl px-6 py-3 border border-primary/20">
            <span className="text-2xl font-bold text-primary">8+</span>
            <span className="ml-2 text-sm text-muted-foreground">Certificates</span>
          </div>
          <div className="backdrop-blur-md bg-background/40 rounded-xl px-6 py-3 border border-primary/20">
            <span className="text-2xl font-bold text-primary">4+</span>
            <span className="ml-2 text-sm text-muted-foreground">Internships</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Certificates
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base truncate">
                          {cert.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {cert.issuer}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                      
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Internships
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <div className="space-y-4">
              {internships.map((intern, index) => (
                <motion.a
                  key={index}
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {intern.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base truncate">
                          {intern.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {intern.company}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {intern.duration}
                          </span>
                        </div>
                      </div>
                      
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5),
                       0 0 20px rgba(var(--primary-rgb), 0.3);
        }
      `}</style>
    </section>
  );
};