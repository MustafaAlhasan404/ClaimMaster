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
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <WavyText 
              text="Contact Us"
              className="text-4xl md:text-5xl font-bold mb-6"
              textColor="#1E40AF"
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
                    <p className="text-gray-600">
                      2025 Guadalupe Street, Suite 260<br />
                      Austin, Texas 78705
                    </p>
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
                    <a href="mailto:Info@yourclaimmasters.com" className="text-blue-600 hover:underline">
                      Info@yourclaimmasters.com
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
                    <a href="tel:+17379002401" className="text-blue-600 hover:underline">
                      +17079934501
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
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
            showUnderline={true}
            underlineColor="#3B82F6"
          />
          <div className="aspect-[16/9] max-w-4xl mx-auto bg-gray-200 rounded-lg">
            {/* Replace with actual map integration */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              [Google Map would be embedded here]
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <RotatingText
            texts={[
              "Frequently Asked Questions",
              "Common Questions",
              "How Can We Help?",
              "Got Questions?"
            ]}
            className="text-3xl font-bold mb-12 text-center"
            duration={0.8}
            autoRotateInterval={4000}
            fontSize="2.25rem"
          />
          
          <div className="space-y-6">
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={0.1}>
              <h3 className="text-xl font-semibold mb-2">How quickly can you start working with our practice?</h3>
              <p className="text-gray-700">
                We can typically begin working with new clients within 1-2 weeks of signing up. Our onboarding process is designed to be efficient while ensuring we understand your specific needs and systems.
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={0.2}>
              <h3 className="text-xl font-semibold mb-2">Do you work with all dental practice management software?</h3>
              <p className="text-gray-700">
                Yes, we have experience with all major dental practice management software including Dentrix, Eaglesoft, Open Dental, Curve Dental, and more. Our team is trained to adapt to your existing systems.
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={0.3}>
              <h3 className="text-xl font-semibold mb-2">What makes ClaimMasters Dental Billing different from other billing services?</h3>
              <p className="text-gray-700">
                Our focus is exclusively on dental practices, giving us specialized expertise in dental billing nuances. We also offer customized solutions rather than one-size-fits-all packages, and our team provides personalized attention to each client.
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={0.4}>
              <h3 className="text-xl font-semibold mb-2">How will we communicate with your team?</h3>
              <p className="text-gray-700">
                We provide multiple communication channels including a dedicated account manager, regular check-in calls, email support, and secure messaging. We adapt to your preferred communication style.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
} 