import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronRight, Phone, Mail } from "lucide-react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "/", icon: "🏠" },
    { name: "About Us", to: "/about", icon: "ℹ️" },
    { name: "Courses", to: "/courses", icon: "📚" },
    { name: "IT Services", to: "/it-services", icon: "💻" },
    { name: "Gallery", to: "/gallery", icon: "📸" },
    { name: "Blog", to: "/blog", icon: "📝" },
    { name: "PPT", to: "/ppt", icon: "📊" },
    { name: "AI Tools", to: "/ai-tools", icon: "🤖" },
    { name: "Contact", to: "/contact", icon: "📞" },
  ];

  return (
    <>
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
            className="lg:hidden text-gray-700 focus:outline-none p-2 rounded-xl hover:bg-incite-blue/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-[60] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white z-10"
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <div className="pt-6 px-6">
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png"
                  alt="Incite Computers Logo"
                  className="h-12 w-12 object-contain"
                />
                <span className="text-2xl font-bold text-white">Incite Computers</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="px-4 py-4 overflow-y-auto max-h-[calc(100vh-280px)]">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300",
                          isActive
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                            : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                        )
                      }
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-medium text-lg">{link.name}</span>
                      <ChevronRight className="w-5 h-5 ml-auto opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md border-t border-white/10">
              {/* Contact Info */}
              <div className="flex items-center gap-4 mb-4">
                <a href="tel:+919423281767" className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 text-white">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-sm">9423281767</span>
                </a>
                <a href="mailto:incitecomputer@gmail.com" className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 text-white">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-sm truncate">Email</span>
                </a>
              </div>

              {/* CTA Button */}
              <a 
                href="https://wa.me/919423281767" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <Button className="w-full py-6 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl shadow-lg">
                  💬 Enroll Now on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
