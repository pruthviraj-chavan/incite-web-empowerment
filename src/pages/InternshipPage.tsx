
import { Phone, Mail, MapPin, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const InternshipPage = () => {
  const internships = [
    {
      id: 1,
      title: "MS-CIT Training Internship",
      description: "Learn to teach MS-CIT courses and assist students with computer basics, Windows, Office Suite, and digital literacy.",
      duration: "2-3 months",
      skills: ["MS-CIT Curriculum", "Teaching Methods", "Student Support", "Digital Literacy"],
      category: "Education"
    },
    {
      id: 2,
      title: "Tally Accounting Internship",
      description: "Gain hands-on experience with Tally ERP 9, Tally Prime, GST compliance, and financial accounting practices.",
      duration: "3-4 months",
      skills: ["Tally ERP 9", "Tally Prime", "GST", "Financial Accounting", "Business Management"],
      category: "Accounting"
    },
    {
      id: 3,
      title: "Typing Instruction Internship",
      description: "Develop skills in teaching English and Marathi typing, speed building techniques, and keyboard proficiency.",
      duration: "2 months",
      skills: ["Typing Instruction", "Speed Building", "English Typing", "Marathi Typing", "Assessment"],
      category: "Skill Development"
    },
    {
      id: 4,
      title: "Python Programming Internship",
      description: "Learn Python development, work on real projects, and understand programming fundamentals for beginners.",
      duration: "4-6 months",
      skills: ["Python Programming", "Project Development", "Problem Solving", "Code Review", "Debugging"],
      category: "Programming"
    },
    {
      id: 5,
      title: "Web Development Internship",
      description: "Create responsive websites using HTML, CSS, JavaScript, and modern frameworks. Work on live client projects.",
      duration: "4-6 months",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Version Control", "Project Management"],
      category: "Web Development"
    },
    {
      id: 6,
      title: "Machine Learning Basics Internship",
      description: "Introduction to ML concepts, data analysis, and AI applications suitable for beginners in the field.",
      duration: "6 months",
      skills: ["Machine Learning", "Data Analysis", "Python", "AI Concepts", "Research", "Documentation"],
      category: "Artificial Intelligence"
    },
    {
      id: 7,
      title: "Digital Marketing & Content Creation",
      description: "Learn digital marketing strategies, content creation for educational institutes, and social media management.",
      duration: "3-4 months",
      skills: ["Digital Marketing", "Content Creation", "Social Media", "SEO", "Analytics", "Graphic Design"],
      category: "Marketing"
    },
    {
      id: 8,
      title: "Computer Hardware Support Internship",
      description: "Hands-on experience with computer assembly, troubleshooting, hardware maintenance, and technical support.",
      duration: "3 months",
      skills: ["Hardware Assembly", "Troubleshooting", "Technical Support", "Maintenance", "Customer Service"],
      category: "Technical Support"
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "Industry Certification",
      description: "Get recognized certificates upon successful completion of your internship."
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Expert Mentorship",
      description: "Learn from experienced professionals with 20+ years in IT education."
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: "Flexible Timing",
      description: "Choose internship schedules that fit your academic or personal commitments."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Internship Opportunities
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Launch your career with hands-on internships at Incite Computers. Gain practical experience in MS-CIT, Tally, Programming, Web Development, and emerging technologies in Radhanagari, Kolhapur.
            </p>
            
            {/* Contact Numbers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
                <Phone className="text-blue-600 mr-2" size={20} />
                <span className="font-semibold">9423281767</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
                <Phone className="text-green-600 mr-2" size={20} />
                <span className="font-semibold">7276457181</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
                <Phone className="text-green-600 mr-2" size={20} />
                <span className="font-semibold">8263031055</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Intern with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internships Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Available Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship) => (
              <div key={internship.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {internship.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock size={14} className="mr-1" />
                      {internship.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {internship.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {internship.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-blue text-white">
                    <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer" className="w-full">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Internship?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to learn more about our internship programs and application process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="mx-auto mb-3 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+919423281767" className="hover:text-blue-600">9423281767</a><br />
                <a href="tel:+918263031055" className="hover:text-blue-600">8263031055</a>
              </p>
            </div>
            
            <div className="text-center">
              <Mail className="mx-auto mb-3 text-green-600" size={32} />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@incitecomputers.in" className="hover:text-green-600">
                  contact@incitecomputers.in
                </a>
              </p>
            </div>
            
            <div className="text-center">
              <MapPin className="mx-auto mb-3 text-purple-600" size={32} />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Radhanagari, Maharashtra<br />
                India
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="gradient-blue mr-4">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                WhatsApp - 9423281767
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://wa.me/918263031055" target="_blank" rel="noopener noreferrer">
                WhatsApp - 8263031055
              </a>
            </Button>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Internships Matter for Your Career</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Internships at Incite Computers provide real-world experience in computer courses like MS-CIT, Tally, Python programming, and web development. 
            Located in Radhanagari, Kolhapur, we offer skill-based internships that prepare students for successful careers in technology and business. 
            Our internship programs combine theoretical knowledge with practical application, ensuring students gain valuable industry experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InternshipPage;
