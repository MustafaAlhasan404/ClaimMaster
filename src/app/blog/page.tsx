import React from 'react';
import Link from 'next/link';
import WavyText from '../../components/WavyText';
import ScrollRevealText from '../../components/ScrollRevealText';
import RotatingText from '../../components/RotatingText';
import MagnifyingText from '../../components/MagnifyingText';
import AnimatedCard from '../../components/AnimatedCard';

export const metadata = {
  title: 'Blog - ClaimMasters Dental Billing',
  description: 'Read our latest articles on dental billing, insurance verification, and practice management.',
};

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Ways to Reduce Dental Insurance Claim Denials',
    excerpt: 'Learn the most effective strategies to reduce claim denials and improve your reimbursement rates for your dental practice.',
    date: 'April 10, 2023',
    author: 'Sarah Johnson',
    category: 'Insurance Billing',
    image: '/blog-1.jpg', // This would be replaced with actual image paths
    slug: '/blog/reduce-dental-insurance-claim-denials',
  },
  {
    id: 2,
    title: 'How to Streamline Your Insurance Verification Process',
    excerpt: 'Effective insurance verification is critical for maximizing collections. Discover how to optimize this process in your dental practice.',
    date: 'March 22, 2023',
    author: 'Michael Davis',
    category: 'Insurance Verification',
    image: '/blog-2.jpg',
    slug: '/blog/streamline-insurance-verification-process',
  },
  {
    id: 3,
    title: 'Understanding Dental Insurance Coordination of Benefits',
    excerpt: 'Coordinating benefits can be complex. This guide helps dental practices navigate the coordination of benefits process effectively.',
    date: 'February 15, 2023',
    author: 'Jennifer Smith',
    category: 'Insurance Billing',
    image: '/blog-3.jpg',
    slug: '/blog/understanding-dental-insurance-coordination-benefits',
  },
  {
    id: 4,
    title: 'The Benefits of Outsourcing Your Dental Billing',
    excerpt: 'Explore the advantages of partnering with a specialized dental billing company and how it can impact your practice\'s bottom line.',
    date: 'January 30, 2023',
    author: 'David Wilson',
    category: 'Practice Management',
    image: '/blog-4.jpg',
    slug: '/blog/benefits-outsourcing-dental-billing',
  },
  {
    id: 5,
    title: 'Implementing Effective AR Management in Your Dental Practice',
    excerpt: 'Learn proven strategies to manage your accounts receivable efficiently and improve cash flow in your dental practice.',
    date: 'December 12, 2022',
    author: 'Emily Rodriguez',
    category: 'Accounts Receivable',
    image: '/blog-5.jpg',
    slug: '/blog/implementing-effective-ar-management',
  },
  {
    id: 6,
    title: 'How Virtual Dental Assistants Can Transform Your Practice',
    excerpt: 'Discover how virtual dental assistants can help you save time, reduce overhead, and improve patient communication.',
    date: 'November 5, 2022',
    author: 'Robert Thompson',
    category: 'Virtual Assistants',
    image: '/blog-6.jpg',
    slug: '/blog/virtual-dental-assistants-transform-practice',
  },
];

// Categories for filter
const categories = [
  'All',
  'Insurance Billing',
  'Insurance Verification',
  'Practice Management',
  'Accounts Receivable',
  'Virtual Assistants',
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <MagnifyingText 
              text="Dental Billing Insights"
              className="text-4xl md:text-5xl font-bold mb-6 text-blue-900"
              fontSize="3rem"
              magnifyScale={1.3}
              hoverColor="#3B82F6"
            />
            <ScrollRevealText
              text="Expert advice and industry updates to help your dental practice thrive"
              className="text-lg mb-8"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <AnimatedCard 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
                    delay={0.1 * (index + 1)}
                    hoverEffect={true}
                  >
                    <div className="h-48 bg-gray-300 relative">
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200">
                        [Blog Image]
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-blue-600">{post.category}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3">
                        <Link href={post.slug} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {post.author}</span>
                        <Link href={post.slug} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                          Read More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-md">
                    Previous
                  </a>
                  <a href="#" className="px-4 py-2 bg-blue-600 border border-blue-600 text-sm font-medium text-white hover:bg-blue-700">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    3
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-md">
                    Next
                  </a>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              {/* Search Bar */}
              <AnimatedCard className="bg-white p-6 rounded-lg shadow-md mb-8" delay={0.1}>
                <WavyText 
                  text="Search Articles"
                  className="text-lg font-semibold mb-4"
                  textColor="#1E40AF"
                  fontSize="1.25rem"
                  waveHeight={10}
                  duration={1}
                />
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </AnimatedCard>

              {/* Categories */}
              <AnimatedCard className="bg-white p-6 rounded-lg shadow-md mb-8" delay={0.2}>
                <RotatingText
                  texts={["Categories", "Topics", "Subjects"]}
                  className="text-lg font-semibold mb-4"
                  duration={0.6}
                  autoRotateInterval={3000}
                  fontSize="1.25rem"
                  showControls={false}
                />
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block py-1 px-2 rounded-md ${category === 'All' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>

              {/* Recent Posts */}
              <AnimatedCard className="bg-white p-6 rounded-lg shadow-md mb-8" delay={0.3}>
                <ScrollRevealText
                  text="Recent Posts"
                  className="text-lg font-semibold mb-4"
                  fromDirection="left"
                  showUnderline={true}
                  fontSize="1.25rem"
                />
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <Link href={post.slug} className="hover:text-blue-600">
                        <h4 className="font-medium mb-1">{post.title}</h4>
                        <div className="flex text-sm text-gray-500">
                          <span>{post.date}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>

              {/* Newsletter Signup */}
              <AnimatedCard className="bg-blue-50 p-6 rounded-lg shadow-md" delay={0.4}>
                <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest dental billing tips and industry updates delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <RotatingText
            texts={[
              "Have Questions About Dental Billing?",
              "Need Expert Dental Billing Advice?",
              "Want to Optimize Your Practice Revenue?"
            ]}
            className="text-3xl font-bold mb-6"
            duration={0.8}
            autoRotateInterval={4000}
            fontSize="2.25rem"
          />
          <p className="text-lg mb-8">
            Our team of dental billing experts is ready to help your practice succeed. 
            Schedule a free consultation today.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 