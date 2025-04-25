import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const courseOutcomes = [
  {
    icon: "✍️",
    title: "Write Proposals, Sermons & Social Posts",
    description: "Craft compelling content that resonates with your audience using AI assistance."
  },
  {
    icon: "🎨",
    title: "Generate Stunning Visuals",
    description: "Create professional-quality images and graphics for your ministry or business."
  },
  {
    icon: "🧠",
    title: "Do Smart Research",
    description: "Rapidly gather insights and information to support your mission and vision."
  },
  {
    icon: "🛠️",
    title: "Launch & Grow a Business",
    description: "Leverage AI to streamline operations and scale your organization effectively."
  },
  {
    icon: "🙏",
    title: "Streamline Ministry Tasks",
    description: "Automate administrative work to focus more on your calling and community."
  },
  {
    icon: "🚀",
    title: "Multiply Your Kingdom Impact",
    description: "Bring all these skills together to extend your reach and deepen your influence.",
    featured: true
  }
];

const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="courses" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sf-pro-display mb-4">
            🎓 AI Demystified – Practical, Powerful, and Faith-Friendly
          </h2>
          <p className="text-lg md:text-xl font-sf-pro-text max-w-3xl mx-auto mt-6">
            8 hands-on lessons. No tech jargon. Real-time wins.
          </p>
          <p className="text-lg font-sf-pro-text max-w-3xl mx-auto mt-2">
            Taught by Jorge Iraheta, this course will help you create, grow, and lead with confidence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {courseOutcomes.map((outcome, index) => (
            <motion.div 
              key={index}
              className={`${outcome.featured ? 'bg-accent text-white' : 'bg-neutral'} rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]`}
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{outcome.icon}</div>
              <h3 className="text-xl font-bold font-sf-pro-display mb-3">{outcome.title}</h3>
              <p className={outcome.featured ? 'text-white/90' : 'text-primary/70'}>{outcome.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#" className="bg-primary text-white text-lg px-8 py-4 rounded-md inline-flex items-center font-sf-pro-display hover:bg-primary/90 transition-all transform hover:scale-105">
            ➡️ Explore the Course
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
