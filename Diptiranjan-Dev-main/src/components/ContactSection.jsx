import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "✨ Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
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
            📬 Get In <span className="text-primary glow-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Have an idea or project? Let's collaborate and create something
            amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                    <a
                      href="mailto:mahapatradiptiranjan064@gmail.com"
                      className="text-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      mahapatradiptiranjan064@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Phone</h4>
                    <a
                      href="tel:+917847874670"
                      className="text-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      +91 7847874670
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Location</h4>
                    <p className="text-foreground text-sm">
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <h4 className="font-medium text-sm text-muted-foreground mb-4 text-center">
                  Connect With Me
                </h4>
                <div className="flex justify-center gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/diptiranjan-mahapatra-25321a286", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:mahapatradiptiranjan66@gmail.com", label: "Email" },
                    { icon: Instagram, href: "https://www.instagram.com/codesnax01", label: "Instagram" },
                    { icon: Phone, href: "tel:+917847874670", label: "Phone" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-background/40 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50 text-foreground"
                    placeholder="Diptiranjan Mahapatra"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50 text-foreground"
                    placeholder="mahapatradiptiranjan66@gmail.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none placeholder:text-muted-foreground/50 text-foreground"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
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