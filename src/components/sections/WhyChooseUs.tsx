import { memo } from 'react';
import { CheckCircle, Phone, Clock, Award, Users, Laptop } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "शासकीय प्रमाणपत्रे",
    description: "MS-CIT, KLiCK आणि इतर मान्यताप्राप्त प्रमाणपत्रे"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "अनुभवी प्रशिक्षक",
    description: "22+ वर्षांचा अनुभव असलेले तज्ञ शिक्षक"
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "आधुनिक लॅब",
    description: "नवीनतम कॉम्प्युटर्स आणि सॉफ्टवेअरसह सुसज्ज"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "लवचिक वेळापत्रक",
    description: "सकाळी, दुपारी आणि संध्याकाळी बॅचेस उपलब्ध"
  },
];

const WhyChooseUs = memo(() => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            आम्हाला का निवडावे?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              इन्साइट कॉम्प्युटर्स - तुमचे यश आमचे ध्येय
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            2001 पासून ग्रामीण भारतात दर्जेदार संगणक शिक्षण देणारी विश्वसनीय संस्था
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">आत्ताच संपर्क करा</div>
                <div className="text-xl font-bold text-gray-800">9423281767</div>
              </div>
            </div>
            <a
              href="tel:9423281767"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              फ्री डेमो बुक करा
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = "WhyChooseUs";

export default WhyChooseUs;
