import { useEffect, lazy, Suspense } from 'react';
import { ArrowRight, Star, Users, Clock, BookOpen, Award, ChevronRight, User, Building, Laptop, Cpu, Code, Calculator, FileText, Keyboard, Brain, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animated Course Icons Section
export const AnimatedCourseIcons = () => {
  const courseIcons = [
    { icon: <Monitor size={48} />, name: "MS-CIT", color: "text-blue-500" },
    { icon: <Keyboard size={48} />, name: "Typing", color: "text-green-500" },
    { icon: <Calculator size={48} />, name: "Tally", color: "text-orange-500" },
    { icon: <Code size={48} />, name: "Programming", color: "text-purple-500" },
    { icon: <Brain size={48} />, name: "AI Tools", color: "text-pink-500" },
    { icon: <FileText size={48} />, name: "MKCL", color: "text-teal-500" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">आमचे अभ्यासक्रम</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आधुनिक तंत्रज्ञानातील सर्वोत्तम अभ्यासक्रम आणि प्रशिक्षण
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {courseIcons.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                z: 50
              }}
              className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-white/50"
            >
              <motion.div
                className={`${course.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {course.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:gradient-text transition-all duration-300">
                {course.name}
              </h3>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-incite-blue to-incite-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Hero Section with Two-Column Layout
export const Hero = () => {
  const handleEnrollNow = () => {
    window.open("https://wa.me/919423281767?text=नमस्कार,%20मला%20इन्साईट%20कंप्युटर्स%20कोर्सेसमध्ये%20रुची%20आहे.%20कृपया%20अधिक%20माहिती%20द्या.", "_blank");
  };

  return (
    <section className="hero-gradient relative overflow-hidden py-20 md:py-28">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-incite-blue to-incite-purple"></div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-1 bg-incite-blue-light/10 text-incite-blue rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              २००१ पासून
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="gradient-text">ग्रामीण भारताला</span> <br />
              <span className="gradient-text-orange">डिजिटल कौशल्यांसह सक्षम करणे!</span>
            </motion.h1>
            <motion.p 
              className="text-gray-700 mb-8 text-lg max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
             Incite Computers, सन 2001 मध्ये राधानगरी येथे सुरू झालेले एक प्रतिष्ठित संस्थान, जे ग्रामीण भागातील विद्यार्थ्यांसाठी तंत्रज्ञानाच्या संधी निर्माण करत आहे.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button 
                onClick={handleEnrollNow}
                className="gradient-purple-pink text-white rounded-full px-8 py-3 font-medium shadow-lg flex items-center justify-center btn-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                आता नोंदणी करा <ArrowRight size={18} className="ml-2" />
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/courses" 
                  className="bg-white text-incite-blue border border-incite-blue rounded-full px-8 py-3 font-medium flex items-center justify-center btn-hover shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  अभ्यासक्रम शोधा <ChevronRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/p.jpeg" 
                  alt="mscit,tally, incite,programming,typing,klick,computer" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
              
              {/* Floating stats cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 glass rounded-lg p-4 shadow-2xl shadow-blue-500/30 w-48"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-incite-blue">5000+ Students</div>
                  <Users size={16} className="text-incite-orange" />
                </div>
                <div className="text-2xl font-bold gradient-text">Success Stories</div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -right-4 glass rounded-lg p-4 shadow-2xl shadow-orange-500/30 w-52"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-incite-blue">No.1 Training Centre</div>
                  <Award size={16} className="text-incite-orange" />
                </div>
{/*                 <div className="text-2xl font-bold gradient-text-orange">Excellence</div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section with enhanced animations
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-purple-blue">आमच्या सेवा</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            इन्साइट कॉम्प्युटर्समध्ये दिल्या जाणाऱ्या संगणक प्रशिक्षण आणि शैक्षणिक सेवांची व्यापक श्रेणी शोधा
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-white/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <motion.div 
                className="mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-incite-blue to-incite-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
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
      students: 200,
      duration: "३ महिने",
      rating: 4.9
    },
    {
      icon: <Cpu size={32} className="text-white" />,
      title: "के-लिक कोर्सेस",
      description: "नॉलेज ऑफ लिटरसी फॉर कंप्युटर्स इन कीस्टोन्स",
      students: 200,
      duration: "२-६ महिने",
      rating: 4.8
    },
    {
      icon: <BookOpen size={32} className="text-white" />,
      title: "टॅली",
      description: "अकाउंटिंग आणि वित्तीय व्यवस्थापन सॉफ्टवेअर प्रशिक्षण",
      students: 200,
      duration: "२ महिने",
      rating: 4.7
    },
    {
      icon: <Award size={32} className="text-white" />,
      title: "प्रोग्रामिंग",
      description: "सी, सी++, जावा आणि इतर प्रोग्रामिंग भाषा",
      students: 200,
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
                  <div className="text-incite-blue font-medium">
                    संपर्क: 9423281767
                  </div>
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
            श्री. जितेंद्र सातपुते यांची भेट घ्या, जगभरातील ९ देशांमध्ये शाखा असलेल्या jsatautomation.com संस्थापक आणि सीईओ
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
      name: "Sushant Vanjule",
      role: "एमएस-सीआयटी पदवीधर",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "इन्साइट कॉम्प्युटर्समधील एमएस-सीआयटी अभ्यासक्रमाने माझ्या करिअरच्या संभावनांचे पूर्णपणे परिवर्तन केले. मी शून्य संगणक ज्ञानापासून स्थानिक बँकेत नोकरी मिळवेपर्यंत पोहोचलो."
    },
    {
      name: "Priya Powar",
      role: "टॅली कोर्स विद्यार्थिनी",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "इन्साइट कॉम्प्युटर्समध्ये टॅली शिकणे मी घेतलेल्या सर्वोत्तम निर्णयांपैकी एक होते. व्यावहारिक दृष्टिकोनामुळे मला पूर्ण झाल्यानंतर लगेच अकाउंट्स अॅसिस्टंट म्हणून नोकरी मिळवण्यात मदत झाली."
    },
    {
      name: "Mangesh Patil",
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
      src: "/img-03.jpg",
      alt: "mscit,tally, incite,programming,typing,klick,computer",
      title: "संगणक लॅब",
      views: 324
    },
    {
      src: "/img-11.jpg",
      alt: "mscit,tally, incite,programming,typing,klick,computer",
      title: "प्रोग्रामिंग सेशन",
      views: 219
    },
    {
      src: "/img-06.jpg",
      alt: "mscit,tally, incite,programming,typing,klick,computer",
      title: "विद्यार्थी कार्यशाळा",
      views: 187
    },
    {
      src: "/img-04.jpg",
      alt: "mscit,tally, incite,programming,typing,klick,computer",
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
                alt={image.alt} 
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
                आमच्या कोणत्याही अभ्यासक्रमासाठी आज नोंदणी करा आणि तंत्रज्ञानात उज्वल भविष्याच्या दिशेने पहिले पाऊल टाका.<br />
                <span className="font-bold mt-2 inline-block">संपर्क: 9423281767</span>
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

// Top Categories Section
export const TopCategories = () => {
  const categories = [
    {
      icon: <Monitor size={32} />,
      title: "Basic Computer",
      description: "MS-CIT, Computer Basics",
      color: "from-teal-400 to-cyan-500",
      iconColor: "text-teal-600"
    },
    {
      icon: <Code size={32} />,
      title: "Programming",
      description: "C, C++, Java, Python",
      color: "from-pink-400 to-rose-500",
      iconColor: "text-pink-600"
    },
    {
      icon: <Calculator size={32} />,
      title: "Accounting",
      description: "Tally, Excel, Finance",
      color: "from-green-400 to-emerald-500",
      iconColor: "text-green-600"
    },
    {
      icon: <FileText size={32} />,
      title: "Office Suite",
      description: "MS Office, Documentation",
      color: "from-orange-400 to-amber-500",
      iconColor: "text-orange-600"
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Technology",
      description: "AI Tools, Modern Tech",
      color: "from-purple-400 to-violet-500",
      iconColor: "text-purple-600"
    },
    {
      icon: <Building size={32} />,
      title: "Business Skills",
      description: "Digital Marketing, Management",
      color: "from-blue-400 to-indigo-500",
      iconColor: "text-blue-600"
    },
    {
      icon: <Keyboard size={32} />,
      title: "Typing Skills",
      description: "Speed Typing, Keyboard Skills",
      color: "from-cyan-400 to-blue-500",
      iconColor: "text-cyan-600"
    },
    {
      icon: <Laptop size={32} />,
      title: "Hardware",
      description: "PC Assembly, Troubleshooting",
      color: "from-indigo-400 to-purple-500",
      iconColor: "text-indigo-600"
    },
    {
      icon: <Award size={32} />,
      title: "Certifications",
      description: "Industry Recognized Certificates",
      color: "from-emerald-400 to-teal-500",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            मुख्य श्रेणी
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-2 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आपल्या करिअरला गती देण्यासाठी आमच्या विविध तांत्रिक अभ्यासक्रम श्रेणींचा शोध घ्या
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-300 mb-4 ${category.iconColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced About Section
export const EnhancedAbout = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-20">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-pink-400 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/p1.png" 
                alt="Student learning at computer"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Video thumbnail overlay */}
              <div className="absolute top-4 right-4 w-32 h-20 bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/img-03.jpg" 
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-4 border-l-incite-blue border-y-2 border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Stats card */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    23+
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Years of</div>
                    <div className="font-semibold text-gray-800">Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-sm font-medium text-incite-blue bg-blue-50 px-3 py-1 rounded-full">
                आमच्याबद्दल
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              कुठूनही तुमची कौशल्ये 
              <span className="gradient-text-orange"> शिका आणि वाढवा</span>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mt-2 rounded-full"></div>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              २००१ पासून आम्ही ग्रामीण भागातील हजारो विद्यार्थ्यांना डिजिटल कौशल्यांसह सशक्त बनवत आहोत. 
              आमच्या आधुनिक शिक्षण पद्धती आणि अनुभवी प्रशिक्षकांसह तुमचे भवितव्य उज्वल करा.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <User size={20} />, text: "तज्ञ प्रशिक्षक", color: "text-orange-500" },
                { icon: <Monitor size={20} />, text: "ऑनलाइन व ऑफलाइन शिक्षण", color: "text-teal-500" },
                { icon: <Award size={20} />, text: "आजीवन प्रवेश आणि समर्थन", color: "text-purple-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`${item.color} bg-gray-50 p-2 rounded-lg`}>
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                अधिक जाणून घ्या
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
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
      <AnimatedCourseIcons />
      <TopCategories />
      <Services />
      <CoursesOverview />
      <EnhancedAbout />
      <InspirationSection />
      <Testimonials />
      <GalleryPreview />
      <CTASection />
    </div>
  );
};

export default HomePage;
