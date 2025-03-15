
import { useEffect } from 'react';
import { ArrowRight, Star, Users, Clock, BookOpen, Award, ChevronRight, User, Building, Laptop, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

// Hero Section
export const Hero = () => {
  const handleEnrollNow = () => {
    window.open("https://wa.me/919423281767?text=नमस्कार,%20मला%20इन्साईट%20कंप्युटर्स%20कोर्सेसमध्ये%20रुची%20आहे.%20कृपया%20अधिक%20माहिती%20द्या.", "_blank");
  };

  return (
    <section className="hero-gradient relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left mb-12 md:mb-0 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1 bg-incite-blue-light/10 text-incite-blue rounded-full text-sm font-medium">
              २००१ पासून
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">ग्रामीण भारताला</span> <br />
              <span className="gradient-text-orange">डिजिटल कौशल्यांसह सक्षम करणे!</span>
            </h1>
            <p className="text-gray-700 mb-8 text-lg max-w-xl">
             Incite Computers, सन 2001 मध्ये राधानगरी येथे सुरू झालेले एक प्रतिष्ठित संस्थान, जे ग्रामीण भागातील विद्यार्थ्यांसाठी तंत्रज्ञानाच्या संधी निर्माण करत आहे.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleEnrollNow}
                className="gradient-purple-pink text-white rounded-full px-8 py-3 font-medium shadow-blue flex items-center btn-hover"
              >
                आता नोंदणी करा <ArrowRight size={18} className="ml-2" />
              </button>
              <Link 
                to="/courses" 
                className="bg-white text-incite-blue border border-incite-blue rounded-full px-8 py-3 font-medium flex items-center btn-hover"
              >
                अभ्यासक्रम शोधा <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-blue">
              <img 
                src="/p.jpeg" 
                alt="mscit,tally, incite,programming,typing,klick,computer" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4 shadow-blue w-48 animate-float">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-incite-blue"></div>
                <Users size={16} className="text-incite-orange" />
              </div>
              <div className="text-2xl font-bold"></div>
              <div className="text-xs text-gray-500"></div>
            </div>
            <div className="absolute -top-8 -right-4 glass rounded-lg p-4 shadow-orange w-52 animate-float">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-incite-blue"></div>
                <Award size={16} className="text-incite-orange" />
              </div>
              <div className="text-2xl font-bold"></div>
              <div className="text-xs text-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
export const Services = () => {
  const services = [
    {
      icon: <BookOpen size={40} className="text-incite-blue" />,
      title: "गुणवत्तापूर्ण शिक्षण",
      description: "तज्ञ प्रशिक्षकांकडून प्रात्यक्षिकासह संपूर्ण संगणक शिक्षण"
    },
    {
      icon: <Award size={40} className="text-incite-orange" />,
      title: "प्रमाणपत्रे",
      description: "आपली व्यावसायिक विश्वासार्हता वाढवण्यासाठी उद्योग-मान्यताप्राप्त प्रमाणपत्रे"
    },
    {
      icon: <Building size={40} className="text-incite-blue" />,
      title: "नोकरी सहाय्य",
      description: "आपल्याला नोकरी मिळवण्यात मदत करण्यासाठी प्लेसमेंट सहाय्य आणि करिअर मार्गदर्शन"
    },
    {
      icon: <User size={40} className="text-incite-orange" />,
      title: "वैयक्तिक शिक्षण",
      description: "वैयक्तिक कौशल्ये आणि आवश्यकतांनुसार अनुकूलित शिक्षण मार्ग"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-purple-blue">आमच्या सेवा</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            इन्साइट कॉम्प्युटर्समध्ये दिल्या जाणाऱ्या संगणक प्रशिक्षण आणि शैक्षणिक सेवांची व्यापक श्रेणी शोधा
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-blue transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Courses Overview
export const CoursesOverview = () => {
  const courses = [
    {
      icon: <Laptop size={32} className="text-white" />,
      title: "एमएस-सीआयटी",
      description: "महाराष्ट्र स्टेट सर्टिफिकेट इन इन्फॉर्मेशन टेक्नॉलॉजी",
      students: 3500,
      duration: "३ महिने",
      rating: 4.9
    },
    {
      icon: <Cpu size={32} className="text-white" />,
      title: "के-लिक कोर्सेस",
      description: "नॉलेज ऑफ लिटरसी फॉर कंप्युटर्स इन कीस्टोन्स",
      students: 2800,
      duration: "२-६ महिने",
      rating: 4.8
    },
    {
      icon: <BookOpen size={32} className="text-white" />,
      title: "टॅली",
      description: "अकाउंटिंग आणि वित्तीय व्यवस्थापन सॉफ्टवेअर प्रशिक्षण",
      students: 2000,
      duration: "२ महिने",
      rating: 4.7
    },
    {
      icon: <Award size={32} className="text-white" />,
      title: "प्रोग्रामिंग",
      description: "सी, सी++, जावा आणि इतर प्रोग्रामिंग भाषा",
      students: 1500,
      duration: "३-६ महिने",
      rating: 4.8
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-orange-red">लोकप्रिय अभ्यासक्रम</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            आमच्या सर्वात मागणी असलेल्या अभ्यासक्रमांसह आपली तांत्रिक कौशल्ये विकसित करा
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-blue transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="gradient-teal-blue p-6">
                <div className="mb-2">{course.icon}</div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center">
                    <Users size={16} className="text-incite-blue mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-incite-blue mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star size={16} className="text-incite-orange mr-1" />
                    <span>{course.rating}/५</span>
                  </div>
                  <Link 
                    to="/courses" 
                    className="text-incite-blue hover:text-incite-blue-dark font-medium flex items-center"
                  >
                    तपशील <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Link 
            to="/courses" 
            className="gradient-pink-orange text-white rounded-full px-8 py-3 font-medium inline-flex items-center btn-hover"
          >
            सर्व अभ्यासक्रम पहा <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// New Inspiration Section
export const InspirationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-teal-green">आमची प्रेरणा</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            श्री. जितेंद्र सातपुते यांची भेट घ्या, जगभरातील ९ देशांमध्ये शाखा असलेल्या जेएसएटी ऑटोमेशनचे संस्थापक आणि सीईओ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-blue">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/P8_CQwmmmhU?si=D3_5P9OqO38IpuUt" 
                title="जितेंद्र सातपुते - प्रेरणादायी कथा" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 gradient-text">श्री. जितेंद्र सातपुते</h3>
            <p className="text-gray-700 mb-6">
              एक दूरदर्शी उद्योजक ज्यांनी त्यांच्या नावीन्यपूर्ण दृष्टिकोन आणि समर्पणाने ऑटोमेशन उद्योगात क्रांती घडवून आणली आहे. श्री. सातपुते यांनी आपली सुरुवात एका साध्या सुरूवातीपासून केली आणि आता त्यांनी आपला व्यवसाय, जेएसएटी ऑटोमेशन, ९ देशांमध्ये विस्तारित केला आहे.
            </p>
            <p className="text-gray-700 mb-6">
              त्यांची कथा आमच्या विद्यार्थ्यांसाठी एक शक्तिशाली प्रेरणा आहे, दाखवून देत आहे की योग्य कौशल्ये, निश्चय आणि शिक्षणासह, आपली पार्श्वभूमी कोणतीही असो, एखादी व्यक्ती असामान्य यश मिळवू शकते.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-xl font-bold text-incite-blue mb-2">९+ देश</div>
                <p className="text-sm text-gray-600">जागतिक व्यवसाय उपस्थिती</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-xl font-bold text-incite-orange mb-2">उद्योग नेता</div>
                <p className="text-sm text-gray-600">ऑटोमेशन तंत्रज्ञानात</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
export const Testimonials = () => {
  const testimonials = [
    {
      name: "रोहित शर्मा",
      role: "एमएस-सीआयटी पदवीधर",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "इन्साइट कॉम्प्युटर्समधील एमएस-सीआयटी अभ्यासक्रमाने माझ्या करिअरच्या संभावनांचे पूर्णपणे परिवर्तन केले. मी शून्य संगणक ज्ञानापासून स्थानिक बँकेत नोकरी मिळवेपर्यंत पोहोचलो."
    },
    {
      name: "प्रिया देसाई",
      role: "टॅली कोर्स विद्यार्थिनी",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "इन्साइट कॉम्प्युटर्समध्ये टॅली शिकणे मी घेतलेल्या सर्वोत्तम निर्णयांपैकी एक होते. व्यावहारिक दृष्टिकोनामुळे मला पूर्ण झाल्यानंतर लगेच अकाउंट्स अॅसिस्टंट म्हणून नोकरी मिळवण्यात मदत झाली."
    },
    {
      name: "सुनील पाटील",
      role: "आयटी हार्डवेअर पदवीधर",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "प्रशिक्षक अत्यंत ज्ञानवान आणि धीर धरणारे आहेत. त्यांनी मला आयटी हार्डवेअरमध्ये एक मजबूत पाया तयार करण्यात मदत केली जो मी माझ्या दुरुस्ती व्यवसायात दररोज वापरतो."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-blue-purple">विद्यार्थी अभिप्राय</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            इन्साइट कॉम्प्युटर्समधील त्यांच्या शिक्षण अनुभवाबद्दल आमच्या विद्यार्थ्यांकडून ऐका
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-blue transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full p-1 bg-white shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-10">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-incite-blue text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-incite-orange fill-incite-orange" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Preview
export const GalleryPreview = () => {
  const galleryImages = [
    {
      src: "/img-03.jpg" alt="mscit,tally, incite,programming,typing,klick,computer",
      title: "संगणक लॅब",
      views: 324
    },
    {
      src: "/img-11.jpg" alt="mscit,tally, incite,programming,typing,klick,computer",
      title: "प्रोग्रामिंग सेशन",
      views: 219
    },
    {
      src: "/img-06.jpg" alt="mscit,tally, incite,programming,typing,klick,computer",
      title: "विद्यार्थी कार्यशाळा",
      views: 187
    },
    {
      src: "/img-04.jpg" alt="mscit,tally, incite,programming,typing,klick,computer",
      title: "प्लेसमेंट प्रशिक्षण",
      views: 156
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-pink-purple">गॅलरी हायलाइट्स</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            आमच्या सुविधा आणि विद्यार्थी उपक्रमांवर एक नजर टाका
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg animate-fade-in relative group image-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-medium text-lg">{image.title}</h3>
                <div className="flex items-center text-sm">
                  <Users size={14} className="mr-1" />
                  <span>{image.views} व्ह्यूज</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Link 
            to="/gallery" 
            className="gradient-orange-pink text-white rounded-full px-8 py-3 font-medium inline-flex items-center btn-hover"
          >
            संपूर्ण गॅलरी पहा <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// CTA Section
export const CTASection = () => {
  const handleWhatsAppInquiry = () => {
    window.open("https://wa.me/919423281767?text=नमस्कार,%20मला%20इन्साईट%20कंप्युटर्स%20कोर्सेसमध्ये%20रुची%20आहे.%20कृपया%20अधिक%20माहिती%20द्या.", "_blank");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 gradient-purple-pink opacity-90"></div>
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">आपला तंत्रज्ञान प्रवास सुरू करण्यास तयार आहात?</h2>
              <p className="text-white/90 max-w-xl">
                आमच्या कोणत्याही अभ्यासक्रमासाठी आज नोंदणी करा आणि तंत्रज्ञानात उज्वल भविष्याच्या दिशेने पहिले पाऊल टाका.
              </p>
            </div>
            <div>
              <button 
                onClick={handleWhatsAppInquiry}
                className="bg-white text-incite-blue rounded-full px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all inline-flex items-center btn-hover"
              >
                आता आमच्याशी संपर्क साधा <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Combine all sections
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in">
      <Hero />
      <Services />
      <CoursesOverview />
      <InspirationSection />
      {/* OurTeam component is imported and used in HomePage.tsx */}
      <Testimonials />
      <GalleryPreview />
      <CTASection />
    </div>
  );
};

export default HomePage;
