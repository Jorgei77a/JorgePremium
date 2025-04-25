import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Track cursor position for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    }
  };
  
  // Calculate background gradient position based on mouse movement
  const gradientPosition = {
    x: useTransform(
      mouseX,
      [0, 1000],
      ["-20%", "120%"]
    ),
    y: useTransform(
      mouseY,
      [0, 1000],
      ["-20%", "120%"]
    ),
  };

  // Auto-animation for background effect when mouse isn't moving
  useEffect(() => {
    let animationFrameId: number;
    let angle = 0;
    const radius = 200;
    
    const animate = () => {
      // Only animate if mouse hasn't moved recently
      if (heroRef.current) {
        const centerX = heroRef.current.offsetWidth / 2;
        const centerY = heroRef.current.offsetHeight / 2;
        
        // Calculate position along a circle
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Slowly move the gradient around when mouse isn't active
        if (mousePosition.x === 0 && mousePosition.y === 0) {
          mouseX.set(x);
          mouseY.set(y);
        }
        
        angle += 0.002; // Speed of rotation
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center hero-gradient text-secondary px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      
      {/* Interactive glow that follows cursor */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0) 50%)",
          backgroundSize: "200% 200%",
          backgroundPosition: "center",
          "--mouse-x": gradientPosition.x,
          "--mouse-y": gradientPosition.y,
        } as any}
      ></motion.div>
      
      {/* Red vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
      
      {/* Animated red "scan line" effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: [0, 0.1, 0],
          y: ['-100%', '200%'] 
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear"
        }}
      >
        <div className="w-full h-20 bg-gradient-to-b from-transparent via-red-500/10 to-transparent"></div>
      </motion.div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 space-y-8 md:pr-12">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-sf-pro-display leading-tight text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                textShadow: `0 0 ${Math.min(
                  30,
                  Math.max(10, (Math.abs(mousePosition.x - window.innerWidth / 2) + Math.abs(mousePosition.y - window.innerHeight / 2)) / 80)
                )}px rgba(255, 50, 50, 0.4)`
              }}
            >
              Master AI.<br />
              Lead With Vision.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-sf-pro-text mb-8 max-w-2xl text-secondary/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                textShadow: `0 0 ${Math.min(
                  15,
                  Math.max(5, (Math.abs(mousePosition.x - window.innerWidth / 2) + Math.abs(mousePosition.y - window.innerHeight / 2)) / 120)
                )}px rgba(255, 50, 50, 0.3)`
              }}
            >
              Helping mission-driven leaders simplify AI, save time, and multiply their Kingdom impact — without the tech overwhelm.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="button-glow"
            >
              <a 
                href="#newsletter" 
                className="bg-accent text-white text-lg px-8 py-4 rounded-md inline-flex items-center font-sf-pro-display hover:bg-accent/90 transition-all transform hover:shadow-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Claim Your Free AI Guide
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative float-animation">
              {/* Pulsing background circle */}
              <motion.div 
                className="w-72 h-72 rounded-full bg-red-500/20 absolute -top-4 -left-4"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 50, 50, 0.3)",
                    "0 0 40px rgba(255, 50, 50, 0.6)",
                    "0 0 20px rgba(255, 50, 50, 0.3)",
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Profile circle */}
              <motion.div 
                className="w-72 h-72 rounded-full overflow-hidden relative z-10 border-4 border-red-500/20 backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(255, 50, 50, 0.6)",
                  borderColor: "rgba(255, 50, 50, 0.4)"
                }}
              >
                <svg 
                  className="w-full h-full text-white"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="profileGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#330000" />
                      <stop offset="100%" stopColor="#110000" />
                    </radialGradient>
                  </defs>
                  <rect width="200" height="200" fill="url(#profileGradient)" />
                  
                  {/* Professional avatar icon */}
                  <g transform="translate(50, 50) scale(0.5)">
                    <circle cx="100" cy="70" r="40" fill="#ffffff" />
                    <path d="M100 150 Q 60 120 60 80 A 40 40 0 0 1 140 80 Q 140 120 100 150 Z" fill="#ffffff" />
                    <path d="M160 170 Q 130 120 100 150 Q 70 120 40 170 Q 70 190 100 190 Q 130 190 160 170 Z" fill="#ffffff" />
                  </g>
                  
                  <text x="50%" y="160" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="14px" fontFamily="SF Pro Display, sans-serif">
                    Jorge Iraheta
                  </text>
                </svg>
                
                {/* Add subtle red glow on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-red-500/0 via-red-500/0 to-red-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
