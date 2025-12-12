import { memo } from "react";
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
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites for businesses, portfolios, and organizations with modern designs and SEO optimization.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs - desktop, web, and mobile applications.",
    features: ["Custom Solutions", "Scalable Architecture", "API Integration", "Cloud Deployment"]
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent chatbots for customer support, lead generation, and automated responses 24/7.",
    features: ["24/7 Support", "Multi-language", "Lead Generation", "Custom Training"]
  },
  {
    icon: Mic,
    title: "Voice Bots",
    description: "AI-powered voice assistants for call centers, IVR systems, and voice-enabled applications.",
    features: ["Natural Voice", "Call Automation", "IVR Integration", "Speech Recognition"]
  },
  {
    icon: Sparkles,
    title: "AI Applications",
    description: "Custom AI solutions including image recognition, NLP, predictive analytics, and machine learning models.",
    features: ["Machine Learning", "Computer Vision", "NLP Solutions", "Predictive Analytics"]
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Automate repetitive tasks, workflows, and processes to increase efficiency and reduce costs.",
    features: ["Workflow Automation", "Email Automation", "Data Processing", "Report Generation"]
  },
  {
    icon: Database,
    title: "Slack Data Migration",
    description: "Seamless migration of your Slack workspace data, channels, messages, and files to new platforms.",
    features: ["Full Data Export", "Channel Migration", "File Transfer", "User Mapping"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Complete online stores with payment integration, inventory management, and order tracking.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"]
  },
  {
    icon: GraduationCap,
    title: "College & School Websites",
    description: "Professional educational institution websites with student portals, admission systems, and more.",
    features: ["Student Portal", "Online Admission", "Result Management", "Event Calendar"]
  }
];

const ITServicesPage = memo(() => {
  return (
    <>
      <Helmet>
        <title>IT Services in Radhanagari | Website, Software, AI Chatbots | Incite Computers</title>
        <meta name="description" content="Professional IT services in Radhanagari - Website development, Software, AI Chatbots, Voice Bots, E-commerce, College websites. Contact: 9404895667" />
        <meta name="keywords" content="IT services Radhanagari, website development Kolhapur, software development, AI chatbots, voice bots, e-commerce website, college website development, Incite Computers" />
        <link rel="canonical" href="https://incitecomputer.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-incite-blue/10 to-incite-purple/10 rounded-full text-incite-blue font-medium text-sm mb-4">
                Professional IT Solutions
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">IT Services</span> for Your Business
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Transform your business with our cutting-edge IT solutions. From websites to AI-powered automation, we deliver excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:9404895667">
                  <Button size="lg" className="gradient-blue text-white gap-2 shadow-lg hover:shadow-xl transition-shadow">
                    <Phone className="w-5 h-5" />
                    Call: 9404895667
                  </Button>
                </a>
                <a href="https://wa.me/919404895667" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 border-incite-blue text-incite-blue hover:bg-incite-blue/5">
                    WhatsApp Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-incite-blue/20"
                >
                  <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-incite-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-incite-blue via-incite-purple to-incite-pink rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Get in touch with us today for a free consultation. We'll help you find the perfect IT solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:9404895667">
                    <Button size="lg" className="bg-white text-incite-blue hover:bg-gray-100 gap-2 font-semibold">
                      <Phone className="w-5 h-5" />
                      9404895667
                    </Button>
                  </a>
                  <a href="https://wa.me/919404895667" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                      Get Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 px-4 bg-white/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">IT Services in Radhanagari & Kolhapur</h2>
            <p className="text-gray-600 mb-4">
              Incite Computers provides comprehensive IT services including website development, custom software solutions, AI chatbots, voice bots, and business automation in Radhanagari, Kolhapur, and surrounding areas.
            </p>
            <p className="text-gray-600 mb-4">
              Our expert team specializes in e-commerce website development, college and school website creation, Slack data migration, and cutting-edge AI applications. We deliver high-quality, affordable IT solutions for businesses of all sizes.
            </p>
            <p className="text-gray-600">
              <strong>Contact us:</strong> Call <a href="tel:9404895667" className="text-incite-blue font-semibold">9404895667</a> for a free consultation on your IT project requirements.
            </p>
          </div>
        </section>
      </div>
    </>
  );
});

ITServicesPage.displayName = "ITServicesPage";

export default ITServicesPage;
