import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User, MessageCircle, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your High Energy Astrophysics Workshop-2025 assistant. Ask me anything about the High Energy Astrophysics Workshop!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Event details for context
  const eventDetails = {
    name: "High Energy Astrophysics Workshop 2025 (HEAW-2025)",
    dates: "November 18–20, 2025",
    venue: "CCASS, GLA University, Mathura",
    organizer: "IUCAA Centre for Astronomy Research and Development (ICARD), GLA University",
    registration: "Free for all participants",
    email: "heaw@gla.ac.in",
    speakers: [
      "Dr. Vaidehi Paliya (IUCAA, Pune) - High Energy Astrophysics & AGN Physics",
      "Dr. Pankaj Kushwaha (IISER, Mohali) - Blazars & Relativistic Jets",
      "Dr. Chetana Jain (Hansraj College, DU, New Delhi) - Stellar Astrophysics",
      "Dr. Dharm Veer Singh (GLA University, Mathura) - Compact Object Physics",
      "Dr. Akash Garg (IUCAA, Pune) - Computational Astrophysics"
    ],
    topics: [
      "High Energy Astrophysics",
      "Black Holes and Neutron Stars",
      "Active Galactic Nuclei",
      "Gamma-ray Astronomy",
      "Computational Methods in Astrophysics"
    ],
    contact: {
      ashutosh: "+91-9628324945",
      dinesh: "+91-8810764934"
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual Gemini API call
      // For now, using a simple response system
      const response = await generateResponse(inputMessage);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again or contact us directly at heaw@gla.ac.in",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateResponse = async (question: string): Promise<string> => {
    // Temporary response system until Gemini API is integrated
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("date") || lowerQuestion.includes("when")) {
      return `HEAW-2025 will be held from ${eventDetails.dates} at ${eventDetails.venue}.`;
    }
    
    if (lowerQuestion.includes("venue") || lowerQuestion.includes("where") || lowerQuestion.includes("location")) {
      return `The workshop will be held at ${eventDetails.venue}. It's organized by ${eventDetails.organizer}.`;
    }
    
    if (lowerQuestion.includes("registration") || lowerQuestion.includes("register") || lowerQuestion.includes("fee")) {
      return `Registration is completely free for all participants! You can register using our registration form or contact us at ${eventDetails.email}.`;
    }
    
    if (lowerQuestion.includes("speaker") || lowerQuestion.includes("talk")) {
      return `Our distinguished speakers include: ${eventDetails.speakers.slice(0, 3).join(", ")} and more! Each speaker will cover cutting-edge topics in high energy astrophysics.`;
    }
    
    if (lowerQuestion.includes("topic") || lowerQuestion.includes("subject") || lowerQuestion.includes("about")) {
      return `The workshop covers: ${eventDetails.topics.join(", ")}. It's a comprehensive program focusing on the latest developments in high energy astrophysics.`;
    }
    
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("phone") || lowerQuestion.includes("call")) {
      return `You can contact us at:\n📧 Email: ${eventDetails.email}\n📱 Ashutosh Singh: ${eventDetails.contact.ashutosh}\n📱 Dinesh Chandra Maurya: ${eventDetails.contact.dinesh}`;
    }
    
    return `Thank you for your question about High Energy Astrophysics Workshop-2025! For specific details, please contact us at ${eventDetails.email}. The workshop will be held ${eventDetails.dates} at ${eventDetails.venue} with free registration for all participants.`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-cosmic hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl pulse-glow"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          )}
        </Button>
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96">
          <Card className="nebula-card border-0 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              {/* Chat Header */}
              <div className="bg-gradient-cosmic p-4 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-5 h-5" />
                    <h3 className="font-orbitron font-semibold">HEAW-2025 Assistant</h3>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-3 bg-background/95">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      message.isUser 
                        ? "bg-gradient-cosmic" 
                        : "bg-primary/20"
                    }`}>
                      {message.isUser ? (
                        <User className="w-3 h-3 text-primary-foreground" />
                      ) : (
                        <Bot className="w-3 h-3 text-primary" />
                      )}
                    </div>
                    <div className={`flex-1 max-w-xs ${
                      message.isUser ? "text-right" : ""
                    }`}>
                      <div className={`p-2 rounded-xl text-sm ${
                        message.isUser
                          ? "bg-gradient-cosmic text-primary-foreground ml-auto"
                          : "bg-muted/50 text-foreground"
                      }`}>
                        <p className="whitespace-pre-line">{message.text}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                    <div className="flex-1 max-w-xs">
                      <div className="p-2 rounded-xl bg-muted/50">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="border-t border-border/50 p-3 bg-background/95">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about High Energy Astrophysics Workshop-2025..."
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    size="sm"
                    className="bg-gradient-cosmic hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatSection;
