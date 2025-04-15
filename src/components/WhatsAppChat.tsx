'use client';

import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = '+12345678901'; // Replace with your actual WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      setMessage('');
      closeChat();
    }
  };

  const openChat = () => {
    setIsAnimating(true);
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsAnimating(true);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleAnimationEnd = () => {
      setIsAnimating(false);
    };

    const chatElement = chatRef.current;
    if (chatElement) {
      chatElement.addEventListener('transitionend', handleAnimationEnd);
      return () => {
        chatElement.removeEventListener('transitionend', handleAnimationEnd);
      };
    }
  }, []);

  return (
    <>
      {/* WhatsApp Chat Button */}
      <m.button
        onClick={openChat}
        className="fixed z-50 bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Open WhatsApp Chat"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.649107 16.0286 1.6875 17.8179L0 24L6.30535 22.3446C8.02499 23.2929 9.98571 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2107 21.7875 8.46428 21.3054 6.93749 20.3893L6.58928 20.1804L2.85535 21.1446L3.83571 17.4964L3.60535 17.1321C2.59821 15.5518 2.06785 13.7518 2.06785 11.8929C2.06785 6.44464 6.54643 1.99821 12 1.99821C14.6411 1.99821 17.1215 3.0375 19.0018 4.92321C20.8821 6.80893 21.9375 9.28928 21.9321 11.8982C21.9321 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1161 14.2339 15.6589 13.5161 15.3804 13.4196C15.1018 13.3179 14.8982 13.2696 14.6946 13.575C14.4911 13.8804 13.9232 14.5446 13.7411 14.7536C13.5643 14.9571 13.3821 14.9839 13.0821 14.8286C11.4054 14.0036 10.2804 13.3607 9.15 11.4857C8.85535 10.9875 9.45 11.025 10.0018 9.92143C10.0982 9.71786 10.05 9.54107 9.97499 9.39107C9.89999 9.24107 9.31606 7.78393 9.06428 7.17857C8.81785 6.59464 8.56607 6.67499 8.37856 6.66428C8.20178 6.65357 8.00356 6.65357 7.8 6.65357C7.59642 6.65357 7.26964 6.72857 7.01785 7.02857C6.75535 7.33393 5.98928 8.05178 5.98928 9.50892C5.98928 10.9661 7.04464 12.375 7.18928 12.5786C7.33928 12.7821 9.30535 15.8036 12.3054 17.0893C14.1643 17.9143 14.8929 17.9786 15.8143 17.8179C16.3768 17.7214 17.5661 17.0893 17.8179 16.3821C18.0696 15.675 18.0696 15.0696 17.9893 14.9357C17.9143 14.7911 17.7161 14.7 17.4161 14.3839Z" />
        </svg>
      </m.button>

      {/* Chat Popup - using CSS transitions instead of Framer Motion */}
      <div 
        ref={chatRef}
        className={`fixed z-50 bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
        }`}
        style={{ transformOrigin: 'bottom right' }}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">ClaimMasters Support</h3>
              <div className="flex items-center gap-1 text-xs opacity-90">
                <span className="inline-block w-2 h-2 bg-green-300 rounded-full"></span>
                <span>Typically replies instantly</span>
              </div>
            </div>
          </div>
          <button 
            onClick={closeChat}
            className="text-white hover:bg-white/20 rounded-full p-1.5 transition-transform duration-200 hover:scale-110 active:scale-90"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div 
          className="bg-[#E5DDD5] p-3 h-72 overflow-y-auto" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bdbdbd' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '30%',
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[85%] relative">
              <p className="text-sm">Hello! 👋 How can we help you today with dental billing services?</p>
              <span className="text-xs text-gray-500 block mt-1">ClaimMasters Support</span>
              <div className="absolute left-0 bottom-1 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white"></div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[85%] relative">
              <p className="text-sm">Feel free to ask any questions about our services or schedule a consultation!</p>
              <span className="text-xs text-gray-500 block mt-1">ClaimMasters Support</span>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex gap-2 bg-white">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            required
          />
          <button 
            type="submit"
            className={`bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-2.5 hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 ${!message.trim() ? 'opacity-70 cursor-not-allowed' : ''}`}
            aria-label="Send message"
            disabled={!message.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
        
        {/* Footer */}
        <div className="px-3 py-2 bg-gray-50 text-center text-xs text-gray-500 border-t border-gray-100">
          Powered by ClaimMasters Dental Billing
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat; 