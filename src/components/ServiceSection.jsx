// components/ServiceSection.jsx
import { motion } from "framer-motion";

export const ServiceSection = () => {
  const services = [
    {
      title: "Frontend Web Dev",
      description: "I specialize in building modern, responsive, and accessible websites using React, Tailwind CSS, and smooth animations. Whether it's a personal portfolio, a startup landing page, or a dynamic business website, I ensure pixel-perfect design, fast performance, and cross-device compatibility.",
      icon: "💻"
    },
    {
      title: "Responsive UI Design",
      description: "I design clean, modern, and fully responsive user interfaces using Figma. My focus is on delivering mobile-first, intuitive layouts that enhance user experience across all screen sizes. Whether you need a landing page, dashboard, or full product UI, I bring ideas to life with pixel-perfect precision.",
      icon: "📱"
    },
    {
      title: "Fullstack E-Commerce",
      description: "I build robust and scalable full-stack E-Commerce platforms with features like product listings, cart management, authentication, admin dashboard, and secure payment integration. Using technologies like React, Node.js, and MongoDB, I deliver end-to-end solutions tailored to your business needs.",
      icon: "🛒"
    },
    {
      title: "Portfolio Website",
      description: "Custom personal or professional portfolio websites with smooth animations, responsive design, project showcases, contact forms, and downloadable resume integration built with React, Tailwind, and Framer Motion.",
      icon: "👨‍💻"
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Background glow effects - matching other sections */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      {/* Top Divider with glass effect */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-background/5 backdrop-blur-sm" />

      <h2
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center"
      >
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent glow-text">
          🛠️ What I Offer?
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto z-10 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            {/* Glassmorphism base with glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
            
            {/* Card content with glassmorphism - fixed height for equal cards */}
            <div className="relative backdrop-blur-md bg-background/40 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl h-full flex flex-col">
              <div className="relative">
                {/* Icon with glow effect */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300 min-h-[3.5rem]">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300 mb-4 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="group/btn relative inline-block w-full text-center px-4 py-2.5 rounded-md text-primary-foreground font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  <span className="relative">Book Now</span>
                </a>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Divider with glass effect */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-transparent to-background/5 backdrop-blur-sm" />

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