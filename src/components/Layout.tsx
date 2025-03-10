
import { useState, useEffect } from "react";
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
    ease: "anticipate",
    duration: 0.4,
  };

  // Animated background gradient elements
  const gradientElements = [
    { width: 300, height: 300, top: "5%", left: "-5%", delay: 0, duration: 15 },
    { width: 250, height: 250, top: "10%", right: "-5%", delay: 2, duration: 18 },
    { width: 200, height: 200, bottom: "15%", left: "10%", delay: 1, duration: 20 },
    { width: 180, height: 180, bottom: "5%", right: "5%", delay: 3, duration: 17 },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradient elements */}
      {gradientElements.map((el, i) => (
        <motion.div
          key={i}
          className={`fixed blur-[150px] rounded-full opacity-10 z-0 ${gradientType}`}
          style={{
            width: el.width,
            height: el.height,
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
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
