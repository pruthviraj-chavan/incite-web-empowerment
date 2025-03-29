import { motion } from "framer-motion";

const staffMembers = [
  {
    id: 1,
    name: "माधुरी कांबळे",
    image: "/m1.jpg"
  },
  {
    id: 2,
    name: "सावित्री कांबळे",
    image: "/m2.jpg"
  },
  {
    id: 3,
    name: "तैजैन तांबोली",
    image: "/m3.jpg"
  },
  {
    id: 4,
    name: "श्रुति सुतार",
    image: "/m4.jpg"
  },
  {
    id: 5,
    name: "मनाली पोवार",
    image: "/m5.jpg"
  },
  {
    id: 6,
    name: "सानिका टेपुगडे",
    image: "/m6.jpg"
  },
  {
    id: 7,
    name: "नाज ढोले",
    image: "/m7.jpg"
  },
  {
    id: 8,
    name: "धनश्री चौगले",
    image: "/m8.jpg"
  }
];

export const OurStaff = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-teal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            आमचे <span className="gradient-teal-blue">स्टाफ</span>
          </h2>
          <p className="text-xl text-gray-600">
            आमच्या संस्थेच्या विकासात महत्त्वाची भूमिका बजावणार्‍या समर्पित स्टाफच्या भेट घ्या.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={staff.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-blue transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold mb-1">{staff.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStaff;
