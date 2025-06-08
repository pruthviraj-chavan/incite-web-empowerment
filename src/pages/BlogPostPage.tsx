
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPostPage = () => {
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
    }
  };

  const post = blogContent[slug as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
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
    <div className="min-h-screen pt-20 pb-12">
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
  );
};

export default BlogPostPage;
