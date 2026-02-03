import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Courses", to: "/courses" },
    { name: "IT Services", to: "/it-services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Blog", to: "/blog" },
    { name: "PPT", to: "/ppt" },
    { name: "AI Tools", to: "/ai-tools" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md py-2 shadow-md border-b border-gray-100"
            : "bg-white py-3 shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png"
              alt="Incite Computers"
              className="h-9 w-9 md:h-11 md:w-11 object-contain"
            />
            <span className="text-lg md:text-xl font-bold gradient-text">
              Incite Computers
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-incite-blue bg-incite-blue/10"
                      : "text-gray-600 hover:text-incite-blue hover:bg-gray-50"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="gradient-blue text-white ml-3 shadow-sm" size="sm">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 shadow-2xl transition-transform duration-200 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-gray-800">Menu</span>
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-incite-blue to-incite-purple text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <a 
            href="https://wa.me/919423281767" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block"
          >
            <Button className="w-full gradient-blue text-white py-5">
              💬 Enroll Now
            </Button>
          </a>
          <p className="text-center text-xs text-gray-400 mt-3">
            📞 9423281767
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
