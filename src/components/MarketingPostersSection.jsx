// src/components/MarketingPostersSection.jsx
import React from "react";

const MarketingPostersSection = () => {
  const posters = [
    { id: 1, image: "/1.jpg", alt: "Artificial Intelligence" },
    { id: 2, image: "/2.jpg", alt: "Batch 2024" },
    { id: 3, image: "/3.jpg", alt: "Past Students" },
   
  ];

  return (
    <section className="marketing-posters-section py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((poster) => (
            <div key={poster.id} className="poster-card bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="aspect-[3/4]">
                <img
                  src={poster.image}
                  alt={poster.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold">{poster.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingPostersSection;
