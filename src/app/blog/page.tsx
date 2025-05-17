import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WavyText from '../../components/WavyText';
import ScrollRevealText from '../../components/ScrollRevealText';
import MagnifyingText from '../../components/MagnifyingText';
import AnimatedCard from '../../components/AnimatedCard';
import blogPosts from '../../lib/blogPosts';

export const metadata = {
  title: 'Blog - ClaimMasters Dental Billing',
  description: 'Latest articles, insights and updates on dental billing, insurance verification, credentialing, and more from ClaimMasters.',
};

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
          <div className="max-w-3xl mx-0 text-left text-white">
            <WavyText 
              text="Blog"
              className="text-4xl md:text-5xl font-bold mb-6 text-left"
              textColor="#fff"
              fontSize="3rem"
              waveHeight={25}
              duration={1.2}
            />
            <ScrollRevealText
              text="Take a break and read all about it"
              className="text-lg mb-8 text-left"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
            <div className="mt-8 flex justify-start">
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
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full"
                    style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-10"></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read More
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