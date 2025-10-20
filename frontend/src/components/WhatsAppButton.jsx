import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/mock';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    const whatsappMessage = message || "Hi Arpan, I'm interested in discussing a project";
    const whatsappUrl = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-[#1F1F23] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up mb-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00D4FF] to-[#39FF14] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-white">
                AG
              </div>
              <div>
                <p className="font-semibold text-black">Arpan Gohe</p>
                <p className="text-xs text-black/80">Typically replies within 2 hours</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl p-3">
              <p className="text-sm text-gray-300">
                Hi there! 👋
                <br /><br />
                I'm excited to hear about your project. How can I help you today?
              </p>
            </div>

            <div className="space-y-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-[#0F0F0F] border border-white/20 rounded-xl p-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF] resize-none"
                rows={3}
              />
              <button
                onClick={handleSendMessage}
                className="w-full bg-gradient-to-r from-[#00D4FF] to-[#39FF14] hover:from-[#00B8E6] hover:to-[#32DD12] text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Send on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
        
        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
