
import { useState, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
      setGradientType("gradient-blue-to-orange");
    }
  }, [location.pathname]);

  // Simplified gradient elements with reduced animations for better performance
  const gradientElements = useMemo(() => [
    { width: 250, height: 250, top: "10%", left: "-5%", delay: 0 },
    { width: 200, height: 200, bottom: "15%", right: "-3%", delay: 2 },
  ], []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-purple-50/10">
      {/* Simplified background gradient elements */}
      {gradientElements.map((el, i) => (
        <div
          key={i}
          className={`fixed blur-[120px] rounded-full opacity-10 z-0 ${gradientType}`}
          style={{
            width: el.width,
            height: el.height,
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
            animation: `float ${15 + i * 5}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}

      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
