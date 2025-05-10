import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WavyText from '../../components/WavyText';
import ScrollRevealText from '../../components/ScrollRevealText';
import MagnifyingText from '../../components/MagnifyingText';
import AnimatedCard from '../../components/AnimatedCard';

export const metadata = {
  title: 'Blog - ClaimMasters Dental Billing',
  description: 'Latest articles, insights and updates on dental billing, insurance verification, credentialing, and more from ClaimMasters.',
};

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to the Dental Billing Process Dentists Must Know',
    excerpt: 'Discover the essential steps and best practices in the dental billing process to maximize your practice revenue.',
    category: 'Dental Billing',
    date: 'August 11, 2023',
    image: '/images/blog/dental-billing-process.jpg',
    slug: 'dental-billing-process-guide'
  },
  {
    id: 2,
    title: 'Dental Procedure Codes',
    excerpt: 'Understanding CDT codes and their importance in dental billing for accurate claim submissions and maximum reimbursement.',
    category: 'Dental Billing',
    date: 'August 7, 2023',
    image: '/images/blog/dental-procedure-codes.jpg',
    slug: 'dental-procedure-codes'
  },
  {
    id: 3,
    title: 'Dental Billing Outsourcing: Everything That Dentists Must Know',
    excerpt: 'Learn how outsourcing your dental billing can save time, reduce overhead, and increase collections for your practice.',
    category: 'Dental Billing',
    date: 'July 26, 2023',
    image: '/images/blog/dental-billing-outsourcing.jpg',
    slug: 'dental-billing-outsourcing'
  },
  {
    id: 4,
    title: 'The Importance of Medical Billing Codes',
    excerpt: 'Why accurate medical billing codes are crucial for dental practices that submit medical claims for dental procedures.',
    category: 'Dental Billing',
    date: 'July 18, 2023',
    image: '/images/blog/medical-billing-codes.jpg',
    slug: 'importance-medical-billing-codes'
  },
  {
    id: 5,
    title: 'What Are the Key Advantages of Venturing Into Medical Billing and Coding?',
    excerpt: 'Explore the benefits of expanding your dental practice to include medical billing for appropriate procedures.',
    category: 'Dental Billing',
    date: 'July 18, 2023',
    image: '/images/blog/medical-billing-advantages.jpg',
    slug: 'advantages-medical-billing-coding'
  }
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/optimized/dental-clinic-bg.jpg')",
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
              text="Blog"
              className="text-4xl md:text-5xl font-bold mb-6"
              textColor="#fff"
              fontSize="3rem"
              waveHeight={25}
              duration={1.2}
            />
            <ScrollRevealText
              text="Take a break and read all about it"
              className="text-lg mb-8"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Talk to our Billing Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <AnimatedCard 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                delay={post.id * 0.1}
              >
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-10"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium z-10">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <MagnifyingText
                    text={post.title}
                    className="text-xl font-bold mb-4 line-clamp-2 h-14"
                    magnifyScale={1.02}
                    hoverColor="#3B82F6"
                  />
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`} 
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
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to streamline your dental billing?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you maximize your practice revenue with our comprehensive dental billing services.
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
    </div>
  );
} 