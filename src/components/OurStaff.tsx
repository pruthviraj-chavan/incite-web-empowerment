import { motion } from "framer-motion";

const staffMembers = [
  {
    id: 1,
    name: "माधुरी कांबळे",
    image: "/m1.png"
  },
  {
    id: 2,
    name: "सावित्री कांबळे",
    image: "/m2.png"
  },
  {
    id: 3,
    name: "तैजैन तांबोली",
    image: "/m3.png"
  },
  {
    id: 4,
    name: "श्रुति सुतार",
    image: "/m4.png"
  },
  {
    id: 5,
    name: "मनाली पोवार",
    image: "/m5.png"
  },
  {
    id: 6,
    name: "सानिका टेपुगडे",
    image: "/m6.png"
  },
  {
    id: 7,
    name: "नाज ढोले",
    image: "/m7.png"
  },
  {
    id: 8,
    name: "धनश्री चौगले",
    image: "/m8.png"
  }
];

export const OurStaff = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
            👥 Our Dedicated Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            आमचे <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">स्टाफ</span>
          </h2>
          <p className="text-lg text-white/70">
            आमच्या संस्थेच्या विकासात महत्त्वाची भूमिका बजावणार्‍या समर्पित स्टाफच्या भेट घ्या.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={staff.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center bg-gradient-to-t from-black/50 to-transparent -mt-16 relative z-10 pt-20">
                  <h3 className="text-lg font-semibold text-white">{staff.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStaff;
