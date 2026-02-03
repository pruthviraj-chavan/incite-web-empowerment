import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "IT Services", to: "/it-services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Blog", to: "/blog" },
    { name: "PPT", to: "/ppt" },
    { name: "AI Tools", to: "/ai-tools" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "glass py-1 md:py-2 shadow-lg shadow-blue-500/10 backdrop-blur-xl border-b border-white/20"
          : "bg-white/90 backdrop-blur-sm py-2 md:py-4 shadow-md shadow-blue-500/5"
      )}
    >
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 md:gap-3 group">
          <motion.img
            src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png"
            alt="Incite Computers Logo"
            className="h-8 w-8 md:h-12 md:w-12 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <motion.span 
            className="text-lg md:text-2xl font-bold gradient-text transition-all duration-200"
          >
            Incite Computers
          </motion.span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "font-medium transition-all duration-200 hover:text-incite-blue-dark relative group px-3 py-2 rounded-lg",
                  isActive
                    ? "gradient-text font-semibold bg-gradient-to-r from-incite-blue/10 to-incite-purple/10"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-incite-blue/5 hover:to-incite-purple/5"
                )
              }
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-incite-blue to-incite-purple transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </NavLink>
          ))}
          <Button className="gradient-blue text-white ml-4 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
            <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
              Enroll Now
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none p-1 md:p-2 rounded-lg hover:bg-incite-blue/10 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden glass shadow-lg shadow-blue-500/10 border-t border-white/20 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-3 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 rounded-lg font-medium transition-all duration-200 block text-sm",
                      isActive
                        ? "gradient-text font-semibold bg-gradient-to-r from-incite-blue/20 to-incite-purple/20"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-incite-blue/10 hover:to-incite-purple/10"
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button className="gradient-blue text-white transition-all duration-200 w-full mt-2 text-sm py-2 shadow-md">
                <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="w-full">
                  Enroll Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
