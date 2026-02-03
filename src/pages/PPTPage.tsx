import { motion } from 'framer-motion';
import { Presentation, ExternalLink, Play, Maximize2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const PPTPage = () => {
  return (
    <>
      <Helmet>
        <title>Presentation | Incite Computers Radhanagari</title>
        <meta name="description" content="Interactive presentation about Incite Computers Radhanagari - Learn about our courses, facilities, and achievements." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative pt-28 md:pt-36 pb-8 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-4 md:mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs md:text-sm text-purple-300">Interactive Presentation</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Incite Computers
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-purple-300 font-medium mb-4 md:mb-6">
                राधानगरी - Educational Presentation
              </p>
              
              <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-xl mx-auto px-4">
                Explore our courses, facilities, achievements, and opportunities we offer to students
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
                <a 
                  href="https://incite-computer--1uro8np.gamma.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg shadow-purple-500/25">
                    <Maximize2 className="w-5 h-5 mr-2" />
                    Full Screen View
                  </Button>
                </a>
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl"
                  onClick={() => {
                    document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Here
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Embedded Presentation - Mobile Optimized */}
        <section id="presentation" className="py-8 md:py-12 px-3 md:px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Decorative frame - Hidden on mobile */}
              <div className="hidden md:block absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-sm opacity-50"></div>
              
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl p-1 md:p-2 border border-purple-500/20">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-slate-800/50 rounded-t-lg md:rounded-t-xl border-b border-purple-500/10">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs md:text-sm text-gray-400 truncate">Incite Computer Presentation</span>
                  </div>
                  <a 
                    href="https://incite-computer--1uro8np.gamma.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                {/* Iframe container - Adjusted for mobile */}
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe 
                    src="https://gamma.app/embed/ek719x5ywuof25w" 
                    className="absolute inset-0 w-full h-full rounded-b-lg md:rounded-b-xl"
                    allow="fullscreen" 
                    title="Incite Computer, राधानगरी"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Mobile Tip */}
              <div className="md:hidden mt-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 text-sm text-center">
                  💡 Tip: Tap the fullscreen button for better viewing experience
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Mobile Grid */}
        <section className="py-10 md:py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  icon: '🎓',
                  title: 'Professional Courses',
                  description: 'MS-CIT, Tally, Programming and more'
                },
                {
                  icon: '💻',
                  title: 'Modern Labs',
                  description: 'State-of-the-art computer facilities'
                },
                {
                  icon: '🏆',
                  title: 'Proven Results',
                  description: '2000+ successful students placed'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10 text-center"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-purple-500/30 text-center"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-300 text-sm md:text-base mb-5 md:mb-6">
                Join Incite Computers and build your career in technology
              </p>
              <a 
                href="https://wa.me/919423281767" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg">
                  💬 Contact Us on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PPTPage;
