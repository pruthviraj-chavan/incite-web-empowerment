import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Laptop, Clock, Shield, Sparkles, ArrowRight } from 'lucide-react';

export const FeatureShowcase = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Large typography background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="flex items-baseline gap-4 opacity-5">
          <span className="text-[12vw] font-bold text-purple-500">incite</span>
          <span className="text-[12vw] font-light text-white">Features</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 border border-purple-500/30">
            <Sparkles className="w-4 h-4" /> FEATURES
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            आमची संस्था आपल्या विद्यार्थ्यांना सर्वोत्तम सुविधा आणि शिक्षण प्रदान करते.
          </p>
        </div>

        {/* Feature grid - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: 'Government Certified', color: 'lime' },
            { icon: Laptop, title: 'Modern Labs', color: 'lime' },
            { icon: Award, title: 'Quality Training', color: 'lime' },
            { icon: Clock, title: 'Flexible Batches', color: 'purple' },
            { icon: Users, title: 'Expert Faculty', color: 'purple' },
            { icon: BookOpen, title: 'Updated Syllabus', color: 'purple' },
          ].map((feature, i) => (
            <div
              key={i}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    feature.color === 'lime' ? 'bg-lime-400 text-slate-900' : 'bg-purple-500 text-white'
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-medium">{feature.title}</h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-lime-400 group-hover:text-lime-400 transition-colors">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-slate-900 font-semibold rounded-full hover:bg-lime-300 transition-colors"
          >
            Explore Courses <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
});

FeatureShowcase.displayName = 'FeatureShowcase';

export default FeatureShowcase;
