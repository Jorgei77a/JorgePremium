import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check if we're in the hero section
      const heroHeight = window.innerHeight;
      setIsHeroSection(scrollPosition < heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Determine header background styles based on scroll position and section
  const headerBgClass = scrolled 
    ? "bg-secondary/90 backdrop-blur-md shadow-sm" 
    : isHeroSection 
      ? "bg-transparent" 
      : "bg-primary/90 backdrop-blur-md";

  // Determine text color based on section
  const textColorClass = isHeroSection && !scrolled ? "text-white" : "";

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  // Menu item animation variants
  const itemVariants = {
    closed: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <header className={`fixed w-full z-50 ${headerBgClass} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <a 
            href="#" 
            className={`text-xl font-bold font-sf-pro-display ${textColorClass} hover:text-glow z-[60]`}
            style={{ 
              textShadow: isHeroSection && !scrolled ? "0 0 10px rgba(255, 50, 50, 0.5)" : "" 
            }}
          >
            Jorge Iraheta
          </a>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["about", "courses", "testimonials", "newsletter"].map((section) => (
            <motion.button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className={`font-sf-pro-display transition-colors ${textColorClass}`}
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0 0 10px rgba(255, 50, 50, 0.7)", 
                color: "#007AFF" 
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
          
          <motion.button 
            onClick={() => scrollToSection("newsletter")} 
            className="bg-accent text-white px-4 py-2 rounded-md font-sf-pro-display hover:bg-accent/90 transition-all"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 15px rgba(255, 50, 50, 0.7)" 
            }}
          >
            Get the Guide
          </motion.button>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className={`md:hidden focus:outline-none ${textColorClass} z-[60] relative`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>
      
      {/* Full Screen Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-6 h-full flex flex-col justify-center">
              <div className="space-y-8">
                {["about", "courses", "testimonials", "newsletter"].map((section) => (
                  <motion.div
                    key={section}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <motion.button 
                      onClick={() => scrollToSection(section)} 
                      className="py-4 font-sf-pro-display text-primary text-3xl font-semibold tracking-tight w-full text-left"
                      whileHover={{ 
                        x: 10, 
                        color: "#007AFF",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.button>
                  </motion.div>
                ))}
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-8"
                >
                  <motion.button 
                    onClick={() => scrollToSection("newsletter")} 
                    className="bg-accent hover:bg-accent/90 text-white text-xl px-6 py-4 rounded-md font-sf-pro-display inline-block w-full"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 15px rgba(255, 50, 50, 0.7)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get the Guide
                  </motion.button>
                </motion.div>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-auto mb-12"
              >
                <div className="border-t border-gray-100 pt-8 mt-12">
                  <p className="text-gray-400 text-sm font-sf-pro-text">
                    © {new Date().getFullYear()} Jorge Iraheta. All rights reserved.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
