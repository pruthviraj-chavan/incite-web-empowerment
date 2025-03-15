
import { useEffect } from 'react';
import { ArrowRight, Star, Users, Clock, BookOpen, Award, ChevronRight, User, Building, Laptop, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

// Hero Section
export const Hero = () => {
  const handleEnrollNow = () => {
    window.open("https://wa.me/919423281767?text=Hello,%20I'm%20interested%20in%20Incite%20Computers%20courses.%20Please%20provide%20more%20information.", "_blank");
  };

  return (
    <section className="hero-gradient relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left mb-12 md:mb-0 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1 bg-incite-blue-light/10 text-incite-blue rounded-full text-sm font-medium">
              Since 2001
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Empowering Rural India</span> <br />
              <span className="gradient-orange-to-red bg-clip-text text-transparent">with Digital Skills!</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg max-w-xl">
              Transforming lives through quality computer education, professional training, and certification programs tailored for rural communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleEnrollNow}
                className="gradient-blue text-white rounded-full px-8 py-3 font-medium shadow-blue flex items-center btn-hover"
              >
                Enroll Now <ArrowRight size={18} className="ml-2" />
              </button>
              <Link 
                to="/courses" 
                className="bg-white text-incite-blue border border-incite-blue rounded-full px-8 py-3 font-medium flex items-center btn-hover"
              >
                Explore Courses <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-blue">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Student learning computer skills" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4 shadow-blue w-48 animate-float">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-incite-blue">Students</div>
                <Users size={16} className="text-incite-orange" />
              </div>
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-xs text-gray-500">Trained since 2001</div>
            </div>
            <div className="absolute -top-8 -right-4 glass rounded-lg p-4 shadow-orange w-52 animate-float">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-incite-blue">Success Rate</div>
                <Award size={16} className="text-incite-orange" />
              </div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs text-gray-500">Placement & certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
export const Services = () => {
  const services = [
    {
      icon: <BookOpen size={40} className="text-incite-blue" />,
      title: "Quality Education",
      description: "Comprehensive computer education with hands-on training from expert instructors"
    },
    {
      icon: <Award size={40} className="text-incite-orange" />,
      title: "Certification",
      description: "Industry-recognized certifications to enhance your professional credibility"
    },
    {
      icon: <Building size={40} className="text-incite-blue" />,
      title: "Job Support",
      description: "Placement assistance and career guidance to help you secure employment"
    },
    {
      icon: <User size={40} className="text-incite-orange" />,
      title: "Personalized Learning",
      description: "Customized learning paths tailored to individual skills and requirements"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive range of computer training and educational services offered at Incite Computers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-blue transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Courses Overview
export const CoursesOverview = () => {
  const courses = [
    {
      icon: <Laptop size={32} className="text-white" />,
      title: "MS-CIT",
      description: "Maharashtra State Certificate in Information Technology",
      students: 3500,
      duration: "3 months",
      rating: 4.9
    },
    {
      icon: <Cpu size={32} className="text-white" />,
      title: "KLiCK Courses",
      description: "Knowledge of Literacy for Computers in Keystones",
      students: 2800,
      duration: "2-6 months",
      rating: 4.8
    },
    {
      icon: <BookOpen size={32} className="text-white" />,
      title: "Tally",
      description: "Accounting & financial management software training",
      students: 2000,
      duration: "2 months",
      rating: 4.7
    },
    {
      icon: <Award size={32} className="text-white" />,
      title: "Programming",
      description: "C, C++, Java, and other programming languages",
      students: 1500,
      duration: "3-6 months",
      rating: 4.8
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Popular Courses</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Build your tech skills with our most in-demand courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-blue transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="gradient-blue p-6">
                <div className="mb-2">{course.icon}</div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center">
                    <Users size={16} className="text-incite-blue mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-incite-blue mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star size={16} className="text-incite-orange mr-1" />
                    <span>{course.rating}/5</span>
                  </div>
                  <Link 
                    to="/courses" 
                    className="text-incite-blue hover:text-incite-blue-dark font-medium flex items-center"
                  >
                    Details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Link 
            to="/courses" 
            className="gradient-blue text-white rounded-full px-8 py-3 font-medium inline-flex items-center btn-hover"
          >
            View All Courses <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// New Inspiration Section
export const InspirationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Inspiration</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet Mr. Jitendra Satpute, Founder and CEO of JSAT Automation with branches in 9 countries worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-blue">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/P8_CQwmmmhU?si=D3_5P9OqO38IpuUt" 
                title="Jitendra Satpute - Inspirational Story" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Mr. Jitendra Satpute</h3>
            <p className="text-gray-700 mb-6">
              A visionary entrepreneur who has revolutionized the automation industry with his innovative approach and dedication. Mr. Satpute started his journey from humble beginnings and has now expanded his business, JSAT Automation, across 9 countries.
            </p>
            <p className="text-gray-700 mb-6">
              His story serves as a powerful inspiration for our students, showing that with the right skills, determination, and education, one can achieve extraordinary success regardless of their background.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-xl font-bold text-incite-blue mb-2">9+ Countries</div>
                <p className="text-sm text-gray-600">Global business presence</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-xl font-bold text-incite-orange mb-2">Industry Leader</div>
                <p className="text-sm text-gray-600">In automation technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "MS-CIT Graduate",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The MS-CIT course at Incite Computers completely transformed my career prospects. I went from having zero computer knowledge to landing a job at a local bank."
    },
    {
      name: "Priya Desai",
      role: "Tally Course Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Learning Tally at Incite Computers was one of the best decisions I've made. The practical approach helped me secure a job as an accounts assistant right after completion."
    },
    {
      name: "Sunil Patil",
      role: "IT Hardware Graduate",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "The instructors are extremely knowledgeable and patient. They helped me build a solid foundation in IT hardware that I use every day in my repair business."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Student Testimonials</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our students about their learning experience at Incite Computers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-blue transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full p-1 bg-white shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-10">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-incite-blue text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-incite-orange fill-incite-orange" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Preview
export const GalleryPreview = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Computer Lab",
      views: 324
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Programming Session",
      views: 219
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Student Workshop",
      views: 187
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Placement Training",
      views: 156
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Gallery Highlights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take a peek into our facilities and student activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg animate-fade-in relative group image-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-medium text-lg">{image.title}</h3>
                <div className="flex items-center text-sm">
                  <Users size={14} className="mr-1" />
                  <span>{image.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Link 
            to="/gallery" 
            className="gradient-blue text-white rounded-full px-8 py-3 font-medium inline-flex items-center btn-hover"
          >
            View Full Gallery <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// CTA Section
export const CTASection = () => {
  const handleWhatsAppInquiry = () => {
    window.open("https://wa.me/919423281767?text=Hello,%20I'm%20interested%20in%20Incite%20Computers%20courses.%20Please%20provide%20more%20information.", "_blank");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 gradient-blue-to-orange opacity-90"></div>
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Tech Journey?</h2>
              <p className="text-white/90 max-w-xl">
                Enroll today for any of our courses and take the first step towards a bright future in technology.
              </p>
            </div>
            <div>
              <button 
                onClick={handleWhatsAppInquiry}
                className="bg-white text-incite-blue rounded-full px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all inline-flex items-center btn-hover"
              >
                Contact Us Now <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Combine all sections
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in">
      <Hero />
      <Services />
      <CoursesOverview />
      <InspirationSection />
      <Testimonials />
      <GalleryPreview />
      <CTASection />
    </div>
  );
};

export default HomePage;
