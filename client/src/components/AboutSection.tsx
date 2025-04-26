import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jorgePhoto from "../assets/jorhephoto.jpg";

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
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 border-2 border-primary/20"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(0, 122, 255, 0.5)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={jorgePhoto} 
                  alt="Jorge Iraheta" 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle color treatment overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent mix-blend-overlay"></div>
                
                {/* Name overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2">
                  <span className="text-white text-sm font-sf-pro-display">Jorge Iraheta</span>
                </div>
              </motion.div>
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
