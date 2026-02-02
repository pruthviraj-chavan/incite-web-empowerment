import { Users, Clock, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseProps {
  course: {
    id: string;
    category: string;
    title: string;
    description: string;
    students: number;
    duration: string;
    rating: number;
    icon: string;
    link?: string | null;
  };
  index: number;
}

// Course images mapping based on category
const courseImages: Record<string, string> = {
  "MS-CIT": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  "KLiCK Courses": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "GCC-TBC Govt Typing": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  "KLiCK Tally": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  "Programming": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  "IT Hardware": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "Sarthi": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  "Designing": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
};

const categoryColors: Record<string, string> = {
  "MS-CIT": "from-blue-500 to-cyan-500",
  "KLiCK Courses": "from-purple-500 to-pink-500",
  "GCC-TBC Govt Typing": "from-green-500 to-emerald-500",
  "KLiCK Tally": "from-orange-500 to-amber-500",
  "Programming": "from-indigo-500 to-purple-500",
  "IT Hardware": "from-slate-500 to-gray-600",
  "Sarthi": "from-teal-500 to-cyan-500",
  "Designing": "from-pink-500 to-rose-500",
};

const CourseCard = ({ course, index }: CourseProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        delay: Math.min(index * 0.08, 0.4),
        ease: "easeOut"
      }
    },
  };

  const gradientClass = categoryColors[course.category] || "from-blue-500 to-purple-500";
  const courseImage = courseImages[course.category] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80";

  const phoneNumber = "919423281767";
  const courseTitle = encodeURIComponent(course.title);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=I'm interested in the ${courseTitle} course. Please provide more information.`;

  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-gray-100"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      layout
    >
      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={courseImage} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Course icon overlay */}
        <div className="absolute top-4 left-4 text-4xl bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
          {course.icon}
        </div>
        
        {/* Category badge */}
        <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${gradientClass} shadow-lg`}>
          {course.category}
        </div>
        
        {/* Rating on image */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-semibold text-gray-800">{course.rating.toFixed(1)}</span>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">
          {course.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1.5 text-gray-600">
            <div className={`p-1.5 rounded-lg bg-gradient-to-r ${gradientClass} bg-opacity-10`}>
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">{course.students}+</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <div className={`p-1.5 rounded-lg bg-gradient-to-r ${gradientClass} bg-opacity-10`}>
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">{course.duration}</span>
          </div>
        </div>
      </div>
      
      {/* Action section */}
      <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-3">
          {course.link && (
            <a 
              href={course.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              अधिक माहिती <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <Button 
            className={`flex-1 py-2.5 bg-gradient-to-r ${gradientClass} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}
          >
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              📞 संपर्क करा
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
