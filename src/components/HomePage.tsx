import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  Calculator, 
  Keyboard, 
  Code, 
  Database,
  Globe,
  Star,
  Users,
  Award,
  Clock,
  BookOpen,
  TrendingUp
} from "lucide-react";

// Lazy load components for better performance
const OurTeam = lazy(() => import('./OurTeam'));
const MarketingPostersSection = lazy(() => import('./MarketingPostersSection'));
const OurStaff = lazy(() => import('./OurStaff'));

const LoadingFallback = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full max-w-4xl h-48"></div>
  </div>
);

// Hero Section Component
const Hero = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="gradient-text">Incite Computers</span>
                <br />
                <span className="text-gray-800">मध्ये आपले स्वागत आहे</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-incite-blue font-semibold">
                ग्रामीण भारतालाचे डिजिटल कौशल्यांसह सक्षम करणे!
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                Incite Computers, सन 2001 मध्ये राधानगरी येथे सुरू झालेले एक प्रतिष्ठित संस्थान, 
                जे ग्रामीण भागातील विद्यार्थ्यांसाठी तंत्रज्ञानाच्या संधी निर्माण करत आहे.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="gradient-blue text-white px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                  आता नोंदणी करा
                </a>
              </Button>
              <Button variant="outline" className="border-incite-blue text-incite-blue hover:bg-incite-blue hover:text-white px-6 py-3 text-lg transition-all duration-300">
                अभ्यासक्रम शोधा
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">5000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">23+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/edeb2e68-cb43-4c1a-9c26-75470db46603.png"
                alt="Incite Computers Students"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Course Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { Icon: Laptop, position: "top-1/4 left-[10%]", delay: 0 },
          { Icon: Calculator, position: "top-1/3 right-[15%]", delay: 1 },
          { Icon: Keyboard, position: "bottom-1/3 left-[5%]", delay: 2 },
          { Icon: Code, position: "bottom-1/4 right-[10%]", delay: 3 },
        ].map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} opacity-20`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: delay,
            }}
          >
            <Icon size={40} className="text-incite-blue" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "MS-CIT",
      description: "Microsoft Certified IT course for basic computer skills",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Calculator,
      title: "Tally",
      description: "Complete accounting software training with certification",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Keyboard,
      title: "Typing Course",
      description: "Master typing skills in English and Marathi",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Learn Python, Web Development, and more",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive computer education programs designed for rural students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Rest of the components remain the same but with performance optimizations
const CoursesOverview = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Popular Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our wide range of technology courses designed for practical learning
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "MS-CIT Course", 
            duration: "3 months", 
            students: "2000+",
            description: "Complete computer basics and MS Office training" 
          },
          { 
            title: "Tally Prime", 
            duration: "2 months", 
            students: "1500+",
            description: "Professional accounting and GST software training" 
          },
          { 
            title: "Python Programming", 
            duration: "4 months", 
            students: "800+",
            description: "Learn programming from scratch to advanced level" 
          }
        ].map((course, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-3 gradient-text">{course.title}</h3>
            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users size={16} />
                {course.students}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Button className="w-full gradient-blue text-white">Learn More</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const InspirationSection = () => (
  <section className="py-16 bg-gradient-to-r from-incite-blue to-incite-purple text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Transform Your Future with Technology
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of students who have built successful careers through our comprehensive computer education programs
        </p>
        <Button className="bg-white text-incite-blue hover:bg-gray-100 px-8 py-3 text-lg">
          Start Your Journey
        </Button>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Student Success Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from our alumni who have achieved their career goals
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "राहुल पाटील",
            course: "MS-CIT + Tally",
            feedback: "Incite Computers ने माझे करिअर बदलले. आता मी एका चांगल्या कंपनीत काम करतो.",
            rating: 5
          },
          {
            name: "प्रिया शर्मा",
            course: "Python Programming",
            feedback: "Programming शिकून मला स्वतःचा startup सुरू करण्यात मदत झाली.",
            rating: 5
          },
          {
            name: "अमित कुलकर्णी",
            course: "Web Development",
            feedback: "येथे शिकल्यानंतर मी freelancer म्हणून चांगले कमवतो.",
            rating: 5
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">"{testimonial.feedback}"</p>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.course}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Our Campus</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Modern facilities and learning environment for effective education
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <motion.div
            key={num}
            className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: num * 0.1 }}
          >
            <img
              src={`/img-0${num}.jpg`}
              alt={`Campus ${num}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 bg-gradient-to-r from-incite-purple to-incite-pink text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Start Your Tech Journey?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join Incite Computers today and unlock your potential in the digital world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-incite-purple hover:bg-gray-100 px-8 py-3 text-lg">
            <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
              Contact Us: 9423281767
            </a>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-incite-purple px-8 py-3 text-lg">
            View Courses
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in">
      <Hero />
      <Services />
      <CoursesOverview />
      
      <Suspense fallback={<LoadingFallback />}>
        <MarketingPostersSection />
      </Suspense>
      
      <InspirationSection />
      
      <Suspense fallback={<LoadingFallback />}>
        <OurTeam />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <OurStaff />
      </Suspense>
      
      <Testimonials />
      <GalleryPreview />
      <CTASection />
    </div>
  );
};

export { Hero, Services, CoursesOverview, InspirationSection, Testimonials, GalleryPreview, CTASection };
export default HomePage;
