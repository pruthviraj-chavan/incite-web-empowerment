import { motion } from 'framer-motion';
import { Presentation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PPTPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-6">
              <Presentation className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Interactive Presentations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Incite Computers
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-purple-300 font-normal">
                राधानगरी - Educational Presentation
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive presentation showcasing our courses, facilities, 
              achievements, and the opportunities we offer to students in Radhanagari.
            </p>
            
            <a 
              href="https://incite-computer--1uro8np.gamma.site/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Full Screen
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Embedded Presentation */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-sm opacity-50"></div>
            
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-2 border border-purple-500/20">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 rounded-t-xl border-b border-purple-500/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-400">Incite Computer - राधानगरी Presentation</span>
                </div>
              </div>
              
              {/* Iframe container */}
              <div className="aspect-video w-full">
                <iframe 
                  src="https://gamma.app/embed/ek719x5ywuof25w" 
                  className="w-full h-full rounded-b-xl"
                  allow="fullscreen" 
                  title="Incite Computer, राधानगरी"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎓',
                title: 'Professional Courses',
                description: 'MS-CIT, Tally, Programming, and more career-oriented courses'
              },
              {
                icon: '💻',
                title: 'Modern Infrastructure',
                description: 'State-of-the-art computer labs with latest technology'
              },
              {
                icon: '🏆',
                title: 'Proven Results',
                description: '2000+ successful students placed in various industries'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPTPage;
