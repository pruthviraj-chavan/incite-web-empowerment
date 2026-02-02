import { memo, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { ExternalLink, Search, Sparkles, Zap, Brain, Code, TrendingUp, Layers } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AIToolsPage = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Infrastructure", "Agent Builders", "Code", "Marketing", "Sales", "Automations", "Support", "Operations", "Consumer", "Personal AI"];

  const categoryIcons: Record<string, React.ReactNode> = {
    "All": <Sparkles className="w-4 h-4" />,
    "Infrastructure": <Layers className="w-4 h-4" />,
    "Agent Builders": <Brain className="w-4 h-4" />,
    "Code": <Code className="w-4 h-4" />,
    "Marketing": <TrendingUp className="w-4 h-4" />,
    "Sales": <Zap className="w-4 h-4" />,
  };

  const categoryColors: Record<string, string> = {
    "Infrastructure": "from-blue-500 to-cyan-500",
    "Agent Builders": "from-purple-500 to-pink-500",
    "Code": "from-green-500 to-emerald-500",
    "Marketing": "from-orange-500 to-red-500",
    "Sales": "from-yellow-500 to-orange-500",
    "Automations": "from-indigo-500 to-purple-500",
    "Support": "from-teal-500 to-cyan-500",
    "Operations": "from-slate-500 to-gray-500",
    "Consumer": "from-pink-500 to-rose-500",
    "Personal AI": "from-violet-500 to-purple-500",
  };

  const aiTools = [
    // Infrastructure
    { id: 1, name: "OpenAI", description: "Powerful AI platform for building intelligent applications.", url: "https://openai.com/", category: "Infrastructure" },
    { id: 2, name: "Anthropic", description: "Ethical AI models focused on safety.", url: "https://anthropic.com/", category: "Infrastructure" },
    { id: 3, name: "Gemini", description: "Google's advanced AI suite for multimodal AI.", url: "https://gemini.google.com/", category: "Infrastructure" },
    { id: 4, name: "Mistral", description: "Open-source AI models for developers.", url: "https://mistral.ai/", category: "Infrastructure" },
    { id: 5, name: "Meta AI", description: "Meta's powerful AI engine.", url: "https://ai.meta.com/", category: "Infrastructure" },
    { id: 6, name: "LangChain", description: "Framework for building AI apps.", url: "https://langchain.com/", category: "Infrastructure" },
    { id: 7, name: "ElevenLabs", description: "Advanced voice AI tools.", url: "https://elevenlabs.io/", category: "Infrastructure" },
    { id: 8, name: "HeyGen", description: "AI-powered video creation.", url: "https://heygen.com/", category: "Infrastructure" },
    // Agent Builders
    { id: 11, name: "Wordware", description: "AI workflow builder.", url: "https://wordware.ai/", category: "Agent Builders" },
    { id: 12, name: "CrewAI", description: "Multi-agent platform.", url: "https://crewai.com/", category: "Agent Builders" },
    { id: 13, name: "Writer", description: "Enterprise writing AI.", url: "https://writer.com/", category: "Agent Builders" },
    { id: 14, name: "You", description: "Personal AI assistant.", url: "https://you.com/", category: "Agent Builders" },
    // Code
    { id: 21, name: "Cursor", description: "AI-powered coding editor.", url: "https://cursor.sh/", category: "Code" },
    { id: 22, name: "Replit", description: "Cloud-based coding IDE.", url: "https://replit.com/", category: "Code" },
    { id: 23, name: "Windsurf", description: "AI coding platform.", url: "https://windsurf.ai/", category: "Code" },
    { id: 24, name: "Bolt", description: "Lightweight AI code assistant.", url: "https://bolt.new/", category: "Code" },
    { id: 25, name: "Lovable", description: "AI UX designer.", url: "https://lovable.dev/", category: "Code" },
    { id: 26, name: "Devin", description: "Autonomous development agent.", url: "https://devin.ai/", category: "Code" },
    // Marketing
    { id: 30, name: "Jasper", description: "AI copywriting assistant.", url: "https://jasper.ai/", category: "Marketing" },
    { id: 31, name: "Captions", description: "Auto video captions.", url: "https://captions.ai/", category: "Marketing" },
    // Sales
    { id: 40, name: "Jason AI", description: "Smart CRM helper.", url: "https://jason.ai/", category: "Sales" },
    { id: 41, name: "Tome", description: "AI presentation builder.", url: "https://tome.app/", category: "Sales" },
    // Automations
    { id: 50, name: "Zapier", description: "Workflow automator.", url: "https://zapier.com/", category: "Automations" },
    { id: 51, name: "Lindy", description: "AI task manager.", url: "https://lindy.ai/", category: "Automations" },
    { id: 52, name: "Make", description: "Visual workflow builder.", url: "https://make.com/", category: "Automations" },
    // Support
    { id: 60, name: "Fin AI", description: "AI helpdesk tool.", url: "https://fin.ai/", category: "Support" },
    { id: 61, name: "Sierra", description: "Human-like support AI.", url: "https://sierra.ai/", category: "Support" },
    // Operations
    { id: 70, name: "Notion AI", description: "Smart workspace tool.", url: "https://notion.so/", category: "Operations" },
    { id: 71, name: "Gamma", description: "AI-powered presentations.", url: "https://gamma.app/", category: "Operations" },
    // Consumer
    { id: 80, name: "Midjourney", description: "AI image generation.", url: "https://midjourney.com/", category: "Consumer" },
    { id: 81, name: "Suno", description: "AI music generator.", url: "https://suno.ai/", category: "Consumer" },
    { id: 82, name: "Runway", description: "Creative AI tools.", url: "https://runwayml.com/", category: "Consumer" },
    // Personal AI
    { id: 90, name: "ChatGPT", description: "Conversational AI assistant.", url: "https://chat.openai.com/", category: "Personal AI" },
    { id: 91, name: "Claude", description: "AI assistant by Anthropic.", url: "https://claude.ai/", category: "Personal AI" },
    { id: 92, name: "Perplexity", description: "AI search engine.", url: "https://perplexity.ai/", category: "Personal AI" },
    { id: 93, name: "Replika", description: "AI chatbot companion.", url: "https://replika.ai/", category: "Personal AI" },
  ];

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>AI Tools Directory | Incite Computers - Best AI Tools for Learning</title>
        <meta name="description" content="Discover the best AI tools for learning, development, marketing and automation. Curated list of 100+ AI tools by Incite Computers Radhanagari." />
        <link rel="canonical" href="https://incitecomputer.com/ai-tools" />
        <meta property="og:title" content="AI Tools Directory - Incite Computers" />
        <meta property="og:description" content="Explore 100+ AI tools for development, marketing, automation and more. Curated by Incite Computers." />
        <meta property="og:url" content="https://incitecomputer.com/ai-tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 border border-purple-500/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" /> 100+ AI Tools Curated
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Tools Directory
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover the latest AI tools for development, marketing, automation, and more. Find the perfect AI solution for your needs.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-20">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {categoryIcons[category] || <Sparkles className="w-4 h-4" />}
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Tools Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {filteredTools.map((tool, index) => (
              <motion.div 
                key={tool.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ y: -5 }}
              >
                {/* Category badge */}
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${categoryColors[tool.category] || "from-gray-500 to-gray-600"} text-white`}>
                  {tool.category}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {tool.description}
                </p>
                
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  Try Tool <ExternalLink size={14} />
                </a>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No AI tools found matching your criteria.</p>
            </div>
          )}

          {/* CTA Section */}
          <motion.section 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Learning?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our courses at Incite Computers and learn how to effectively use these AI tools in your studies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                    Contact Us - 9423281767
                  </a>
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl">
                  <a href="https://wa.me/918263031055" target="_blank" rel="noopener noreferrer">
                    Call - 8263031055
                  </a>
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
});

AIToolsPage.displayName = "AIToolsPage";

export default AIToolsPage;
