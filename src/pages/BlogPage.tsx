import { useState, useMemo, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, BookOpen, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";
import { useBlogs } from "@/hooks/useOptimizedQuery";
import { motion } from "framer-motion";

const categories = ["All", "MS-CIT", "Tally", "Saarthi", "MKCL", "Typing", "Programming", "Career", "Marathi", "General"];

const staticBlogPosts = [
  { id: 1, title: "MS-CIT Course in Radhanagari - Complete Guide 2024", slug: "ms-cit-course-radhanagari-guide-2024", excerpt: "Comprehensive guide to MS-CIT certification in Radhanagari. Learn about syllabus, fees, duration and job opportunities.", category: "MS-CIT", author: "Incite Computers", date: "2024-12-15", readTime: "5 min read" },
  { id: 2, title: "Tally Classes in Kolhapur - Best Training Institute", slug: "tally-classes-kolhapur-best-training", excerpt: "Master Tally ERP 9 and Tally Prime with our expert-led classes in Kolhapur region. Industry-relevant curriculum.", category: "Tally", author: "Incite Computers", date: "2024-12-14", readTime: "4 min read" },
  { id: 3, title: "MKCL Training Near Me - Digital Literacy Programs", slug: "mkcl-training-digital-literacy-programs", excerpt: "Explore MKCL digital literacy programs at Incite Computers. Government-approved courses for skill development.", category: "MKCL", author: "Incite Computers", date: "2024-12-13", readTime: "3 min read" },
  { id: 4, title: "Typing Speed Course - English & Marathi Typing Classes", slug: "typing-speed-course-english-marathi", excerpt: "Improve your typing speed with our structured English and Marathi typing courses. Perfect for government job preparation.", category: "Typing", author: "Incite Computers", date: "2024-12-12", readTime: "4 min read" },
  { id: 5, title: "Saarthi Course Details - Skill Development Program", slug: "saarthi-course-details-skill-development", excerpt: "Learn about Saarthi skill development courses offered at Incite Computers. Government-recognized certification programs.", category: "Saarthi", author: "Incite Computers", date: "2024-12-11", readTime: "3 min read" },
  { id: 6, title: "Python Programming Course for Beginners in Radhanagari", slug: "python-programming-course-beginners-radhanagari", excerpt: "Start your programming journey with Python. Beginner-friendly course with hands-on projects and industry applications.", category: "Programming", author: "Incite Computers", date: "2024-12-10", readTime: "6 min read" },
  { id: 7, title: "Why Internships Are Important for Your Career", slug: "why-internships-important-career", excerpt: "Discover how internships at Incite Computers can boost your career prospects and provide real-world experience.", category: "Career", author: "Incite Computers", date: "2024-12-09", readTime: "4 min read" },
  { id: 8, title: "Why Choose Incite Computers for Your Internship", slug: "why-choose-incite-computers-internship", excerpt: "Learn why Incite Computers is the best choice for your internship in computer courses and skill development.", category: "Career", author: "Incite Computers", date: "2024-12-08", readTime: "3 min read" },
  { id: 9, title: "राधानगरी येथील संगणक कोर्स - संपूर्ण माहिती 2024", slug: "radhanagari-computer-courses-marathi-guide-2024", excerpt: "राधानगरी मधील इनसाईट कॉम्प्युटर्स संस्थेत उपलब्ध सर्व कोर्सेसची संपूर्ण माहिती. MS-CIT, Tally, MKCL, Typing आणि Programming कोर्सेस.", category: "Marathi", author: "इनसाईट कॉम्प्युटर्स", date: "2024-12-07", readTime: "6 min read" },
  { id: 10, title: "कोल्हापूर मधील सर्वोत्तम कॉम्प्युटर प्रशिक्षण संस्था", slug: "kolhapur-best-computer-training-institute-marathi", excerpt: "इनसाईट कॉम्प्युटर्स - कोल्हापूर जिल्ह्यातील २० वर्षांचा अनुभव असलेली प्रमाणित संगणक प्रशिक्षण संस्था. शासकीय मान्यता प्राप्त कोर्सेस.", category: "Marathi", author: "इनसाईट कॉम्प्युटर्स", date: "2024-12-06", readTime: "5 min read" },
];

const categoryColors: Record<string, string> = {
  "MS-CIT": "from-blue-500 to-blue-600",
  "Tally": "from-emerald-500 to-emerald-600",
  "MKCL": "from-violet-500 to-violet-600",
  "Typing": "from-amber-500 to-amber-600",
  "Saarthi": "from-teal-500 to-teal-600",
  "Programming": "from-rose-500 to-rose-600",
  "Career": "from-sky-500 to-sky-600",
  "Marathi": "from-orange-500 to-orange-600",
  "General": "from-gray-500 to-gray-600",
};

const BlogCard = memo(({ post, index }: { post: any; index: number }) => {
  const gradient = categoryColors[post.category] || "from-gray-500 to-gray-600";
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${gradient}`}>
            <Tag size={12} />
            {post.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-gray-500 mb-5 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {new Date(post.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className={`text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center gap-1 group-hover:gap-2 transition-all duration-200`}
          >
            Read <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});
BlogCard.displayName = "BlogCard";

const BlogPage = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: dbBlogs = [] } = useBlogs();

  const combinedPosts = useMemo(() => {
    const dbFormatted = dbBlogs.map(blog => ({
      id: blog.id, title: blog.title, slug: blog.slug,
      excerpt: blog.excerpt || '', category: blog.category,
      author: blog.author || 'Incite Computers',
      date: blog.published_at || blog.created_at,
      readTime: '3 min read', featured_image: blog.featured_image
    }));
    return [...dbFormatted, ...staticBlogPosts];
  }, [dbBlogs]);

  const filteredPosts = useMemo(() =>
    combinedPosts.filter(post => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
      const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCat;
    }), [searchTerm, selectedCategory, combinedPosts]);

  const setCat = useCallback((c: string) => setSelectedCategory(c), []);

  return (
    <>
      <Helmet>
        <title>Computer Courses Blog | Incite Computers Radhanagari</title>
        <meta name="description" content="Expert computer courses in Radhanagari & Kolhapur. MS-CIT, Tally, MKCL, typing, Python programming. 20+ years experience." />
        <link rel="canonical" href="https://incitecomputer.com/blog" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-20 md:py-28">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.2) 0%, transparent 40%)`
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <BookOpen size={16} /> Blog & Insights
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Computer Courses Blog
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
                Expert insights on MS-CIT, Tally, MKCL, typing, and programming courses in Radhanagari & Kolhapur.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-11 pr-4 py-3 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm focus:bg-white/15 focus:border-blue-400/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category pills */}
        <div className="sticky top-14 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCat(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="mx-auto mb-4 text-gray-300" size={48} />
              <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* SEO */}
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Best Computer Training in Radhanagari, Kolhapur</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                <strong>Incite Computers</strong> — 20+ years of government-approved computer education. MS-CIT, Tally, MKCL, typing, Python programming with job placement.
              </p>
              <p className="text-xs text-gray-400 italic">
                संगणक कोर्स राधानगरी: MS-CIT, Tally, MKCL, Typing आणि Programming कोर्सेस. शासकीय मान्यता प्राप्त. २० वर्षांचा अनुभव.
              </p>
              <p className="font-semibold text-sm mt-6 text-gray-700">📞 9423281767 | 8263031055 &nbsp;·&nbsp; 📍 Radhanagari, Kolhapur</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

BlogPage.displayName = "BlogPage";
export default BlogPage;
