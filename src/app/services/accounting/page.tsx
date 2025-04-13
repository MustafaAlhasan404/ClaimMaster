import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dental Accounting & Bookkeeping Services - ClaimMasters Dental Billing',
  description: 'Professional dental accounting and bookkeeping services to optimize your practice finances, ensure accurate records, and maximize profitability.',
};

export default function DentalAccounting() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Dental Accounting & Bookkeeping</h1>
            <p className="text-lg mb-8">
              Professional financial management services designed specifically for dental practices
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
                <h2 className="text-3xl font-bold mb-6">Expert Financial Management for Dental Practices</h2>
                <p className="text-lg mb-6">
                  Running a successful dental practice requires not only clinical excellence but also sound financial management. 
                  Many dentists find that managing the financial aspects of their practice takes valuable time away from patient care and strategic growth.
                </p>
                
                <p className="mb-8">
                  Our specialized Dental Accounting & Bookkeeping services provide the financial expertise you need to maintain accurate records, 
                  optimize cash flow, and make informed business decisions that enhance your practice's profitability.
                </p>

                <h2 className="text-3xl font-bold mb-6">Comprehensive Accounting Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Bookkeeping Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Daily transaction recording</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Bank and credit card reconciliation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Accounts payable management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>General ledger maintenance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Financial Reporting</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Monthly profit & loss statements</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Balance sheet preparation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Cash flow analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Key performance indicator tracking</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Tax Preparation & Planning</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Quarterly tax planning</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Tax liability estimation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Year-end tax preparation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Deduction optimization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Payroll Management</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Payroll processing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Employee tax form preparation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Payroll tax filing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Benefits administration support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Our Accounting & Bookkeeping Process</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                        <p>
                          We begin with a comprehensive evaluation of your current financial systems, procedures, and reporting methods to identify strengths and areas for improvement.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">System Setup & Integration</h3>
                        <p>
                          We implement or optimize your accounting software, establishing seamless integration with your practice management system to ensure accurate data flow between systems.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Monthly Financial Management</h3>
                        <p>
                          Our team handles your daily transactions, reconciliations, and financial record-keeping, providing regular reports that give you clear visibility into your practice's financial health.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">Financial Analysis & Strategic Planning</h3>
                        <p>
                          We provide detailed analysis of your financial data, identifying trends and opportunities for growth, cost reduction, and profitability enhancement.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mb-6">Why Choose Our Dental Accounting Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Dental Industry Expertise</h3>
                    <p>
                      Our accountants specialize in dental practice finances, understanding the unique revenue cycles, insurance complexities, and operational expenses specific to dental businesses.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Time & Cost Efficiency</h3>
                    <p>
                      Outsourcing your accounting needs allows you to focus on patient care while reducing costs associated with hiring in-house financial staff and investing in accounting software.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Improved Financial Visibility</h3>
                    <p>
                      Our customized financial dashboards and reports provide real-time insights into your practice's financial health, helping you make data-driven decisions.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Proactive Tax Planning</h3>
                    <p>
                      We help minimize your tax burden through strategic planning and ensure compliance with changing tax laws and regulations specific to dental practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="md:col-span-1">
              {/* CTA Card */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Optimize Your Practice Finances?</h3>
                <p className="mb-6 text-gray-600">
                  Schedule a financial assessment to see how our accounting services can improve your practice's profitability.
                </p>
                <Link 
                  href="/contact" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Schedule a Financial Assessment
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
                  "Switching to ClaimMasters Dental Billing for our accounting needs was one of the best business decisions we've made. Their team helped us streamline our financial processes, identify areas for cost reduction, and implement efficient tax strategies. We've seen a 15% increase in net profitability since partnering with them."
                </p>
                <div>
                  <p className="font-semibold">Dr. Michael Reynolds</p>
                  <p className="text-sm text-gray-500">Reynolds Family Dental</p>
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
              <h3 className="text-xl font-semibold mb-2">How do you coordinate with my existing accounting software?</h3>
              <p className="text-gray-700">
                Our team is proficient in all major accounting platforms including QuickBooks, Xero, and Sage. We can either work within your existing system or recommend and implement a more suitable solution for your practice. We ensure seamless integration with your practice management software to eliminate manual data entry and reduce errors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Will I still have access to my financial information?</h3>
              <p className="text-gray-700">
                Absolutely! We believe in complete transparency. You'll maintain full access to your financial system and data at all times. Additionally, we provide secure, customized dashboards that give you real-time visibility into your practice's key financial metrics and performance indicators.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How often will I receive financial reports?</h3>
              <p className="text-gray-700">
                We provide standard monthly financial reports including profit and loss statements, balance sheets, and cash flow analysis. We also offer customized reporting schedules based on your practice's needs, whether that's weekly cash flow updates, quarterly profitability analysis, or annual financial reviews.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can you help with practice transitions or valuations?</h3>
              <p className="text-gray-700">
                Yes, our team has extensive experience supporting dental practices through transitions, including practice sales, partnerships, and associateships. We can prepare financial documentation for valuations, assist with due diligence, and provide financial guidance to ensure a smooth transition while maximizing value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Take Control of Your Practice Finances</h2>
          <p className="text-lg mb-8">
            Let our dental accounting experts help you optimize your financial operations, reduce tax liability, and increase profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
            >
              Schedule a Financial Assessment
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