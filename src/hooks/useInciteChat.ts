import { useState, useEffect, useCallback, useMemo } from 'react';
import Fuse from 'fuse.js';
import { inciteKnowledgeBase, KBDocument, STORAGE_KEYS } from '@/data/inciteKnowledgeBase';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: number;
  sources?: string[];
}

export interface Chat {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  messages: ChatMessage[];
}

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const GREETING_MESSAGE: ChatMessage = {
  id: 'greeting',
  role: 'assistant',
  text: "Hi! I'm the Incite Computer AI Assistant. I only answer questions about Incite Computer and content on incitecomputer.com. How can I help you today?",
  timestamp: Date.now()
};

export function useInciteChat() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(inciteKnowledgeBase, {
      keys: [
        { name: 'title', weight: 0.3 },
        { name: 'text', weight: 0.5 },
        { name: 'keywords', weight: 0.2 }
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2
    });
  }, []);

  // Load chats from localStorage
  useEffect(() => {
    const savedChats = localStorage.getItem(STORAGE_KEYS.CHATS);
    const savedActiveChat = localStorage.getItem(STORAGE_KEYS.ACTIVE_CHAT);
    
    if (savedChats) {
      const parsedChats = JSON.parse(savedChats);
      setChats(parsedChats);
      
      if (savedActiveChat && parsedChats.find((c: Chat) => c.id === savedActiveChat)) {
        setActiveChatId(savedActiveChat);
      } else if (parsedChats.length > 0) {
        setActiveChatId(parsedChats[0].id);
      }
    }
  }, []);

  // Save chats to localStorage
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem(STORAGE_KEYS.CHATS, JSON.stringify(chats));
    }
  }, [chats]);

  // Save active chat ID
  useEffect(() => {
    if (activeChatId) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_CHAT, activeChatId);
    }
  }, [activeChatId]);

  const activeChat = useMemo(() => {
    return chats.find(c => c.id === activeChatId) || null;
  }, [chats, activeChatId]);

  const createNewChat = useCallback(() => {
    const newChat: Chat = {
      id: generateId(),
      title: 'New Chat',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [{ ...GREETING_MESSAGE, id: generateId(), timestamp: Date.now() }]
    };
    
    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    return newChat.id;
  }, []);

  const deleteChat = useCallback((chatId: string) => {
    setChats(prev => {
      const filtered = prev.filter(c => c.id !== chatId);
      if (activeChatId === chatId) {
        setActiveChatId(filtered.length > 0 ? filtered[0].id : null);
      }
      if (filtered.length === 0) {
        localStorage.removeItem(STORAGE_KEYS.CHATS);
      }
      return filtered;
    });
  }, [activeChatId]);

  const renameChat = useCallback((chatId: string, newTitle: string) => {
    setChats(prev => prev.map(c => 
      c.id === chatId ? { ...c, title: newTitle, updatedAt: Date.now() } : c
    ));
  }, []);

  const exportChat = useCallback((chatId: string) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      const blob = new Blob([JSON.stringify(chat, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `incite-chat-${chat.title.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }, [chats]);

  const searchKnowledgeBase = useCallback((query: string): KBDocument[] => {
    const results = fuse.search(query);
    return results.slice(0, 3).map(r => r.item);
  }, [fuse]);

  const generateResponse = useCallback((query: string, relevantDocs: KBDocument[]): string => {
    if (relevantDocs.length === 0) {
      return "I can only answer questions about Incite Computer and our website content. Could you please ask something related to our courses, services, contact information, or other details about Incite Computer?";
    }

    // Combine relevant information
    const combinedInfo = relevantDocs.map(doc => doc.text).join(' ');
    
    // Simple keyword-based response generation
    const queryLower = query.toLowerCase();
    
    // Check for specific query types and format response
    if (queryLower.includes('contact') || queryLower.includes('phone') || queryLower.includes('call')) {
      const contactDoc = relevantDocs.find(d => d.id === 'contact-info');
      if (contactDoc) {
        return `You can reach Incite Computer at:\n\n📞 Phone: 9423281767 or 8263031055\n📧 Email: incitecomputer@gmail.com\n📍 Location: Radhanagari, Kolhapur, Maharashtra\n⏰ Hours: Monday to Saturday, 9 AM to 8 PM\n\nFeel free to call for free counseling and course demos!`;
      }
    }

    if (queryLower.includes('course') || queryLower.includes('learn') || queryLower.includes('training')) {
      return `Incite Computer offers the following courses:\n\n📚 **MS-CIT** - Government-recognized IT certification (3 months)\n📊 **Tally** - Accounting & GST (2-3 months)\n⌨️ **Typing** - English & Marathi (1-2 months)\n🐍 **Python** - Programming basics to advanced (3-4 months)\n🌐 **Web Development** - HTML, CSS, JS, React (4-6 months)\n🤖 **Machine Learning** - Data Science & ML (3-4 months)\n🧠 **AI** - Deep Learning & NLP (4-6 months)\n\nContact: 9423281767 for details and enrollment!`;
    }

    if (queryLower.includes('fee') || queryLower.includes('price') || queryLower.includes('cost') || queryLower.includes('payment')) {
      return `Incite Computer offers affordable course fees with flexible payment options:\n\n💰 EMI and installment plans available\n🎓 Special discounts for students and women\n👥 Group enrollment discounts\n📚 Fee includes study materials & certificate\n💳 Pay via cash, UPI, or bank transfer\n\nContact 9423281767 for exact pricing and current offers!`;
    }

    if (queryLower.includes('timing') || queryLower.includes('batch') || queryLower.includes('schedule') || queryLower.includes('time')) {
      return `Incite Computer offers flexible batch timings:\n\n🌅 Morning: 7 AM - 10 AM\n☀️ Afternoon: 12 PM - 3 PM\n🌆 Evening: 5 PM - 8 PM\n📅 Weekend batches for working professionals\n💻 Online classes available\n\nRolling admissions - join anytime! Call 9423281767 to book your slot.`;
    }

    if (queryLower.includes('internship')) {
      return `Incite Computer offers internship programs in:\n\n🐍 Python Development\n🌐 Web Development\n🤖 Machine Learning\n🧠 Artificial Intelligence\n\n⏱️ Duration: 1-3 months\n📜 Certificate provided\n💰 Stipend available for selected candidates\n\nEligible: BCA, BCS, MCA, or any IT students\nApply: Call 9423281767 or 8263031055`;
    }

    if (queryLower.includes('location') || queryLower.includes('address') || queryLower.includes('where')) {
      return `Incite Computer is located in:\n\n📍 Radhanagari, Kolhapur, Maharashtra, India\n\n🚗 Easy access from Radhanagari town\n🅿️ Parking facility available\n📞 Call for directions: 9423281767\n\nVisit us for a free demo and counseling session!`;
    }

    // Generic response using the first relevant document
    const primaryDoc = relevantDocs[0];
    return `Based on information from Incite Computer:\n\n${primaryDoc.text}\n\n📞 For more details, contact: 9423281767 or 8263031055`;
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!activeChatId || !text.trim()) return;

    setIsLoading(true);

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      text: text.trim(),
      timestamp: Date.now()
    };

    // Add user message immediately
    setChats(prev => prev.map(c => {
      if (c.id === activeChatId) {
        const isFirstUserMessage = c.messages.filter(m => m.role === 'user').length === 0;
        return {
          ...c,
          title: isFirstUserMessage ? text.trim().slice(0, 30) + (text.length > 30 ? '...' : '') : c.title,
          updatedAt: Date.now(),
          messages: [...c.messages, userMessage]
        };
      }
      return c;
    }));

    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // Search knowledge base
    const relevantDocs = searchKnowledgeBase(text);
    const responseText = generateResponse(text, relevantDocs);

    const assistantMessage: ChatMessage = {
      id: generateId(),
      role: 'assistant',
      text: responseText,
      timestamp: Date.now(),
      sources: relevantDocs.map(d => d.url)
    };

    setChats(prev => prev.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          updatedAt: Date.now(),
          messages: [...c.messages, assistantMessage]
        };
      }
      return c;
    }));

    setIsLoading(false);
  }, [activeChatId, searchKnowledgeBase, generateResponse]);

  return {
    chats,
    activeChat,
    activeChatId,
    isLoading,
    setActiveChatId,
    createNewChat,
    deleteChat,
    renameChat,
    exportChat,
    sendMessage
  };
}
