import { useState, memo } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const faqData = [
  {
    keywords: ['course', 'courses', 'कोर्स', 'अभ्यासक्रम'],
    response: 'आम्ही खालील कोर्सेस देतो:\n• MS-CIT - ₹4500\n• Tally Prime - ₹6000\n• Typing (English/Marathi) - ₹2000\n• Python Programming - ₹8000\n• Web Development - ₹10000\n• MKCL Courses\n\nअधिक माहितीसाठी संपर्क करा: 9423281767'
  },
  {
    keywords: ['fee', 'fees', 'price', 'cost', 'फी', 'किंमत', 'शुल्क'],
    response: 'कोर्स फी:\n• MS-CIT: ₹4500\n• Tally Prime: ₹6000\n• Typing: ₹2000\n• Python: ₹8000\n• Web Dev: ₹10000\n\nहप्त्याची सुविधा उपलब्ध. संपर्क: 9423281767'
  },
  {
    keywords: ['timing', 'time', 'batch', 'वेळ', 'बॅच', 'वेळापत्रक'],
    response: 'बॅच वेळापत्रक:\n• सकाळी: 7:00 AM - 10:00 AM\n• दुपारी: 10:00 AM - 1:00 PM\n• संध्याकाळी: 4:00 PM - 7:00 PM\n• रात्री: 7:00 PM - 9:00 PM\n\nसोमवार ते शनिवार सुरू'
  },
  {
    keywords: ['contact', 'phone', 'number', 'संपर्क', 'फोन', 'नंबर', 'call'],
    response: 'संपर्क:\n📞 9423281767\n📞 8263031055\n📞 7276457181\n\n📍 पत्ता: राधानगरी, जि. कोल्हापूर\n\nWhatsApp वर मेसेज करा!'
  },
  {
    keywords: ['address', 'location', 'where', 'पत्ता', 'कुठे', 'ठिकाण'],
    response: '📍 Incite Computers\nराधानगरी, तालुका राधानगरी\nजिल्हा: कोल्हापूर\nमहाराष्ट्र, भारत\n\nGoogle Maps वर "Incite Computers Radhanagari" शोधा'
  },
  {
    keywords: ['mscit', 'ms-cit', 'एमएससीआयटी'],
    response: 'MS-CIT कोर्स:\n• कालावधी: 3 महिने\n• फी: ₹4500\n• प्रमाणपत्र: MKCL\n• विषय: Computer Basics, MS Office, Internet, Digital Skills\n\nनोंदणीसाठी संपर्क: 9423281767'
  },
  {
    keywords: ['tally', 'टॅली', 'accounting', 'gst'],
    response: 'Tally Prime कोर्स:\n• कालावधी: 4 महिने\n• फी: ₹6000\n• विषय: Accounting, GST, TDS, Inventory\n• Placement सहाय्य उपलब्ध\n\nसंपर्क: 9423281767'
  },
  {
    keywords: ['typing', 'टायपिंग'],
    response: 'Typing कोर्स:\n• English Typing\n• Marathi Typing\n• कालावधी: 2 महिने\n• फी: ₹2000\n• Speed: 30-40 WPM गॅरंटी\n\nसंपर्क: 9423281767'
  },
  {
    keywords: ['python', 'programming', 'coding', 'पायथन'],
    response: 'Python Programming:\n• कालावधी: 4-6 महिने\n• फी: ₹8000\n• विषय: Python Basics, OOP, Projects\n• प्रोजेक्ट आधारित शिक्षण\n\nसंपर्क: 9423281767'
  },
  {
    keywords: ['certificate', 'प्रमाणपत्र'],
    response: 'आम्ही सर्व कोर्सेससाठी प्रमाणपत्र देतो:\n• MS-CIT: MKCL प्रमाणपत्र\n• Tally: Certified Tally User\n• Typing: Speed Certificate\n• Programming: Course Completion\n\nसर्व प्रमाणपत्रे उद्योग मान्यताप्राप्त'
  },
  {
    keywords: ['job', 'placement', 'नोकरी', 'जॉब'],
    response: 'नोकरी सहाय्य:\n• Resume तयार करणे\n• Interview तयारी\n• कंपनी संपर्क\n• Placement सहाय्य\n\nआमच्या 5000+ विद्यार्थ्यांना नोकऱ्या मिळाल्या!'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'नमस्कार', 'हॅलो'],
    response: 'नमस्कार! 🙏 Incite Computers मध्ये आपले स्वागत आहे!\n\nमी तुम्हाला कोर्स, फी, वेळापत्रक, किंवा संपर्क माहिती देऊ शकतो.\n\nकाय माहिती हवी?'
  },
  {
    keywords: ['thanks', 'thank', 'धन्यवाद'],
    response: 'धन्यवाद! 🙏\n\nआणखी काही प्रश्न असल्यास विचारा.\n\nसंपर्क: 9423281767'
  }
];

const defaultResponse = 'माफ करा, मला तुमचा प्रश्न समजला नाही.\n\nकृपया खालीलपैकी एक विचारा:\n• कोर्सेस\n• फी\n• वेळापत्रक\n• संपर्क\n• पत्ता\n\nकिंवा थेट कॉल करा: 9423281767';

const FAQChatbot = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'नमस्कार! 🙏 मी Incite Computers चा सहाय्यक आहे.\n\nमला कोर्सेस, फी, वेळापत्रक, संपर्क याबद्दल विचारा!', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const findResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const faq of faqData) {
      for (const keyword of faq.keywords) {
        if (lowerInput.includes(keyword.toLowerCase())) {
          return faq.response;
        }
      }
    }
    
    return defaultResponse;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: findResponse(input),
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickReplies = ['कोर्सेस', 'फी', 'वेळापत्रक', 'संपर्क'];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Incite Assistant</h3>
                <p className="text-xs text-white/80">Quick answers • 24/7</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start gap-2 max-w-[85%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-300'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-gray-600" />}
                  </div>
                  <div className={`rounded-2xl p-3 ${
                    message.isBot 
                      ? 'bg-white shadow-sm border border-gray-100' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 border-t border-gray-100 flex gap-2 overflow-x-auto">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => {
                  setInput(reply);
                  setTimeout(handleSend, 100);
                }}
                className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors whitespace-nowrap"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="तुमचा प्रश्न लिहा..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
});

FAQChatbot.displayName = 'FAQChatbot';

export default FAQChatbot;
