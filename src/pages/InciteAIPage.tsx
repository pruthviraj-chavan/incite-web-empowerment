import { useState, useRef, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Plus, Trash2, Edit2, Download, Send, 
  Menu, X, Bot, User, ChevronRight, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useInciteChat, Chat, ChatMessage } from '@/hooks/useInciteChat';
import { cn } from '@/lib/utils';

// Chat Message Component
const MessageBubble = memo(({ message }: { message: ChatMessage }) => {
  const isUser = message.role === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex gap-3 p-4",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
        isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
      )}>
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>
      
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3",
        isUser 
          ? "bg-primary text-primary-foreground rounded-tr-sm" 
          : "bg-muted text-foreground rounded-tl-sm"
      )}>
        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
        <span className="text-[10px] opacity-60 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </motion.div>
  );
});

MessageBubble.displayName = 'MessageBubble';

// Typing Indicator
const TypingIndicator = memo(() => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex gap-3 p-4"
  >
    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
      <Bot className="w-4 h-4 text-secondary-foreground" />
    </div>
    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
      <div className="flex gap-1">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-foreground/40 rounded-full"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  </motion.div>
));

TypingIndicator.displayName = 'TypingIndicator';

// Chat List Item
const ChatListItem = memo(({ 
  chat, 
  isActive, 
  onSelect, 
  onDelete, 
  onRename, 
  onExport 
}: { 
  chat: Chat;
  isActive: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onRename: () => void;
  onExport: () => void;
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors",
        isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
      )}
      onClick={onSelect}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <MessageSquare className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm truncate flex-1">{chat.title}</span>
      
      <AnimatePresence>
        {showActions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-1"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="p-1 hover:bg-background rounded" 
              onClick={onRename}
              title="Rename"
            >
              <Edit2 className="w-3 h-3" />
            </button>
            <button 
              className="p-1 hover:bg-background rounded" 
              onClick={onExport}
              title="Export"
            >
              <Download className="w-3 h-3" />
            </button>
            <button 
              className="p-1 hover:bg-destructive/20 text-destructive rounded" 
              onClick={onDelete}
              title="Delete"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

ChatListItem.displayName = 'ChatListItem';

// Main Page Component
const InciteAIPage = () => {
  const {
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
  } = useInciteChat();

  const [inputValue, setInputValue] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat?.messages]);

  // Focus input on chat change
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeChatId]);

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRename = (chatId: string) => {
    const newTitle = prompt('Enter new chat title:');
    if (newTitle?.trim()) {
      renameChat(chatId, newTitle.trim());
    }
  };

  return (
    <>
      <Helmet>
        <title>InciteAI - Incite Computer AI Assistant | Radhanagari</title>
        <meta name="description" content="Chat with Incite Computer AI Assistant. Get instant answers about our courses, services, fees, and more. MS-CIT, Tally, Python, Web Development courses in Radhanagari." />
        <meta name="keywords" content="incite computer ai, chatbot, computer courses radhanagari, ms-cit help, tally course info, ai assistant" />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Mobile Sidebar Toggle */}
        <button
          className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-background border rounded-lg shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-72 bg-card border-r transform transition-transform duration-300 pt-16 lg:pt-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-lg">InciteAI</span>
              </div>
              
              <Button 
                onClick={() => {
                  createNewChat();
                  setSidebarOpen(false);
                }}
                className="w-full gap-2"
              >
                <Plus className="w-4 h-4" />
                New Chat
              </Button>
            </div>

            {/* Chat List */}
            <ScrollArea className="flex-1 p-2">
              <div className="space-y-1">
                {chats.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No chats yet. Start a new conversation!
                  </p>
                ) : (
                  chats.map(chat => (
                    <ChatListItem
                      key={chat.id}
                      chat={chat}
                      isActive={chat.id === activeChatId}
                      onSelect={() => {
                        setActiveChatId(chat.id);
                        setSidebarOpen(false);
                      }}
                      onDelete={() => deleteChat(chat.id)}
                      onRename={() => handleRename(chat.id)}
                      onExport={() => exportChat(chat.id)}
                    />
                  ))
                )}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t">
              <p className="text-[10px] text-muted-foreground text-center">
                Your chats are stored only on this device.
              </p>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col min-h-screen">
          {/* Chat Header */}
          <header className="border-b bg-card/50 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold">Incite Computer AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Ask about courses, fees, timings & more</p>
            </div>
          </header>

          {/* Messages */}
          <ScrollArea className="flex-1">
            <div className="max-w-3xl mx-auto py-4">
              {!activeChat ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Welcome to InciteAI</h2>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    I'm your AI assistant for Incite Computer. Ask me about courses, fees, timings, internships, and more!
                  </p>
                  <Button onClick={createNewChat} size="lg" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Start New Chat
                  </Button>
                </div>
              ) : (
                <>
                  {activeChat.messages.map(message => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  
                  <AnimatePresence>
                    {isLoading && <TypingIndicator />}
                  </AnimatePresence>
                  
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          {activeChat && (
            <div className="border-t bg-card/50 backdrop-blur-sm p-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Incite Computer — courses, fees, timings, contact..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSend} 
                    disabled={!inputValue.trim() || isLoading}
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  InciteAI can only answer questions about Incite Computer and incitecomputer.com content.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default memo(InciteAIPage);
