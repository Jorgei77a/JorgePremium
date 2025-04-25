import { motion } from "framer-motion";
import heroBackground from "../assets/hero-bg.jpg";
import jorgeImage from "../assets/jorge.png";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center text-secondary px-6 pt-24 pb-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 space-y-8 md:pr-12">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-sf-pro-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Master AI.<br />
              Lead With Vision.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-sf-pro-text mb-8 max-w-2xl text-secondary/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Helping mission-driven leaders simplify AI, save time, and multiply their Kingdom impact — without the tech overwhelm.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#newsletter" 
                className="bg-accent text-white text-lg px-8 py-4 rounded-md inline-flex items-center font-sf-pro-display hover:bg-accent/90 transition-all transform hover:scale-105"
              >
                🔆 Claim Your Free AI Guide
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-2/5 mt-12 md:mt-0 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <div className="w-full md:w-[500px] md:h-[500px] relative z-10">
                <img 
                  src={jorgeImage} 
                  alt="Jorge Iraheta" 
                  className="w-full h-full object-contain scale-125"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
