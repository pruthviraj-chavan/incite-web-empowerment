
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VishwakarmaPage = () => {
  const trades = [
    { id: "carpentry", name: "Carpentry", 
      description: "Learn woodworking skills, furniture making, and carpentry techniques with modern tools and traditional craftsmanship." },
    { id: "welding", name: "Welding", 
      description: "Master various welding techniques, metal fabrication, and structural work with industry-standard equipment." },
    { id: "plumbing", name: "Plumbing", 
      description: "Develop skills in pipe fitting, drainage systems, water supply installation, and modern plumbing technologies." },
    { id: "electrical", name: "Electrical Work", 
      description: "Learn electrical wiring, maintenance, installation, and safety protocols for residential and commercial settings." },
    { id: "tailoring", name: "Tailoring", 
      description: "Master garment making, fabric selection, pattern design, and tailoring techniques for traditional and modern clothing." },
    { id: "handicrafts", name: "Handicrafts", 
      description: "Learn various traditional handicraft techniques, material selection, design principles, and artisanal production methods." }
  ];
  
  const tradeImages = {
    carpentry: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?carpentry,woodwork&sig=${i}`, 
      alt: `Carpentry Training Image ${i + 1}` 
    })),
    welding: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?welding,metalwork&sig=${i + 10}`, 
      alt: `Welding Training Image ${i + 1}` 
    })),
    plumbing: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?plumbing,pipes&sig=${i + 20}`, 
      alt: `Plumbing Training Image ${i + 1}` 
    })),
    electrical: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?electrical,wiring&sig=${i + 30}`, 
      alt: `Electrical Training Image ${i + 1}` 
    })),
    tailoring: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?tailoring,sewing&sig=${i + 40}`, 
      alt: `Tailoring Training Image ${i + 1}` 
    })),
    handicrafts: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?handicraft,craft&sig=${i + 50}`, 
      alt: `Handicraft Training Image ${i + 1}` 
    }))
  };
  
  const [selectedTrade, setSelectedTrade] = useState("carpentry");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="page-fade-in pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PM <span className="gradient-text">Vishwakarma</span> Scheme
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Skill development courses for traditional artisans and craftspeople
            </p>
            <div className="flex justify-center">
              <Button className="gradient-blue text-white btn-hover">
                <a 
                  href="https://wa.me/919423281767?text=I'm interested in the PM Vishwakarma Scheme courses. Please provide more information."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2"
                >
                  Inquire About PM Vishwakarma Scheme
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Available Trades</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The PM Vishwakarma Scheme offers training in various traditional trades. 
              These courses are designed to enhance skills, improve productivity, and
              increase market relevance of traditional artisans and craftspeople.
            </p>
          </div>
          
          <Tabs defaultValue={selectedTrade} onValueChange={setSelectedTrade} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto mb-8">
              {trades.map((trade) => (
                <TabsTrigger 
                  key={trade.id}
                  value={trade.id}
                  className="py-3 data-[state=active]:bg-incite-blue data-[state=active]:text-white rounded-md"
                >
                  {trade.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {trades.map((trade) => (
              <TabsContent key={trade.id} value={trade.id} className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                  <h3 className="text-2xl font-bold mb-3">{trade.name}</h3>
                  <p className="text-gray-700 mb-4">{trade.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">What You'll Learn</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Technical skills specific to {trade.name.toLowerCase()}</li>
                        <li>Modern techniques and traditional craftsmanship</li>
                        <li>Material selection and quality assessment</li>
                        <li>Tool usage, maintenance, and safety</li>
                        <li>Design principles and pattern making</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Course Details</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Duration: 3 months</li>
                        <li>Certification: Government recognized</li>
                        <li>Practical training: 70%</li>
                        <li>Theory classes: 30%</li>
                        <li>Financial support available</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="gradient-blue text-white btn-hover">
                      <a 
                        href={`https://wa.me/919423281767?text=I'm interested in the ${trade.name} course under PM Vishwakarma Scheme. Please provide more information.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Enroll in {trade.name}
                      </a>
                    </Button>
                  </div>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {tradeImages[trade.id as keyof typeof tradeImages].map((image) => (
                    <motion.div
                      key={image.id}
                      variants={itemVariants}
                      className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default VishwakarmaPage;
