
import React from "react";

const MarketingPostersSection = () => {
  const posters = [
    { id: 1, image: "/1.jpg", alt: "Artificial Intelligence", width: 800, height: 1066 },
    { id: 2, image: "/2.jpg", alt: "Batch 2024", width: 800, height: 1066 },
    { id: 3, image: "/3.jpg", alt: "Past Students", width: 800, height: 1066 },
  ];

  return (
    <section className="marketing-posters-section py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((poster) => (
            <div key={poster.id} className="poster-card bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="aspect-[3/4] relative">
                <img
                  src={poster.image}
                  alt={poster.alt}
                  width={poster.width}
                  height={poster.height}
                  loading={poster.id === 1 ? "eager" : "lazy"}
                  decoding={poster.id === 1 ? "sync" : "async"}
                  className="w-full h-full object-cover"
                  fetchpriority={poster.id === 1 ? "high" : "auto"}
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
