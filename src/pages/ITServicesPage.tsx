import { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { 
  Globe, 
  Code, 
  Bot, 
  Mic, 
  Sparkles, 
  Zap, 
  Database, 
  ShoppingCart, 
  GraduationCap,
  Phone,
  ArrowRight,
  Terminal,
  Cpu,
  Shield,
  Binary,
  Braces,
  GitBranch,
  Server
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites with modern designs and SEO optimization.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions - desktop, web, and mobile applications.",
    features: ["Custom Solutions", "Scalable Architecture", "API Integration", "Cloud Deployment"],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent chatbots for customer support and lead generation 24/7.",
    features: ["24/7 Support", "Multi-language", "Lead Generation", "Custom Training"],
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Mic,
    title: "Voice Bots",
    description: "AI-powered voice assistants for call centers and IVR systems.",
    features: ["Natural Voice", "Call Automation", "IVR Integration", "Speech Recognition"],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Sparkles,
    title: "AI Applications",
    description: "Custom AI solutions including ML, computer vision, and NLP.",
    features: ["Machine Learning", "Computer Vision", "NLP Solutions", "Predictive Analytics"],
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Automate workflows and processes to increase efficiency.",
    features: ["Workflow Automation", "Email Automation", "Data Processing", "Report Generation"],
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Database,
    title: "Slack Data Migration",
    description: "Seamless migration of Slack workspace data to new platforms.",
    features: ["Full Data Export", "Channel Migration", "File Transfer", "User Mapping"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Complete online stores with payment and inventory management.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"],
    color: "from-teal-500 to-cyan-600"
  },
  {
    icon: GraduationCap,
    title: "College & School Websites",
    description: "Professional educational institution websites with portals.",
    features: ["Student Portal", "Online Admission", "Result Management", "Event Calendar"],
    color: "from-purple-500 to-violet-600"
  }
];

// Matrix rain effect component
const MatrixRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500 font-mono text-xs whitespace-nowrap"
          style={{ left: `${i * 5}%` }}
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {[...Array(30)].map((_, j) => (
            <div key={j} className="opacity-80">
              {String.fromCharCode(Math.random() * 94 + 33)}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Typing effect component
const TypingText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const ITServicesPage = memo(() => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>IT Services in Radhanagari | Website, Software, AI Chatbots | Incite Computers</title>
        <meta name="description" content="Professional IT services in Radhanagari - Website development, Software, AI Chatbots, Voice Bots, E-commerce, College websites. Contact: 9404895667" />
        <meta name="keywords" content="IT services Radhanagari, website development Kolhapur, software development, AI chatbots, voice bots, e-commerce website, college website development, Incite Computers" />
        <link rel="canonical" href="https://incitecomputer.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0f]">
        {/* Hero Section - Hacker Theme */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]">
            <MatrixRain />
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Terminal-style badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-black/60 backdrop-blur-md rounded-xl border border-green-500/30 mb-8"
              >
                <Terminal className="w-5 h-5 text-green-500" />
                <span className="text-green-400 font-mono text-sm">~/incite/services $</span>
                <span className="text-white font-mono text-sm">execute --mode=professional</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-white">We Build </span>
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                  Digital Solutions
                </span>
              </h1>

              {/* Code block style subtitle */}
              <div className="max-w-3xl mx-auto mb-10">
                <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-green-500/20 p-6 text-left font-mono">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-500/20">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-500 text-xs ml-2">services.js</span>
                  </div>
                  <div className="space-y-2 text-sm md:text-base">
                    <p><span className="text-purple-400">const</span> <span className="text-cyan-400">services</span> = {"{"}</p>
                    <p className="pl-4"><span className="text-green-400">websites</span>: <span className="text-orange-400">"Modern & Responsive"</span>,</p>
                    <p className="pl-4"><span className="text-green-400">software</span>: <span className="text-orange-400">"Custom Solutions"</span>,</p>
                    <p className="pl-4"><span className="text-green-400">ai</span>: <span className="text-orange-400">"Chatbots & Voicebots"</span>,</p>
                    <p className="pl-4"><span className="text-green-400">automation</span>: <span className="text-orange-400">"Business Workflows"</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:9404895667">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold gap-2 px-8 py-6 text-lg shadow-[0_0_30px_rgba(0,255,100,0.3)] hover:shadow-[0_0_50px_rgba(0,255,100,0.5)] transition-all">
                      <Phone className="w-5 h-5" />
                      9404895667
                    </Button>
                  </motion.div>
                </a>
                <a href="https://wa.me/919404895667" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 gap-2 px-8 py-6 text-lg font-mono">
                      ./whatsapp.sh
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </a>
              </div>

              {/* Floating Tech Icons */}
              <div className="flex justify-center gap-8 mt-16">
                {[Terminal, Cpu, Shield, Binary, Braces, GitBranch, Server].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-12 h-12 rounded-xl bg-black/60 border border-green-500/30 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-green-500/70" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "100+", label: "Projects Completed", icon: Code },
                { value: "50+", label: "Happy Clients", icon: Sparkles },
                { value: "9+", label: "Services Offered", icon: Zap },
                { value: "24/7", label: "Support Available", icon: Shield }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-mono text-sm mb-6">
                <Braces className="w-4 h-4" />
                our_services.map()
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Services We <span className="text-green-400">Deliver</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-mono">
                // Transforming ideas into digital reality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features as code comments */}
                  <div className="space-y-2 font-mono text-xs">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-gray-600">
                        <span className="text-green-600">//</span>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-green-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Terminal-style CTA */}
              <div className="bg-black border-2 border-green-500/30 rounded-3xl p-8 md:p-12">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-green-500/20">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-500 font-mono text-sm ml-4">contact@incite-computers ~ </span>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                    Ready to <span className="text-green-400">Execute</span> Your Project?
                  </h2>
                  
                  <div className="font-mono text-green-400 text-lg mb-8 flex items-center justify-center gap-2">
                    <span className="text-gray-500">$</span>
                    {mounted && <TypingText text=" npm run start-project --client=you" />}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:9404895667">
                      <Button size="lg" className="bg-green-500 hover:bg-green-400 text-black font-bold gap-2 px-8 py-6 text-lg">
                        <Phone className="w-5 h-5" />
                        Call: 9404895667
                      </Button>
                    </a>
                    <a href="https://wa.me/919404895667" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 gap-2 px-8 py-6 text-lg">
                        Get Free Quote
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 px-4 border-t border-green-500/10">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-green-500">#</span> IT Services in Radhanagari & Kolhapur
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Incite Computers provides comprehensive IT services including website development, custom software solutions, AI chatbots, voice bots, and business automation in Radhanagari, Kolhapur, and surrounding areas.
                </p>
                <p>
                  Our expert team specializes in e-commerce website development, college and school website creation, Slack data migration, and cutting-edge AI applications. We deliver high-quality, affordable IT solutions for businesses of all sizes.
                </p>
                <p className="text-green-400 font-mono">
                  Contact: <a href="tel:9404895667" className="underline hover:text-green-300">9404895667</a> for a free consultation
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

ITServicesPage.displayName = "ITServicesPage";

export default ITServicesPage;
