
import { useState } from 'react';
import { ArrowRight, Book, BookOpen, Calendar, Clock, Code, Cpu, Database, FileText, Laptop, Monitor, Star, Terminal, Users } from 'lucide-react';

const CoursesPage = () => {
  return (
    <div className="page-fade-in">
      <HeroSection />
      <CourseCategories />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1 bg-incite-blue-light/10 text-incite-blue rounded-full text-sm font-medium">
            Explore Our Programs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Find The Perfect</span> <br />
            <span className="gradient-text-orange">Course For You</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Browse our comprehensive range of computer courses designed to equip you with the skills and knowledge for success in today's digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

const CourseCategories = () => {
  const categories = [
    {
      id: "mscit",
      title: "MS-CIT",
      icon: <Monitor size={24} />,
      description: "Maharashtra State Certificate in Information Technology courses",
      courses: [
        {
          title: "MS-CIT Basic",
          description: "Foundational computer skills covering operating systems, MS Office, internet usage, and email",
          students: 1200,
          duration: "3 months",
          rating: 4.9,
          fee: "₹3,500"
        },
        {
          title: "MS-CIT Advanced",
          description: "Advanced computer applications, including database management, advanced Excel, and basic programming",
          students: 850,
          duration: "4 months",
          rating: 4.8,
          fee: "₹4,500"
        },
        {
          title: "MS-CIT Professional",
          description: "Comprehensive IT skills with additional focus on professional document preparation and presentations",
          students: 620,
          duration: "5 months",
          rating: 4.7,
          fee: "₹5,500"
        },
        {
          title: "MS-CIT for Government Exams",
          description: "Specialized course focused on computer knowledge required for government job examinations",
          students: 780,
          duration: "3 months",
          rating: 4.8,
          fee: "₹4,000"
        },
        {
          title: "MS-CIT for Seniors",
          description: "Computer literacy course specially designed for senior citizens with personalized pace",
          students: 340,
          duration: "4 months",
          rating: 4.9,
          fee: "₹3,000"
        },
        {
          title: "MS-CIT Weekend Batch",
          description: "Weekend-only classes for working professionals who want to gain MS-CIT certification",
          students: 520,
          duration: "4 months",
          rating: 4.7,
          fee: "₹4,000"
        }
      ]
    },
    {
      id: "klick",
      title: "KLiCK Courses",
      icon: <Laptop size={24} />,
      description: "Knowledge Literacy for Information & Computer Keystones courses",
      courses: [
        {
          title: "KLiCK Basic",
          description: "Introduction to computer concepts, Windows, and basic office applications",
          students: 950,
          duration: "2 months",
          rating: 4.8,
          fee: "₹2,500"
        },
        {
          title: "KLiCK Intermediate",
          description: "Advanced office applications, basic internet technologies, and multimedia",
          students: 780,
          duration: "3 months",
          rating: 4.7,
          fee: "₹3,500"
        },
        {
          title: "KLiCK Advanced",
          description: "Advanced computer applications, basic programming, and web development",
          students: 560,
          duration: "4 months",
          rating: 4.6,
          fee: "₹4,500"
        },
        {
          title: "KLiCK for Office Workers",
          description: "Specialized training in office productivity tools and administrative software",
          students: 640,
          duration: "2 months",
          rating: 4.8,
          fee: "₹3,000"
        },
        {
          title: "KLiCK for Students",
          description: "Computer literacy course tailored for school and college students",
          students: 820,
          duration: "3 months",
          rating: 4.9,
          fee: "₹2,800"
        },
        {
          title: "KLiCK for Digital Marketing",
          description: "Basic digital marketing principles and tools for online presence",
          students: 490,
          duration: "3 months",
          rating: 4.7,
          fee: "₹3,800"
        },
        {
          title: "KLiCK for Banking",
          description: "Computer skills focused on banking operations and financial software",
          students: 380,
          duration: "3 months",
          rating: 4.6,
          fee: "₹3,500"
        },
        {
          title: "KLiCK for Educators",
          description: "Teaching digital tools and educational technology for teachers",
          students: 320,
          duration: "2 months",
          rating: 4.8,
          fee: "₹2,800"
        }
      ]
    },
    {
      id: "klickdiploma",
      title: "KLiCK Diploma",
      icon: <FileText size={24} />,
      description: "Comprehensive diploma programs for specialized IT skills",
      courses: [
        {
          title: "Diploma in Computer Applications",
          description: "Comprehensive program covering all aspects of computer applications and office productivity",
          students: 620,
          duration: "6 months",
          rating: 4.8,
          fee: "₹8,500"
        },
        {
          title: "Diploma in Web Development",
          description: "Web design and development using HTML, CSS, JavaScript, and popular frameworks",
          students: 480,
          duration: "8 months",
          rating: 4.7,
          fee: "₹12,000"
        },
        {
          title: "Diploma in IT Support",
          description: "Technical support skills, troubleshooting, and customer service for IT help desks",
          students: 350,
          duration: "6 months",
          rating: 4.6,
          fee: "₹9,500"
        },
        {
          title: "Diploma in Digital Marketing",
          description: "Comprehensive digital marketing including SEO, SEM, social media, and analytics",
          students: 410,
          duration: "6 months",
          rating: 4.7,
          fee: "₹10,500"
        },
        {
          title: "Diploma in Graphic Design",
          description: "Design principles and software like Photoshop, Illustrator, and InDesign",
          students: 380,
          duration: "7 months",
          rating: 4.8,
          fee: "₹11,000"
        },
        {
          title: "Diploma in Office Management",
          description: "Advanced office administration, document management, and business communication",
          students: 290,
          duration: "5 months",
          rating: 4.6,
          fee: "₹7,500"
        },
        {
          title: "Diploma in Data Entry & Analysis",
          description: "Professional data management, entry, and basic analysis using Excel and databases",
          students: 330,
          duration: "4 months",
          rating: 4.7,
          fee: "₹6,500"
        }
      ]
    },
    {
      id: "tally",
      title: "KLiCK Tally",
      icon: <Database size={24} />,
      description: "Accounting and financial management software training",
      courses: [
        {
          title: "Tally Basic",
          description: "Introduction to Tally for beginners, covering basic accounting and inventory",
          students: 580,
          duration: "2 months",
          rating: 4.8,
          fee: "₹4,000"
        },
        {
          title: "Tally Advanced",
          description: "Advanced Tally features including GST, TDS, payroll, and financial reporting",
          students: 420,
          duration: "3 months",
          rating: 4.7,
          fee: "₹5,500"
        },
        {
          title: "Tally for Businesses",
          description: "Customized Tally course for small business owners and entrepreneurs",
          students: 350,
          duration: "2 months",
          rating: 4.8,
          fee: "₹5,000"
        },
        {
          title: "Tally with GST",
          description: "Specialized course focusing on GST implementation and compliance in Tally",
          students: 480,
          duration: "1.5 months",
          rating: 4.9,
          fee: "₹3,500"
        }
      ]
    },
    {
      id: "programming",
      title: "Programming",
      icon: <Code size={24} />,
      description: "Computer programming languages and software development",
      courses: [
        {
          title: "C Programming",
          description: "Fundamentals of C programming language with practical problem-solving",
          students: 420,
          duration: "3 months",
          rating: 4.6,
          fee: "₹5,000"
        },
        {
          title: "C++ Programming",
          description: "Object-oriented programming with C++ for application development",
          students: 380,
          duration: "4 months",
          rating: 4.7,
          fee: "₹6,500"
        },
        {
          title: "Java Programming",
          description: "Java programming for desktop and web application development",
          students: 340,
          duration: "5 months",
          rating: 4.8,
          fee: "₹8,000"
        },
        {
          title: "Python Programming",
          description: "Python basics and applications in data analysis and automation",
          students: 390,
          duration: "4 months",
          rating: 4.9,
          fee: "₹7,500"
        }
      ]
    },
    {
      id: "hardware",
      title: "IT Hardware",
      icon: <Cpu size={24} />,
      description: "Computer hardware, assembly, and maintenance courses",
      courses: [
        {
          title: "Computer Hardware Basics",
          description: "Introduction to computer hardware components and basic maintenance",
          students: 380,
          duration: "2 months",
          rating: 4.7,
          fee: "₹4,500"
        },
        {
          title: "PC Troubleshooting & Repair",
          description: "Identifying and fixing common hardware and software issues",
          students: 320,
          duration: "3 months",
          rating: 4.6,
          fee: "₹5,500"
        },
        {
          title: "Network Hardware Setup",
          description: "Installing and configuring networking equipment and cables",
          students: 280,
          duration: "2.5 months",
          rating: 4.5,
          fee: "₹5,000"
        },
        {
          title: "Mobile Device Repair",
          description: "Diagnosis and repair of smartphones and tablets",
          students: 310,
          duration: "3 months",
          rating: 4.8,
          fee: "₹6,000"
        }
      ]
    },
    {
      id: "typing",
      title: "MKCL Typing",
      icon: <Keyboard size={24} />,
      description: "Professional keyboard typing courses",
      courses: [
        {
          title: "English Typing",
          description: "Professional English typing skills with speed and accuracy development",
          students: 420,
          duration: "1.5 months",
          rating: 4.8,
          fee: "₹2,500"
        },
        {
          title: "Marathi Typing",
          description: "Marathi language typing skills for government and professional work",
          students: 380,
          duration: "1.5 months",
          rating: 4.7,
          fee: "₹2,500"
        },
        {
          title: "Hindi Typing",
          description: "Hindi language typing for professional and government applications",
          students: 290,
          duration: "1.5 months",
          rating: 4.6,
          fee: "₹2,500"
        }
      ]
    },
    {
      id: "designing",
      title: "Designing",
      icon: <Palette size={24} />,
      description: "Graphic design and multimedia content creation",
      courses: [
        {
          title: "Graphic Design Fundamentals",
          description: "Basics of graphic design with Photoshop and Illustrator",
          students: 320,
          duration: "3 months",
          rating: 4.7,
          fee: "₹6,500"
        },
        {
          title: "Web Design",
          description: "Creating visually appealing and responsive websites",
          students: 280,
          duration: "4 months",
          rating: 4.6,
          fee: "₹7,500"
        },
        {
          title: "Digital Marketing Design",
          description: "Creating effective visuals for social media and digital marketing",
          students: 250,
          duration: "3 months",
          rating: 4.8,
          fee: "₹6,000"
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("mscit");

  // Get the courses for the active category
  const activeCourses = categories.find(category => category.id === activeCategory)?.courses || [];

  // Handler for WhatsApp inquiry
  const handleInquiry = (courseName: string) => {
    window.open(`https://wa.me/919423281767?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(courseName)}%20course.%20Please%20provide%20more%20information.`, "_blank");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-fade-in">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="flex flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center px-6 py-4 transition-colors ${
                    activeCategory === category.id
                      ? "bg-incite-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              {categories.find(category => category.id === activeCategory)?.title} Courses
            </h2>
            <p className="text-gray-700 max-w-3xl">
              {categories.find(category => category.id === activeCategory)?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeCourses.map((course, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-blue transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="gradient-blue p-6">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 h-24 overflow-hidden">{course.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2 text-incite-blue" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2 text-incite-blue" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={16} className="text-incite-orange mr-1 fill-incite-orange" />
                        <span>{course.rating}/5</span>
                      </div>
                      <div className="font-bold text-incite-blue">{course.fee}</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleInquiry(course.title)}
                    className="w-full gradient-blue text-white rounded-full px-6 py-3 font-medium flex items-center justify-center btn-hover"
                  >
                    Inquire via WhatsApp <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom icons
const Keyboard = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="M6 8h.001" />
    <path d="M10 8h.001" />
    <path d="M14 8h.001" />
    <path d="M18 8h.001" />
    <path d="M6 12h.001" />
    <path d="M10 12h.001" />
    <path d="M14 12h.001" />
    <path d="M18 12h.001" />
    <path d="M6 16h12" />
  </svg>
);

const Palette = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

export default CoursesPage;
