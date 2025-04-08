
import { Users, Clock, Star } from "lucide-react";
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
  };
  index: number;
}

const CourseCard = ({ course, index }: CourseProps) => {
  // Animation variants - simplified for better performance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        delay: Math.min(index * 0.1, 0.5),  // Cap delay for better performance
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const getRandomGradient = () => {
    const gradients = [
      "gradient-blue",
      "gradient-orange",
      "gradient-purple",
      "gradient-green",
      "gradient-pink",
      "gradient-cyan"
    ];
    return gradients[index % gradients.length];
  };

  // Create phone number link with proper formatting
  const phoneNumber = "919423281767";
  const courseTitle = encodeURIComponent(course.title);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=I'm interested in the ${courseTitle} course. Please provide more information.`;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md transition-all duration-200 overflow-hidden h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl" aria-hidden="true">
            {course.icon}
          </div>
          <Badge 
            variant="outline" 
            className="text-xs font-medium px-2 py-1 border-incite-blue text-incite-blue"
          >
            {course.category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>{course.students}+ students</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4" aria-label={`Course rating: ${course.rating} out of 5 stars`}>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-sm font-medium ml-2">{course.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">संपर्क:</span>
          <Button 
            size="sm" 
            className={`text-white btn-hover ${getRandomGradient()}`}
            aria-label={`Contact via WhatsApp for ${course.title} course`}
          >
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              9423281767
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
