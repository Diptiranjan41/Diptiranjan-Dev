import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Frontend Web Dev",
      price: "$299",
      features: [
        "React + Tailwind",
        "SEO Optimized",
        "3 Pages",
        "Contact Form",
      ],
    },
    {
      title: "Responsive Website",
      price: "$349",
      features: [
        "Mobile Friendly",
        "Speed Optimized",
        "Modern Layout",
        "Custom Sections",
      ],
    },
    {
      title: "UI/UX Design",
      price: "$249",
      features: [
        "Figma/Adobe XD",
        "User-Centered",
        "Color & Typography",
        "Prototyping",
      ],
    },
    {
      title: "Fullstack eCommerce",
      price: "$999",
      features: [
        "MERN Stack",
        "Auth + DB",
        "Payment Gateway",
        "Admin Dashboard",
      ],
    },
    {
      title: "Portfolio Website",
      price: "$199",
      features: [
        "Personal Branding",
        "Resume Section",
        "Project Showcase",
        "Animated Design",
      ],
    },
    {
      title: "Github Code Setup",
      price: "$149",
      features: [
        "Repo Setup",
        "Deploy Guidance",
        "CI/CD Config",
        "README + Docs",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-20 px-6 bg-[#f9f9f9] dark:bg-[#82a8ff00] transition-colors duration-500"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-[#f9f9f9] dark:to-transparent" />

      <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400">
        🚀 Start Your Project
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-xl bg-white dark:bg-[#172b45] text-gray-800 dark:text-gray-100 transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/30"
          >
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4 text-center">
              {plan.title}
            </h3>
            <p className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <a
                href="#contact"
                className="inline-block px-5 py-2 rounded-md bg-[oklch(49.6%_0.265_301.924)] text-white hover:scale-105 transition-transform duration-300 text-sm font-semibold"
              >
                Choose Plan
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-transparent to-[#f9f9f9] dark:to-transparent" />
    </section>
  );
};
