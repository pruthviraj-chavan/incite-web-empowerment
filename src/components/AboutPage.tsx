
import { Award, Book, Building, Clock, Laptop, MapPin, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="page-fade-in">
      <HeroSection />
      <History />
      <Team />
      <Infrastructure />
      <Achievements />
      <MissionVision />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span> <span className="gradient-text-orange">Incite Computers</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Established in 2001, Incite Computers has been at the forefront of digital education in rural Maharashtra, empowering thousands of students with essential technology skills.
          </p>
          <div className="flex justify-center space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text mb-2">22+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text mb-2">5,000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text mb-2">35+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Incite Computers History" 
              className="rounded-xl shadow-blue"
            />
          </div>
          <div className="animate-fade-in-right">
            <div className="inline-block mb-4 px-4 py-1 bg-incite-blue-light/10 text-incite-blue rounded-full text-sm font-medium">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Pioneering Computer Education in Rural Maharashtra
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2001 by visionary educators, Incite Computers emerged with a mission to bridge the digital divide in rural India. Starting with just one classroom and a handful of computers, we set out to provide quality technology education to the youth of Radhanagari.
            </p>
            <p className="text-gray-700 mb-6">
              Over the years, we've grown from a small training center to a comprehensive educational institute, expanding our facilities, updating our curriculum, and forging partnerships with leading technology providers and certification bodies.
            </p>
            <p className="text-gray-700">
              Today, we're proud to have trained over 5,000 students, many of whom have gone on to successful careers in IT, banking, administration, and entrepreneurship, transforming not just their own lives but their communities as well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Patil",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "With over 25 years of experience in IT education, Rajesh founded Incite Computers with a vision to empower rural youth through technology education."
    },
    {
      name: "Sunita Jadhav",
      role: "Co-founder & Academic Director",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "A computer science graduate from Pune University, Sunita oversees all academic programs and curriculum development at Incite Computers."
    },
    {
      name: "Amol Deshmukh",
      role: "Technical Director",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "With expertise in programming and systems administration, Amol leads the technical infrastructure and advanced programming courses."
    },
    {
      name: "Priya Sharma",
      role: "Student Relations Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "A former student herself, Priya manages student admissions, counseling, and career guidance, helping students achieve their career goals."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our dedicated team of experienced professionals is committed to providing the highest quality education and support to our students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in hover:shadow-blue transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-white/90">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => {
  const facilities = [
    {
      icon: <Laptop size={40} className="text-incite-blue" />,
      title: "Modern Computer Labs",
      description: "State-of-the-art computer labs equipped with the latest hardware and software for hands-on learning"
    },
    {
      icon: <Book size={40} className="text-incite-orange" />,
      title: "Learning Resources",
      description: "Comprehensive library with textbooks, reference materials, and digital resources"
    },
    {
      icon: <Building size={40} className="text-incite-blue" />,
      title: "Spacious Classrooms",
      description: "Well-designed classrooms with multimedia facilities for effective teaching and learning"
    },
    {
      icon: <Users size={40} className="text-incite-orange" />,
      title: "Student Lounge",
      description: "Comfortable spaces for students to collaborate, study, and relax between classes"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Our Infrastructure
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We provide a conducive learning environment with modern facilities to ensure the best educational experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-blue animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04" 
              alt="Computer Lab" 
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-orange animate-fade-in-right">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" 
              alt="Classroom" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-xl shadow-md animate-fade-in hover:shadow-blue transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{facility.icon}</div>
              <h3 className="text-xl font-bold mb-4">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Student Achievements
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We take pride in the success of our students as they excel in their professional careers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-md p-8 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Placement Success</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-incite-blue/10 p-3 rounded-full mr-4">
                  <Award size={24} className="text-incite-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">85% Placement Rate</h4>
                  <p className="text-gray-600">
                    Over 85% of our job-seeking students get successfully placed within 3 months of course completion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-incite-orange/10 p-3 rounded-full mr-4">
                  <Building size={24} className="text-incite-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Top Employers</h4>
                  <p className="text-gray-600">
                    Our students are employed by leading companies, banks, government offices, and educational institutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-incite-blue/10 p-3 rounded-full mr-4">
                  <Users size={24} className="text-incite-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Entrepreneurship</h4>
                  <p className="text-gray-600">
                    Many of our graduates have established their own successful businesses in IT and related sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-right">
            <div className="gradient-blue p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Certification Milestones</h3>
              <p className="text-white/90">
                Our students consistently achieve certification success across various programs.
              </p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">MS-CIT Certifications</h4>
                </div>
                <div className="text-2xl font-bold text-incite-blue">2,500+</div>
              </div>
              
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-incite-blue h-full rounded-full" style={{ width: "95%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">KLiCK Certifications</h4>
                </div>
                <div className="text-2xl font-bold text-incite-blue">1,800+</div>
              </div>
              
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-incite-orange h-full rounded-full" style={{ width: "85%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Tally Certifications</h4>
                </div>
                <div className="text-2xl font-bold text-incite-blue">1,200+</div>
              </div>
              
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-incite-blue h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Hardware Certifications</h4>
                </div>
                <div className="text-2xl font-bold text-incite-blue">950+</div>
              </div>
              
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-incite-orange h-full rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in-left">
            <div className="inline-block mb-4 px-4 py-1 bg-incite-blue-light/10 text-incite-blue rounded-full text-sm font-medium">
              Our Mission
            </div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Empowering Rural Communities Through Digital Education
            </h3>
            <p className="text-gray-700 mb-6">
              Our mission is to provide accessible, high-quality computer education to the youth of rural Maharashtra, enabling them to participate fully in the digital economy and improve their socioeconomic status.
            </p>
            <p className="text-gray-700">
              We strive to bridge the urban-rural digital divide by offering comprehensive training programs that equip students with practical skills, foster innovation, and promote lifelong learning.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-incite-blue/10 rounded-full flex items-center justify-center mr-3">
                  <Clock size={18} className="text-incite-blue" />
                </div>
                <p className="text-gray-700">Practical, hands-on training</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-incite-blue/10 rounded-full flex items-center justify-center mr-3">
                  <Award size={18} className="text-incite-blue" />
                </div>
                <p className="text-gray-700">Industry-recognized certifications</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-incite-blue/10 rounded-full flex items-center justify-center mr-3">
                  <MapPin size={18} className="text-incite-blue" />
                </div>
                <p className="text-gray-700">Local employment opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in-right">
            <div className="inline-block mb-4 px-4 py-1 bg-incite-orange-light/10 text-incite-orange rounded-full text-sm font-medium">
              Our Vision
            </div>
            <h3 className="text-2xl font-bold mb-6 gradient-text-orange">
              A Digitally Empowered Rural Society
            </h3>
            <p className="text-gray-700 mb-6">
              We envision a rural Maharashtra where every individual, regardless of background or location, has the opportunity to acquire digital skills and leverage technology for personal growth and community development.
            </p>
            <p className="text-gray-700">
              Our goal is to be the premier institution for computer education in rural areas, known for excellence, innovation, and commitment to student success.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-incite-orange/10 rounded-full flex items-center justify-center mr-3">
                  <Users size={18} className="text-incite-orange" />
                </div>
                <p className="text-gray-700">Inclusive educational environment</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-incite-orange/10 rounded-full flex items-center justify-center mr-3">
                  <Building size={18} className="text-incite-orange" />
                </div>
                <p className="text-gray-700">Sustainable community development</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-incite-orange/10 rounded-full flex items-center justify-center mr-3">
                  <Laptop size={18} className="text-incite-orange" />
                </div>
                <p className="text-gray-700">Continual curriculum innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
