'use client';

import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

interface CallButtonProps {
  phoneNumber: string;
}

export default function CallButton({ phoneNumber }: CallButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 rounded-lg shadow-lg bg-white overflow-hidden transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-white">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Call Us</h3>
              <button
                onClick={togglePopup}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close call popup"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-4">
            <p className="mb-4">Need immediate assistance? Call us directly!</p>
            <button
              onClick={handleCall}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-800 transition-colors"
              aria-label="Call now"
            >
              <FaPhone /> Call Now
            </button>
          </div>
        </div>
      )}
      <button
        onClick={togglePopup}
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle call button"
      >
        <FaPhone size={24} />
      </button>
    </div>
  );
} 