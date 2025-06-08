
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "MS-CIT", "Tally", "Saarthi", "MKCL", "Typing", "Programming", "Career"];

  const blogPosts = [
    {
      id: 1,
      title: "MS-CIT Course in Radhanagari - Complete Guide 2024",
      slug: "ms-cit-course-radhanagari-guide-2024",
      excerpt: "Comprehensive guide to MS-CIT certification in Radhanagari. Learn about syllabus, fees, duration and job opportunities.",
      category: "MS-CIT",
      author: "Incite Computers",
      date: "2024-12-15",
      readTime: "5 min read",
      keywords: "MS-CIT course Radhanagari, MSCIT classes Kolhapur, computer course near me"
    },
    {
      id: 2,
      title: "Tally Classes in Kolhapur - Best Training Institute",
      slug: "tally-classes-kolhapur-best-training",
      excerpt: "Master Tally ERP 9 and Tally Prime with our expert-led classes in Kolhapur region. Industry-relevant curriculum.",
      category: "Tally",
      author: "Incite Computers",
      date: "2024-12-14",
      readTime: "4 min read",
      keywords: "Tally classes Kolhapur, Tally training Radhanagari, Tally course near me"
    },
    {
      id: 3,
      title: "MKCL Training Near Me - Digital Literacy Programs",
      slug: "mkcl-training-digital-literacy-programs",
      excerpt: "Explore MKCL digital literacy programs at Incite Computers. Government-approved courses for skill development.",
      category: "MKCL",
      author: "Incite Computers",
      date: "2024-12-13",
      readTime: "3 min read",
      keywords: "MKCL training near me, digital literacy Radhanagari, MKCL courses Kolhapur"
    },
    {
      id: 4,
      title: "Typing Speed Course - English & Marathi Typing Classes",
      slug: "typing-speed-course-english-marathi",
      excerpt: "Improve your typing speed with our structured English and Marathi typing courses. Perfect for government job preparation.",
      category: "Typing",
      author: "Incite Computers",
      date: "2024-12-12",
      readTime: "4 min read",
      keywords: "typing classes Radhanagari, English typing course, Marathi typing classes"
    },
    {
      id: 5,
      title: "Saarthi Course Details - Skill Development Program",
      slug: "saarthi-course-details-skill-development",
      excerpt: "Learn about Saarthi skill development courses offered at Incite Computers. Government-recognized certification programs.",
      category: "Saarthi",
      author: "Incite Computers",
      date: "2024-12-11",
      readTime: "3 min read",
      keywords: "Saarthi course Radhanagari, skill development program, Saarthi training Kolhapur"
    },
    {
      id: 6,
      title: "Python Programming Course for Beginners in Radhanagari",
      slug: "python-programming-course-beginners-radhanagari",
      excerpt: "Start your programming journey with Python. Beginner-friendly course with hands-on projects and industry applications.",
      category: "Programming",
      author: "Incite Computers",
      date: "2024-12-10",
      readTime: "6 min read",
      keywords: "Python course Radhanagari, programming classes Kolhapur, coding course near me"
    },
    {
      id: 7,
      title: "Why Internships Are Important for Your Career",
      slug: "why-internships-important-career",
      excerpt: "Discover how internships at Incite Computers can boost your career prospects and provide real-world experience.",
      category: "Career",
      author: "Incite Computers",
      date: "2024-12-09",
      readTime: "4 min read",
      keywords: "internship benefits, career development, skill-based internships Radhanagari"
    },
    {
      id: 8,
      title: "Why Choose Incite Computers for Your Internship",
      slug: "why-choose-incite-computers-internship",
      excerpt: "Learn why Incite Computers is the best choice for your internship in computer courses and skill development.",
      category: "Career",
      author: "Incite Computers",
      date: "2024-12-08",
      readTime: "3 min read",
      keywords: "Incite Computers internship, computer internship Radhanagari, skill internship Kolhapur"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Computer Course Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest insights on MS-CIT, Tally, MKCL, typing courses, and career guidance in Radhanagari and Kolhapur region.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
          </div>
        )}

        {/* SEO Content Section */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">About Our Computer Course Blog</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Welcome to Incite Computers' blog - your go-to resource for computer courses in Radhanagari and Kolhapur. 
            We provide comprehensive guides on MS-CIT, Tally classes, MKCL training, typing courses, and programming. 
            Stay updated with the latest trends in technology education and career development opportunities in Maharashtra.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
