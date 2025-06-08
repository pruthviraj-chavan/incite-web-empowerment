
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Courses", to: "/courses" },
    { name: "Gallery", to: "/gallery" },
    { name: "Blog", to: "/blog" },
    { name: "AI Tools", to: "/ai-tools" },
    { name: "Internship", to: "/internship" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled
          ? "glass py-2 shadow-2xl shadow-blue-500/20 backdrop-blur-xl border-b border-white/20"
          : "bg-white/80 backdrop-blur-sm py-4 shadow-lg shadow-blue-500/10"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.img
            src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png"
            alt="Incite Computers Logo"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            whileHover={{ rotate: 5 }}
          />
          <motion.span 
            className="text-2xl font-bold gradient-text transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Incite Computers
          </motion.span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-medium transition-all duration-300 hover:text-incite-blue-dark relative group px-3 py-2 rounded-lg",
                    isActive
                      ? "gradient-text font-semibold bg-gradient-to-r from-incite-blue/10 to-incite-purple/10"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-incite-blue/5 hover:to-incite-purple/5"
                  )
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-incite-blue to-incite-purple transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button className="gradient-blue text-white ml-4 btn-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-incite-blue/10 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        {isOpen && (
          <div className="glass shadow-2xl shadow-blue-500/20 border-t border-white/20 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-3 rounded-xl font-medium transition-all duration-300 block",
                        isActive
                          ? "gradient-text font-semibold bg-gradient-to-r from-incite-blue/20 to-incite-purple/20"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-incite-blue/10 hover:to-incite-purple/10"
                      )
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button className="gradient-blue text-white btn-hover w-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="w-full">
                    Enroll Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
