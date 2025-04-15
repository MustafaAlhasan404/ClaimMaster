'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    practiceName: '',
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  // Your WhatsApp number - replace with the actual number in international format
  const YOUR_WHATSAPP_NUMBER = "+971505374230"; // Replace with your actual number without any symbols

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendToWhatsApp = () => {
    const { service, practiceName, fullName, phone, email, date, time, message } = formData;
    
    // Format the date and time nicely if they exist
    const formattedDate = date ? new Date(date).toLocaleDateString() : 'Not specified';
    const formattedTime = time || 'Not specified';
    
    // Create the message text
    const whatsappMessage = encodeURIComponent(
      `*New Appointment Request*\n\n` +
      `*Service:* ${service}\n` +
      `*Practice Name:* ${practiceName}\n` +
      `*Full Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Preferred Date:* ${formattedDate}\n` +
      `*Preferred Time:* ${formattedTime}\n` +
      `*Message:* ${message || 'None'}`
    );
    
    // Save to localStorage for reference
    localStorage.setItem('lastAppointment', JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }));
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Call the WhatsApp function
    sendToWhatsApp();
    
    // Show success message
    alert('Thanks for your request! You will now be redirected to WhatsApp to confirm your appointment.');
    
    // Reset the form
    setFormData({
      service: '',
      practiceName: '',
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Choose Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        >
          <option value="">Choose Service</option>
          <option value="Insurance Verification">Insurance Verification</option>
          <option value="Dental Virtual Assistant">Dental Virtual Assistant</option>
          <option value="Insurance Billing & AR">Insurance Billing & AR</option>
          <option value="Dental Accounting & Bookkeeping">Dental Accounting & Bookkeeping</option>
        </select>
      </div>

      <div>
        <label htmlFor="practiceName" className="block text-sm font-medium text-gray-700 mb-1">
          Dental Practice Name
        </label>
        <input
          type="text"
          id="practiceName"
          name="practiceName"
          value={formData.practiceName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Your Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Schedule a Call Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm; 