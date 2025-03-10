
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
    } else if (location.pathname === "/vishwakarma") {
      setGradientType("gradient-yellow-orange");
    } else if (location.pathname === "/contact") {
      setGradientType("gradient-cyan");
    } else {
      setGradientType("gradient-blue-to-orange"); // default
    }
  }, [location.pathname]);

  // Animation variants for page transition - simplified
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
    duration: 0.3,
  };

  // Optimized with useMemo - fewer and more efficient gradient elements
  const gradientElements = useMemo(() => [
    { width: 280, height: 280, top: "5%", left: "-5%", delay: 0, duration: 20 },
    { width: 230, height: 230, bottom: "15%", right: "-5%", delay: 2, duration: 22 },
  ], []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradient elements - reduced number and simplified animation */}
      {gradientElements.map((el, i) => (
        <motion.div
          key={i}
          className={`fixed blur-[120px] rounded-full opacity-10 z-0 ${gradientType}`}
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
            y: [0, 10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: el.delay,
          }}
        />
      ))}

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
