
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const PopularCourses = [
  {
    id: 1,
    title: "MS-CIT",
    description: "Maharashtra State Certificate in Information Technology",
    students: 5000,
    duration: "3 months",
    rating: 4.8,
    fee: "₹3,600",
    icon: "💻"
  },
  {
    id: 2,
    title: "KLiCK Diploma",
    description: "Knowledge of Computer through Learning & Certification Course",
    students: 3200,
    duration: "6 months",
    rating: 4.7,
    fee: "₹5,500",
    icon: "🎓"
  },
  {
    id: 3,
    title: "Programming",
    description: "Web Development, Python, Java and Mobile App Development",
    students: 1800,
    duration: "4 months",
    rating: 4.9,
    fee: "₹6,000",
    icon: "⌨️"
  }
];

const Services = [
  { id: 1, title: "Computer Training", description: "Comprehensive computer education for all age groups", icon: "🖥️" },
  { id: 2, title: "Certification", description: "Recognized certificates to boost your resume", icon: "📜" },
  { id: 3, title: "Job Placements", description: "Support in finding job opportunities", icon: "💼" },
  { id: 4, title: "Career Counseling", description: "Guidance for choosing the right IT career path", icon: "🧭" }
];

const Testimonials = [
  {
    id: 1,
    name: "Rahul Patil",
    comment: "Incite Computers changed my life. After completing the MS-CIT course, I got a good job in a local bank.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    comment: "The trainers are very patient and skilled. I learned programming from scratch and now I'm a web developer.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Amit Kumar",
    comment: "Best computer institute in Radhanagari! The facilities are excellent and the teaching methodology is great.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const coursesRef = useRef(null);
  const isInView = useInView(coursesRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Efficient carousel for courses that works well on mobile
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % PopularCourses.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="page-fade-in overflow-x-hidden">
      {/* Hero Section - Optimized for faster rendering */}
      <section className="relative min-h-[80vh] md:min-h-screen hero-gradient pt-20 md:pt-28 pb-16 flex flex-col justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="gradient-text">इथे शिकाल, </span>
              <br /> जगभर चमकाल!
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
            २००१ पासून, इन्साइट कॉम्प्यूटर्स राधानगरीमध्ये दर्जेदार संगणक शिक्षणाच्या माध्यमातून अनेकांचे जीवन बदलत आहे.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" className="gradient-blue text-white btn-hover">
                <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                </a>
              </Button>
              <Button variant="outline" size="sm" className="border-incite-blue text-incite-blue btn-hover">
                <Link to="/courses">
                  Explore Courses
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4 md:space-x-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">2001</h3>
                <p className="text-sm text-gray-600">Established</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">15,000+</h3>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">30+</h3>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-blue">
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students learning at Incite Computers" 
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="text-2xl md:text-3xl">🚀</div>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-gray-500">Trusted by</p>
                  <p className="font-bold text-sm md:text-base">Rural Communities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Simplified for better performance */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Our <span className="gradient-text">Services</span></h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of computer training services to help you succeed in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="text-3xl md:text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Mobile-friendly Course Preview Section with horizontal carousel */}
      <section ref={coursesRef} className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Popular <span className="gradient-text">Courses</span></h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular computer training courses designed to boost your career.
            </p>
          </div>
          
          {/* Mobile-friendly course display */}
          <div className="relative overflow-hidden pb-10">
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md">
                {PopularCourses.map((course, index) => {
                  const isActive = index === activeIndex;
                  
                  return (
                    <motion.div
                      key={course.id}
                      className="bg-white rounded-xl p-6 shadow-md transition-all duration-300"
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          scale: 0.9,
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          x: "-50%",
                          zIndex: 0
                        },
                        visible: { 
                          opacity: 1, 
                          scale: 1,
                          position: "relative",
                          top: 0,
                          left: 0,
                          x: 0,
                          zIndex: 10
                        }
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut" 
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <motion.div 
                          className="text-4xl"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {course.icon}
                        </motion.div>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                          <span className="text-sm font-medium ml-1">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{course.students}+ students</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{course.fee}</span>
                        <Button variant="outline" size="sm" className="border-incite-blue text-incite-blue">
                          <Link to="/courses">View Details</Link>
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {PopularCourses.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'w-6 bg-incite-blue' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button className="gradient-blue text-white btn-hover">
              <Link to="/courses" className="flex items-center">
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Simplified for performance */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Student <span className="gradient-text">Testimonials</span></h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hear what our students have to say about their learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {Testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full mr-3"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">Student</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Optimized */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Choose <span className="gradient-text">Incite Computers</span>?</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Since 2001, we've been the trusted computer education partner for rural India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              {[
                "२०+ वर्षांचा शिक्षणाचा अनुभव",
                "ग्रामीण विद्यार्थ्यांसाठी खास अभ्यासक्रम",
                "आधुनिक संगणक प्रयोगशाळा आणि अत्याधुनिक सुविधा",
                "अनुभवी आणि सहनशील शिक्षकवृंद",
                "नोकरीसाठी मदत आणि करिअर मार्गदर्शन",
                "परवडणाऱ्या फी आणि लवचिक देयक योजना"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-incite-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-blue">
                <img 
                  src="/rajendra.png" 
                  alt="Computer Lab at Incite Computers" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-lg shadow-lg"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <p className="font-bold gradient-text text-lg md:text-xl">Since 2001</p>
                  <p className="text-xs md:text-sm text-gray-600">Trusted Legacy</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-12 md:py-16 gradient-blue-to-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Join thousands of successful students who transformed their careers with Incite Computers.
          </p>
          <Button size="sm" className="bg-white text-incite-blue hover:bg-gray-100 btn-hover">
            <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Contact Us Now <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
