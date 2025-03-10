
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const GalleryPage = () => {
  const [selectedTab, setSelectedTab] = useState("lab");
  
  const galleryCategories = [
    { id: "lab", name: "Computer Lab" },
    { id: "hall", name: "Lecture Hall" },
    { id: "office", name: "Office Area" },
    { id: "reception", name: "Reception" },
    { id: "seminar", name: "Seminar Sessions" },
    { id: "placement", name: "Placement Area" },
    { id: "lectures", name: "Guest Lectures" },
    { id: "activities", name: "Student Activities" }
  ];
  
  const galleryImages = {
    lab: [
      { id: 1, src: "/img-03.jpg", title: "Modern Computer Lab", date: "June 15, 2023", views: 245 },
      { id: 2, src: "/img-11.jpg", title: "Student Training Session", date: "July 22, 2023", views: 189 },
      { id: 3, src: "/img-12.jpg", title: "Programming Class", date: "August 5, 2023", views: 210 }
    ],
    hall: [
      { id: 1, src: "/img-08.jpg", title: "Main Lecture Hall", date: "May 10, 2023", views: 178 },
      { id: 2, src: "/img-04.jpg", title: "Interactive Session", date: "June 28, 2023", views: 156 },
      { id: 3, src: "/img-03.jpg", title: "Certification Ceremony", date: "September 15, 2023", views: 232 }
    ],
    office: [
      { id: 1, src: "/img-06.jpg", title: "Administrative Office", date: "April 20, 2023", views: 145 },
      { id: 2, src: "/img-05.jpg", title: "Planning Meeting", date: "July 12, 2023", views: 132 },
      { id: 3, src: "/img-03.jpg", title: "Staff Meeting", date: "August 25, 2023", views: 167 }
    ],
    reception: [
      { id: 1, src: "/img-06.jpg", title: "Reception Area", date: "March 15, 2023", views: 187 },
      { id: 2, src: "/img-07.jpg", title: "Student Inquiry", date: "May 22, 2023", views: 154 },
      { id: 3, src: "/img-03.jpg", title: "Welcome Desk", date: "July 5, 2023", views: 176 }
    ],
    seminar: [
      { id: 1, src: "/img-14.jpg", title: "Career Guidance Seminar", date: "April 10, 2023", views: 211 },
      { id: 2, src: "/img-13.jpg", title: "Industry Expert Session", date: "June 18, 2023", views: 189 },
      { id: 3, src: "/img-15.jpg", title: "Technology Workshop", date: "August 20, 2023", views: 230 }
    ],
    placement: [
      { id: 1, src: "/img-03.jpg", title: "Interview Preparation", date: "May 15, 2023", views: 178 },
      { id: 2, src: "/img-02.jpg", title: "Campus Recruitment", date: "July 25, 2023", views: 203 },
      { id: 3, src: "/img-01.jpg", title: "Job Fair", date: "September 8, 2023", views: 245 }
    ],
    lectures: [
      { id: 1, src: "/img-16.jpg", title: "Industry Expert Talk", date: "April 22, 2023", views: 167 },
      { id: 2, src: "/img-12.jpg", title: "Tech Trends Lecture", date: "June 15, 2023", views: 193 },
      { id: 3, src: "/img-11.jpg", title: "Guest Speaker", date: "August 10, 2023", views: 215 }
    ],
    activities: [
      { id: 1, src: "/img-01.jpg", title: "Group Project", date: "May 18, 2023", views: 178 },
      { id: 2, src: "/img-02.jpg", title: "Coding Competition", date: "July 7, 2023", views: 210 },
      { id: 3, src: "/img-03.jpg", title: "Tech Quiz", date: "August 25, 2023", views: 186 }
    ]
  };
  
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="page-fade-in pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-700">
              Take a visual tour of our institute, facilities, and student activities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
              {galleryCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="py-3 data-[state=active]:bg-incite-blue data-[state=active]:text-white rounded-md"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {images.map((image) => (
                    <motion.div
                      key={image.id}
                      variants={fadeInVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-blue transition-all duration-300"
                    >
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{image.date}</span>
                          <span>{image.views} views</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
