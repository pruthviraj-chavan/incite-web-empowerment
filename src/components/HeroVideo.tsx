import { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroVideo = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play muted first, then unmute when section is visible
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          setIsMuted(false);
        } else {
          video.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleEnrollNow = () => {
    window.open("https://wa.me/919423281767?text=नमस्कार,%20मला%20इन्साईट%20कंप्युटर्स%20कोर्सेसमध्ये%20रुची%20आहे.%20कृपया%20अधिक%20माहिती%20द्या.", "_blank");
  };

  return (
    <section ref={sectionRef} className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/incite_computer_mscit_2023_720P.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

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
          <span className="block">इन्साइट कॉम्प्युटर्स</span>
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
          <motion.button
            onClick={handleEnrollNow}
            className="bg-white text-gray-900 font-semibold rounded-full px-8 py-3.5 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            आता नोंदणी करा <ArrowRight size={18} />
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/courses"
              className="border border-white/40 bg-white/10 backdrop-blur-sm text-white rounded-full px-8 py-3.5 font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            >
              अभ्यासक्रम शोधा <ChevronRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mute toggle */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
});

HeroVideo.displayName = 'HeroVideo';
export default HeroVideo;
