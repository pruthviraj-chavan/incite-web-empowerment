import { MapPin, Phone, Mail, MessageSquare, ArrowRight, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm p-2 border border-white/20">
                  <img 
                    src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png"
                    alt="Incite Computers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Incite Computers
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering Rural India with Digital Skills since 2001. Your trusted partner for quality computer education.
              </p>
              <div className="flex items-center gap-4">
                <motion.a 
                  href="https://wa.me/919423281767" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare size={18} />
                </motion.a>
                <motion.a 
                  href="tel:+919423281767" 
                  className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} />
                </motion.a>
                <motion.a 
                  href="mailto:contact@incitecomputers.in" 
                  className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/courses", label: "Courses" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/blog", label: "Blog" },
                ].map((link, index) => (
                  <motion.li 
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={link.to} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-400" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Services */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full" />
                Our Courses
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/courses", label: "MS-CIT" },
                  { to: "/courses", label: "Tally Classes" },
                  { to: "/courses", label: "Programming" },
                  { to: "/ai-tools", label: "AI Tools" },
                  { to: "/it-services", label: "IT Services" },
                ].map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={link.to} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-orange-400" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Radhanagari, Maharashtra, India
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300">
                    <Phone size={18} className="text-green-400" />
                  </div>
                  <div className="text-gray-400">
                    <a href="tel:+919423281767" className="hover:text-white transition-colors block">+91 9423281767</a>
                    <a href="tel:+918263031055" className="hover:text-white transition-colors block">+91 8263031055</a>
                  </div>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300">
                    <Mail size={18} className="text-purple-400" />
                  </div>
                  <a href="mailto:contact@incitecomputers.in" className="text-gray-400 hover:text-white transition-colors">
                    contact@incitecomputers.in
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-1">
                © {currentYear} Incite Computers | Made with 
                <Heart size={14} className="text-red-500 fill-red-500" /> 
                by 
                <a 
                  href="https://dievektor.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  dieVektor.tech
                  <ExternalLink size={12} />
                </a>
              </p>
              <p className="text-gray-500 text-sm">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
