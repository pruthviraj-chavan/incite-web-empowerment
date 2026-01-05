import { memo } from 'react';
import { Monitor, Keyboard, Calculator, Code, Brain, FileText, Award, Users } from 'lucide-react';

const courseIcons = [
  { icon: Monitor, name: 'MS-CIT', color: 'bg-blue-500' },
  { icon: Keyboard, name: 'Typing', color: 'bg-green-500' },
  { icon: Calculator, name: 'Tally', color: 'bg-orange-500' },
  { icon: Code, name: 'Programming', color: 'bg-purple-500' },
  { icon: Brain, name: 'AI Tools', color: 'bg-pink-500' },
  { icon: FileText, name: 'MKCL', color: 'bg-teal-500' },
  { icon: Award, name: 'Saarthi', color: 'bg-red-500' },
  { icon: Users, name: 'Soft Skills', color: 'bg-indigo-500' },
];

export const IntegrationTree = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Course tree visualization */}
          <div className="relative bg-slate-100 rounded-3xl p-8 md:p-12">
            {/* Top row of icons */}
            <div className="flex justify-center gap-4 mb-8">
              {courseIcons.slice(0, 4).map((course, i) => (
                <div
                  key={i}
                  className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                  title={course.name}
                >
                  <course.icon className="w-6 h-6" />
                </div>
              ))}
            </div>
            
            {/* Connection lines */}
            <div className="flex justify-center mb-4">
              <svg className="w-64 h-20" viewBox="0 0 200 60">
                <path d="M30 0 L30 30 L100 30 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M70 0 L70 20 L100 20 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M130 0 L130 20 L100 20 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M170 0 L170 30 L100 30 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            {/* Center logo */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <img src="/lovable-uploads/5d12ee02-32f1-4a6c-8bc8-cc5d0ceeec8f.png" alt="Incite" className="w-12 h-12" />
              </div>
            </div>
            
            {/* Connection lines - bottom */}
            <div className="flex justify-center mb-4">
              <svg className="w-64 h-20 rotate-180" viewBox="0 0 200 60">
                <path d="M30 0 L30 30 L100 30 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M70 0 L70 20 L100 20 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M130 0 L130 20 L100 20 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M170 0 L170 30 L100 30 L100 60" stroke="#94a3b8" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            {/* Bottom row of icons */}
            <div className="flex justify-center gap-4">
              {courseIcons.slice(4, 8).map((course, i) => (
                <div
                  key={i}
                  className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                  title={course.name}
                >
                  <course.icon className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              One platform,<br />
              <span className="text-purple-600">unlimited possibilities</span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              एकाच संस्थेतून विविध संगणक अभ्यासक्रम शिका. MS-CIT, Tally, Programming, 
              Typing आणि बरेच काही - सर्व एकाच ठिकाणी.
            </p>
            
            <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors">
              View all courses
            </button>
            
            <div className="mt-12 p-6 bg-slate-100 rounded-2xl">
              <p className="text-slate-700 italic text-lg mb-4">
                "आमची संस्था विद्यार्थ्यांना सहकार्य, नवकल्पना आणि कल्पना सहजतेने आणि 
                सहजपणे जिवंत करण्यासाठी सक्षम करते."
              </p>
              <div className="flex items-center gap-3">
                <img src="/prashant.png" alt="Director" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-900">Prashant Birajdar</p>
                  <p className="text-sm text-slate-500">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

IntegrationTree.displayName = 'IntegrationTree';

export default IntegrationTree;
