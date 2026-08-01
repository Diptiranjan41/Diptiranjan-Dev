import { ArrowUp, Sparkles, Heart, Code, Zap } from "lucide-react";
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
        {/* Main footer container with glass effect - border removed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Glowing border effect - removed */}
          {/* Main glass container without border */}
          <div className="relative backdrop-blur-xl bg-background/40 rounded-3xl p-8 shadow-2xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700" />
            
            {/* Decorative corner elements - removed */}
            {/* <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {/* Left section - Brand and copyright */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center md:text-left relative group/brand"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl opacity-0 group-hover/brand:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Logo/Brand with creative design */}
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover/brand:opacity-70 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Code size={20} className="text-primary" />
                      </div>
                    </div>
                    <div className="relative">
                      <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 block">
                        Diptiranjan
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                          ✦ Software Engineer
                        </span>
                        <Zap size={12} className="text-primary/60 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Creative tagline with glass effect */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent blur-xl" />
                    <p className="relative text-sm text-muted-foreground/80 max-w-md mx-auto md:mx-0 leading-relaxed backdrop-blur-sm bg-background/20 px-4 py-2 rounded-xl border border-primary/10">
                      <span className="text-primary font-medium">✦</span> Building innovative web solutions with modern technologies.
                      <span className="block text-xs text-muted-foreground/60 mt-1.5 tracking-wider">
                        <span className="inline-block px-2 py-0.5 bg-primary/5 rounded border border-primary/10 mx-0.5">React</span>
                        <span className="mx-1 text-primary/30">•</span>
                        <span className="inline-block px-2 py-0.5 bg-primary/5 rounded border border-primary/10 mx-0.5">Node.js</span>
                        <span className="mx-1 text-primary/30">•</span>
                        <span className="inline-block px-2 py-0.5 bg-primary/5 rounded border border-primary/10 mx-0.5">Python</span>
                        <span className="mx-1 text-primary/30">•</span>
                        <span className="inline-block px-2 py-0.5 bg-primary/5 rounded border border-primary/10 mx-0.5">AI/ML</span>
                      </span>
                    </p>
                  </div>

                  {/* Creative copyright with unique design */}
                  <div className="mt-5 flex items-center gap-3 justify-center md:justify-start">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
                      <span className="text-xs font-light text-muted-foreground/50">
                        &copy; {new Date().getFullYear()}
                      </span>
                      <span className="w-px h-3 bg-primary/20" />
                      <span className="text-xs font-light text-muted-foreground/60">
                        All Rights Reserved
                      </span>
                    </div>
                  </div>

                  {/* Creative "Made with love" with unique styling */}
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="mt-3 flex items-center gap-2 justify-center md:justify-start"
                  >
                    <span className="text-xs text-muted-foreground/30 font-light tracking-wider uppercase">
                      Made with
                    </span>
                    <div className="relative group/heart">
                      <Heart 
                        size={14} 
                        className="text-primary/50 group-hover/heart:scale-125 transition-transform duration-300 group-hover/heart:text-red-500" 
                      />
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover/heart:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-xs text-muted-foreground/30 font-light">by</span>
                    <span className="text-xs font-medium bg-gradient-to-r from-primary/60 to-primary/30 bg-clip-text text-transparent hover:from-primary hover:to-primary/60 transition-all duration-300 cursor-pointer">
                      Diptiranjan
                    </span>
                    <span className="text-xs text-muted-foreground/20">✦</span>
                  </motion.div>
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


