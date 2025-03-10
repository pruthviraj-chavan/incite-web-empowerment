
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
      { id: 1, src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", title: "Main Lecture Hall", date: "May 10, 2023", views: 178 },
      { id: 2, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Interactive Session", date: "June 28, 2023", views: 156 },
      { id: 3, src: "https://images.unsplash.com/photo-1588072432904-843af37f8eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80", title: "Certification Ceremony", date: "September 15, 2023", views: 232 }
    ],
    office: [
      { id: 1, src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80", title: "Administrative Office", date: "April 20, 2023", views: 145 },
      { id: 2, src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80", title: "Planning Meeting", date: "July 12, 2023", views: 132 },
      { id: 3, src: "https://images.unsplash.com/photo-1622937343750-fd06525e542c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Staff Meeting", date: "August 25, 2023", views: 167 }
    ],
    reception: [
      { id: 1, src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", title: "Reception Area", date: "March 15, 2023", views: 187 },
      { id: 2, src: "https://images.unsplash.com/photo-1555048945-4233f436377b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Student Inquiry", date: "May 22, 2023", views: 154 },
      { id: 3, src: "https://images.unsplash.com/photo-1575476783086-d09ed268aa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Welcome Desk", date: "July 5, 2023", views: 176 }
    ],
    seminar: [
      { id: 1, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Career Guidance Seminar", date: "April 10, 2023", views: 211 },
      { id: 2, src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Industry Expert Session", date: "June 18, 2023", views: 189 },
      { id: 3, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80", title: "Technology Workshop", date: "August 20, 2023", views: 230 }
    ],
    placement: [
      { id: 1, src: "https://images.unsplash.com/photo-1573497019707-1c04de26e58c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Interview Preparation", date: "May 15, 2023", views: 178 },
      { id: 2, src: "https://images.unsplash.com/photo-1596568359553-a55baccbcebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Campus Recruitment", date: "July 25, 2023", views: 203 },
      { id: 3, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Job Fair", date: "September 8, 2023", views: 245 }
    ],
    lectures: [
      { id: 1, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Industry Expert Talk", date: "April 22, 2023", views: 167 },
      { id: 2, src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", title: "Tech Trends Lecture", date: "June 15, 2023", views: 193 },
      { id: 3, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", title: "Guest Speaker", date: "August 10, 2023", views: 215 }
    ],
    activities: [
      { id: 1, src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Group Project", date: "May 18, 2023", views: 178 },
      { id: 2, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", title: "Coding Competition", date: "July 7, 2023", views: 210 },
      { id: 3, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Tech Quiz", date: "August 25, 2023", views: 186 }
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
