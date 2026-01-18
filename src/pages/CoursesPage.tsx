import { useState, useEffect, lazy, Suspense, memo, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Users, Clock, Star, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import { WhyChooseUs, OfficialCoursesLogos } from "@/components/sections";
import { supabase } from "@/integrations/supabase/client";

const TestimonialsGrid = lazy(() => import('@/components/sections/TestimonialsGrid'));

interface DbCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  icon: string;
  link: string | null;
}

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
    icon: "🖥️"
  },
  
  // KLiCK Diploma
  
    {
      "id": "klickd-1",
      "category": "GCC-TBC Govt Typing",
      "title": "Marathi 30, 40 , 50",
      "description": "GCC-TBC Govt typing",
      "students": 1800,
      "duration": "6 months",
      "rating": 4.8,
      "icon": "🎓"
    },
    {
      "id": "klickd-2",
      "category": "GCC-TBC Govt Typing",
      "title": "English 30 , 40 , 50",
      "description": "GCC-TBC Govt typing",
      "students": 1500,
      "duration": "8 months",
      "rating": 4.9,
      "icon": "🎓"
    },
    {
      "id": "klickd-3",
      "category": "GCC-TBC Govt Typing",
      "title": "Hindi 30, 40 , 50",
      "description": "GCC-TBC Govt typing",
      "students": 1200,
      "duration": "6 months",
      "rating": 4.7,
      "icon": "🎓"
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
    icon: "🔧"
  },
  
  // MKCL Typing
  {
    id: "type-1",
    category: "Sarthi",
    title: "Sarthi Govt Schemes",
    description: "English typing speed and accuracy training",
    students: 1800,
    duration: "1 month",
    rating: 4.6,
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
    icon: "🎨"
  }
];

const categories = [
  "All Courses",
  "MS-CIT",
  "KLiCK Courses",
  "GCC-TBC Govt Typing",
  "KLiCK Tally",
  "Programming",
  "IT Hardware",
  "Sarthi",
  "Designing"
];

// Animation circles component
const AnimatedCircles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400/10"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-orange-400/10"
        animate={{
          x: [0, -120, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-purple-400/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-green-400/10"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-pink-400/10 spin-slow"
      />
    </div>
  );
};

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [dbCourses, setDbCourses] = useState<DbCourse[]>([]);
  
  // Enable animations after component mounts to prevent SSR hydration issues
  useEffect(() => {
    setAnimationsEnabled(true);
  }, []);

  // Fetch courses from Supabase
  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await supabase
        .from('courses')
        .select('id, title, description, category, duration, students, rating, icon, link')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      
      if (data) {
        setDbCourses(data.map(c => ({
          ...c,
          rating: Number(c.rating) || 4.5,
          link: c.link || null
        })));
      }
    };
    fetchCourses();
  }, []);

  // Combine static and database courses
  const combinedCourses = useMemo(() => {
    const dbCoursesFormatted = dbCourses.map(c => ({
      id: c.id,
      category: c.category,
      title: c.title,
      description: c.description,
      students: c.students,
      duration: c.duration,
      rating: c.rating,
      icon: c.icon,
      link: c.link
    }));
    return [...dbCoursesFormatted, ...allCourses.map(c => ({ ...c, link: null as string | null }))];
  }, [dbCourses]);
  
  // Filter courses based on search query and active category
  const filteredCourses = combinedCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Courses" || course.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Count courses by category
  const countByCategory = categories.map(category => {
    if (category === "All Courses") {
      return { name: category, count: combinedCourses.length };
    }
    return { 
      name: category, 
      count: combinedCourses.filter(course => course.category === category).length 
    };
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Computer Courses | Incite Computers Radhanagari - MS-CIT, Tally, Programming</title>
        <meta name="description" content="Explore 30+ computer courses at Incite Computers Radhanagari. MS-CIT, KLiCK, Tally, Programming, Hardware & more. Government approved institute in Kolhapur." />
        <link rel="canonical" href="https://incitecomputer.com/courses" />
        <meta property="og:title" content="Computer Courses - Incite Computers Radhanagari" />
        <meta property="og:description" content="30+ courses including MS-CIT, Tally, Programming. Government approved. 20+ years experience." />
        <meta property="og:url" content="https://incitecomputer.com/courses" />
      </Helmet>
      <div className="page-fade-in pt-24 md:pt-28 relative overflow-hidden">
        {animationsEnabled && <AnimatedCircles />}
        
        {/* Hero Section */}
        <section className="relative py-20 hero-gradient-purple">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Explore Our <span className="gradient-text">Courses</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Discover a wide range of computer courses designed to enhance your digital skills and advance your career.
              </motion.p>
              <motion.div 
                className="relative mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  className="pl-10 pr-4 py-3 rounded-lg border-gray-300 focus:border-incite-blue focus:ring-1 focus:ring-incite-blue"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-base font-medium border-incite-blue text-incite-blue">
                  {filteredCourses.length} Courses
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base font-medium border-incite-orange text-incite-orange">
                  8 Categories
                </Badge>
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students in classroom" 
                className="rounded-xl shadow-blue image-hover"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="text-3xl">🎓</div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Join</p>
                    <p className="font-bold">15,000+ Students</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <Tabs defaultValue="All Courses" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-between items-center mb-8">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Course <span className="gradient-text">Categories</span>
              </motion.h2>
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
              {countByCategory.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <TabsTrigger 
                    value={category.name}
                    className="px-4 py-2 rounded-md text-sm font-medium data-[state=active]:bg-incite-blue data-[state=active]:text-white"
                  >
                    {category.name} ({category.count})
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredCourses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                  ))}
                </motion.div>
                
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
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our <span className="gradient-text">Courses</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our courses are designed to provide you with relevant skills that are in demand in today's job market.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "shield-check",
                title: "Industry-Recognized Certifications",
                description: "Our courses lead to certifications that are recognized by employers across industries, giving you a competitive edge in the job market.",
                gradient: "gradient-blue"
              },
              {
                icon: "book-open",
                title: "Practical Learning Approach",
                description: "Our courses focus on hands-on learning, giving you practical experience that you can apply immediately in real-world situations.",
                gradient: "gradient-orange"
              },
              {
                icon: "clipboard-list",
                title: "Comprehensive Curriculum",
                description: "Our courses are regularly updated to include the latest advancements and technologies, ensuring you learn skills that are relevant today.",
                gradient: "gradient-purple"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-blue transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full ${feature.gradient}/10 flex items-center justify-center text-incite-blue mb-6`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon === "shield-check" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {feature.icon === "book-open" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                    {feature.icon === "clipboard-list" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    )}
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-blue-to-orange">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact us today to enroll in any of our courses or to get more information.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" className="bg-white text-incite-blue hover:bg-gray-100 btn-hover">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Users className="mr-2 w-5 h-5" /> Chat with Us on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Official MKCL Course Logos */}
      <OfficialCoursesLogos />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Suspense fallback={<div className="py-20 bg-zinc-900" />}>
        <TestimonialsGrid />
      </Suspense>
      </div>
    </>
  );
};

export default CoursesPage;
