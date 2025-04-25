import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold font-sf-pro-display mb-4">Jorge Iraheta</div>
            <p className="text-primary/70 max-w-sm">
              Helping mission-driven leaders harness AI with clarity and purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold font-sf-pro-display mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#courses" className="hover:text-accent transition-colors">Courses</a></li>
                <li><a href="#newsletter" className="hover:text-accent transition-colors">Newsletter</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold font-sf-pro-display mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#newsletter" className="hover:text-accent transition-colors">Free Guide</a></li>
                <li><a href="#courses" className="hover:text-accent transition-colors">AI Course</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Speaking</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold font-sf-pro-display mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:contact@jorgeiraheta.com" className="hover:text-accent transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Jorge Iraheta. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
