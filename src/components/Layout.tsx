
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

  // Reduced animation variants for better performance
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.2,
    ease: "easeInOut",
  };

  // Reduced gradient elements for better performance
  const gradientElements = useMemo(() => [
    { width: 200, height: 200, top: "10%", left: "-5%", delay: 0, duration: 20 },
    { width: 150, height: 150, bottom: "15%", right: "-3%", delay: 2, duration: 22 },
  ], []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-purple-50/10">
      {/* Reduced background gradient elements for performance */}
      {gradientElements.map((el, i) => (
        <motion.div
          key={i}
          className={`fixed blur-[100px] rounded-full opacity-10 z-0 ${gradientType}`}
          style={{
            width: el.width,
            height: el.height,
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
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

      <Navbar />
      <motion.main 
        className="flex-grow relative z-10 pt-16 md:pt-20"
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
