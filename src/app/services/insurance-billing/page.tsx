import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Insurance Billing & AR Services - ClaimMasters Dental Billing',
  description: 'Professional dental insurance billing and accounts receivable management services to maximize collections, reduce rejections, and improve cash flow.',
};

export default function InsuranceBilling() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Insurance Billing & Accounts Receivable</h1>
            <p className="text-lg mb-8">
              Maximize your collections and improve cash flow with our expert dental insurance billing services
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
                <h2 className="text-3xl font-bold mb-6">Streamlined Insurance Billing & AR Management</h2>
                <p className="text-lg mb-6">
                  Insurance billing is one of the most critical and challenging aspects of running a successful dental practice. 
                  Dealing with insurance companies, managing claim submissions, and following up on unpaid claims can consume 
                  valuable time and resources that could be better spent on patient care.
                </p>
                
                <p className="mb-8">
                  Our comprehensive Insurance Billing & Accounts Receivable services are designed to streamline your billing 
                  process, maximize collections, and improve your practice's overall cash flow.
                </p>

                <h2 className="text-3xl font-bold mb-6">Comprehensive Billing Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Claim Submission</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Accurate and timely electronic claim submission</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Proper coding and documentation review</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Primary and secondary insurance coordination</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Attachment management (X-rays, narratives, etc.)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Claim Follow-Up</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Aggressive claim tracking and status monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Proactive follow-up on unpaid claims</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Denied claim resolution and resubmission</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Insurance payment posting and reconciliation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Accounts Receivable Management</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Aging report management and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Patient balance management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Payment plan setup and monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Collection strategy implementation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Reporting & Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Monthly collection and AR reports</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Insurance performance analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Claim denial trend identification</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Revenue cycle optimization recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Our Insurance Billing Process</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Claims Preparation & Submission</h3>
                        <p>
                          We meticulously review each claim for accuracy, ensuring proper coding, documentation, and necessary attachments before submission to maximize first-pass approval rates.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Claim Tracking & Follow-Up</h3>
                        <p>
                          Our team proactively monitors claim status and follows up on outstanding claims within 14-21 days to prevent delays in payment and address issues promptly.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Denial Management & Resolution</h3>
                        <p>
                          When claims are denied, we promptly analyze the reason, correct any issues, and resubmit or appeal the decision to ensure maximum reimbursement.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Payment Posting & Reconciliation</h3>
                        <p>
                          We accurately post insurance payments, reconcile explanations of benefits (EOBs), and identify any discrepancies between contracted rates and actual payments.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Patient Billing & Collections</h3>
                        <p>
                          Once insurance payments are processed, we manage patient statements, follow up on outstanding balances, and implement effective collection strategies.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mb-6">Benefits of Our Insurance Billing Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Increased Collections</h3>
                    <p>
                      Our clients typically see a 15-20% increase in collections within the first 90 days of service implementation through improved claim submission accuracy and aggressive follow-up.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Reduced Claim Rejections</h3>
                    <p>
                      Our thorough claim review process and coding expertise minimize claim rejections and denials, saving your practice time and resources spent on resubmissions.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Improved Cash Flow</h3>
                    <p>
                      With faster claim processing, proactive follow-up, and efficient AR management, your practice will experience more consistent and predictable cash flow.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Time & Resource Savings</h3>
                    <p>
                      By outsourcing your insurance billing, your staff can focus on patient care and practice growth rather than spending hours on claim submission and follow-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="md:col-span-1">
              {/* CTA Card */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Maximize Your Collections?</h3>
                <p className="mb-6 text-gray-600">
                  Schedule a free AR analysis to see how our insurance billing services can increase your revenue.
                </p>
                <Link 
                  href="/contact" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Schedule Free AR Analysis
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
                  "Since partnering with ClaimMasters Dental Billing, our collections have increased by 22% and our average days in AR have decreased from 45 to just 28 days. Their team is responsive, knowledgeable, and truly acts as an extension of our practice."
                </p>
                <div>
                  <p className="font-semibold">Dr. Jennifer Martinez</p>
                  <p className="text-sm text-gray-500">Martinez Dental Group</p>
                </div>
              </div>
              
              {/* Results Snapshot */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Client Results Snapshot</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Collection Rate Improvement</span>
                      <span className="font-bold text-green-600">+18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Claim Denial Reduction</span>
                      <span className="font-bold text-green-600">-32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Average Days in AR</span>
                      <span className="font-bold text-green-600">-40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
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
                    <Link href="/services/accounting" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      Accounting & Bookkeeping
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
              <h3 className="text-xl font-semibold mb-2">How quickly can you begin submitting claims for our practice?</h3>
              <p className="text-gray-700">
                We can typically begin submitting claims within 5-7 business days of completing the onboarding process. This includes setting up access to your practice management software, reviewing your fee schedules, and establishing electronic claim submission capabilities. Our streamlined implementation process ensures minimal disruption to your cash flow.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Will you work with our existing practice management software?</h3>
              <p className="text-gray-700">
                Yes, our team is proficient in all major dental practice management systems including Dentrix, Eaglesoft, Open Dental, Curve Dental, and many others. We adapt to your existing systems rather than requiring you to change your software or workflows to accommodate our services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do you handle claim rejections and denials?</h3>
              <p className="text-gray-700">
                We take a proactive approach to claim rejections and denials. When a claim is rejected, our team immediately identifies the cause, corrects any errors, and resubmits the claim. For denied claims, we analyze the reason for denial, gather any additional documentation needed, and either resubmit or file an appeal, depending on the situation. We also track denial patterns to help your practice implement changes that prevent future denials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What reporting can we expect to receive about our billing and collections?</h3>
              <p className="text-gray-700">
                We provide comprehensive monthly reports that include key metrics such as total claims submitted, claim approval rates, average reimbursement times, aging accounts receivable, collection ratios, and outstanding claims status. We also offer custom reporting options to track specific metrics that are important to your practice. Our reporting helps you maintain visibility into your practice's financial performance and informs strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Practice's Financial Performance</h2>
          <p className="text-lg mb-8">
            Let our expert billing team handle your insurance claims and AR management so you can focus on providing exceptional patient care.
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