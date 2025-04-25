import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  return (
    <header className={`fixed w-full z-50 ${scrolled ? "bg-secondary/90 backdrop-blur-md shadow-sm" : "bg-transparent"} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold font-sf-pro-display">Jorge Iraheta</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection("about")} className="font-sf-pro-display hover:text-accent transition-colors">About</button>
          <button onClick={() => scrollToSection("courses")} className="font-sf-pro-display hover:text-accent transition-colors">Courses</button>
          <button onClick={() => scrollToSection("testimonials")} className="font-sf-pro-display hover:text-accent transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection("newsletter")} className="font-sf-pro-display hover:text-accent transition-colors">Newsletter</button>
          <button onClick={() => scrollToSection("newsletter")} className="bg-accent text-white px-4 py-2 rounded-md font-sf-pro-display hover:bg-accent/90 transition-colors">Get the Guide</button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden bg-white w-full absolute left-0 shadow-md z-50"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("about")} className="py-2 font-sf-pro-display text-left">About</button>
            <button onClick={() => scrollToSection("courses")} className="py-2 font-sf-pro-display text-left">Courses</button>
            <button onClick={() => scrollToSection("testimonials")} className="py-2 font-sf-pro-display text-left">Testimonials</button>
            <button onClick={() => scrollToSection("newsletter")} className="py-2 font-sf-pro-display text-left">Newsletter</button>
            <button onClick={() => scrollToSection("newsletter")} className="bg-accent text-white px-4 py-2 rounded-md font-sf-pro-display text-center">Get the Guide</button>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
