import { memo } from 'react';

const testimonials = [
  {
    name: "Aniket Patil",
    role: "सॉफ्टवेअर इंजिनियर",
    content: "इन्साइट कॉम्प्युटर्समधून MS-CIT केल्यानंतर मला चांगल्या IT कंपनीत नोकरी मिळाली. शिक्षक खूप मदतगार होते.",
    avatar: "A"
  },
  {
    name: "Priya Deshmukh",
    role: "बँक कर्मचारी",
    content: "टायपिंग आणि कॉम्प्युटर कोर्समुळे बँकेच्या परीक्षेत यश मिळवता आले. उत्तम प्रशिक्षण!",
    avatar: "P"
  },
  {
    name: "Sachin Jadhav",
    role: "व्यवसायिक",
    content: "Tally कोर्समुळे माझा व्यवसाय व्यवस्थापन अधिक सोपे झाले. GST सगळं समजलं.",
    avatar: "S"
  },
  {
    name: "Manasi Kulkarni",
    role: "शिक्षिका",
    content: "डिजिटल मार्केटिंग शिकून ऑनलाइन क्लासेस घेणे सोपे झाले. धन्यवाद इन्साइट!",
    avatar: "M"
  },
  {
    name: "Rahul Shinde",
    role: "ग्राफिक डिझायनर",
    content: "Photoshop आणि CorelDRAW शिकून आता फ्रीलान्सिंग करतो. उत्तम करिअर सुरुवात!",
    avatar: "R"
  },
  {
    name: "Kavita More",
    role: "शासकीय कर्मचारी",
    content: "KLiCK कोर्समुळे स्पर्धा परीक्षेत मदत झाली. प्रॅक्टिकल शिक्षण खूप उपयुक्त होते.",
    avatar: "K"
  },
];

const TestimonialsGrid = memo(() => {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              यशस्वी विद्यार्थ्यांचे अनुभव
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              आमच्या विद्यार्थ्यांनी AI-संचालित शिक्षणाद्वारे आपले करिअर कसे बदलले याच्या वास्तविक कथा.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-5 bg-zinc-800/60 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300 hover:bg-zinc-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

TestimonialsGrid.displayName = "TestimonialsGrid";

export default TestimonialsGrid;
