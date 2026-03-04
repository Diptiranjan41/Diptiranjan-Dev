import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-pulse-slower" />
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] animate-spin-slow" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main footer container with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-700" />
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />
          
          {/* Main glass container */}
          <div className="relative backdrop-blur-xl bg-background/40 rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700" />
            
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {/* Left section - Brand and copyright */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center md:text-left relative group/brand"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl opacity-0 group-hover/brand:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Logo/Brand with glass effect */}
                  <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover/brand:opacity-70 transition-opacity duration-300" />
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                        <Sparkles size={16} className="text-primary" />
                      </div>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Diptiranjan.co
                    </span>
                  </div>

                  {/* Copyright text with glass effect */}
                  <p className="text-sm text-muted-foreground/90 backdrop-blur-sm bg-background/20 px-4 py-2 rounded-full border border-primary/10 inline-block">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-primary">
                      Diptiranjan.co
                    </span>
                    . All rights reserved.
                  </p>

                  {/* Crafted with love text */}
                  <motion.p
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-xs text-muted-foreground/70 mt-3 flex items-center gap-1 justify-center md:justify-start"
                  >
                    <span>Crafted with</span>
                    <Heart size={12} className="text-red-500 animate-pulse" />
                    <span>by</span>
                    <span className="font-medium text-primary">Diptiranjan</span>
                  </motion.p>
                </div>
              </motion.div>

              {/* Right section - Back to top button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn"
              >
                {/* Glow rings */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-2 border border-primary/30 rounded-full animate-ping-slow opacity-0 group-hover/btn:opacity-100" />
                
                {/* Button with glass effect */}
                <button
                  onClick={scrollToTop}
                  className="relative w-14 h-14 rounded-full backdrop-blur-md bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-xl flex items-center justify-center group/arrow"
                  aria-label="Scroll to top"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity duration-300" />
                  
                  {/* Arrow icon with animation */}
                  <ArrowUp 
                    size={24} 
                    className="text-primary group-hover/arrow:-translate-y-1 transition-transform duration-300" 
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 rounded-full" />
                </button>

                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-background/80 backdrop-blur-md px-2 py-1 rounded border border-primary/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Back to Top
                </span>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-700" />
          </div>
        </motion.div>

        {/* Additional floating sparkles */}
        <div className="absolute -top-6 left-1/4 text-primary/30 animate-pulse">
          <Sparkles size={16} />
        </div>
        <div className="absolute -bottom-6 right-1/4 text-primary/30 animate-pulse delay-700">
          <Sparkles size={16} />
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
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
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};