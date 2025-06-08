
import { useState, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [gradientType, setGradientType] = useState("default");
  
  // Get different gradient colors based on the page
  useEffect(() => {
    if (location.pathname === "/") {
      setGradientType("gradient-blue-to-orange");
    } else if (location.pathname === "/about") {
      setGradientType("gradient-blue-purple");
    } else if (location.pathname === "/courses") {
      setGradientType("gradient-orange-pink");
    } else if (location.pathname === "/gallery") {
      setGradientType("gradient-green-blue");
    } else if (location.pathname === "/blog" || location.pathname.startsWith("/blog/")) {
      setGradientType("gradient-blue-purple");
    } else if (location.pathname === "/ai-tools") {
      setGradientType("gradient-purple-pink");
    } else if (location.pathname === "/internship") {
      setGradientType("gradient-green-blue");
    } else if (location.pathname === "/contact") {
      setGradientType("gradient-cyan");
    } else {
      setGradientType("gradient-blue-to-orange"); // default
    }
  }, [location.pathname]);

  // Animation variants for page transition
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.4,
    ease: "easeInOut",
  };

  // Enhanced gradient elements with more dynamic animations
  const gradientElements = useMemo(() => [
    { width: 320, height: 320, top: "5%", left: "-8%", delay: 0, duration: 25 },
    { width: 280, height: 280, bottom: "10%", right: "-6%", delay: 3, duration: 28 },
    { width: 200, height: 200, top: "50%", left: "80%", delay: 6, duration: 22 },
  ], []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Enhanced background gradient elements */}
      {gradientElements.map((el, i) => (
        <motion.div
          key={i}
          className={`fixed blur-[140px] rounded-full opacity-15 z-0 ${gradientType}`}
          style={{
            width: el.width,
            height: el.height,
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
          }}
          animate={{
            x: [0, 30, -10, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: el.delay,
          }}
        />
      ))}

      {/* Floating particles animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-incite-blue to-incite-purple rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <Navbar />
      <motion.main 
        className="flex-grow relative z-10"
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
