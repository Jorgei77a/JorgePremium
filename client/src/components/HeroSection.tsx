import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-secondary px-6 pt-24 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 space-y-8 md:pr-12">
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
              className="text-xl md:text-2xl font-sf-pro-text mb-8 max-w-2xl text-secondary/80"
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
            className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-accent/20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 rounded-full overflow-hidden relative z-10 border-4 border-secondary/20">
                <svg 
                  className="w-full h-full text-white"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="200" height="200" fill="#111" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="16px">
                    Jorge Iraheta
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
