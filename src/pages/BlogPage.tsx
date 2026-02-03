import { useState, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";
import { useBlogs } from "@/hooks/useOptimizedQuery";

const categories = ["All", "MS-CIT", "Tally", "Saarthi", "MKCL", "Typing", "Programming", "Career", "Marathi", "General"];

// Static blog posts (existing data)
const staticBlogPosts = [
  {
    id: 1,
    title: "MS-CIT Course in Radhanagari - Complete Guide 2024",
    slug: "ms-cit-course-radhanagari-guide-2024",
    excerpt: "Comprehensive guide to MS-CIT certification in Radhanagari. Learn about syllabus, fees, duration and job opportunities.",
    category: "MS-CIT",
    author: "Incite Computers",
    date: "2024-12-15",
    readTime: "5 min read",
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
  },
  {
    id: 9,
    title: "राधानगरी येथील संगणक कोर्स - संपूर्ण माहिती 2024",
    slug: "radhanagari-computer-courses-marathi-guide-2024",
    excerpt: "राधानगरी मधील इनसाईट कॉम्प्युटर्स संस्थेत उपलब्ध सर्व कोर्सेसची संपूर्ण माहिती. MS-CIT, Tally, MKCL, Typing आणि Programming कोर्सेस.",
    category: "Marathi",
    author: "इनसाईट कॉम्प्युटर्स",
    date: "2024-12-07",
    readTime: "6 min read",
  },
  {
    id: 10,
    title: "कोल्हापूर मधील सर्वोत्तम कॉम्प्युटर प्रशिक्षण संस्था",
    slug: "kolhapur-best-computer-training-institute-marathi",
    excerpt: "इनसाईट कॉम्प्युटर्स - कोल्हापूर जिल्ह्यातील २० वर्षांचा अनुभव असलेली प्रमाणित संगणक प्रशिक्षण संस्था. शासकीय मान्यता प्राप्त कोर्सेस.",
    category: "Marathi",
    author: "इनसाईट कॉम्प्युटर्स",
    date: "2024-12-06",
    readTime: "5 min read",
  }
];

const BlogPage = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Use optimized cached query - data stays fresh for 5 mins
  const { data: dbBlogs = [] } = useBlogs();

  // Combine static and database blogs
  const combinedPosts = useMemo(() => {
    const dbPostsFormatted = dbBlogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt || '',
      category: blog.category,
      author: blog.author || 'Incite Computers',
      date: blog.published_at || blog.created_at,
      readTime: '3 min read',
      featured_image: blog.featured_image
    }));
    return [...dbPostsFormatted, ...staticBlogPosts];
  }, [dbBlogs]);

  const filteredPosts = useMemo(() => 
    combinedPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }), [searchTerm, selectedCategory, combinedPosts]);

  return (
    <>
      <Helmet>
        <title>Computer Courses Blog | Incite Computers Radhanagari | MS-CIT, Tally, Programming Classes Kolhapur</title>
        <meta name="description" content="Expert computer courses in Radhanagari & Kolhapur region. MS-CIT classes, Tally training, MKCL courses, typing classes, Python programming. 20+ years experience. Government approved institute near Radhanagari, Kolhapur, Maharashtra." />
        <meta name="keywords" content="computer courses radhanagari, MS-CIT classes radhanagari, Tally course kolhapur, computer training near radhanagari, MKCL center radhanagari, typing classes kolhapur, python programming radhanagari, computer institute kolhapur, IT courses radhanagari, computer classes near me, संगणक कोर्स राधानगरी, कॉम्प्युटर क्लासेस कोल्हापूर" />
        <meta property="og:title" content="Computer Courses in Radhanagari - Incite Computers Blog" />
        <meta property="og:description" content="Top-rated computer training institute in Radhanagari & Kolhapur. MS-CIT, Tally, MKCL, Programming courses with job placement." />
        <link rel="canonical" href="https://incitecomputer.com/blog" />
      </Helmet>
      <div className="min-h-screen pt-24 md:pt-28 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Computer Courses Blog - Radhanagari & Kolhapur
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert insights on MS-CIT, Tally, MKCL, typing, and programming courses in Radhanagari area. Government-approved computer training institute serving Kolhapur district for 20+ years.
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
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 will-change-transform">
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
          <h2 className="text-2xl font-bold mb-4 text-center">Best Computer Training Institute in Radhanagari, Kolhapur</h2>
          <div className="text-gray-600 max-w-4xl mx-auto space-y-4">
            <p>
              <strong>Incite Computers Radhanagari</strong> - Your trusted partner for computer education in Kolhapur district. With over 20 years of excellence, we offer government-approved courses including MS-CIT, Tally ERP, MKCL digital literacy, typing classes (English & Marathi), Python programming, and career internships.
            </p>
            <p>
              Located in Radhanagari, we serve students from across Kolhapur, Kagal, Gadhinglaj, Ajra, Chandgad, and surrounding areas. Our experienced faculty, modern computer labs, and job placement assistance make us the #1 choice for computer courses near you.
            </p>
            <p className="text-sm italic">
              <strong>संगणक कोर्स राधानगरी:</strong> राधानगरी, कोल्हापूर मधील सर्वोत्तम कॉम्प्युटर प्रशिक्षण संस्था. MS-CIT, Tally, MKCL, Typing आणि Programming कोर्सेस. शासकीय मान्यता प्राप्त. २० वर्षांचा अनुभव. नोकरी मिळण्यास मदत.
            </p>
            <div className="mt-6 text-center">
              <p className="font-semibold text-lg mb-2">📞 Contact: 9423281767 | 8263031055</p>
              <p className="text-sm">📍 Radhanagari, Dist. Kolhapur, Maharashtra</p>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
});

BlogPage.displayName = "BlogPage";

export default BlogPage;
