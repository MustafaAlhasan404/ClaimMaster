import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WavyText from '../../../components/WavyText';
import ScrollRevealText from '../../../components/ScrollRevealText';
import AnimatedCard from '../../../components/AnimatedCard';
import { Metadata } from 'next';
import blogPosts from '../../../lib/blogPosts';

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
            backgroundImage: `url('${post.image}')`,
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
              {/* Removed category tag */}
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
              dangerouslySetInnerHTML={{ __html: (post as any).content || post.excerpt || '<p>No content available for this post.</p>' }}
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