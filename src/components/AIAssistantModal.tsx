import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, X, Send, Bot, User, RefreshCw, 
  ChevronRight, Phone, Award, Shield, Copy, Check 
} from 'lucide-react';
import { ChatMessage } from '../types';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApplyModal: () => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenApplyModal,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: `Hello! I am **ThomasAI**, the Virtual Campus Advisor for **St. Thomas College of Engineering & Technology (STM Kannur)**.

I can help you with:
• **B.Tech Admissions 2026** (KEAM Code: **STM**, Management & NRI Quotas)
• **Engineering Branches** (CSE, AI & DS, ECE, ME, CE, EEE)
• **Merit Scholarships** & Fee Waivers
• **Campus Placements** (TCS, Infosys, Wipro, UST Global, etc.)
• **Bus Transit Routes** across Kannur & Thalassery
• **Hostels & Campus Facilities**

How may I assist your engineering journey today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    "What are the B.Tech admission eligibility & KEAM cutoffs?",
    "Tell me about CSE & AI-DS branch laboratory facilities",
    "What are the college bus routes from Kannur and Thalassery?",
    "How are the campus placements and which MNCs recruit from STM?",
    "What scholarships and fee waivers are available?",
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      // Send chat history for context
      const historyPayload = messages.map(m => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await response.json();
      const replyText = data.reply || "I apologize, but I could not retrieve that information right now. Please contact the admission helpline at +91 490 2401700.";

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        role: 'model',
        text: `Thank you for your interest in St. Thomas College of Engineering (STM Kannur)! For immediate inquiries regarding B.Tech admissions, KEAM guidance, or fee structures, please call our Admission Cell at **+91 490 2401700** or email **admission@stthomaskannur.ac.in**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: `Conversation cleared. How can I help you regarding St. Thomas College of Engineering (STM Kannur)?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[90vh] sm:h-[80vh] max-h-[750px]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-blue-800/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  ThomasAI
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold">
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Virtual Campus Advisor • STM Kannur (KEAM: STM)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={handleClear}
              title="Reset Chat"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Message Scrollable View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50">
          {messages.map((msg) => {
            const isAI = msg.role === 'model';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAI ? 'justify-start' : 'justify-end'}`}
              >
                {isAI && (
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4 text-amber-400" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                  isAI
                    ? 'bg-white text-slate-800 border border-slate-200'
                    : 'bg-blue-900 text-white font-medium'
                }`}>
                  <div className="whitespace-pre-wrap space-y-1">
                    {msg.text.split('\n').map((line, idx) => {
                      if (line.startsWith('• ') || line.startsWith('- ')) {
                        return <div key={idx} className="pl-2 font-medium">• {line.slice(2)}</div>;
                      }
                      return <p key={idx}>{line}</p>;
                    })}
                  </div>

                  <div className={`flex items-center justify-between gap-3 pt-2 mt-2 border-t text-[10px] ${
                    isAI ? 'border-slate-100 text-slate-400' : 'border-blue-800 text-blue-200'
                  }`}>
                    <span>{msg.timestamp}</span>
                    {isAI && (
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="hover:text-slate-700 flex items-center gap-1 transition-colors"
                      >
                        {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {!isAI && (
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-bold text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-amber-400" />
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-75" />
                <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse delay-150" />
                <span className="font-medium text-slate-600 ml-1">ThomasAI is looking up campus records...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Suggested:
            </span>
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 border border-slate-300 text-slate-700 hover:text-blue-900 text-xs font-semibold whitespace-nowrap transition-colors shrink-0 shadow-2xs disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about courses, KEAM, fees, hostels, placements..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-3 sm:px-5 sm:py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask</span>
            </button>
          </form>
          
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
            <span>Powered by Gemini 3.7 AI &amp; STM Knowledge Base</span>
            <button 
              onClick={() => {
                onClose();
                onOpenApplyModal();
              }}
              className="text-blue-900 font-bold hover:underline"
            >
              Apply for 2026 Admissions →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
