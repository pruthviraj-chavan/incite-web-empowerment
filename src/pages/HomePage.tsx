
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

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

  // Circular animation for courses
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % PopularCourses.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-fade-in overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient pt-24 md:pt-32 pb-16 flex flex-col justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Empowering Rural India</span>
              <br /> with Digital Skills!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Since 2001, Incite Computers has been transforming lives through quality computer education in Radhanagari.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-blue text-white btn-hover">
                <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-incite-blue text-incite-blue btn-hover">
                <Link to="/courses">
                  Explore Courses
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text">2001</h3>
                <p className="text-gray-600">Established</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text">15,000+</h3>
                <p className="text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text">30+</h3>
                <p className="text-gray-600">Courses</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-right">
            <div className="rounded-xl overflow-hidden shadow-blue">
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students learning at Incite Computers" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🚀</div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Trusted by</p>
                  <p className="font-bold">Rural Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of computer training services to help you succeed in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all duration-300 animate-scale-in">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview with Circular Animation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular <span className="gradient-text">Courses</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular computer training courses designed to boost your career.
            </p>
          </div>
          
          <div className="relative h-[400px] mb-10">
            {PopularCourses.map((course, index) => {
              // Calculate the position in the circle
              const angle = ((index - activeIndex) * 2 * Math.PI) / PopularCourses.length;
              const radius = 150; // Radius of the circle
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const scale = index === activeIndex ? 1 : 0.8;
              const opacity = index === activeIndex ? 1 : 0.6;
              
              return (
                <div
                  key={course.id}
                  className="absolute top-1/2 left-1/2 w-full max-w-md bg-white rounded-xl p-6 shadow-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                    opacity,
                    zIndex: index === activeIndex ? 10 : 5
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{course.icon}</div>
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
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button className="gradient-blue text-white btn-hover">
              <Link to="/courses" className="flex items-center">
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student <span className="gradient-text">Testimonials</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our students have to say about their learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Incite Computers</span>?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2001, we've been the trusted computer education partner for rural India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              {[
                "20+ years of experience in computer education",
                "Specialized courses designed for rural students",
                "Modern computer labs with latest technology",
                "Experienced and patient faculty members",
                "Job placement assistance and career guidance",
                "Affordable course fees with flexible payment options"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-incite-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-blue">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Computer Lab at Incite Computers" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="font-bold gradient-text text-xl">Since 2001</p>
                  <p className="text-sm text-gray-600">Trusted Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-blue-to-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who transformed their careers with Incite Computers.
          </p>
          <Button size="lg" className="bg-white text-incite-blue hover:bg-gray-100 btn-hover">
            <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
