import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { memo } from "react";

const BlogPostPage = memo(() => {
  const { slug } = useParams();

  // This would typically fetch from an API or CMS
  const blogContent = {
    "ms-cit-course-radhanagari-guide-2024": {
      title: "MS-CIT Course in Radhanagari - Complete Guide 2024",
      author: "Incite Computers",
      date: "2024-12-15",
      category: "MS-CIT",
      readTime: "5 min read",
      content: `
        <h2>What is MS-CIT Course?</h2>
        <p>MS-CIT (Maharashtra State Certificate in Information Technology) is a government-approved computer literacy course designed to provide basic computer skills to citizens of Maharashtra. At Incite Computers Radhanagari, we offer comprehensive MS-CIT training with experienced instructors.</p>
        
        <h3>MS-CIT Course Syllabus</h3>
        <ul>
          <li>Computer Basics and Windows Operating System</li>
          <li>Microsoft Word - Document Creation and Formatting</li>
          <li>Microsoft Excel - Spreadsheet and Data Management</li>
          <li>Microsoft PowerPoint - Presentation Skills</li>
          <li>Internet and Email Communication</li>
          <li>Digital India Initiatives</li>
        </ul>
        
        <h3>Course Duration and Fees</h3>
        <p>The MS-CIT course duration is 3 months with flexible timing options. Our course fees are affordable and government-approved. Contact us at 9423281767 for current fee structure.</p>
        
        <h3>Career Opportunities After MS-CIT</h3>
        <p>MS-CIT certification opens doors to various government and private sector jobs in Maharashtra. Many government positions require MS-CIT as a mandatory qualification.</p>
        
        <h3>Why Choose Incite Computers for MS-CIT?</h3>
        <ul>
          <li>Experienced instructors with 20+ years in IT education</li>
          <li>Government-approved training center</li>
          <li>Flexible batch timings for working professionals</li>
          <li>100% practical training with individual attention</li>
          <li>Job placement assistance</li>
        </ul>
      `
    },
    "tally-classes-kolhapur-best-training": {
      title: "Tally Classes in Kolhapur - Best Training Institute",
      author: "Incite Computers",
      date: "2024-12-14",
      category: "Tally",
      readTime: "4 min read",
      content: `
        <h2>Master Tally ERP 9 and Tally Prime</h2>
        <p>Tally is essential software for accounting and business management. Our Tally classes in Kolhapur region provide comprehensive training on both Tally ERP 9 and the latest Tally Prime software.</p>
        
        <h3>Tally Course Curriculum</h3>
        <ul>
          <li>Company Creation and Configuration</li>
          <li>Masters Creation (Ledgers, Groups, Stock Items)</li>
          <li>Voucher Entry and Transaction Recording</li>
          <li>GST Configuration and Returns</li>
          <li>Inventory Management</li>
          <li>Financial Reports and Analysis</li>
          <li>Banking and Reconciliation</li>
        </ul>
        
        <h3>Practical Training Approach</h3>
        <p>Our Tally training focuses on real-world scenarios with live projects. Students work on actual business cases to understand practical applications of Tally software.</p>
        
        <h3>Job Opportunities</h3>
        <p>Tally skills are in high demand for positions like Accountant, Accounts Executive, Data Entry Operator, and Billing Executive in various industries.</p>
      `
    },
    "mkcl-training-digital-literacy-programs": {
      title: "MKCL Training Near Me - Digital Literacy Programs",
      author: "Incite Computers",
      date: "2024-12-13",
      category: "MKCL",
      readTime: "3 min read",
      content: `
        <h2>MKCL Digital Literacy Programs at Incite Computers</h2>
        <p>Maharashtra Knowledge Corporation Limited (MKCL) offers various digital literacy and skill development programs. As an authorized MKCL center in Radhanagari, Incite Computers provides government-approved MKCL courses.</p>
        
        <h3>Available MKCL Courses</h3>
        <ul>
          <li>Basic Computer Literacy Program</li>
          <li>Digital Financial Literacy</li>
          <li>Cyber Security Awareness</li>
          <li>MS-CIT (MKCL Approved)</li>
          <li>Digital Marketing Basics</li>
        </ul>
        
        <h3>Benefits of MKCL Certification</h3>
        <p>MKCL certificates are recognized by the Government of Maharashtra and are valuable for job applications, especially in government and semi-government sectors. The courses are designed to make citizens digitally literate and self-reliant.</p>
        
        <h3>Course Features</h3>
        <ul>
          <li>Government-approved curriculum</li>
          <li>Affordable course fees</li>
          <li>Flexible timing options</li>
          <li>Recognized certificates</li>
          <li>Practical computer training</li>
        </ul>
        
        <h3>Enroll Now</h3>
        <p>Contact Incite Computers at 9423281767 to enroll in MKCL courses. Our center in Radhanagari provides quality training with experienced instructors.</p>
      `
    },
    "typing-speed-course-english-marathi": {
      title: "Typing Speed Course - English & Marathi Typing Classes",
      author: "Incite Computers",
      date: "2024-12-12",
      category: "Typing",
      readTime: "4 min read",
      content: `
        <h2>Master Typing Skills for Government Jobs</h2>
        <p>Typing speed is a crucial skill for government job exams and clerical positions. Our typing classes in Radhanagari offer comprehensive training in both English and Marathi typing to help you achieve the required speed and accuracy.</p>
        
        <h3>Course Details</h3>
        <ul>
          <li><strong>English Typing:</strong> Learn touch typing method to achieve 40+ WPM</li>
          <li><strong>Marathi Typing:</strong> Master Marathi keyboard layout and typing techniques</li>
          <li><strong>Practice Sessions:</strong> Daily practice with typing software</li>
          <li><strong>Speed Tests:</strong> Regular speed tests to track progress</li>
        </ul>
        
        <h3>Why Typing Skills Matter</h3>
        <p>Most government jobs require a minimum typing speed of 30-40 WPM (Words Per Minute). Bank clerks, data entry operators, stenographers, and office assistants must demonstrate proficiency in typing during recruitment exams.</p>
        
        <h3>Our Teaching Method</h3>
        <ol>
          <li><strong>Basics:</strong> Learn proper finger placement and posture</li>
          <li><strong>Practice:</strong> Systematic practice with typing tutor software</li>
          <li><strong>Speed Building:</strong> Gradually increase typing speed</li>
          <li><strong>Accuracy:</strong> Focus on reducing errors while maintaining speed</li>
          <li><strong>Mock Tests:</strong> Practice with real exam patterns</li>
        </ol>
        
        <h3>Course Duration and Fees</h3>
        <p>Our typing course typically runs for 1-2 months depending on your current skill level. Contact us at 9423281767 for current fee structure and batch timings.</p>
      `
    },
    "saarthi-course-details-skill-development": {
      title: "Saarthi Course Details - Skill Development Program",
      author: "Incite Computers",
      date: "2024-12-11",
      category: "Saarthi",
      readTime: "3 min read",
      content: `
        <h2>Saarthi Skill Development Program</h2>
        <p>Saarthi is a comprehensive skill development program designed to empower youth with industry-relevant skills. At Incite Computers, we offer Saarthi courses that combine technical training with soft skills development.</p>
        
        <h3>What is Saarthi?</h3>
        <p>Saarthi is an initiative to provide quality skill training to unemployed youth and help them become job-ready. The program focuses on practical training, personality development, and placement assistance.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Government-recognized certification</li>
          <li>Hands-on practical training</li>
          <li>Soft skills and communication training</li>
          <li>Interview preparation</li>
          <li>Job placement assistance</li>
          <li>Industry-relevant curriculum</li>
        </ul>
        
        <h3>Training Modules</h3>
        <ul>
          <li>Basic computer operations</li>
          <li>Office productivity tools</li>
          <li>Communication skills</li>
          <li>Workplace etiquette</li>
          <li>Time management</li>
          <li>Team collaboration</li>
        </ul>
        
        <h3>Who Should Enroll?</h3>
        <p>This program is ideal for school/college graduates looking for employment, individuals wanting to upgrade their skills, or anyone seeking government-recognized certification for better job prospects.</p>
        
        <h3>Enrollment Process</h3>
        <p>Visit Incite Computers in Radhanagari or call 9423281767 to learn more about Saarthi course enrollment, fees, and upcoming batch schedules.</p>
      `
    },
    "python-programming-course-beginners-radhanagari": {
      title: "Python Programming Course for Beginners in Radhanagari",
      author: "Incite Computers",
      date: "2024-12-10",
      category: "Programming",
      readTime: "6 min read",
      content: `
        <h2>Start Your Programming Journey with Python</h2>
        <p>Python is one of the most popular and beginner-friendly programming languages. At Incite Computers Radhanagari, we offer comprehensive Python programming courses designed for absolute beginners as well as those looking to advance their skills.</p>
        
        <h3>Why Learn Python?</h3>
        <ul>
          <li><strong>Easy to Learn:</strong> Simple, readable syntax perfect for beginners</li>
          <li><strong>Versatile:</strong> Used in web development, data science, AI/ML, automation</li>
          <li><strong>High Demand:</strong> Top-paying programming language in job market</li>
          <li><strong>Great Community:</strong> Extensive libraries and support resources</li>
          <li><strong>Career Growth:</strong> Opens doors to diverse tech careers</li>
        </ul>
        
        <h3>Python Course Curriculum</h3>
        
        <h4>Module 1: Python Basics</h4>
        <ul>
          <li>Introduction to Python and installation</li>
          <li>Variables, data types, and operators</li>
          <li>Control structures (if-else, loops)</li>
          <li>Functions and modules</li>
          <li>File handling</li>
        </ul>
        
        <h4>Module 2: Advanced Python</h4>
        <ul>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Error handling and exceptions</li>
          <li>Working with libraries (NumPy, Pandas)</li>
          <li>Database connectivity</li>
          <li>API integration</li>
        </ul>
        
        <h4>Module 3: Real-World Projects</h4>
        <ul>
          <li>Build a calculator application</li>
          <li>Create a data analysis project</li>
          <li>Develop a web scraping tool</li>
          <li>Build a simple web application</li>
          <li>Final capstone project</li>
        </ul>
        
        <h3>Career Opportunities After Python</h3>
        <ul>
          <li>Python Developer</li>
          <li>Data Analyst</li>
          <li>Machine Learning Engineer</li>
          <li>Web Developer (Django/Flask)</li>
          <li>Automation Engineer</li>
          <li>Software Tester</li>
        </ul>
        
        <h3>Course Duration and Fees</h3>
        <p>Our Python programming course runs for 3-4 months with both weekend and weekday batches available. Contact us at 9423281767 for detailed fee structure and course schedule.</p>
        
        <h3>Prerequisites</h3>
        <p>No prior programming experience required! Basic computer knowledge is sufficient to start this course. We teach everything from scratch.</p>
      `
    },
    "why-internships-important-career": {
      title: "Why Internships Are Important for Your Career",
      author: "Incite Computers",
      date: "2024-12-09",
      category: "Career",
      readTime: "4 min read",
      content: `
        <h2>The Power of Internships in Career Development</h2>
        <p>Internships bridge the gap between academic learning and professional experience. At Incite Computers, we believe internships are crucial for students to develop practical skills and industry exposure.</p>
        
        <h3>Benefits of Internships</h3>
        <ul>
          <li><strong>Real-world Experience:</strong> Apply theoretical knowledge in practical scenarios</li>
          <li><strong>Skill Development:</strong> Learn industry-relevant tools and technologies</li>
          <li><strong>Professional Network:</strong> Build connections with industry professionals</li>
          <li><strong>Career Clarity:</strong> Understand your career interests and goals</li>
          <li><strong>Resume Building:</strong> Gain valuable experience for your CV</li>
        </ul>
        
        <h3>Internship Opportunities at Incite Computers</h3>
        <p>We offer internships in various domains including MS-CIT, Tally, Python Programming, Web Development, and Machine Learning. Our internship programs are designed to provide hands-on experience with mentorship from experienced professionals.</p>
        
        <h3>How to Apply</h3>
        <p>Contact us at 9423281767 or 8263031055 to learn about current internship opportunities. We welcome students from all backgrounds who are eager to learn and grow.</p>
      `
    },
    "why-choose-incite-computers-internship": {
      title: "Why Choose Incite Computers for Your Internship",
      author: "Incite Computers",
      date: "2024-12-08",
      category: "Career",
      readTime: "3 min read",
      content: `
        <h2>Your Trusted Partner for Skill Development</h2>
        <p>With over 20 years of experience in IT education, Incite Computers has trained thousands of students in Radhanagari and surrounding areas. Our internship program is designed to provide maximum learning and growth opportunities.</p>
        
        <h3>What Makes Us Different</h3>
        <ul>
          <li><strong>Experienced Mentors:</strong> Learn from industry experts with decades of experience</li>
          <li><strong>Practical Projects:</strong> Work on real industry projects and case studies</li>
          <li><strong>Personalized Attention:</strong> Small batch sizes ensure individual guidance</li>
          <li><strong>Industry Connections:</strong> Leverage our network for job opportunities</li>
          <li><strong>Certification:</strong> Receive recognized certificates upon completion</li>
        </ul>
        
        <h3>Success Stories</h3>
        <p>Our alumni have successfully placed in top companies across Maharashtra and India. Many have started their own businesses using skills learned at Incite Computers.</p>
        
        <h3>Available Internship Domains</h3>
        <ul>
          <li>MS-CIT and Basic Computer Skills</li>
          <li>Tally and Accounting Software</li>
          <li>Python Programming and Development</li>
          <li>Web Development (HTML, CSS, JavaScript)</li>
          <li>Machine Learning and AI Basics</li>
        </ul>
      `
    },
    "radhanagari-computer-courses-marathi-guide-2024": {
      title: "राधानगरी येथील संगणक कोर्स - संपूर्ण माहिती 2024",
      author: "इनसाईट कॉम्प्युटर्स",
      date: "2024-12-07",
      category: "Marathi",
      readTime: "6 min read",
      content: `
        <h2>राधानगरी मधील सर्वोत्तम संगणक प्रशिक्षण संस्था</h2>
        <p>इनसाईट कॉम्प्युटर्स राधानगरी येथे २० वर्षांपासून दर्जेदार संगणक शिक्षण देत आहे. आम्ही शासकीय मान्यता प्राप्त संस्था आहोत आणि विविध कोर्सेस ऑफर करतो.</p>
        
        <h3>उपलब्ध कोर्सेस</h3>
        <ul>
          <li><strong>MS-CIT (Maharashtra State Certificate in Information Technology)</strong> - शासकीय प्रमाणपत्र कोर्स</li>
          <li><strong>Tally ERP 9 & Tally Prime</strong> - लेखा सॉफ्टवेअर प्रशिक्षण</li>
          <li><strong>MKCL कोर्सेस</strong> - डिजिटल साक्षरता कार्यक्रम</li>
          <li><strong>Typing Classes</strong> - इंग्रजी आणि मराठी टायपिंग</li>
          <li><strong>Python Programming</strong> - प्रोग्रामिंग शिकण्यासाठी</li>
          <li><strong>Saarthi Course</strong> - कौशल्य विकास कार्यक्रम</li>
        </ul>
        
        <h3>MS-CIT कोर्स माहिती</h3>
        <p>MS-CIT हा महाराष्ट्र शासनाने मान्यता दिलेला बेसिक कॉम्प्युटर कोर्स आहे. या कोर्समध्ये Windows, MS Office (Word, Excel, PowerPoint), Internet आणि Email यांचे प्रशिक्षण दिले जाते.</p>
        
        <h4>कोर्सचा कालावधी:</h4>
        <ul>
          <li>३ महिने (Flexible timing)</li>
          <li>रोज १ ते २ तास</li>
          <li>शनिवार-रविवार बॅच उपलब्ध</li>
        </ul>
        
        <h3>Tally कोर्स माहिती</h3>
        <p>Tally हा व्यवसायात लेखा करण्यासाठी वापरला जाणारा सॉफ्टवेअर आहे. Accountant, Billing Executive, Data Entry Operator अशा नोकऱ्यांसाठी Tally शिकणे अत्यंत महत्त्वाचे आहे.</p>
        
        <h4>Tally कोर्समध्ये शिकवले जाते:</h4>
        <ul>
          <li>Company Creation</li>
          <li>Voucher Entry (Payment, Receipt, Sales, Purchase)</li>
          <li>GST Configuration and Returns</li>
          <li>Inventory Management</li>
          <li>Banking and Reconciliation</li>
          <li>Financial Reports</li>
        </ul>
        
        <h3>Typing Classes</h3>
        <p>सरकारी नोकरीसाठी Typing Speed आवश्यक असते. आम्ही इंग्रजी आणि मराठी दोन्ही भाषांमध्ये Typing शिकवतो. सराव करून तुम्ही ४० WPM पेक्षा जास्त स्पीड मिळवू शकता.</p>
        
        <h3>इनसाईट कॉम्प्युटर्स का निवडावे?</h3>
        <ul>
          <li>२० वर्षांचा अनुभव</li>
          <li>अनुभवी शिक्षक</li>
          <li>छोटे बॅच (Individual Attention)</li>
          <li>Practical Training</li>
          <li>Job Placement मदत</li>
          <li>परवडणारी फी</li>
          <li>Flexible Timing</li>
        </ul>
        
        <h3>संपर्क माहिती</h3>
        <p><strong>पत्ता:</strong> इनसाईट कॉम्प्युटर्स, राधानगरी, जिल्हा कोल्हापूर, महाराष्ट्र</p>
        <p><strong>मोबाइल:</strong> ९४२३२८१७६७ | ८२६३०३१०५५</p>
        <p>आमच्या संस्थेत येऊन भेट द्या किंवा फोन करून अधिक माहिती मिळवा. प्रवेश सुरू आहेत!</p>
      `
    },
    "kolhapur-best-computer-training-institute-marathi": {
      title: "कोल्हापूर मधील सर्वोत्तम कॉम्प्युटर प्रशिक्षण संस्था",
      author: "इनसाईट कॉम्प्युटर्स",
      date: "2024-12-06",
      category: "Marathi",
      readTime: "5 min read",
      content: `
        <h2>इनसाईट कॉम्प्युटर्स - तुमचा विश्वासू साथीदार</h2>
        <p>कोल्हापूर जिल्ह्यातील सर्वोत्तम संगणक प्रशिक्षण संस्था शोधत आहात? इनसाईट कॉम्प्युटर्स राधानगरी येथे २० वर्षांपासून उत्कृष्ट संगणक शिक्षण देत आहे.</p>
        
        <h3>आमच्याबद्दल</h3>
        <p>इनसाईट कॉम्प्युटर्स ही शासकीय मान्यता प्राप्त संस्था आहे. आम्ही राधानगरी, कोल्हापूर, कागल, गडहिंग्लज, अजरा, चांदगड आणि आसपासच्या भागातील हजारो विद्यार्थ्यांना प्रशिक्षण दिले आहे.</p>
        
        <h3>आमची वैशिष्ट्ये</h3>
        <ul>
          <li><strong>अनुभवी शिक्षक:</strong> २० वर्षांचा IT शिक्षणाचा अनुभव</li>
          <li><strong>शासकीय मान्यता:</strong> सर्व कोर्सेस शासन मान्यता प्राप्त</li>
          <li><strong>आधुनिक संगणक लॅब:</strong> नवीन संगणक आणि सॉफ्टवेअर</li>
          <li><strong>छोटे बॅच:</strong> प्रत्येक विद्यार्थ्याला व्यक्तिगत लक्ष</li>
          <li><strong>Practical Training:</strong> १००% व्यावहारिक प्रशिक्षण</li>
          <li><strong>Job Placement:</strong> नोकरी मिळण्यासाठी मार्गदर्शन</li>
          <li><strong>Flexible Timing:</strong> सकाळ, दुपार, संध्याकाळ बॅच</li>
          <li><strong>परवडणारी फी:</strong> सर्व घटकांसाठी योग्य फी रचना</li>
        </ul>
        
        <h3>कोर्स यादी</h3>
        
        <h4>1. MS-CIT (Maharashtra State CIT)</h4>
        <p>शासकीय प्रमाणपत्र कोर्स - ३ महिने. नोकरीसाठी अनिवार्य कोर्स. Windows, MS Office, Internet शिका.</p>
        
        <h4>2. Tally ERP 9 & Tally Prime</h4>
        <p>लेखा आणि बिझनेस मॅनेजमेंट सॉफ्टवेअर. Accountant, Billing Executive नोकरीसाठी उत्तम. GST सहित संपूर्ण प्रशिक्षण.</p>
        
        <h4>3. MKCL Digital Literacy</h4>
        <p>डिजिटल साक्षरता कार्यक्रम. शासकीय योजनांसाठी मान्यता प्राप्त.</p>
        
        <h4>4. Typing Classes</h4>
        <p>इंग्रजी आणि मराठी Typing. सरकारी परीक्षांसाठी आवश्यक Typing Speed मिळवा.</p>
        
        <h4>5. Python Programming</h4>
        <p>प्रोग्रामिंग शिकायचे आहे? Python ही सर्वात सोपी आणि लोकप्रिय भाषा. Web Development, Data Science, AI/ML साठी उपयुक्त.</p>
        
        <h4>6. Internship Programs</h4>
        <p>विद्यार्थ्यांसाठी Internship संधी. Practical Experience आणि Certificate मिळवा.</p>
        
        <h3>यशोगाथा</h3>
        <p>आमच्या संस्थेतून शिकलेले हजारो विद्यार्थी आज चांगल्या नोकऱ्यांवर कार्यरत आहेत. काही जण स्वतःचा व्यवसाय करत आहेत. तुम्हीही तुमचे स्वप्न साकार करू शकता!</p>
        
        <h3>प्रवेश प्रक्रिया</h3>
        <ol>
          <li>आमच्या संस्थेत भेट द्या किंवा फोन करा</li>
          <li>कोर्स आणि फी विषयी माहिती घ्या</li>
          <li>तुमच्या सोयीनुसार बॅच निवडा</li>
          <li>नोंदणी पूर्ण करा आणि शिकणे सुरू करा</li>
        </ol>
        
        <h3>आमचा संपर्क</h3>
        <p><strong>इनसाईट कॉम्प्युटर्स</strong></p>
        <p><strong>पत्ता:</strong> राधानगरी, जिल्हा कोल्हापूर, महाराष्ट्र</p>
        <p><strong>मोबाइल:</strong> ९४२३२८१७६७ | ८२६३०३१०५५</p>
        <p><strong>WhatsApp:</strong> ९४२३२८१७६७</p>
        
        <p className="mt-4"><em>राधानगरी, कोल्हापूर, कागल, गडहिंग्लज, अजरा, चांदगड आणि आसपासच्या भागातील विद्यार्थ्यांसाठी सर्वोत्तम संगणक प्रशिक्षण!</em></p>
      `
    }
  };

  const post = blogContent[slug as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen pt-24 md:pt-28 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Incite Computers Radhanagari</title>
        <meta name="description" content={post.title} />
        <meta name="keywords" content="computer courses radhanagari, MS-CIT radhanagari, Tally course kolhapur, computer training radhanagari, MKCL center, typing classes, programming courses, संगणक कोर्स राधानगरी" />
        <link rel="canonical" href={`https://incitecomputer.com/blog/${slug}`} />
      </Helmet>
      <div className="min-h-screen pt-24 md:pt-28 pb-12">
        <article className="container mx-auto px-4 max-w-4xl">
        {/* Back to Blog */}
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center text-gray-600">
              <User size={16} className="mr-2" />
              <span className="mr-6">{post.author}</span>
              <Calendar size={16} className="mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
          <p className="text-gray-600 mb-6">
            Join Incite Computers and gain the skills you need for a successful career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-blue">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                Enroll Now - 9423281767
              </a>
            </Button>
            <Button variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
        </article>
      </div>
    </>
  );
});

BlogPostPage.displayName = "BlogPostPage";

export default BlogPostPage;
