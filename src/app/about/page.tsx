import React from 'react';

export const metadata = {
  title: 'About Us - ClaimMasters Dental Billing',
  description: 'Learn more about ClaimMasters Dental Billing, your trusted dental billing company with over 10 years of experience in the industry.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">About ClaimMasters Dental Billing</h1>
            <p className="text-lg mb-8">
              Your trusted partner in dental practice financial management since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg mb-8 text-gray-700">
              At ClaimMasters Dental Billing, our mission is to empower dental practices to focus on what they do best—delivering exceptional patient care—while we handle the complexity of dental billing, insurance verification, and accounts receivable management.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              With over a decade of experience in the dental industry, we understand the challenges dental practices face with insurance companies, claim denials, and payment collection. Our expert team is dedicated to maximizing your collections and streamlining your financial operations through our comprehensive suite of services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose ClaimMasters Dental Billing?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Industry Expertise</h3>
              </div>
              <p className="text-gray-700">
                Our team consists of dental billing specialists with years of experience handling the specific nuances of dental insurance and billing, ensuring maximum reimbursement rates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Time-Saving Solutions</h3>
              </div>
              <p className="text-gray-700">
                By outsourcing your billing to us, your staff can focus on patient care rather than spending hours on the phone with insurance companies or chasing unpaid claims.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Increased Revenue</h3>
              </div>
              <p className="text-gray-700">
                Our proactive approach to claims and follow-ups typically increases collections by 10-15% for the practices we work with.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Customized Solutions</h3>
              </div>
              <p className="text-gray-700">
                We recognize that each practice is unique, which is why we offer tailored billing solutions to meet your specific needs and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team member 1 - replace with actual team data */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-blue-600">Founder & CEO</p>
              <p className="mt-2 text-gray-600">
                With 15+ years in dental practice management, John founded ClaimMasters Dental Billing to solve the revenue cycle challenges faced by dental practices.
              </p>
            </div>
            
            {/* Team member 2 */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600">Director of Operations</p>
              <p className="mt-2 text-gray-600">
                Sarah ensures our clients receive exceptional service while overseeing all operational aspects of our billing services.
              </p>
            </div>
            
            {/* Team member 3 */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Davis</h3>
              <p className="text-blue-600">Head of Client Success</p>
              <p className="mt-2 text-gray-600">
                Michael works directly with practices to optimize their billing processes and maximize their financial performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Dental Practice&apos;s Billing?</h2>
          <p className="text-lg mb-8">
            Schedule a free consultation to learn how ClaimMasters Dental Billing can help your practice increase collections and reduce administrative burden.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
} 