import { memo } from 'react';

const stats = [
  { value: '5000+', label: 'trained students', desc: 'आमच्या संस्थेतून शिक्षण घेतलेले विद्यार्थी आज विविध क्षेत्रात यशस्वी आहेत.', color: 'bg-lime-400 text-slate-900' },
  { value: '95%', label: 'placement rate', desc: 'आमच्या विद्यार्थ्यांना नोकरी मिळण्याचे प्रमाण अत्यंत उत्तम आहे.', color: 'bg-purple-500 text-white' },
  { value: '4.9+', label: 'average rating', desc: 'विद्यार्थ्यांचा उत्कृष्ट प्रतिसाद आणि समाधान.', color: 'bg-white text-slate-900' },
];

export const StatsShowcase = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-4 opacity-80">{stat.label}</div>
                <p className="text-sm opacity-70">{stat.desc}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-20 bg-current"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsShowcase.displayName = 'StatsShowcase';

export default StatsShowcase;
