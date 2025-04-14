import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Insurance Verification Services - ClaimMasters Dental Billing',
  description: 'Comprehensive dental insurance verification services to maximize benefits utilization, reduce claim denials, and improve patient financial clarity.',
};

export default function InsuranceVerification() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Insurance Verification</h1>
            <p className="text-lg mb-8">
              Streamline your practice with accurate, timely insurance verification services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content - 2/3 width */}
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6">Accurate Insurance Verification for Dental Practices</h2>
                <p className="text-lg mb-6">
                  Insurance verification is a critical yet time-consuming aspect of dental practice management. 
                  Without thorough verification, practices risk claim denials, unexpected patient balances, 
                  and scheduling inefficiencies that can negatively impact both revenue and patient satisfaction.
                </p>
                
                <p className="mb-8">
                  Our comprehensive insurance verification service eliminates these concerns by ensuring you 
                  have accurate, detailed benefit information before every patient appointment. We handle the 
                  complex, time-consuming verification process so your team can focus on patient care and other 
                  high-value activities.
                </p>

                <h2 className="text-3xl font-bold mb-6">Our Verification Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Basic Verification</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Patient eligibility confirmation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Plan effective dates</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Maximum and deductible amounts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Basic coverage percentages</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Verification</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Detailed coverage breakdown by procedure</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Frequency limitations and waiting periods</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Missing tooth clauses and exclusions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Coordination of benefits verification</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Treatment-Specific Verification</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Pre-treatment estimates</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Verification for specific planned procedures</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Alternative benefit provision checks</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Documentation requirement identification</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Additional Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Patient benefit explanation sheets</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Financial arrangement assistance</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>New patient insurance intake management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Insurance plan optimization recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Our Verification Process</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Schedule Export & Review</h3>
                        <p>
                          We securely access your appointment schedule and extract upcoming patient appointments requiring verification, typically 5-7 days in advance.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Insurance Contact & Verification</h3>
                        <p>
                          Our specialists contact each insurance carrier through phone, portal, or electronic verification systems to gather detailed benefit information.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Benefit Documentation</h3>
                        <p>
                          We document all verified information in a standardized format, including plan details, coverage percentages, limitations, and patient-specific notes.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Practice Management System Update</h3>
                        <p>
                          Verified information is entered directly into your practice management software, ensuring your team has immediate access to accurate benefit details.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Ongoing Monitoring & Updates</h3>
                        <p>
                          We continuously monitor for insurance plan changes and update information as needed, ensuring your practice always has the most current benefit data.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mb-6">Benefits of Our Insurance Verification Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Improved Financial Clarity</h3>
                    <p>
                      Provide patients with accurate estimates of their financial responsibility before treatment, reducing billing surprises and improving patient satisfaction.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Reduced Claim Denials</h3>
                    <p>
                      Proactively identify coverage limitations, exclusions, and requirements to prevent claim denials and maximize insurance reimbursement.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Time & Resource Savings</h3>
                    <p>
                      Free your staff from spending hours on hold with insurance companies, allowing them to focus on patient care and other high-value activities.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Optimized Treatment Planning</h3>
                    <p>
                      Access detailed benefit information to create treatment plans that maximize insurance coverage and minimize patient out-of-pocket expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="md:col-span-1">
              {/* CTA Card */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Streamline Your Verification Process?</h3>
                <p className="mb-6 text-gray-600">
                  Schedule a free consultation to see how our verification services can help your practice.
                </p>
                <Link 
                  href="/contact" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Request Free Consultation
                </Link>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;Outsourcing our insurance verification to ClaimMasters Dental Billing has been a game-changer. Our front desk team saves 15-20 hours weekly, our claim acceptance rate has improved by 23%, and our patients appreciate knowing exactly what they&apos;ll owe before treatment.&quot;
                </p>
                <div>
                  <p className="font-semibold">Dr. Thomas Wilson</p>
                  <p className="text-sm text-gray-500">Wilson Family Dentistry</p>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Verification Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Staff Time Saved</span>
                      <span className="font-bold text-green-600">18 hrs/week</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Claim Rejection Reduction</span>
                      <span className="font-bold text-green-600">-27%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Patient Financial Clarity</span>
                      <span className="font-bold text-green-600">+92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Services */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/insurance-billing" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      Insurance Billing & AR
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/dental-virtual-assistant" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      Dental Virtual Assistant
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/accounting" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      Accounting & Bookkeeping
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How far in advance do you verify patient insurance?</h3>
              <p className="text-gray-700">
                We typically verify insurance 5-7 business days before appointments to ensure ample time for addressing any issues that may arise. This timeframe allows us to resolve any discrepancies, obtain needed documentation, or make schedule adjustments if necessary. For new patients or emergency appointments scheduled with shorter notice, we prioritize these verifications for expedited processing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do you handle insurance plans that require special documentation?</h3>
              <p className="text-gray-700">
                When we identify plans requiring special documentation (such as X-rays, periodontal charting, or narratives), we immediately flag this in your practice management system and notify your team about the specific requirements. We can also help prepare and submit pre-authorization requests when needed, ensuring all required documentation is included to expedite approval.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can you help explain benefits to patients?</h3>
              <p className="text-gray-700">
                Yes, we offer patient benefit explanation services as part of our comprehensive verification package. We can prepare easy-to-understand benefit summaries for your front desk to share with patients, or our team can directly contact patients to explain their coverage details. This service helps patients understand their financial responsibility before treatment, reducing misunderstandings and improving case acceptance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do you integrate with our practice management software?</h3>
              <p className="text-gray-700">
                We can integrate with all major dental practice management software systems, including Dentrix, Eaglesoft, Open Dental, and many others. Our team will securely access your system to extract appointment information and input verification details directly into patient records. This ensures your team has immediate access to up-to-date insurance information without additional data entry or manual transfers between systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Take the Hassle Out of Insurance Verification</h2>
          <p className="text-lg mb-8">
            Let our experts handle your insurance verifications so you can focus on what matters most—providing exceptional dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
            >
              Schedule a Free Consultation
            </Link>
            <Link 
              href="/pricing" 
              className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-4 rounded-md font-medium transition-colors inline-block"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 