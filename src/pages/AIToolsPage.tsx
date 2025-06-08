
import { useState } from "react";
import { ExternalLink, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIToolsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Content Creation", "Productivity", "Interactive Learning", "Accessibility"];

  const aiTools = [
    // Content Creation
    {
      id: 1,
      name: "Canva Magic Media",
      description: "Creates fun posters and videos for MSCIT projects with easy templates.",
      url: "https://www.canva.com/magic-media/",
      category: "Content Creation"
    },
    {
      id: 2,
      name: "Vidnoz AI",
      description: "Generates funny avatar videos to practice computer basics creatively.",
      url: "https://www.vidnoz.com/",
      category: "Content Creation"
    },
    {
      id: 3,
      name: "Picsart AI",
      description: "Edits photos with filters for engaging Tally report visuals.",
      url: "https://picsart.com/",
      category: "Content Creation"
    },
    {
      id: 4,
      name: "Photopea",
      description: "Free tool for editing images to create MSCIT presentations.",
      url: "https://www.photopea.com/",
      category: "Content Creation"
    },
    {
      id: 5,
      name: "Clipchamp",
      description: "Simplifies video creation for computer basics tutorials.",
      url: "https://clipchamp.com/",
      category: "Content Creation"
    },
    {
      id: 6,
      name: "Kapwing",
      description: "Creates memes to make typing lessons fun and relatable.",
      url: "https://www.kapwing.com/",
      category: "Content Creation"
    },
    {
      id: 7,
      name: "Fotor AI",
      description: "Designs vibrant graphics for Saarthi course certificates.",
      url: "https://www.fotor.com/",
      category: "Content Creation"
    },
    {
      id: 8,
      name: "Pixlr",
      description: "Offers AI-enhanced photo editing for MSCIT project visuals.",
      url: "https://pixlr.com/",
      category: "Content Creation"
    },
    {
      id: 9,
      name: "Remove.bg",
      description: "Removes image backgrounds for clean Tally chart designs.",
      url: "https://www.remove.bg/",
      category: "Content Creation"
    },
    {
      id: 10,
      name: "Lumen5",
      description: "Turns text into videos for engaging computer basics lessons.",
      url: "https://lumen5.com/",
      category: "Content Creation"
    },

    // Productivity
    {
      id: 11,
      name: "Notion AI",
      description: "Organizes notes for MSCIT and Tally with AI summaries.",
      url: "https://www.notion.so/product/ai",
      category: "Productivity"
    },
    {
      id: 12,
      name: "Otter.ai",
      description: "Transcribes typing practice audio for review and accuracy.",
      url: "https://otter.ai/",
      category: "Productivity"
    },
    {
      id: 13,
      name: "Grammarly",
      description: "Improves typing assignments with grammar and style checks.",
      url: "https://www.grammarly.com/",
      category: "Productivity"
    },
    {
      id: 14,
      name: "Quillbot",
      description: "Paraphrases text to simplify Tally notes for students.",
      url: "https://quillbot.com/",
      category: "Productivity"
    },
    {
      id: 15,
      name: "Trello AI",
      description: "Manages MSCIT study tasks with AI-suggested schedules.",
      url: "https://trello.com/",
      category: "Productivity"
    },
    {
      id: 16,
      name: "Notedly.ai",
      description: "Summarizes Tally and MSCIT notes for quick revision.",
      url: "https://notedly.ai/",
      category: "Productivity"
    },
    {
      id: 17,
      name: "Gptionary",
      description: "Finds simple synonyms for MSCIT and Tally terminology.",
      url: "https://gptionary.com/",
      category: "Productivity"
    },
    {
      id: 18,
      name: "Todoist AI",
      description: "Creates prioritized task lists for Saarthi course progress.",
      url: "https://todoist.com/",
      category: "Productivity"
    },
    {
      id: 19,
      name: "Evernote AI",
      description: "Organizes computer basics notes with AI-powered search.",
      url: "https://evernote.com/",
      category: "Productivity"
    },
    {
      id: 20,
      name: "ClickUp Brain",
      description: "Suggests tasks for managing typing practice schedules.",
      url: "https://clickup.com/",
      category: "Productivity"
    },

    // Interactive Learning
    {
      id: 21,
      name: "Socratic by Google",
      description: "Solves MSCIT and Tally queries with visual explanations.",
      url: "https://socratic.org/",
      category: "Interactive Learning"
    },
    {
      id: 22,
      name: "Brainly",
      description: "Connects students for quick MSCIT and Tally Q&A.",
      url: "https://brainly.com/",
      category: "Interactive Learning"
    },
    {
      id: 23,
      name: "Duolingo",
      description: "Gamifies English typing practice with fun lessons.",
      url: "https://www.duolingo.com/",
      category: "Interactive Learning"
    },
    {
      id: 24,
      name: "Scratch",
      description: "Teaches coding basics through interactive MSCIT games.",
      url: "https://scratch.mit.edu/",
      category: "Interactive Learning"
    },
    {
      id: 25,
      name: "Quick Draw",
      description: "Fun AI game to practice mouse skills for computer basics.",
      url: "https://quickdraw.withgoogle.com/",
      category: "Interactive Learning"
    },
    {
      id: 26,
      name: "Khanmigo",
      description: "Offers interactive MSCIT and Tally tutoring with prompts.",
      url: "https://www.khanmigo.ai/",
      category: "Interactive Learning"
    },
    {
      id: 27,
      name: "Curipod",
      description: "Creates gamified MSCIT quizzes with AI polls and drawings.",
      url: "https://curipod.com/",
      category: "Interactive Learning"
    },
    {
      id: 28,
      name: "ClassPoint AI",
      description: "Turns Tally slides into engaging quizzes for practice.",
      url: "https://www.classpoint.io/",
      category: "Interactive Learning"
    },
    {
      id: 29,
      name: "Conker.ai",
      description: "Builds arcade-style games for MSCIT and Tally reviews.",
      url: "https://www.conker.ai/",
      category: "Interactive Learning"
    },
    {
      id: 30,
      name: "Hello History",
      description: "Chats with figures to make computer history lessons fun.",
      url: "https://www.hellohistory.ai/",
      category: "Interactive Learning"
    },

    // Accessibility
    {
      id: 31,
      name: "Speechify",
      description: "Reads MSCIT and Tally notes aloud for better understanding.",
      url: "https://speechify.com/",
      category: "Accessibility"
    },
    {
      id: 32,
      name: "AudioPen",
      description: "Converts speech to text for typing practice notes.",
      url: "https://audiopen.ai/",
      category: "Accessibility"
    },
    {
      id: 33,
      name: "Lexia Core5 Reading",
      description: "Enhances English typing with adaptive reading tasks.",
      url: "https://www.lexialearning.com/core5",
      category: "Accessibility"
    },
    {
      id: 34,
      name: "Magic Padlet",
      description: "Organizes collaborative MSCIT projects visually.",
      url: "https://padlet.com/",
      category: "Accessibility"
    },
    {
      id: 35,
      name: "Google's AI Classes",
      description: "Teaches AI basics with fun, interactive modules.",
      url: "https://edu.google.com/ai/",
      category: "Accessibility"
    },
    {
      id: 36,
      name: "Snorkl",
      description: "Analyzes drawings for visual Tally and math feedback.",
      url: "https://www.snorkl.app/",
      category: "Accessibility"
    },
    {
      id: 37,
      name: "Buddy.ai",
      description: "Virtual tutor for English typing with fun games.",
      url: "https://www.buddy.ai/",
      category: "Accessibility"
    },
    {
      id: 38,
      name: "Trellis",
      description: "Simplifies MSCIT concepts with interactive quizzes.",
      url: "https://trellis.education/",
      category: "Accessibility"
    },
    {
      id: 39,
      name: "Aistote",
      description: "Creates flashcards for MSCIT and Tally terminology.",
      url: "https://aistote.com/",
      category: "Accessibility"
    },
    {
      id: 40,
      name: "Pi",
      description: "Friendly AI for engaging MSCIT and Tally Q&A sessions.",
      url: "https://pi.ai/",
      category: "Accessibility"
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-purple-600 mr-2" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Free AI Tools for Students
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Enhance your learning experience with these carefully curated AI tools. Perfect for students taking MS-CIT, Tally, typing courses, and programming at Incite Computers Radhanagari.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search AI tools..."
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

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold">
                  {tool.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {tool.description}
              </p>
              
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors font-semibold"
              >
                Try Tool
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No AI tools found matching your criteria.</p>
          </div>
        )}

        {/* SEO Content Section */}
        <section className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Use AI Tools for Learning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Enhanced Productivity</h3>
              <p className="text-gray-600">Streamline your studies with AI-powered tools that help organize and optimize your learning process.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Make complex topics like MS-CIT and Tally more engaging with interactive AI tools and games.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Personalized Experience</h3>
              <p className="text-gray-600">Get customized feedback and recommendations tailored to your learning style and pace.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Learning?</h3>
          <p className="text-gray-600 mb-6">
            Join our courses at Incite Computers and learn how to effectively use these AI tools in your studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-blue">
              <a href="https://wa.me/919423281767" target="_blank" rel="noopener noreferrer">
                Contact Us - 9423281767
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://wa.me/918263031055" target="_blank" rel="noopener noreferrer">
                Call - 8263031055
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIToolsPage;
