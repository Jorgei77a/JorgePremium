import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FinalCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 bg-primary text-secondary" ref={ref}>
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold font-sf-pro-display mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Start Your AI Journey Today
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl font-sf-pro-text max-w-3xl mx-auto mb-12 text-secondary/80"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          You were created with a purpose. This is your moment to lead boldly into the future — and I'll walk with you every step of the way.
        </motion.p>
        
        <motion.a 
          href="#newsletter" 
          className="bg-accent text-white text-xl px-10 py-5 rounded-md inline-flex items-center font-sf-pro-display hover:bg-accent/90 transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          🚀 Get the Free Guide + Join the Movement
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
