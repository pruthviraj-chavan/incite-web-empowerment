import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroImages = memo(() => {
  const images = ['/hero/122.jpg', '/hero/232.jpg', '/hero/3.jpg', '/hero/4.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleEnrollNow = () => {
    window.open("https://wa.me/919423281767?text=नमस्कार,%20मला%20इन्साईट%20कंप्युटर्स%20कोर्सेसमध्ये%20रुची%20आहे.%20कृपया%20अधिक%20माहिती%20द्या.", "_blank");
  };

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium tracking-wide">
            २००१ पासून | राधानगरी, कोल्हापूर
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">इनसाईट  कॉम्प्युटर्स</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 font-normal text-white/90">
            मध्ये आपले स्वागत आहे!
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ग्रामीण भारताला डिजिटल कौशल्यांसह सक्षम करणारी प्रमुख संगणक प्रशिक्षण संस्था.
          MS-CIT, Tally, Programming आणि बरेच काही शिका!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={handleEnrollNow}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              आता प्रवेश घ्या
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <Link
            to="/courses"
            className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              कोर्सेस पहा
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

HeroImages.displayName = "HeroImages";

export default HeroImages;