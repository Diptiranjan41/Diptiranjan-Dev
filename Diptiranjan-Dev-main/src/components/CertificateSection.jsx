import { motion } from "framer-motion";
import { ExternalLink, Award, Briefcase, Sparkles } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development",
    link: "#",
    issuer: "Coursera",
    date: "2024"
  },
  {
    title: "React & Node.js Certification",
    link: "#",
    issuer: "Udemy",
    date: "2023"
  },
  {
    title: "Python for Data Science",
    link: "#",
    issuer: "IBM",
    date: "2023"
  },
  // Add more certificates as needed
];

const internships = [
  {
    title: "Software Engineer Intern",
    link: "#",
    company: "Handshake AI",
    period: "2025 - Present"
  },
  {
    title: "Computer Science Expert",
    link: "#",
    company: "Chegg",
    period: "2024 - 2026"
  },
  // Add more internships as needed
];

export default function CertificateSection() {
  return (
    <section id="certificates" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
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
            📜 Certificates & <span className="text-primary glow-text">Internships</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Professional certifications and internship experiences that showcase
            my skills and dedication to continuous learning.
          </p>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Certificates
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative"
              >
                <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl h-full flex flex-col">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {cert.date}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Certificate</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((intern, index) => (
              <motion.a
                key={index}
                href={intern.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl h-full flex flex-col">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {intern.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mt-1">
                      {intern.company}
                    </p>
                    
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {intern.period}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Internship</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
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
}