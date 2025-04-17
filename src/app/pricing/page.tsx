import React from 'react';
import Link from 'next/link';
import RotatingText from '../../components/RotatingText';
import ScrollRevealText from '../../components/ScrollRevealText';
import MagnifyingText from '../../components/MagnifyingText';
import WavyText from '../../components/WavyText';
import AnimatedCard from '../../components/AnimatedCard';

export const metadata = {
  title: 'Pricing & Plans - ClaimMasters Dental Billing',
  description: 'Explore our customized and affordable dental billing service plans. Find the perfect package for your dental practice.',
};

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <MagnifyingText 
              text="Pricing & Plans"
              className="text-4xl md:text-5xl font-bold mb-6 text-blue-900"
              fontSize="3rem"
              magnifyScale={1.4}
              hoverColor="#3B82F6"
            />
            <ScrollRevealText
              text="Customized and affordable solutions designed to fit your practice's unique needs"
              className="text-lg mb-8"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Transparent & Flexible Pricing
            </h2>
            <p className="text-lg text-gray-600">
              We understand that every dental practice has unique needs and challenges.
              That&apos;s why we offer tailored packages that scale with your practice size and requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <AnimatedCard 
              className="border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
              delay={0.1}
              hoverEffect={true}
            >
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">For small practices</p>
                <div className="text-3xl font-bold">$499<span className="text-lg font-normal text-gray-600">/month</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Insurance Verification (up to 50/month)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic Insurance Billing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Monthly AR Reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Email & Phone Support</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Virtual Assistant Services</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
                <Link href="/contact" className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors">
                  Get Started
                </Link>
              </div>
            </AnimatedCard>
            
            {/* Professional Plan - Highlighted */}
            <AnimatedCard 
              className="border-2 border-blue-500 rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 relative"
              delay={0.2}
              hoverEffect={true}
            >
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
                POPULAR
              </div>
              <div className="bg-blue-50 p-6 text-center border-b">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">For growing practices</p>
                <div className="text-3xl font-bold">$899<span className="text-lg font-normal text-gray-600">/month</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Insurance Verification (up to 150/month)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full Insurance Billing & Claims Follow-up</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Weekly AR Reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>10 Hours Virtual Assistant Services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
                <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                  Get Started
                </Link>
              </div>
            </AnimatedCard>
            
            {/* Enterprise Plan */}
            <AnimatedCard 
              className="border border-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
              delay={0.3}
              hoverEffect={true}
            >
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For multi-provider practices</p>
                <div className="text-3xl font-bold">Custom<span className="text-lg font-normal text-gray-600"></span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited Insurance Verifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Comprehensive Billing & Collections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom AR & Financial Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>24/7 VIP Support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited Virtual Assistant Hours</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Senior Account Manager Team</span>
                  </li>
                </ul>
                <Link href="/contact" className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors">
                  Contact Us
                </Link>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Specialized Billing Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We understand that every dental practice is unique. Let's talk about your specific requirements and build a custom solution for you.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 border-r border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-blue-700">Flexible Solutions That Scale With Your Practice</h3>
                  <p className="mb-6 text-gray-600">
                    Whether you're a solo practitioner or a multi-location DSO, we can customize our services to meet your unique needs:
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Volume-based pricing for practices of any size</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Mix-and-match service components based on your needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Performance-based arrangements for practices focused on growth</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Specialized focus on your practice's specific pain points</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700">Schedule a Custom Consultation</h3>
                  <p className="mb-6 text-gray-600">
                    Speak with our team to discuss your specific practice needs and get a tailored quote that works for your budget.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors text-center shadow-sm hover:shadow"
                  >
                    Get a Free Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do you require a long-term contract?</h3>
              <p className="text-gray-700">
                No, all of our services are offered on a month-to-month basis. We&apos;re confident in the value we provide, so we don&apos;t lock you into long-term contracts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-700">
                Yes, you can easily upgrade or downgrade your plan at any time to accommodate changes in your practice&apos;s needs or budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Are there any setup fees?</h3>
              <p className="text-gray-700">
                For our Starter and Professional plans, there&apos;s a one-time setup fee of $250 to cover onboarding and system integration. This fee is waived for annual subscriptions and for Enterprise plans.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What practice management systems do you work with?</h3>
              <p className="text-gray-700">
                We integrate with all major dental practice management software including Dentrix, Eaglesoft, Open Dental, Curve Dental, and many others. If you use a different system, contact us to confirm compatibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Dental Practice&apos;s Revenue?</h2>
          <p className="text-lg mb-8">
            Get started today with our risk-free trial and see how ClaimMasters Dental Billing can transform your practice&apos;s financial performance.
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