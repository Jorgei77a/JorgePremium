import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "Jorge demystified the fear and the reservations I had. Now I feel like I can actually do it.",
    author: "T.T.",
    title: "Ministry Leader"
  },
  {
    quote: "This class will boost your productivity, increase your creativity, and streamline your workflow.",
    author: "K.T.",
    title: "Business Owner"
  },
  {
    quote: "Although I'm 78 years old, I could understand your explanation about AI.",
    author: "C.J.",
    title: "Retired Pastor"
  }
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="testimonials" className="py-24 bg-neutral overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sf-pro-display mb-4">
            From Ministry to Marketplace<br />
            <span className="text-accent">Real Wins With AI</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              variants={itemVariants}
            >
              <div className="p-8 relative">
                <svg className="w-12 h-12 text-accent/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="text-lg font-sf-pro-text mb-6 mt-2 relative z-10">
                  "{testimonial.quote}"
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.author}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold font-sf-pro-display">{testimonial.author}</div>
                    <div className="text-sm text-primary/60">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
