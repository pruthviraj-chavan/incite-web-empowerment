
import { useState } from "react";
import { Users, Clock, Star, MessageSquare, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";

// Course data
const allCourses = [
  // MS-CIT Courses
  {
    id: "mscit-1",
    category: "MS-CIT",
    title: "MS-CIT Basic",
    description: "Maharashtra State Certificate in Information Technology - Foundation Course",
    students: 3500,
    duration: "3 months",
    rating: 4.8,
    fee: "₹3,600",
    icon: "💻"
  },
  {
    id: "mscit-2",
    category: "MS-CIT",
    title: "MS-CIT Advanced",
    description: "Advanced modules for MS-CIT with specialized training",
    students: 2200,
    duration: "4 months",
    rating: 4.7,
    fee: "₹4,500",
    icon: "💻"
  },
  {
    id: "mscit-3",
    category: "MS-CIT",
    title: "MS-CIT Office Skills",
    description: "MS Office specialization with MS-CIT certification",
    students: 1800,
    duration: "3 months",
    rating: 4.6,
    fee: "₹3,800",
    icon: "💻"
  },
  {
    id: "mscit-4",
    category: "MS-CIT",
    title: "MS-CIT with Accounting",
    description: "MS-CIT with Tally and basic accounting principles",
    students: 1500,
    duration: "4 months",
    rating: 4.9,
    fee: "₹5,000",
    icon: "💻"
  },
  {
    id: "mscit-5",
    category: "MS-CIT",
    title: "MS-CIT Weekend Batch",
    description: "Weekend classes for working professionals",
    students: 1200,
    duration: "4 months",
    rating: 4.5,
    fee: "₹3,600",
    icon: "💻"
  },
  {
    id: "mscit-6",
    category: "MS-CIT",
    title: "MS-CIT for Seniors",
    description: "Special batch for senior citizens with personalized attention",
    students: 800,
    duration: "4 months",
    rating: 4.8,
    fee: "₹3,200",
    icon: "💻"
  },
  
  // KLiCK Courses
  {
    id: "klick-1",
    category: "KLiCK Courses",
    title: "KLiCK Basic",
    description: "Knowledge Literacy for Computer Knowledge - Foundation",
    students: 2800,
    duration: "2 months",
    rating: 4.7,
    fee: "₹2,500",
    icon: "🖥️"
  },
  {
    id: "klick-2",
    category: "KLiCK Courses",
    title: "KLiCK Advanced",
    description: "Advanced modules for comprehensive computer knowledge",
    students: 1900,
    duration: "3 months",
    rating: 4.8,
    fee: "₹3,200",
    icon: "🖥️"
  },
  {
    id: "klick-3",
    category: "KLiCK Courses",
    title: "KLiCK Office Suite",
    description: "Focused on MS Office applications mastery",
    students: 2100,
    duration: "2 months",
    rating: 4.6,
    fee: "₹2,800",
    icon: "🖥️"
  },
  {
    id: "klick-4",
    category: "KLiCK Courses",
    title: "KLiCK Internet & Email",
    description: "Digital communication and internet usage skills",
    students: 1700,
    duration: "1 month",
    rating: 4.5,
    fee: "₹1,800",
    icon: "🖥️"
  },
  {
    id: "klick-5",
    category: "KLiCK Courses",
    title: "KLiCK Multimedia",
    description: "Audio, video and image editing basics",
    students: 1100,
    duration: "2 months",
    rating: 4.9,
    fee: "₹3,000",
    icon: "🖥️"
  },
  {
    id: "klick-6",
    category: "KLiCK Courses",
    title: "KLiCK for Students",
    description: "Computer skills specially designed for school students",
    students: 2400,
    duration: "2 months",
    rating: 4.8,
    fee: "₹2,200",
    icon: "🖥️"
  },
  {
    id: "klick-7",
    category: "KLiCK Courses",
    title: "KLiCK Digital Marketing",
    description: "Basic digital marketing skills with computer education",
    students: 950,
    duration: "3 months",
    rating: 4.7,
    fee: "₹3,500",
    icon: "🖥️"
  },
  {
    id: "klick-8",
    category: "KLiCK Courses",
    title: "KLiCK Computer Hardware",
    description: "Basic hardware knowledge with KLiCK certification",
    students: 850,
    duration: "2 months",
    rating: 4.6,
    fee: "₹2,800",
    icon: "🖥️"
  },
  
  // KLiCK Diploma
  {
    id: "klickd-1",
    category: "KLiCK Diploma",
    title: "KLiCK Office Diploma",
    description: "Comprehensive MS Office applications diploma",
    students: 1800,
    duration: "6 months",
    rating: 4.8,
    fee: "₹5,500",
    icon: "🎓"
  },
  {
    id: "klickd-2",
    category: "KLiCK Diploma",
    title: "KLiCK IT Diploma",
    description: "Complete information technology knowledge diploma",
    students: 1500,
    duration: "8 months",
    rating: 4.9,
    fee: "₹7,200",
    icon: "🎓"
  },
  {
    id: "klickd-3",
    category: "KLiCK Diploma",
    title: "KLiCK Financial Accounting",
    description: "Accounting software and financial management diploma",
    students: 1200,
    duration: "6 months",
    rating: 4.7,
    fee: "₹6,000",
    icon: "🎓"
  },
  {
    id: "klickd-4",
    category: "KLiCK Diploma",
    title: "KLiCK Web Technologies",
    description: "Web design, development and management diploma",
    students: 980,
    duration: "8 months",
    rating: 4.8,
    fee: "₹7,500",
    icon: "🎓"
  },
  {
    id: "klickd-5",
    category: "KLiCK Diploma",
    title: "KLiCK Hardware & Networking",
    description: "Computer hardware, networking and maintenance diploma",
    students: 850,
    duration: "8 months",
    rating: 4.6,
    fee: "₹7,000",
    icon: "🎓"
  },
  {
    id: "klickd-6",
    category: "KLiCK Diploma",
    title: "KLiCK Advanced Office Management",
    description: "Office management and advanced productivity tools",
    students: 920,
    duration: "6 months",
    rating: 4.7,
    fee: "₹5,800",
    icon: "🎓"
  },
  {
    id: "klickd-7",
    category: "KLiCK Diploma",
    title: "KLiCK Multimedia & Design",
    description: "Graphic design, animation and multimedia diploma",
    students: 780,
    duration: "10 months",
    rating: 4.9,
    fee: "₹8,500",
    icon: "🎓"
  },
  
  // KLiCK Tally
  {
    id: "tally-1",
    category: "KLiCK Tally",
    title: "Tally ERP 9 Basic",
    description: "Foundation course for Tally ERP 9 accounting software",
    students: 1600,
    duration: "2 months",
    rating: 4.8,
    fee: "₹3,000",
    icon: "📊"
  },
  {
    id: "tally-2",
    category: "KLiCK Tally",
    title: "Tally ERP 9 Advanced",
    description: "Advanced features and functionality of Tally ERP 9",
    students: 1200,
    duration: "3 months",
    rating: 4.7,
    fee: "₹4,200",
    icon: "📊"
  },
  {
    id: "tally-3",
    category: "KLiCK Tally",
    title: "Tally with GST",
    description: "Specialized Tally training focused on GST compliance",
    students: 1450,
    duration: "2 months",
    rating: 4.9,
    fee: "₹3,500",
    icon: "📊"
  },
  {
    id: "tally-4",
    category: "KLiCK Tally",
    title: "Tally for Small Business",
    description: "Customized Tally training for small business owners",
    students: 950,
    duration: "2 months",
    rating: 4.6,
    fee: "₹3,200",
    icon: "📊"
  },
  
  // Programming
  {
    id: "prog-1",
    category: "Programming",
    title: "Web Development",
    description: "HTML, CSS, JavaScript and responsive web design",
    students: 1100,
    duration: "4 months",
    rating: 4.8,
    fee: "₹6,000",
    icon: "⌨️"
  },
  {
    id: "prog-2",
    category: "Programming",
    title: "Python Programming",
    description: "Python fundamentals, data structures and applications",
    students: 850,
    duration: "3 months",
    rating: 4.9,
    fee: "₹5,500",
    icon: "⌨️"
  },
  {
    id: "prog-3",
    category: "Programming",
    title: "Java Programming",
    description: "Core Java, OOP concepts and application development",
    students: 750,
    duration: "4 months",
    rating: 4.7,
    fee: "₹6,500",
    icon: "⌨️"
  },
  {
    id: "prog-4",
    category: "Programming",
    title: "Mobile App Development",
    description: "Android app development using Java/Kotlin",
    students: 680,
    duration: "5 months",
    rating: 4.8,
    fee: "₹7,500",
    icon: "⌨️"
  },
  
  // IT Hardware
  {
    id: "hw-1",
    category: "IT Hardware",
    title: "PC Hardware Basics",
    description: "Computer components, assembly and troubleshooting",
    students: 1200,
    duration: "2 months",
    rating: 4.6,
    fee: "₹3,500",
    icon: "🔧"
  },
  {
    id: "hw-2",
    category: "IT Hardware",
    title: "Hardware & Networking",
    description: "Computer hardware with basic networking concepts",
    students: 950,
    duration: "3 months",
    rating: 4.7,
    fee: "₹4,800",
    icon: "🔧"
  },
  {
    id: "hw-3",
    category: "IT Hardware",
    title: "Network Administration",
    description: "Network setup, administration and management",
    students: 680,
    duration: "4 months",
    rating: 4.8,
    fee: "₹6,000",
    icon: "🔧"
  },
  {
    id: "hw-4",
    category: "IT Hardware",
    title: "Hardware Repair & Maintenance",
    description: "Troubleshooting, repair and preventive maintenance",
    students: 720,
    duration: "3 months",
    rating: 4.7,
    fee: "₹4,500",
    icon: "🔧"
  },
  
  // MKCL Typing
  {
    id: "type-1",
    category: "MKCL Typing",
    title: "English Typing",
    description: "English typing speed and accuracy training",
    students: 1800,
    duration: "1 month",
    rating: 4.6,
    fee: "₹1,500",
    icon: "⌨️"
  },
  {
    id: "type-2",
    category: "MKCL Typing",
    title: "Marathi Typing",
    description: "Marathi typing training with regional keyboard layout",
    students: 2100,
    duration: "1 month",
    rating: 4.7,
    fee: "₹1,500",
    icon: "⌨️"
  },
  {
    id: "type-3",
    category: "MKCL Typing",
    title: "Hindi Typing",
    description: "Hindi typing training with Devnagari keyboard layout",
    students: 1500,
    duration: "1 month",
    rating: 4.5,
    fee: "₹1,500",
    icon: "⌨️"
  },
  
  // Designing
  {
    id: "design-1",
    category: "Designing",
    title: "Graphic Design Basics",
    description: "Fundamentals of graphic design and visual communication",
    students: 850,
    duration: "3 months",
    rating: 4.8,
    fee: "₹4,500",
    icon: "🎨"
  },
  {
    id: "design-2",
    category: "Designing",
    title: "Adobe Photoshop",
    description: "Image editing, manipulation and design with Photoshop",
    students: 780,
    duration: "2 months",
    rating: 4.9,
    fee: "₹3,800",
    icon: "🎨"
  },
  {
    id: "design-3",
    category: "Designing",
    title: "CorelDRAW",
    description: "Vector illustration and design with CorelDRAW",
    students: 650,
    duration: "2 months",
    rating: 4.7,
    fee: "₹3,500",
    icon: "🎨"
  }
];

const categories = [
  "All Courses",
  "MS-CIT",
  "KLiCK Courses",
  "KLiCK Diploma",
  "KLiCK Tally",
  "Programming",
  "IT Hardware",
  "MKCL Typing",
  "Designing"
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  
  // Filter courses based on search query and active category
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Courses" || course.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Count courses by category
  const countByCategory = categories.map(category => {
    if (category === "All Courses") {
      return { name: category, count: allCourses.length };
    }
    return { 
      name: category, 
      count: allCourses.filter(course => course.category === category).length 
    };
  });
  
  return (
    <div className="page-fade-in pt-24">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our <span className="gradient-text">Courses</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Discover a wide range of computer courses designed to enhance your digital skills and advance your career.
              </p>
              <div className="relative mb-8">
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  className="pl-10 pr-4 py-3 rounded-lg border-gray-300 focus:border-incite-blue focus:ring-1 focus:ring-incite-blue"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="px-4 py-2 text-base font-medium border-incite-blue text-incite-blue">
                  {filteredCourses.length} Courses
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base font-medium border-incite-orange text-incite-orange">
                  8 Categories
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students in classroom" 
                className="rounded-xl shadow-blue image-hover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="text-3xl">🎓</div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Join</p>
                    <p className="font-bold">15,000+ Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All Courses" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Course <span className="gradient-text">Categories</span></h2>
              <div className="relative md:hidden">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-incite-blue"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            
            <TabsList className="hidden md:flex mb-8 bg-transparent space-x-2 overflow-x-auto pb-2">
              {countByCategory.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name}
                  className="px-4 py-2 rounded-md text-sm font-medium data-[state=active]:bg-incite-blue data-[state=active]:text-white"
                >
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
                
                {filteredCourses.length === 0 && (
                  <div className="text-center py-20">
                    <h3 className="text-2xl font-bold mb-2">No courses found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                    <Button onClick={() => {setSearchQuery(""); setActiveCategory("All Courses");}}>
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our <span className="gradient-text">Courses</span>?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our courses are designed to provide you with relevant skills that are in demand in today's job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-blue transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Recognized Certifications</h3>
              <p className="text-gray-600">
                Our courses lead to certifications that are recognized by employers across industries, giving you a competitive edge in the job market.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-blue transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Learning Approach</h3>
              <p className="text-gray-600">
                Our courses focus on hands-on learning, giving you practical experience that you can apply immediately in real-world situations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-blue transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Our courses are regularly updated to include the latest advancements and technologies, ensuring you learn skills that are relevant today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-blue-to-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to enroll in any of our courses or to get more information.
          </p>
          <Button size="lg" className="bg-white text-incite-blue hover:bg-gray-100 btn-hover">
            <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <MessageSquare className="mr-2 w-5 h-5" /> Chat with Us on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
