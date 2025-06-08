
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "राजेंद्र चव्हाण",
    role: "संस्थापक आणि सीईओ",
    bio: "२५ वर्षांचा अनुभव असलेले आयटी शिक्षणतज्ज्ञ, ज्यांनी २००१ मध्ये इन्साइट कॉम्प्यूटर्सची स्थापना केली.",
    image: "/rajendra.png"
  },
  {
    id: 2,
    name: "सुमित चव्हाण",
    role: "प्रशिक्षण प्रमुख",
    bio: "अभ्यासक्रम आणि प्रशिक्षण पद्धती विकसित करण्यात महत्त्वाची भूमिका निभावली.",
    image: "/sumit.jpg"
  },
  {
    id: 3,
    name: "प्रशांत वांजुळे",
    role: "सह-संस्थापक , तांत्रिक संचालक",
    bio: "विद्यार्थ्यांना सर्वात अद्ययावत आणि उद्योगास उपयुक्त तांत्रिक कौशल्ये शिकवण्यासाठी जबाबदार.",
    image: "/prashant.png"
  },
  {
    id: 4,
    name: "पृथ्वीराज चव्हाण",
    role: "प्लेसमेंट अधिकारी",
    bio: "विद्यार्थ्यांना योग्य संधी मिळवून देण्यासाठी उद्योगांशी संपर्क साधण्याचे कार्य करतात",
    image: "/pruthvi.jpg"
  }
];

export const OurTeam = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-teal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            आमचे <span className="gradient-teal-blue">टीम</span>
          </h2>
          <p className="text-xl text-gray-600">
            विद्यार्थ्यांना शिकवण्याविषयी आणि सक्षम करण्याविषयी उत्साही असलेल्या समर्पित व्यावसायिकांची भेट घ्या.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-blue transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-incite-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
