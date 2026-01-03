import { memo } from 'react';
import { TrendingUp, Users, Award, BookOpen } from 'lucide-react';

const PerformanceStats = memo(() => {
  const stats = [
    { value: "95%", label: "प्लेसमेंट दर", trend: "+8%", color: "from-orange-600 to-orange-400" },
    { value: "85%", label: "कोर्स पूर्णता", trend: "+5%", color: "from-orange-500 to-orange-300" },
    { value: "80%", label: "विद्यार्थी समाधान", trend: "+12%", color: "from-orange-400 to-yellow-400" },
  ];

  return (
    <section className="py-20 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          आमचे यश तुमच्या यशात
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stacked Cards */}
          <div className="relative h-[320px] flex items-center justify-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`absolute w-56 h-64 rounded-2xl bg-gradient-to-br ${stat.color} shadow-2xl flex flex-col items-start justify-end p-6 transition-all duration-500 hover:scale-105`}
                style={{
                  transform: `translateX(${(index - 1) * 60}px) translateZ(${(2 - index) * 50}px) rotateY(${(index - 1) * -8}deg)`,
                  zIndex: 3 - index,
                  opacity: 1 - index * 0.1,
                }}
              >
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="mt-auto">
                  <span className="text-5xl font-bold text-white">{stat.value}</span>
                  {index === 2 && (
                    <span className="ml-2 text-lg text-green-300">{stat.trend}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              पारदर्शक कामगिरी ट्रॅकिंग
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              रिअल-टाइम, सहज वाचता येणाऱ्या विश्लेषणासह विद्यार्थ्यांच्या प्रगतीचे निरीक्षण करा.
              आमच्या प्रशिक्षण कार्यक्रमांचे यश दर आणि परिणाम पहा.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <Users className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold text-white">15000+</div>
                <div className="text-sm text-zinc-400">विद्यार्थी</div>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <Award className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold text-white">22+</div>
                <div className="text-sm text-zinc-400">वर्षे</div>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-zinc-400">कोर्सेस</div>
              </div>
            </div>

            <a
              href="tel:9423281767"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white text-zinc-900 font-medium rounded-full hover:bg-zinc-100 transition-colors"
            >
              अधिक जाणून घ्या
              <span className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

PerformanceStats.displayName = "PerformanceStats";

export default PerformanceStats;
