
import { Users, Clock, Star } from "lucide-react";
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
    fee: string;
    icon: string;
  };
}

const CourseCard = ({ course }: CourseProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-blue transition-all duration-300 overflow-hidden animate-scale-in h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{course.icon}</div>
          <Badge variant="outline" className="text-xs font-medium px-2 py-1 border-incite-blue text-incite-blue">
            {course.category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
        
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
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm font-medium ml-2">{course.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{course.fee}</span>
          <Button size="sm" className="gradient-blue text-white btn-hover">
            <a 
              href={`https://wa.me/919423281767?text=I'm interested in the ${course.title} course. Please provide more information.`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Inquire Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
