import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-neutral" ref={ref}>
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sf-pro-display mb-4">Who is Jorge Iraheta?</h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
          <p className="text-xl md:text-2xl font-sf-pro-text max-w-3xl mx-auto">
            Creative Director. Ministry Leader. AI Educator.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-neutral absolute -bottom-4 -right-4 border border-primary/10"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 border-2 border-primary/20">
                <svg 
                  className="w-full h-full text-primary"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="aboutBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f5f5f7" />
                      <stop offset="100%" stopColor="#e5e5e7" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill="url(#aboutBgGradient)" />
                  
                  {/* Professional avatar icon */}
                  <g transform="translate(50, 45) scale(0.5)">
                    <circle cx="100" cy="70" r="40" fill="#333" />
                    <path d="M100 150 Q 60 120 60 80 A 40 40 0 0 1 140 80 Q 140 120 100 150 Z" fill="#333" />
                    <path d="M160 170 Q 130 120 100 150 Q 70 120 40 170 Q 70 190 100 190 Q 130 190 160 170 Z" fill="#333" />
                  </g>
                  
                  <text x="50%" y="160" dominantBaseline="middle" textAnchor="middle" fill="#111" fontSize="14px" fontFamily="SF Pro Display, sans-serif">
                    Jorge Iraheta
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3 space-y-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl">
              Jorge blends tech and mission, helping leaders and organizations harness AI with clarity and purpose.
            </p>
            
            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-2xl font-sf-pro-display">
              "Technology should serve your mission, not distract from it."
            </blockquote>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <svg className="h-8 text-primary/70" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="120" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="60" y="25" fontSize="10" textAnchor="middle" fill="currentColor">Christian International</text>
              </svg>
              
              <svg className="h-8 text-primary/70" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="120" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="60" y="25" fontSize="10" textAnchor="middle" fill="currentColor">Empower2000</text>
              </svg>
              
              <svg className="h-8 text-primary/70" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="120" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="60" y="25" fontSize="10" textAnchor="middle" fill="currentColor">Truth in Wisdom</text>
              </svg>
            </div>
            
            <div className="mt-8">
              <a href="#" className="border-2 border-primary text-primary px-6 py-3 rounded-md font-sf-pro-display inline-flex items-center hover:bg-primary hover:text-secondary transition-colors">
                Get to Know Jorge
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
