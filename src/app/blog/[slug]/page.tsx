import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WavyText from '../../../components/WavyText';
import ScrollRevealText from '../../../components/ScrollRevealText';
import AnimatedCard from '../../../components/AnimatedCard';
import { Metadata } from 'next';

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to the Dental Billing Process Dentists Must Know',
    excerpt: 'Discover the essential steps and best practices in the dental billing process to maximize your practice revenue.',
    content: `
      <p>Dental billing is a complex process that requires attention to detail and knowledge of insurance policies. Here's a comprehensive guide to help dentists navigate the billing process efficiently.</p>
      
      <h2>Understanding the Dental Billing Cycle</h2>
      <p>The dental billing cycle begins when a patient schedules an appointment and ends when the practice receives full payment for services rendered. This cycle typically includes:</p>
      <ul>
        <li>Patient registration and insurance verification</li>
        <li>Treatment planning and cost estimation</li>
        <li>Service delivery and documentation</li>
        <li>Claim submission to insurance carriers</li>
        <li>Payment posting and reconciliation</li>
        <li>Account receivable follow-up</li>
      </ul>
      
      <h2>Best Practices for Efficient Dental Billing</h2>
      <p>To optimize your dental billing process, consider implementing these best practices:</p>
      <ol>
        <li>Verify insurance benefits before appointments</li>
        <li>Collect patient portions at the time of service</li>
        <li>Submit claims daily to improve cash flow</li>
        <li>Use electronic claims submission for faster processing</li>
        <li>Implement a systematic denial management process</li>
        <li>Regularly audit your billing processes for compliance</li>
      </ol>
      
      <h2>Common Dental Billing Challenges and Solutions</h2>
      <p>Dental practices often face challenges in the billing process, including:</p>
      <ul>
        <li>Claim denials due to incorrect information</li>
        <li>Delayed payments from insurance companies</li>
        <li>Coding errors that lead to underpayment</li>
        <li>Patient confusion about their financial responsibility</li>
      </ul>
      
      <p>By implementing a structured billing workflow and staying updated on insurance policies, dental practices can minimize these challenges and improve their revenue cycle management.</p>
    `,
    category: 'Dental Billing',
    date: 'August 11, 2023',
    image: '/images/blog/dental-billing-process.jpg',
    slug: 'dental-billing-process-guide'
  },
  {
    id: 2,
    title: 'Dental Procedure Codes',
    excerpt: 'Understanding CDT codes and their importance in dental billing for accurate claim submissions and maximum reimbursement.',
    content: `
      <p>Dental procedure codes, specifically Current Dental Terminology (CDT) codes, are essential for accurate billing and insurance claims in dental practices.</p>
      
      <h2>What Are CDT Codes?</h2>
      <p>CDT codes are a standardized set of codes used to document dental procedures for insurance claims and record-keeping. The American Dental Association (ADA) maintains and updates these codes regularly.</p>
      
      <h2>Importance of Accurate Coding</h2>
      <p>Using the correct CDT codes ensures:</p>
      <ul>
        <li>Proper reimbursement from insurance companies</li>
        <li>Clear communication about procedures performed</li>
        <li>Compliance with regulations and requirements</li>
        <li>Accurate patient records and treatment history</li>
      </ul>
      
      <h2>Common CDT Code Categories</h2>
      <p>CDT codes are organized by category, including:</p>
      <ul>
        <li>Diagnostic (D0100-D0999)</li>
        <li>Preventive (D1000-D1999)</li>
        <li>Restorative (D2000-D2999)</li>
        <li>Endodontics (D3000-D3999)</li>
        <li>Periodontics (D4000-D4999)</li>
        <li>Prosthodontics (D5000-D5899)</li>
        <li>Implant Services (D6000-D6199)</li>
        <li>Oral Surgery (D7000-D7999)</li>
        <li>Orthodontics (D8000-D8999)</li>
      </ul>
      
      <h2>Best Practices for Dental Procedure Coding</h2>
      <p>To ensure accurate coding and maximize reimbursement:</p>
      <ol>
        <li>Keep updated on annual CDT code changes</li>
        <li>Document thoroughly to support code selection</li>
        <li>Train staff on proper code usage</li>
        <li>Regularly audit coding practices for compliance</li>
        <li>Consider using software with built-in coding validation</li>
      </ol>
    `,
    category: 'Dental Billing',
    date: 'August 7, 2023',
    image: '/images/blog/dental-procedure-codes.jpg',
    slug: 'dental-procedure-codes'
  },
  {
    id: 3,
    title: 'Dental Billing Outsourcing: Everything That Dentists Must Know',
    excerpt: 'Learn how outsourcing your dental billing can save time, reduce overhead, and increase collections for your practice.',
    content: `
      <p>Outsourcing dental billing has become a popular solution for practices looking to optimize their revenue cycle management. Here's what dentists need to know about dental billing outsourcing.</p>
      
      <h2>Benefits of Outsourcing Dental Billing</h2>
      <p>Dental practices can experience numerous advantages from outsourcing their billing operations:</p>
      <ul>
        <li>Reduced overhead costs (office space, technology, HR)</li>
        <li>Access to specialized billing expertise</li>
        <li>Improved cash flow and collection rates</li>
        <li>More time to focus on patient care</li>
        <li>Decreased billing errors and claim denials</li>
        <li>Consistent billing processes regardless of staff turnover</li>
      </ul>
      
      <h2>Selecting the Right Dental Billing Service</h2>
      <p>When choosing a dental billing company, consider these factors:</p>
      <ol>
        <li>Experience specifically in dental billing</li>
        <li>Knowledge of dental insurance companies and policies</li>
        <li>Compatibility with your practice management software</li>
        <li>Security measures to protect patient information</li>
        <li>Communication protocols and regular reporting</li>
        <li>Fee structure and contract terms</li>
      </ol>
      
      <h2>Transition Process</h2>
      <p>A successful transition to outsourced billing typically involves:</p>
      <ul>
        <li>Initial assessment of current billing processes</li>
        <li>Data migration and software integration</li>
        <li>Staff training on new workflows</li>
        <li>Establishing communication channels</li>
        <li>Gradual transition of responsibilities</li>
      </ul>
      
      <h2>Measuring Success</h2>
      <p>Track these key performance indicators to evaluate your outsourced billing:</p>
      <ul>
        <li>Days in accounts receivable</li>
        <li>Clean claim rate</li>
        <li>Collection ratio</li>
        <li>Denial rate and resolution time</li>
        <li>Overall revenue growth</li>
      </ul>
    `,
    category: 'Dental Billing',
    date: 'July 26, 2023',
    image: '/images/blog/dental-billing-outsourcing.jpg',
    slug: 'dental-billing-outsourcing'
  },
  {
    id: 4,
    title: 'The Importance of Medical Billing Codes',
    excerpt: 'Why accurate medical billing codes are crucial for dental practices that submit medical claims for dental procedures.',
    content: `
      <p>Medical billing codes play a significant role in dental practices, especially when dental procedures are covered under medical insurance. Understanding these codes is essential for maximizing reimbursement.</p>
      
      <h2>Medical vs. Dental Billing</h2>
      <p>While dental billing primarily uses CDT codes, medical billing for dental procedures requires:</p>
      <ul>
        <li>ICD-10 diagnosis codes to justify medical necessity</li>
        <li>CPT procedure codes for services rendered</li>
        <li>HCPCS Level II codes for supplies and materials</li>
      </ul>
      
      <h2>When to Bill Medical Insurance for Dental Procedures</h2>
      <p>Medical insurance may cover dental procedures in situations like:</p>
      <ul>
        <li>Trauma or accidents affecting the oral cavity</li>
        <li>Oral surgeries with medical indications</li>
        <li>Treatment of sleep apnea with oral appliances</li>
        <li>TMJ disorders and related treatments</li>
        <li>Dental procedures necessary due to medical conditions</li>
        <li>Oral cancer screenings and treatment</li>
      </ul>
      
      <h2>Best Practices for Medical Billing in Dental Practices</h2>
      <p>To successfully navigate medical billing:</p>
      <ol>
        <li>Understand medical necessity documentation requirements</li>
        <li>Train staff on both medical and dental coding</li>
        <li>Verify medical benefits for applicable procedures</li>
        <li>Document thoroughly to support medical necessity</li>
        <li>Implement proper appeals processes for denied claims</li>
      </ol>
      
      <h2>Benefits of Cross-Coding</h2>
      <p>By properly implementing medical coding in your dental practice:</p>
      <ul>
        <li>Patients can access additional benefits</li>
        <li>The practice can increase revenue through additional reimbursement</li>
        <li>Treatment acceptance may improve due to reduced patient costs</li>
        <li>Comprehensive care becomes more affordable</li>
      </ul>
    `,
    category: 'Dental Billing',
    date: 'July 18, 2023',
    image: '/images/blog/medical-billing-codes.jpg',
    slug: 'importance-medical-billing-codes'
  },
  {
    id: 5,
    title: 'What Are the Key Advantages of Venturing Into Medical Billing and Coding?',
    excerpt: 'Explore the benefits of expanding your dental practice to include medical billing for appropriate procedures.',
    content: `
      <p>Expanding into medical billing and coding offers dental practices significant advantages that can transform their revenue cycle and patient care offerings.</p>
      
      <h2>Financial Benefits</h2>
      <p>Incorporating medical billing into your dental practice can:</p>
      <ul>
        <li>Increase revenue through higher reimbursement rates</li>
        <li>Access additional insurance benefits for patients</li>
        <li>Reduce patient out-of-pocket expenses, improving case acceptance</li>
        <li>Create a competitive advantage in your market</li>
        <li>Diversify revenue streams for greater financial stability</li>
      </ul>
      
      <h2>Clinical Benefits</h2>
      <p>Beyond financial gains, medical billing integration supports:</p>
      <ul>
        <li>More comprehensive treatment planning</li>
        <li>Better collaboration with medical providers</li>
        <li>Enhanced focus on whole-body health connections</li>
        <li>Expanded service offerings like sleep medicine</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>To successfully venture into medical billing:</p>
      <ol>
        <li>Invest in staff training on medical coding and billing</li>
        <li>Update practice management software to support medical claims</li>
        <li>Develop relationships with medical insurance providers</li>
        <li>Create documentation templates that satisfy medical necessity requirements</li>
        <li>Consider partnering with medical billing specialists during transition</li>
      </ol>
      
      <h2>Common Challenges and Solutions</h2>
      <p>Be prepared to address these challenges:</p>
      <table>
        <tr>
          <th>Challenge</th>
          <th>Solution</th>
        </tr>
        <tr>
          <td>Learning curve for staff</td>
          <td>Phased training approach with regular updates</td>
        </tr>
        <tr>
          <td>Medical necessity documentation</td>
          <td>Standardized templates and protocols</td>
        </tr>
        <tr>
          <td>Different claim filing requirements</td>
          <td>Dedicated staff or outsourced specialists</td>
        </tr>
        <tr>
          <td>Managing denials</td>
          <td>Systematic appeals process with tracking</td>
        </tr>
      </table>
    `,
    category: 'Dental Billing',
    date: 'July 18, 2023',
    image: '/images/blog/medical-billing-advantages.jpg',
    slug: 'advantages-medical-billing-coding'
  }
];

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} - ClaimMasters Dental Billing`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/blog" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background image - would use the post's image in a real site */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/blog-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(0px)',
          }}
        ></div>
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <WavyText 
              text={post.title}
              className="text-3xl md:text-4xl font-bold mb-6"
              textColor="#fff"
              fontSize="2rem"
              waveHeight={20}
              duration={1.2}
            />
            <p className="text-gray-300 mb-6">{post.date}</p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <AnimatedCard className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <div key={relatedPost.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <p className="text-gray-500 text-sm mb-2">{relatedPost.date}</p>
                      <h4 className="text-lg font-bold mb-2">{relatedPost.title}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link 
                        href={`/blog/${relatedPost.slug}`} 
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                      >
                        Read more
                        <svg 
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </AnimatedCard>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to optimize your dental billing?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our experts handle your dental billing while you focus on providing exceptional patient care.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex justify-between">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 