import { Users, Award, Building, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajendra Chavan",
      role: "Founder & CEO",
      bio: "With over 25 years of experience in IT education, Rajesh founded Incite Computers in 2001 with a vision to bring quality computer education to rural India.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sumit Chavan",
      role: "Co-founder & Training Head",
      bio: "Priya has been instrumental in developing the curriculum and training methodology that has helped thousands of students succeed in their careers.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Prashant Vanjule",
      role: "Technical Director",
      bio: "Amit oversees all technical aspects of the training programs and ensures students learn the most relevant and up-to-date skills.",
      image: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      id: 4,
      name: "Pruthviraj Chavan",
      role: "Placement Officer",
      bio: "Neha works tirelessly to build industry connections and help our students find suitable job placements after completing their courses.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "15,000+",
      description: "Students Trained",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "90%",
      description: "Placement Rate",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 3,
      title: "22+",
      description: "Years of Excellence",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 4,
      title: "5+",
      description: "Modern Labs",
      icon: <Building className="w-6 h-6" />
    }
  ];

  const facilities = [
    {
      id: 1,
      title: "Modern Computer Labs",
      description: "Equipped with the latest hardware and software to provide hands-on learning experience.",
      image: "https://images.unsplash.com/photo-1581092160607-ee23481aee90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Smart Classrooms",
      description: "Interactive learning environment with projectors and digital teaching aids.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Study Library",
      description: "Comprehensive collection of books, guides and digital resources for self-study.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="page-fade-in pt-24">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Incite Computers</span>
            </h1>
            <p className="text-xl text-gray-700">
              2001 पासून, आम्ही ग्रामीण भारताला दर्जेदार संगणक शिक्षण आणि डिजिटल कौशल्यांनी सक्षम करण्याच्या ध्येयावर कार्यरत आहोत.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                इन्साइट कॉम्प्यूटर्स: ग्रामीण भारताच्या डिजिटल भविष्याची पायाभरणी

2001 मध्ये राधानगरी या छोट्याशा गावात स्थापन झालेल्या इन्साइट कॉम्प्यूटर्स संस्थेची सुरुवात एका साध्या पण महत्त्वाच्या ध्येयाने झाली – ग्रामीण भारतात दर्जेदार संगणक शिक्षण पोहोचवणे. अवघ्या 5 संगणकांवर आणि मोजक्या विद्यार्थ्यांसोबत सुरू झालेली ही संस्था आज आधुनिक सुविधांनी युक्त एक प्रमुख संगणक प्रशिक्षण केंद्र बनली आहे, ज्यामधून हजारो विद्यार्थी यशस्वीपणे घडून निघाले आहेत.
              </p>
              <p className="text-gray-700 mb-4">
               संस्थेचे संस्थापक श्री. राजेंद्र मारुती चव्हाण यांनी शहरी आणि ग्रामीण भागातील डिजिटल दरी ओळखली आणि ती कमी करण्याचा निश्चय केला. संगणक शिक्षण हा केवळ काही ठराविक लोकांसाठी मर्यादित न राहता प्रत्येकाच्या आवाक्यात असावा, हा त्यांचा दृढ विश्वास होता.
              </p>
              <p className="text-gray-700">
               गेल्या दोन दशकांमध्ये, आम्ही आमच्या अभ्यासक्रमात आणि अध्यापन पद्धतींमध्ये सातत्याने सुधारणा करत आलो आहोत. आधुनिक तंत्रज्ञानाच्या वेगवान बदलांशी जुळवून घेत, आमच्या विद्यार्थ्यांना उद्योगासाठी आवश्यक असलेले अद्ययावत आणि वास्तव जगाशी सुसंगत ज्ञान देण्याचा आम्ही प्रयत्न करत आलो आहोत. इन्साइट कॉम्प्यूटर्स ही केवळ एक संस्था नसून, ग्रामीण भागातील विद्यार्थ्यांसाठी डिजिटल क्रांतीचे प्रवेशद्वार ठरली आहे. 🚀
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Incite Computers Building" 
                className="rounded-xl shadow-blue image-hover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float">
                <div className="text-center">
                  <p className="font-bold gradient-text text-xl">Est. 2001</p>
                  <p className="text-sm text-gray-600">Radhanagari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-blue">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the leading computer education provider in rural India, empowering individuals with digital skills that transform their lives and communities.
              </p>
              <p className="text-gray-700">
                We envision a digitally literate rural India where everyone has access to quality computer education and the opportunity to participate in the digital economy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-orange">
              <h3 className="text-2xl font-bold mb-6 gradient-text-orange">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To provide affordable, accessible, and high-quality computer education to the rural population, equipping them with the skills they need to succeed in today's digital world.
              </p>
              <p className="text-gray-700">
                We are committed to bridging the digital divide by making technology education inclusive and ensuring that no one is left behind in the digital revolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated professionals who are passionate about teaching and empowering students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-blue transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-incite-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600">
              We provide a modern learning environment with state-of-the-art facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-blue transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600">
              We take pride in the success of our students who have gone on to achieve great things.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-incite-blue mt-1" />
                  <div>
                    <p className="font-medium">12,000+ MS-CIT Certifications</p>
                    <p className="text-sm text-gray-600">Maharashtra State Certificate in Information Technology</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-incite-blue mt-1" />
                  <div>
                    <p className="font-medium">5,000+ KLiCK Diplomas</p>
                    <p className="text-sm text-gray-600">Knowledge of Computer through Learning & Certification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-incite-blue mt-1" />
                  <div>
                    <p className="font-medium">3,000+ Programming Certifications</p>
                    <p className="text-sm text-gray-600">Web Development, Python, Java and Mobile Apps</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-incite-blue mt-1" />
                  <div>
                    <p className="font-medium">2,500+ Hardware & Networking Diplomas</p>
                    <p className="text-sm text-gray-600">Computer Hardware and Network Management</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Job Placements</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-incite-orange mt-1" />
                  <div>
                    <p className="font-medium">400+ placed in Government Sector</p>
                    <p className="text-sm text-gray-600">Various government departments and offices</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-incite-orange mt-1" />
                  <div>
                    <p className="font-medium">2,000+ placed in Banking Sector</p>
                    <p className="text-sm text-gray-600">National and regional banks across Maharashtra</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-incite-orange mt-1" />
                  <div>
                    <p className="font-medium">1,500+ placed in IT Companies</p>
                    <p className="text-sm text-gray-600">Software development, support and services</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-incite-orange mt-1" />
                  <div>
                    <p className="font-medium">3,000+ Self-Employed</p>
                    <p className="text-sm text-gray-600">Started their own businesses or freelancing careers</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
