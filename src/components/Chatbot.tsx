import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import OpenAI from "openai";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const SYSTEM_PROMPT = `You are a helpful, polite, and professional AI assistant for VISO, a physical security consultancy.
Your goal is to answer questions about VISO based on the provided context. 
If a user asks a question in a language other than English (like Arabic), you MUST answer in that language perfectly.
If the user asks an irrelevant question not related to VISO, physical security, or the services offered, politely explain that you can only answer questions related to VISO and its services (like "I'm sorry, I can only help you with questions related to VISO and physical security.").
Be concise but friendly. Use formatting like lists or bold text when appropriate to make your response easy to read.

Context about VISO:
- VISO is a premier physical security consultancy founded in 2020, headquartered in Riyadh with 5 regional offices across Saudi Arabia (Riyadh, Khobar, Jubail, Jeddah, Yanbu).
- Slogan: Where security meets peace of mind.
- Stats: 92+ Projects Delivered. 52.53% Local Content.
- Services: 
  1. Integrated Security Systems (turnkey physical & cyber security, HCIS/SAIS compliance).
  2. Security Risk Assessment (ANSI/API 780, ANSI/ASIS/RIMS RA.1-2015).
  3. Design & Engineering (Concept of Design to Issued for Construction (IFC) packages).
  4. Operational Readiness (FAT, SAT, commissioning).
  5. Nuclear & Radioactive (specialized physical security design aligned with IAEA and NRRC).
  6. Policies & Governance (Security CONOPS, SOPs, crisis management).
- Clients include: Saudi Aramco, NEOM, National Water Company, Saudi Electricity Company, SAMA (Saudi Central Bank), Ma'aden, SATORP, MARAFIQ, ACWA Power, Amazon, Ritz-Carlton, ROSHN, Red Sea Global, Royal Commission for Jubail & Yanbu, Dammam Port, and more.
- Core Values: Honesty & Integrity, Client Excellence, Leadership & Prudence, Innovation & Change.
- The 4-stage framework:
  1. We study your site (Threats, assets, vulnerabilities).
  2. We design the protection (Drawings, specs, equipment schedules).
  3. We engineer the systems (CCTV, access control, intrusion detection, barriers).
  4. We hand it over ready (Testing, commissioning, training, authority approval).
`;

type Message = {
  role: "user" | "model";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hello! I am the VISO assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_SAMBANOVA_API_KEY;

    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "API Key is missing. Please add VITE_SAMBANOVA_API_KEY to your .env.local file.",
        },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: window.location.origin + "/api/sambanova/v1",
        dangerouslyAllowBrowser: true
      });

      const apiMessages: any[] = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
          .filter((m) => m.role !== "model" || !m.text.includes("API Key is missing"))
          .map((msg) => ({
            role: msg.role === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        { role: "user", content: userText }
      ];

      const response = await openai.chat.completions.create({
        model: "Meta-Llama-3.3-70B-Instruct",
        messages: apiMessages,
        temperature: 0.1,
        top_p: 0.1
      });

      const reply = response.choices[0].message.content || "";

      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      let errorMsg = "An unknown error occurred.";
      if (error instanceof Error) {
        errorMsg = error.message;
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
        errorMsg = String((error as any).message);
      } else {
        errorMsg = String(error);
      }
      
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `I'm sorry, I encountered an error: **${errorMsg}**\n\nIf this says "401" or "Invalid API Key", please check your .env.local file. If it says 404, the model name might be incorrect.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[var(--gold-deep)] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold leading-tight">VISO Assistant</h3>
                  <p className="text-xs text-white/80">Ask me anything about our services</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-white/20"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-[var(--cream)]/30">
              <div className="flex flex-col gap-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[var(--ink)] text-white rounded-tr-sm"
                          : "bg-white border border-[var(--border)] text-[var(--foreground)] rounded-tl-sm shadow-sm"
                      }`}
                    >
                      {msg.role === "user" ? (
                        msg.text
                      ) : (
                        <div className="prose prose-sm prose-p:my-1 prose-ul:my-1 prose-li:my-0.5">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tl-sm border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--muted-foreground)] shadow-sm">
                      <Loader2 size={16} className="animate-spin text-[var(--gold-deep)]" />
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-[var(--border)] bg-white p-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="w-full rounded-full border border-[var(--border)] bg-[var(--cream)]/50 py-3 pl-4 pr-12 text-sm focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold-deep)] text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold-deep)] text-white shadow-lg shadow-[var(--gold-deep)]/30 transition-colors hover:bg-[#c48821]"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
