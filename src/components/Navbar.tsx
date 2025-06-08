
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
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "glass py-2 shadow-blue"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">Incite Computers</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors hover:text-incite-blue-dark",
                  isActive
                    ? "gradient-text font-semibold"
                    : "text-gray-700"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button className="gradient-blue text-white ml-4 btn-hover">
            <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
              Enroll Now
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass shadow-md animate-slide-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md font-medium transition-colors",
                    isActive
                      ? "gradient-text font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="gradient-blue text-white btn-hover w-full">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="w-full">
                Enroll Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
