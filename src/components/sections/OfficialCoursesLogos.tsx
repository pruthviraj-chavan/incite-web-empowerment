import { memo } from 'react';
import { motion } from 'framer-motion';
import mscitLogo from '@/assets/mscit-logo.png';
import klicLogo from '@/assets/klic-logo.png';
import cctpLogo from '@/assets/cctp-logo.png';

const logos = [
  { src: mscitLogo, alt: 'MS-CIT - Maharashtra State Certificate in Information Technology', name: 'MS-CIT' },
  { src: klicLogo, alt: 'MKCL KLiC Courses - Gateway to Knowledge Lit Careers', name: 'KLiC Courses' },
  { src: cctpLogo, alt: 'MKCL CCTP - Certificate of Computer Typing Proficiency', name: 'CCTP' },
];

const OfficialCoursesLogos = memo(() => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-incite-blue/10 text-incite-blue text-sm font-medium rounded-full mb-4">
            अधिकृत कोर्सेस
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MKCL अधिकृत प्रमाणपत्र कोर्सेस
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            इनसाईट कॉम्प्युटर्स हे MKCL चे अधिकृत केंद्र आहे. आम्ही MS-CIT, KLiC आणि CCTP सारखे मान्यताप्राप्त कोर्सेस प्रदान करतो.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-incite-blue/20 h-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden rounded-xl bg-gray-50 p-4 mb-4 w-full">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {logo.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500">
            सरकारमान्य प्रमाणपत्रासह करिअरच्या नवीन संधी
          </p>
        </motion.div>
      </div>
    </section>
  );
});

OfficialCoursesLogos.displayName = 'OfficialCoursesLogos';

export default OfficialCoursesLogos;
