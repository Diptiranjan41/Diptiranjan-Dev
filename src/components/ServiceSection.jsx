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
}
,
   {
  title: "Fullstack E-Commerce",
  description: "I build robust and scalable full-stack E-Commerce platforms with features like product listings, cart management, authentication, admin dashboard, and secure payment integration. Using technologies like React, Node.js, and MongoDB, I deliver end-to-end solutions tailored to your business needs.",
  icon: "🛒"
}
,{
  title: "Portfolio Website",
  description: "Custom personal or professional portfolio websites with smooth animations, responsive design, project showcases, contact forms, and downloadable resume integration built with React, Tailwind, and Framer Motion.",
  icon: "👨‍💻"
}
,
  ];

  return (
    <section
      id="services"

       className="relative py-20 px-6 bg-[#f9f9f9] dark:bg-[#82a8ff00]
       transition-colors duration-500"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b
       from-transparent to-[#f9f9f] dark:to-[#00000000]" />

      <h2
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400"
      >
      🛠️ What I Offer?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto z-10 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-xl bg-white dark:bg-[#172b45] text-gray-800 dark:text-gray-100 
                       transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/30"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.description}
            </p>
            
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-md bg-[oklch(49.6%_0.265_301.924)] text-white
                         hover:scale-105 transition-transform duration-300 text-sm font-semibold"
            >
              Book Now
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Divider (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t 
      from-transparent to-[#f9f9f9] dark:to-[#0f172a00]" />
    </section>
  );
};
