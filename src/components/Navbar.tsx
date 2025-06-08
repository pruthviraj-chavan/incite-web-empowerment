
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled
            ? "glass py-2 shadow-xl shadow-blue-500/10 backdrop-blur-xl border-b border-white/20"
            : "bg-white/90 backdrop-blur-sm py-3 shadow-lg shadow-blue-500/5"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group z-10">
            <img
              src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png"
              alt="Incite Computers Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">
              Incite Computers
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-medium transition-all duration-300 hover:text-incite-blue-dark relative group px-3 py-2 rounded-lg text-sm",
                    isActive
                      ? "gradient-text font-semibold bg-gradient-to-r from-incite-blue/10 to-incite-purple/10"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-incite-blue/5 hover:to-incite-purple/5"
                  )
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-incite-blue to-incite-purple transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavLink>
            ))}
            <Button className="gradient-blue text-white ml-4 shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-incite-blue/10 transition-colors duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
        )}

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 max-w-[85vw] glass shadow-2xl transform transition-transform duration-300 z-50 lg:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <span className="text-lg font-bold gradient-text">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-incite-blue/10 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "block px-6 py-4 font-medium transition-all duration-300 border-b border-white/10",
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
            </div>
            
            <div className="p-4 border-t border-white/20">
              <Button 
                className="gradient-blue text-white w-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="w-full">
                  Enroll Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
