
import { useState } from "react";
import { ExternalLink, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIToolsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Infrastructure", "Agent Builders", "Code", "Marketing", "Sales", "Automations", "Support", "Operations", "Consumer", "Personal AI"];

  const aiTools = [
    // Infrastructure
    {
      id: 1,
      name: "OpenAI",
      description: "Powerful AI platform for building intelligent applications and services.",
      url: "https://openai.com/",
      category: "Infrastructure"
    },
    {
      id: 2,
      name: "Anthropic",
      description: "Ethical AI models focused on safety and responsible AI development.",
      url: "https://anthropic.com/",
      category: "Infrastructure"
    },
    {
      id: 3,
      name: "Gemini",
      description: "Google's advanced AI suite for multimodal AI applications.",
      url: "https://gemini.google.com/",
      category: "Infrastructure"
    },
    {
      id: 4,
      name: "Mistral",
      description: "Open-source AI models for developers and enterprises.",
      url: "https://mistral.ai/",
      category: "Infrastructure"
    },
    {
      id: 5,
      name: "Meta AI",
      description: "Meta's powerful AI engine for various applications.",
      url: "https://ai.meta.com/",
      category: "Infrastructure"
    },
    {
      id: 6,
      name: "LangChain",
      description: "Framework for building AI applications with language models.",
      url: "https://langchain.com/",
      category: "Infrastructure"
    },
    {
      id: 7,
      name: "ElevenLabs",
      description: "Advanced voice AI tools for realistic speech synthesis.",
      url: "https://elevenlabs.io/",
      category: "Infrastructure"
    },
    {
      id: 8,
      name: "HeyGen",
      description: "AI-powered video creation platform for engaging content.",
      url: "https://heygen.com/",
      category: "Infrastructure"
    },
    {
      id: 9,
      name: "Factory",
      description: "AI development platform for building smart applications.",
      url: "https://factory.ai/",
      category: "Infrastructure"
    },
    {
      id: 10,
      name: "Letta",
      description: "Creative writing AI for content generation and storytelling.",
      url: "https://letta.com/",
      category: "Infrastructure"
    },

    // Agent Builders
    {
      id: 11,
      name: "Wordware",
      description: "AI workflow builder for creating intelligent automation.",
      url: "https://wordware.ai/",
      category: "Agent Builders"
    },
    {
      id: 12,
      name: "CrewAI",
      description: "Multi-agent platform for collaborative AI systems.",
      url: "https://crewai.com/",
      category: "Agent Builders"
    },
    {
      id: 13,
      name: "Writer",
      description: "Enterprise writing AI for business content creation.",
      url: "https://writer.com/",
      category: "Agent Builders"
    },
    {
      id: 14,
      name: "You",
      description: "Personal AI assistant for everyday tasks and queries.",
      url: "https://you.com/",
      category: "Agent Builders"
    },
    {
      id: 15,
      name: "Lyzr",
      description: "AI orchestration agent for complex workflows.",
      url: "https://lyzr.ai/",
      category: "Agent Builders"
    },
    {
      id: 16,
      name: "Relevance",
      description: "Search relevance agent for better information retrieval.",
      url: "https://relevanceai.com/",
      category: "Agent Builders"
    },
    {
      id: 17,
      name: "Runner H",
      description: "AI agent trainer for custom assistant development.",
      url: "https://runner.ai/",
      category: "Agent Builders"
    },
    {
      id: 18,
      name: "Sema4",
      description: "Developer copilot AI for coding assistance.",
      url: "https://sema4.ai/",
      category: "Agent Builders"
    },
    {
      id: 19,
      name: "Copilot Studio",
      description: "Microsoft's platform for building AI agents.",
      url: "https://copilotstudio.microsoft.com/",
      category: "Agent Builders"
    },
    {
      id: 20,
      name: "Agentforce",
      description: "Platform for building smart AI agents for business.",
      url: "https://agentforce.com/",
      category: "Agent Builders"
    },

    // Code
    {
      id: 21,
      name: "Cursor",
      description: "AI-powered coding editor for enhanced development.",
      url: "https://cursor.sh/",
      category: "Code"
    },
    {
      id: 22,
      name: "Replit",
      description: "Cloud-based coding IDE with AI assistance.",
      url: "https://replit.com/",
      category: "Code"
    },
    {
      id: 23,
      name: "Windsurf",
      description: "AI coding platform for streamlined development.",
      url: "https://windsurf.ai/",
      category: "Code"
    },
    {
      id: 24,
      name: "Bolt",
      description: "Lightweight AI code assistant for quick development.",
      url: "https://bolt.new/",
      category: "Code"
    },
    {
      id: 25,
      name: "Lovable",
      description: "AI UX designer for creating beautiful interfaces.",
      url: "https://lovable.dev/",
      category: "Code"
    },
    {
      id: 26,
      name: "Poolside",
      description: "Instant code assistant for rapid development.",
      url: "https://poolside.ai/",
      category: "Code"
    },
    {
      id: 27,
      name: "Devin",
      description: "Autonomous development agent for complex projects.",
      url: "https://devin.ai/",
      category: "Code"
    },
    {
      id: 28,
      name: "All Hands",
      description: "Comprehensive AI development tool suite.",
      url: "https://allhands.dev/",
      category: "Code"
    },
    {
      id: 29,
      name: "Codev",
      description: "Low-code AI builder for rapid application development.",
      url: "https://codev.com/",
      category: "Code"
    },

    // Marketing
    {
      id: 30,
      name: "Averi",
      description: "AI-powered marketing content creation and optimization.",
      url: "https://averi.ai/",
      category: "Marketing"
    },
    {
      id: 31,
      name: "Jasper",
      description: "AI copywriting assistant for marketing content.",
      url: "https://jasper.ai/",
      category: "Marketing"
    },
    {
      id: 32,
      name: "Coframe",
      description: "AI design assistant for marketing materials.",
      url: "https://coframe.co/",
      category: "Marketing"
    },
    {
      id: 33,
      name: "Rankar",
      description: "SEO optimization agent for better search rankings.",
      url: "https://rankar.com/",
      category: "Marketing"
    },
    {
      id: 34,
      name: "Seobot",
      description: "AI SEO crawler for website optimization.",
      url: "https://seobot.ai/",
      category: "Marketing"
    },
    {
      id: 35,
      name: "Argil",
      description: "AI image generation tool for marketing visuals.",
      url: "https://argil.ai/",
      category: "Marketing"
    },
    {
      id: 36,
      name: "Quso",
      description: "Marketing data AI for analytics and insights.",
      url: "https://quso.ai/",
      category: "Marketing"
    },
    {
      id: 37,
      name: "Captions",
      description: "Auto video captions for social media content.",
      url: "https://captions.ai/",
      category: "Marketing"
    },
    {
      id: 38,
      name: "Fix AI",
      description: "Ad performance booster for better campaign results.",
      url: "https://fix.ai/",
      category: "Marketing"
    },
    {
      id: 39,
      name: "Luthor",
      description: "Smart campaign management and optimization.",
      url: "https://luthor.ai/",
      category: "Marketing"
    },

    // Sales
    {
      id: 40,
      name: "Jason AI",
      description: "Smart CRM helper for sales team productivity.",
      url: "https://jason.ai/",
      category: "Sales"
    },
    {
      id: 41,
      name: "Godmode",
      description: "AI sales assistant for enhanced performance.",
      url: "https://godmode.space/",
      category: "Sales"
    },
    {
      id: 42,
      name: "Breeze",
      description: "Sales content generator for effective outreach.",
      url: "https://breeze.ai/",
      category: "Sales"
    },
    {
      id: 43,
      name: "Claygent",
      description: "Lead intelligence AI for better prospecting.",
      url: "https://clay.com/",
      category: "Sales"
    },
    {
      id: 44,
      name: "1lx",
      description: "Lead generation automation for sales teams.",
      url: "https://1lx.com/",
      category: "Sales"
    },
    {
      id: 45,
      name: "Tome",
      description: "AI presentation builder for sales pitches.",
      url: "https://tome.app/",
      category: "Sales"
    },
    {
      id: 46,
      name: "Kuration",
      description: "Content curation AI for sales enablement.",
      url: "https://kuration.ai/",
      category: "Sales"
    },
    {
      id: 47,
      name: "Rox",
      description: "Revenue operations tool for sales optimization.",
      url: "https://rox.ai/",
      category: "Sales"
    },
    {
      id: 48,
      name: "AiSDR",
      description: "AI sales development representative for outreach.",
      url: "https://aisdr.com/",
      category: "Sales"
    },
    {
      id: 49,
      name: "Rep",
      description: "Conversational sales bot for customer engagement.",
      url: "https://rep.ai/",
      category: "Sales"
    },

    // Automations
    {
      id: 50,
      name: "Zapier",
      description: "Workflow automator connecting apps and services.",
      url: "https://zapier.com/",
      category: "Automations"
    },
    {
      id: 51,
      name: "Lindy",
      description: "AI task manager for personal productivity.",
      url: "https://lindy.ai/",
      category: "Automations"
    },
    {
      id: 52,
      name: "Beam",
      description: "Workflow AI agent for business process automation.",
      url: "https://beam.ai/",
      category: "Automations"
    },
    {
      id: 53,
      name: "Cassidy",
      description: "Task automation bot for streamlined workflows.",
      url: "https://cassidy.ai/",
      category: "Automations"
    },
    {
      id: 54,
      name: "Magical",
      description: "Text expander AI for faster communication.",
      url: "https://magical.so/",
      category: "Automations"
    },
    {
      id: 55,
      name: "Abergen",
      description: "Custom bot builder for specialized automation.",
      url: "https://abergen.ai/",
      category: "Automations"
    },
    {
      id: 56,
      name: "MindPal",
      description: "Knowledge base AI for information management.",
      url: "https://mindpal.space/",
      category: "Automations"
    },
    {
      id: 57,
      name: "Tray",
      description: "Process automation tool for enterprise workflows.",
      url: "https://tray.io/",
      category: "Automations"
    },
    {
      id: 58,
      name: "Respell",
      description: "Custom AI workflows for business automation.",
      url: "https://respell.ai/",
      category: "Automations"
    },
    {
      id: 59,
      name: "Make",
      description: "Visual workflow builder for process automation.",
      url: "https://make.com/",
      category: "Automations"
    },

    // Support
    {
      id: 60,
      name: "Fin AI",
      description: "AI helpdesk tool for customer support excellence.",
      url: "https://fin.ai/",
      category: "Support"
    },
    {
      id: 61,
      name: "Decagon",
      description: "AI support copilot for enhanced customer service.",
      url: "https://decagon.ai/",
      category: "Support"
    },
    {
      id: 62,
      name: "Duckie",
      description: "Customer chat AI for instant support responses.",
      url: "https://duckie.ai/",
      category: "Support"
    },
    {
      id: 63,
      name: "Sierra",
      description: "Human-like support AI for natural conversations.",
      url: "https://sierra.ai/",
      category: "Support"
    },
    {
      id: 64,
      name: "Siena",
      description: "Email reply automation for support teams.",
      url: "https://siena.ai/",
      category: "Support"
    },
    {
      id: 65,
      name: "Agency",
      description: "Support AI agent for comprehensive customer care.",
      url: "https://agency.ai/",
      category: "Support"
    },
    {
      id: 66,
      name: "Melodyarc",
      description: "AI conversation builder for support interactions.",
      url: "https://melodyarc.com/",
      category: "Support"
    },
    {
      id: 67,
      name: "Berry",
      description: "AI ticket resolver for efficient support management.",
      url: "https://berry.ai/",
      category: "Support"
    },
    {
      id: 68,
      name: "Pylon",
      description: "Support analytics AI for performance insights.",
      url: "https://pylon.com/",
      category: "Support"
    },
    {
      id: 69,
      name: "Parloa",
      description: "Voice-based assistant for phone support automation.",
      url: "https://parloa.com/",
      category: "Support"
    },

    // Operations
    {
      id: 70,
      name: "Juicebox",
      description: "Data operations AI for analytics and insights.",
      url: "https://juicebox.ai/",
      category: "Operations"
    },
    {
      id: 71,
      name: "Sapien",
      description: "Operations optimization AI for business efficiency.",
      url: "https://sapien.ai/",
      category: "Operations"
    },
    {
      id: 72,
      name: "Perplexity",
      description: "Answer engine AI for quick information retrieval.",
      url: "https://perplexity.ai/",
      category: "Operations"
    },
    {
      id: 73,
      name: "Harvey",
      description: "Legal research agent for law professionals.",
      url: "https://harvey.ai/",
      category: "Operations"
    },
    {
      id: 74,
      name: "Dimely",
      description: "Operations simplifier for streamlined processes.",
      url: "https://dimely.io/",
      category: "Operations"
    },
    {
      id: 75,
      name: "DeepL",
      description: "AI language translator for global communication.",
      url: "https://deepl.com/",
      category: "Operations"
    },
    {
      id: 76,
      name: "Airtable AI",
      description: "AI-powered database for organized data management.",
      url: "https://airtable.com/ai",
      category: "Operations"
    },
    {
      id: 77,
      name: "PolyAI",
      description: "Voice agent builder for customer interactions.",
      url: "https://poly.ai/",
      category: "Operations"
    },
    {
      id: 78,
      name: "Jensys",
      description: "Workflow insights AI for process optimization.",
      url: "https://jensys.ai/",
      category: "Operations"
    },
    {
      id: 79,
      name: "Hamming",
      description: "Developer task AI for technical operations.",
      url: "https://hamming.ai/",
      category: "Operations"
    },

    // Consumer
    {
      id: 80,
      name: "Tendi",
      description: "Shopping assistant AI for better purchasing decisions.",
      url: "https://tendi.ai/",
      category: "Consumer"
    },
    {
      id: 81,
      name: "Mindtrip",
      description: "Travel planning AI for personalized itineraries.",
      url: "https://mindtrip.ai/",
      category: "Consumer"
    },
    {
      id: 82,
      name: "Rex.fit",
      description: "Health tracking AI for fitness and wellness.",
      url: "https://rex.fit/",
      category: "Consumer"
    },
    {
      id: 83,
      name: "Ada",
      description: "Health information bot for medical guidance.",
      url: "https://ada.com/",
      category: "Consumer"
    },
    {
      id: 84,
      name: "Gemini",
      description: "Google assistant AI for everyday tasks.",
      url: "https://gemini.google.com/app",
      category: "Consumer"
    },
    {
      id: 85,
      name: "Person AI",
      description: "Personal task AI for daily productivity.",
      url: "https://person.ai/",
      category: "Consumer"
    },
    {
      id: 86,
      name: "Pi",
      description: "Emotional support AI for mental wellbeing.",
      url: "https://pi.ai/",
      category: "Consumer"
    },
    {
      id: 87,
      name: "AI Lawyer",
      description: "Legal bot assistant for legal questions.",
      url: "https://ailawyer.pro/",
      category: "Consumer"
    },
    {
      id: 88,
      name: "Edna",
      description: "AI homework helper for students.",
      url: "https://edna.ai/",
      category: "Consumer"
    },
    {
      id: 89,
      name: "TaxGPT",
      description: "Tax filing bot for simplified tax preparation.",
      url: "https://taxgpt.com/",
      category: "Consumer"
    },

    // Personal AI
    {
      id: 90,
      name: "Character.ai",
      description: "Chat with AI characters for entertainment and learning.",
      url: "https://character.ai/",
      category: "Personal AI"
    },
    {
      id: 91,
      name: "Martin",
      description: "Daily planner AI for organized scheduling.",
      url: "https://martin.ai/",
      category: "Personal AI"
    },
    {
      id: 92,
      name: "Delphi",
      description: "Ethical decision AI for moral guidance.",
      url: "https://delphi.ai/",
      category: "Personal AI"
    },
    {
      id: 93,
      name: "Kin",
      description: "Personal companion AI for emotional support.",
      url: "https://kin.ai/",
      category: "Personal AI"
    },
    {
      id: 94,
      name: "Jo",
      description: "AI conversation friend for daily chats.",
      url: "https://jo.ai/",
      category: "Personal AI"
    },
    {
      id: 95,
      name: "Summit",
      description: "Personal growth coach AI for self-improvement.",
      url: "https://summit.ai/",
      category: "Personal AI"
    },
    {
      id: 96,
      name: "Nora",
      description: "Life organizer AI for personal management.",
      url: "https://nora.ai/",
      category: "Personal AI"
    },
    {
      id: 97,
      name: "Table",
      description: "Family assistant AI for household management.",
      url: "https://table.ai/",
      category: "Personal AI"
    },
    {
      id: 98,
      name: "Rewind",
      description: "Memory recall AI for information retrieval.",
      url: "https://rewind.ai/",
      category: "Personal AI"
    },
    {
      id: 99,
      name: "Replika",
      description: "AI chatbot companion for personal conversations.",
      url: "https://replika.ai/",
      category: "Personal AI"
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-purple-600 mr-2" size={28} />
              <h1 className="text-3xl md:text-5xl font-bold gradient-text">
                AI Tools Directory
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Discover the latest AI tools for development, marketing, automation, and more. Find the perfect AI solution for your needs.
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
