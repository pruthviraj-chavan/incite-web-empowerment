
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Users, Award, Star, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "राजेंद्र चव्हाण",
    role: "संस्थापक आणि सीईओ",
    bio: "२५ वर्षांचा अनुभव असलेले आयटी शिक्षणतज्ज्ञ, ज्यांनी २००१ मध्ये इन्साइट कॉम्प्यूटर्सची स्थापना केली.",
    image: "/rajendra.png",
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    iconColor: "text-blue-600",
    experience: "25+ वर्षे",
    speciality: "IT Leadership"
  },
  {
    id: 2,
    name: "सुमित चव्हाण",
    role: "प्रशिक्षण प्रमुख",
    bio: "अभ्यासक्रम आणि प्रशिक्षण पद्धती विकसित करण्यात महत्त्वाची भूमिका निभावली.",
    image: "/sumit.jpg",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-100",
    iconColor: "text-emerald-600",
    experience: "15+ वर्षे",
    speciality: "Training Excellence"
  },
  {
    id: 3,
    name: "प्रशांत वांजुळे",
    role: "सह-संस्थापक, तांत्रिक संचालक",
    bio: "विद्यार्थ्यांना सर्वात अद्ययावत आणि उद्योगास उपयुक्त तांत्रिक कौशल्ये शिकवण्यासाठी जबाबदार.",
    image: "/prashant.png",
    gradient: "from-orange-500 via-red-600 to-pink-700",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
    iconColor: "text-orange-600",
    experience: "20+ वर्षे",
    speciality: "Technical Innovation"
  },
  {
    id: 4,
    name: "पृथ्वीराज चव्हाण",
    role: "प्लेसमेंट अधिकारी",
    bio: "विद्यार्थ्यांना योग्य संधी मिळवून देण्यासाठी उद्योगांशी संपर्क साधण्याचे कार्य करतात",
    image: "/pruthvi.jpg",
    gradient: "from-purple-500 via-violet-600 to-indigo-700",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    iconColor: "text-purple-600",
    experience: "12+ वर्षे",
    speciality: "Career Guidance"
  }
];

export const OurTeam = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Users className="inline w-4 h-4 mr-2" />
            आमचे टीम
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              विशेषज्ञ शिक्षक
            </span>
            <br />
            <span className="text-white">आणि मार्गदर्शक</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            विद्यार्थ्यांना शिकवण्याविषयी आणि सक्षम करण्याविषयी उत्साही असलेल्या समर्पित व्यावसायिकांची भेट घ्या
          </p>
        </motion.div>
        
        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <div className={`absolute inset-0 ${member.bgColor} opacity-20`}></div>
                  <motion.img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating experience badge */}
                  <motion.div 
                    className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${member.gradient} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {member.experience}
                  </motion.div>
                  
                  {/* Speciality badge */}
                  <motion.div 
                    className="absolute bottom-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Award className="inline w-3 h-3 mr-1" />
                    {member.speciality}
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <p className={`font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {member.bio}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className={`flex-1 py-2 px-4 bg-gradient-to-r ${member.gradient} text-white rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      संपर्क करा
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div 
                      className={`p-2 ${member.iconColor} bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Phone className="w-4 h-4" />
                    </motion.div>
                    <motion.div 
                      className={`p-2 ${member.iconColor} bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.div>
                    <motion.div 
                      className={`p-2 ${member.iconColor} bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${member.gradient} rounded-full opacity-0 group-hover:opacity-70`}
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 15, -15, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            आमच्याशी संपर्क साधा
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
