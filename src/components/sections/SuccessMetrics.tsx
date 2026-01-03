import { memo } from 'react';
import { Briefcase, GraduationCap, Building2, TrendingUp } from 'lucide-react';

const metrics = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: "15,000+",
    label: "प्रमाणित विद्यार्थी",
    description: "MS-CIT, KLiCK आणि इतर कोर्सेस"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: "7,000+",
    label: "नोकरी प्लेसमेंट",
    description: "बँक, IT आणि शासकीय क्षेत्रात"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "3,000+",
    label: "स्वयंरोजगार",
    description: "फ्रीलान्सिंग आणि व्यवसाय"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "95%",
    label: "यश दर",
    description: "विद्यार्थी समाधान"
  },
];

const SuccessMetrics = memo(() => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{metric.value}</div>
              <div className="text-lg font-semibold text-white/90 mb-1">{metric.label}</div>
              <div className="text-sm text-white/70">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SuccessMetrics.displayName = "SuccessMetrics";

export default SuccessMetrics;
