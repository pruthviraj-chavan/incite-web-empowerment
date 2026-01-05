import { memo } from 'react';
import { Shield, Zap, Cloud, Bell, Laptop, Award, Users, BookOpen, Clock } from 'lucide-react';

const benefits = [
  { icon: Shield, label: 'Government Certified', color: 'bg-lime-400 text-slate-900' },
  { icon: Zap, label: 'Fast Learning', color: 'bg-lime-400 text-slate-900' },
  { icon: Cloud, label: 'Online Support', color: 'bg-lime-400 text-slate-900' },
  { icon: Bell, label: 'Job Alerts', color: 'bg-lime-400 text-slate-900' },
  { icon: Laptop, label: 'Lab Access', color: 'bg-lime-400 text-slate-900' },
];

export const ModernBenefits = memo(() => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Floating badges */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-lime-400/50 transition-all duration-300 hover:scale-105`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`w-8 h-8 rounded-full ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="w-4 h-4" />
                </div>
                <span className="text-white font-medium text-sm">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 border border-purple-500/30">
            <span className="text-lg">✨</span> BENEFITS
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            More than just a<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              training institute
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            आमची संस्था तुम्हाला केवळ शिक्षणच नव्हे तर संपूर्ण करिअर मार्गदर्शन देते. 
            आधुनिक सुविधा, अनुभवी प्रशिक्षक आणि प्रात्यक्षिक शिक्षण.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Award, title: 'Government Certified', desc: 'MKCL, MSCIT आणि इतर मान्यताप्राप्त प्रमाणपत्रे', color: 'lime' },
            { icon: Laptop, title: 'Multi-Device Access', desc: 'कुठूनही शिकण्याची सुविधा', color: 'lime' },
            { icon: Zap, title: 'Fast Track Courses', desc: 'जलद आणि प्रभावी अभ्यासक्रम', color: 'lime' },
            { icon: Cloud, title: 'Online Support', desc: '24/7 ऑनलाइन मदत उपलब्ध', color: 'purple' },
            { icon: Users, title: 'Placement Assistance', desc: 'नोकरी मिळवण्यात मदत', color: 'purple' },
            { icon: Bell, title: 'Real-Time Updates', desc: 'नवीन संधींची त्वरित माहिती', color: 'purple' },
            { icon: Clock, title: 'Flexible Timings', desc: 'सकाळ, दुपार, संध्याकाळ बॅचेस', color: 'blue' },
            { icon: BookOpen, title: 'Study Materials', desc: 'संपूर्ण अभ्यास साहित्य समाविष्ट', color: 'blue' },
            { icon: Shield, title: 'Quality Assurance', desc: '२०+ वर्षांचा अनुभव', color: 'blue' },
          ].map((feature, i) => (
            <div
              key={i}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/50"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  feature.color === 'lime' ? 'bg-lime-400 text-slate-900' :
                  feature.color === 'purple' ? 'bg-purple-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
                <div className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-slate-600 group-hover:border-slate-500 group-hover:text-slate-400 transition-colors">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ModernBenefits.displayName = 'ModernBenefits';

export default ModernBenefits;
