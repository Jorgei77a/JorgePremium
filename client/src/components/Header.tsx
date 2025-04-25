import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

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

  return (
    <header className={`fixed w-full z-50 ${headerBgClass} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <a 
            href="#" 
            className={`text-xl font-bold font-sf-pro-display ${textColorClass} hover:text-glow`}
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
          className={`md:hidden focus:outline-none ${textColorClass}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden bg-primary/95 backdrop-blur-md w-full absolute left-0 shadow-md z-50 text-white"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {["about", "courses", "testimonials", "newsletter"].map((section) => (
              <motion.button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="py-2 font-sf-pro-display text-left"
                whileHover={{ 
                  x: 5, 
                  textShadow: "0 0 8px rgba(255, 50, 50, 0.7)", 
                  color: "#007AFF" 
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
            
            <motion.button 
              onClick={() => scrollToSection("newsletter")} 
              className="bg-accent text-white px-4 py-2 rounded-md font-sf-pro-display text-center"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 15px rgba(255, 50, 50, 0.7)" 
              }}
            >
              Get the Guide
            </motion.button>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
