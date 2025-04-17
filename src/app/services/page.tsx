import React from 'react';
import Link from 'next/link';
import ScrollRevealText from '../../components/ScrollRevealText';
import RotatingText from '../../components/RotatingText';
import WavyText from '../../components/WavyText';
import MagnifyingText from '../../components/MagnifyingText';
import AnimatedCard from '../../components/AnimatedCard';

export const metadata = {
  title: 'Our Services - ClaimMasters Dental Billing',
  description: 'Explore our comprehensive dental billing services including insurance verification, dental virtual assistant, insurance billing and more.',
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <WavyText 
              text="Our Services"
              className="text-4xl md:text-5xl font-bold mb-6"
              textColor="#1E40AF"
              fontSize="3rem"
              waveHeight={30}
              duration={1.2}
            />
            <ScrollRevealText
              text="Comprehensive dental billing solutions to streamline your practice operations and maximize revenue."
              className="text-lg mb-8"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <MagnifyingText 
              text="How We Can Help Your Practice"
              className="text-3xl font-bold mb-6"
              magnifyScale={1.8}
              hoverColor="#3B82F6"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            
            {/* Service 1 */}
            <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden" delay={0.1}>
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Dental Equipment Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Insurance Verification</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive verification of patient benefits before appointments to reduce claim rejections and improve collection rates.
                </p>
                <Link href="/services/insurance-verification" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            {/* Service 2 */}
            <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden" delay={0.2}>
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Virtual Assistant Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Dental Virtual Assistant</h3>
                <p className="text-gray-600 mb-4">
                  Remote administrative support for your practice, handling scheduling, patient communication, and more.
                </p>
                <Link href="/services/dental-virtual-assistant" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            {/* Service 3 */}
            <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden" delay={0.3}>
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Billing Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Insurance Billing and AR</h3>
                <p className="text-gray-600 mb-4">
                  Complete management of your claims process, from submission to follow-up and appeals, ensuring maximum reimbursement.
                </p>
                <Link href="/services/insurance-billing" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            {/* Service 4 */}
            <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden" delay={0.4}>
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Accounting Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Dental Accounting & Bookkeeping</h3>
                <p className="text-gray-600 mb-4">
                  Specialized financial management services for dental practices, including payroll, expense tracking, and financial reporting.
                </p>
                <Link href="/services/accounting" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            {/* Service 5 */}
            <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden" delay={0.5}>
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Scheduling Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Appointment Scheduling</h3>
                <p className="text-gray-600 mb-4">
                  Efficient management of your practice calendar with automated reminders and optimized scheduling to reduce no-shows.
                </p>
                <Link href="/services" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            {/* Service 6 */}
            <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden" delay={0.6}>
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Patient Call Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Inbound and Outbound Calls</h3>
                <p className="text-gray-600 mb-4">
                  Professional phone handling services to ensure every call is answered promptly and professionally, enhancing patient satisfaction.
                </p>
                <Link href="/services" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <RotatingText
            texts={[
              "Ready to Optimize Your Dental Practice?",
              "Maximize Your Practice Revenue",
              "Streamline Your Billing Process",
              "Reduce Administrative Burden"
            ]}
            className="text-3xl font-bold mb-6"
            duration={0.8}
            autoRotateInterval={4000}
            fontSize="2.25rem"
          />
          <p className="text-lg mb-8">
            Contact us today to discuss how our specialized dental billing services can help your practice grow and thrive.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 