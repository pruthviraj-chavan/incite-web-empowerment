
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 gradient-text">Incite Computers</h3>
            <p className="text-gray-600 mb-4">
              Empowering Rural India with Digital Skills since 2001.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-incite-blue transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-incite-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-incite-blue transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-incite-blue transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">MS-CIT</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">KLiCK Courses</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-incite-blue transition-colors">Programming</Link></li>
              <li><Link to="/vishwakarma" className="text-gray-600 hover:text-incite-blue transition-colors">PM Vishwakarma</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-incite-blue mt-1 flex-shrink-0" />
                <span className="text-gray-600">Radhanagari, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-incite-blue flex-shrink-0" />
                <span className="text-gray-600">+91 9423281767</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-incite-blue flex-shrink-0" />
                <span className="text-gray-600">contact@incitecomputers.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Incite Computers, Radhanagari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
