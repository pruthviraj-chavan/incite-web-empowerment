
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Instagram, Mail, Phone } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle WhatsApp inquiry
  const handleWhatsAppInquiry = () => {
    window.open("https://wa.me/919423281767?text=Hello,%20I'm%20interested%20in%20Incite%20Computers%20courses.%20Please%20provide%20more%20information.", "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">
                <span className="gradient-text">Incite</span>
                <span className="gradient-text-orange">Computers</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" active={isActive("/")}>Home</NavLink>
              <NavLink to="/about" active={isActive("/about")}>About Us</NavLink>
              <NavLink to="/courses" active={isActive("/courses")}>Courses</NavLink>
              <NavLink to="/gallery" active={isActive("/gallery")}>Gallery</NavLink>
              <NavLink to="/vishwakarma" active={isActive("/vishwakarma")}>PM Vishwakarma</NavLink>
              <NavLink to="/contact" active={isActive("/contact")}>Contact</NavLink>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={handleWhatsAppInquiry}
                className="gradient-blue text-white rounded-full px-6 py-2 font-medium shadow-blue btn-hover"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-gray-100 animate-slide-down">
            <div className="px-4 py-2 space-y-1">
              <MobileNavLink to="/" active={isActive("/")}>Home</MobileNavLink>
              <MobileNavLink to="/about" active={isActive("/about")}>About Us</MobileNavLink>
              <MobileNavLink to="/courses" active={isActive("/courses")}>Courses</MobileNavLink>
              <MobileNavLink to="/gallery" active={isActive("/gallery")}>Gallery</MobileNavLink>
              <MobileNavLink to="/vishwakarma" active={isActive("/vishwakarma")}>PM Vishwakarma</MobileNavLink>
              <MobileNavLink to="/contact" active={isActive("/contact")}>Contact</MobileNavLink>
              
              <div className="pt-2">
                <button 
                  onClick={handleWhatsAppInquiry}
                  className="w-full gradient-blue text-white rounded-full px-6 py-2 font-medium shadow-blue"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4 gradient-text">About Incite Computers</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2001, Incite Computers is dedicated to empowering rural India with digital skills and technological education.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-incite-blue hover:text-incite-blue-dark transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-incite-blue hover:text-incite-blue-dark transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4 gradient-text">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-incite-blue transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-incite-blue transition-colors">About Us</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">Courses</Link></li>
                <li><Link to="/gallery" className="text-gray-600 hover:text-incite-blue transition-colors">Gallery</Link></li>
                <li><Link to="/vishwakarma" className="text-gray-600 hover:text-incite-blue transition-colors">PM Vishwakarma</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-incite-blue transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Popular Courses */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4 gradient-text">Popular Courses</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">MS-CIT</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">KLiCK Courses</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">Tally</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">Programming</Link></li>
                <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">IT Hardware</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4 gradient-text">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-3 text-incite-blue mt-1"><Mail size={16} /></div>
                  <p className="text-gray-600">info@incitecomputers.com</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-incite-blue mt-1"><Phone size={16} /></div>
                  <p className="text-gray-600">+91 9423281767</p>
                </div>
                <button 
                  onClick={handleWhatsAppInquiry}
                  className="gradient-blue text-white rounded-full px-6 py-2 font-medium shadow-blue btn-hover"
                >
                  WhatsApp Inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Incite Computers, Radhanagari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Desktop Nav Link Component
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      active 
        ? "text-incite-blue" 
        : "text-gray-700 hover:text-incite-blue"
    }`}
  >
    {children}
  </Link>
);

// Mobile Nav Link Component
const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      active 
        ? "text-incite-blue" 
        : "text-gray-700 hover:text-incite-blue"
    }`}
  >
    {children}
  </Link>
);

export default Layout;
