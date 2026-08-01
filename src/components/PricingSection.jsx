import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Full Stack Web Application",
      price: "$499",
      features: [
        "MERN Stack",
        "Authentication",
        "API Integration",
        "Database Design",
      ],
    },
    {
      title: "AI Powered Application",
      price: "$799",
      features: [
        "AI Integration",
        "LLM Features",
        "Python Automation",
        "API Integration",
      ],
    },
    {
      title: "Frontend Development",
      price: "$299",
      features: [
        "React + Tailwind",
        "Responsive UI",
        "Animations",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend & API Development",
      price: "$399",
      features: [
        "Node.js, Express.js",
        "REST APIs",
        "Database Management",
        "API Security",
      ],
    },
    {
      title: "Automation & Scripting",
      price: "$249",
      features: [
        "Python Scripts",
        "Workflow Automation",
        "Data Processing",
        "Developer Tools",
      ],
    },
    {
      title: "Portfolio Website",
      price: "$199",
      features: [
        "Personal Branding",
        "Resume Section",
        "Project Showcase",
        "Deployment",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
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
            Build Your Next <span className="text-primary glow-text">Digital Solution</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Choose the perfect plan for your project needs. Each package is
            crafted to deliver high-quality results with modern technologies.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
              
              {/* Card content */}
              <div className="relative backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl h-full flex flex-col">
                {/* Top gradient line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />

                {/* Plan Title */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center mb-2">
                  {plan.title}
                </h3>

                {/* Price */}
                <p className="text-3xl font-bold text-center text-primary mb-4">
                  {plan.price}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-sm font-medium"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
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