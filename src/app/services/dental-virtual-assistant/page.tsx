import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dental Virtual Assistant Services - ClaimMasters Dental Billing',
  description: 'Virtual administrative support for dental practices. Our dental virtual assistants handle scheduling, patient communication, and administrative tasks efficiently.',
};

export default function DentalVirtualAssistant() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Dental Virtual Assistant</h1>
            <p className="text-lg mb-8">
              Streamline your front office operations with our specialized virtual administrative support
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
                <h2 className="text-3xl font-bold mb-6">Comprehensive Virtual Support for Dental Practices</h2>
                <p className="text-lg mb-6">
                  Running a successful dental practice requires managing both clinical care and complex administrative tasks. 
                  Front office responsibilities—from patient scheduling to insurance verification—demand significant time and 
                  attention that could be better focused on patient care.
                </p>
                
                <p className="mb-8">
                  Our Dental Virtual Assistant (DVA) service provides you with dedicated, professionally trained administrative 
                  support without the overhead costs of additional in-office staff. Your virtual assistant becomes an extension 
                  of your team, handling essential administrative tasks remotely while integrating seamlessly with your practice.
                </p>

                <h2 className="text-3xl font-bold mb-6">Tasks Your Dental Virtual Assistant Can Handle</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Patient Communication</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Appointment confirmation calls & texts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Patient recall management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>New patient welcome calls</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Post-treatment follow-up</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Schedule Management</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Appointment scheduling & rescheduling</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Cancellation management & filling open slots</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Provider calendar optimization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Hygiene recare program management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Insurance Coordination</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Insurance verification</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Benefit explanation to patients</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Pre-authorization submissions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Coordination with billing team</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Administrative Support</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>New patient form management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Patient records organization</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Email management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Internal communication support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">How Our Dental Virtual Assistant Service Works</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Needs Assessment</h3>
                        <p>
                          We begin with a thorough evaluation of your practice's administrative needs, workflow, and software systems to determine the optimal support strategy.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Assistant Selection & Training</h3>
                        <p>
                          We match you with a virtual assistant who has experience in dental administrative tasks and provide additional training specific to your practice's procedures and systems.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Secure Integration</h3>
                        <p>
                          We establish secure remote access to your practice management software and communication systems in compliance with all privacy and security requirements.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Implementation & Monitoring</h3>
                        <p>
                          Your virtual assistant begins handling assigned tasks according to your priorities, with regular supervision and quality assurance checks from our management team.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Ongoing Optimization</h3>
                        <p>
                          We continuously refine processes based on performance metrics and your feedback to maximize efficiency and effectiveness of the administrative support.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mb-6">Benefits of Our Dental Virtual Assistant Service</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
                    <p>
                      Save 40-60% compared to traditional in-office staff with no expenses for benefits, office space, equipment, or downtime during slow periods.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Increased Productivity</h3>
                    <p>
                      Your in-office team can focus on patient care and high-value tasks while routine administrative work is handled efficiently by your virtual assistant.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Scheduling Optimization</h3>
                    <p>
                      Reduce no-shows by up to 30% through consistent confirmation protocols and quickly fill canceled appointments to maximize production.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Scalable Support</h3>
                    <p>
                      Easily adjust your virtual assistant's hours and responsibilities as your practice grows or your needs change without the complexities of hiring or layoffs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="md:col-span-1">
              {/* CTA Card */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Streamline Your Practice?</h3>
                <p className="mb-6 text-gray-600">
                  Schedule a free consultation to learn how our virtual assistants can support your practice.
                </p>
                <Link 
                  href="/contact" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Book Free Consultation
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
                  "Our virtual assistant has been a game-changer for our practice. She handles all our appointment confirmations, insurance verifications, and recall management, which has reduced our no-show rate by 35% and freed up our front desk team to focus on patient experience."
                </p>
                <div>
                  <p className="font-semibold">Dr. Emily Roberts</p>
                  <p className="text-sm text-gray-500">Roberts Dental Care</p>
                </div>
              </div>
              
              {/* Productivity Stats */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Productivity Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Reduced No-Show Rate</span>
                      <span className="font-bold text-green-600">-30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Front Desk Time Savings</span>
                      <span className="font-bold text-green-600">+25 hrs/week</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Recall Effectiveness</span>
                      <span className="font-bold text-green-600">+45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Services */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/insurance-verification" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      Insurance Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/insurance-billing" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      Insurance Billing & AR
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
              <h3 className="text-xl font-semibold mb-2">How do virtual assistants securely access our practice management system?</h3>
              <p className="text-gray-700">
                We implement HIPAA-compliant secure access solutions tailored to your practice management software. This typically involves encrypted remote access tools with strict authentication protocols, audit trails, and activity logging. All our virtual assistants undergo comprehensive HIPAA training and sign business associate agreements. We can work with your IT team or provider to establish the most secure access method for your specific systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What hours can our virtual assistant work?</h3>
              <p className="text-gray-700">
                Our virtual assistants can work during your regular office hours, extended hours, or a customized schedule based on your specific needs. Many practices benefit from having virtual support during peak call times or for after-hours appointment scheduling. We offer flexible scheduling options, including full-time (40 hours per week), part-time (20-30 hours per week), or task-based arrangements. Your dedicated assistant's schedule will be established during the implementation process and can be adjusted as your needs evolve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What happens if our regular virtual assistant is unavailable?</h3>
              <p className="text-gray-700">
                We have a comprehensive backup system in place to ensure continuity of service. Each primary virtual assistant has a designated backup who is cross-trained on your practice's specific procedures and systems. In case of planned time off or unexpected absence, the backup assistant steps in seamlessly. Additionally, our management team provides oversight to ensure all tasks are completed according to your standards, even during transition periods. This redundancy ensures your practice operations continue without interruption.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can virtual assistants handle patient phone calls?</h3>
              <p className="text-gray-700">
                Yes, our virtual assistants can manage incoming and outgoing patient calls using VoIP technology that integrates with your practice's phone system. They can handle appointment scheduling, confirmations, recalls, and general inquiries just as an in-office receptionist would. Calls can be routed based on your preferences, and our assistants are trained to represent your practice professionally while following your communication protocols. Many practices find that having virtual assistants handle routine calls significantly reduces the workload for in-office staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Enhance Your Practice Efficiency Today</h2>
          <p className="text-lg mb-8">
            Let our dental virtual assistants handle your administrative tasks so you can focus on patient care.
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