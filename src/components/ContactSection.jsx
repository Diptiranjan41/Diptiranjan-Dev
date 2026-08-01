import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
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

    // Simulate form submission
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
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] animate-spin-slow" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Unique Title with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Background glow rings */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-64 h-64 border border-primary/20 rounded-full animate-ping-slow" />
            <div className="absolute w-48 h-48 border border-primary/30 rounded-full animate-pulse" />
          </div>

          {/* Main title with glass effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-3xl rounded-full" />
            
            <div className="relative px-12 py-6 backdrop-blur-xl bg-background/30 rounded-3xl border border-primary/30 shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-extrabold">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              
              {/* Decorative elements */}
              <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-primary animate-pulse" />
              <Sparkles className="absolute -bottom-4 -left-4 w-6 h-6 text-primary animate-pulse delay-1000" />
            </div>
          </div>

          {/* Subtitle with glass effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-lg text-muted-foreground/90 max-w-2xl mx-auto relative"
          >
            <span className="relative inline-block px-6 py-3 backdrop-blur-sm bg-background/20 rounded-full border border-primary/20">
              Have an idea or project? Let's collaborate and create something amazing together
            </span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group/left relative"
          >
            {/* Glass border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-3xl opacity-0 group-hover/left:opacity-100 blur-md transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-3xl opacity-0 group-hover/left:opacity-75 blur-xl transition-all duration-500" />
            
            {/* Main content with glass effect */}
            <div className="relative backdrop-blur-xl bg-background/40 rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover/left:scale-x-100 transition-transform duration-700" />

              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="relative">
                  <span className="absolute inset-0 bg-primary/30 blur-lg rounded-full" />
                  <span className="relative bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </span>
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group/item relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 blur-md transition-opacity duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover/item:opacity-70 transition-opacity duration-300" />
                      <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg mb-1">Email</h4>
                      <a
                        href="mailto:mahapatradiptiranjan064@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm break-all"
                      >
                        mahapatradiptiranjan064@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group/item relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 blur-md transition-opacity duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover/item:opacity-70 transition-opacity duration-300" />
                      <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg mb-1">Phone</h4>
                      <a
                        href="tel:+917847874670"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        +91 7847874670
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group/item relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 blur-md transition-opacity duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover/item:opacity-70 transition-opacity duration-300" />
                      <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        📍 Based in Bhubaneswar, Odisha, India
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Connect */}
              <div className="mt-10 pt-6 border-t border-primary/20">
                <h4 className="font-medium text-lg mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Connect With Me
                </h4>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/diptiranjan-mahapatra-25321a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:mahapatradiptiranjan064@gmail.com", label: "Email" },
                    { icon: Instagram, href: "https://www.instagram.com/codesnax01?igsh=emt1NWozOXVxNHI0", label: "Instagram" },
                    { icon: Phone, href: "tel:+917847874670", label: "Phone" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="group/social relative"
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg opacity-0 group-hover/social:opacity-70 transition-opacity duration-300" />
                      <div className="relative p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300">
                        <social.icon size={20} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover/left:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover/left:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group/right relative"
          >
            {/* Glass border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-3xl opacity-0 group-hover/right:opacity-100 blur-md transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-3xl opacity-0 group-hover/right:opacity-75 blur-xl transition-all duration-500" />
            
            {/* Form container with glass effect */}
            <div className="relative backdrop-blur-xl bg-background/40 rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover/right:scale-x-100 transition-transform duration-700" />

              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Send a Message
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group/field relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl opacity-0 group-hover/field:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50"
                      placeholder="Diptiranjan Mahapatra..."
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="group/field relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl opacity-0 group-hover/field:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50"
                      placeholder="mahapatradiptiranjan064@gmail.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="group/field relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl opacity-0 group-hover/field:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative w-full overflow-hidden rounded-xl p-[2px]"
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Button background */}
                  <div className="relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-semibold text-lg">
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    {!isSubmitting && (
                      <Send size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    )}
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.button>
              </form>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl opacity-0 group-hover/right:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl opacity-0 group-hover/right:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
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
      `}</style>
    </section>
  );
};