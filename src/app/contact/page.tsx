import React from 'react';
import ContactForm from '../../components/ContactForm';
import WavyText from '../../components/WavyText';
import ScrollRevealText from '../../components/ScrollRevealText';
import RotatingText from '../../components/RotatingText';
import MagnifyingText from '../../components/MagnifyingText';
import AnimatedCard from '../../components/AnimatedCard';

export const metadata = {
  title: 'Contact Us - ClaimMasters Dental Billing',
  description: 'Get in touch with ClaimMasters Dental Billing. Contact us for dental billing services, insurance verification, and more.',
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/ContactUs.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(0px)',
          }}
        ></div>
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <WavyText 
              text="Contact Us"
              className="text-4xl md:text-5xl font-bold mb-6"
              textColor="#fff"
              fontSize="3rem"
              waveHeight={25}
              duration={1.2}
            />
            <ScrollRevealText
              text="Have questions about our services? Ready to streamline your dental billing? Get in touch with our team today."
              className="text-lg mb-8"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <AnimatedCard className="p-6 bg-white rounded-lg shadow-md" delay={0.1}>
              <MagnifyingText 
                text="Get In Touch"
                className="text-2xl font-bold mb-6"
                magnifyScale={1.3}
                hoverColor="#3B82F6"
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">San Diego, CA 92019</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:info@claimmastersdentalbilling.com" className="text-blue-600 hover:underline">
                      info@claimmastersdentalbilling.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+17079934501" className="text-blue-600 hover:underline">
                      +17079934501
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM (Pacific Time)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
            
            {/* Contact Form */}
            <AnimatedCard className="bg-gray-50 p-8 rounded-lg shadow-md" delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <ScrollRevealText
            text="Our Location"
            className="text-2xl font-bold mb-8 text-center"
            fromDirection="bottom"
          />
          <div className="aspect-[16/9] max-w-4xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=San+Diego,+CA+92019&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="San Diego, CA 92019 Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
} 