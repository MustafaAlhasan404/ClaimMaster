import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import TestimonialCarousel from '../components/TestimonialCarousel';
import AnimatedHeading from '../components/AnimatedHeading';
import StaggeredText from '../components/StaggeredText';
import TypewriterText from '../components/TypewriterText';
import GradientText from '../components/GradientText';
import AnimatedCard from '../components/AnimatedCard';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative flex justify-center overflow-hidden">
        {/* Blurred background image - positioned underneath */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/Job_Image1_74313.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            transform: "scale(1.1)"
          }}
        ></div>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Content container - not blurred */}
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Flexbox layout for outer content - at edges of background */}
          <div className="relative flex flex-col md:flex-row justify-between items-center">
            {/* Left content - positioned at far left edge */}
            <div className="md:w-[30%] z-20 text-white">
              <div className="flex justify-center md:justify-start mb-6">
                <Image
                  src="/images/Asset 1 2.png"
                  alt="ClaimMasters Dental Billing Logo"
                  width={250}
                  height={250}
                  className="h-24 w-auto"
                />
              </div>
              <div className="mb-6">
                <AnimatedHeading
                  text="Where Trust Meets Billing Expertise"
                  className="text-4xl md:text-5xl font-bold text-white"
                  type="chars"
                  delay={0.2}
                />
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg text-white">More approvals, Faster payments and Happier Practice</span>
                </li>
              </ul>
              <div>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block">
                  Talk to Our Experts
                </Link>
              </div>
            </div>

            {/* Center image */}
            <div className="md:w-[35%] my-8 md:my-0 z-10">
              <div className="relative rounded-lg overflow-hidden max-w-md mx-auto">
                <Image
                  src="/images/Job_Image1_74313.jpeg"
                  alt="Dental billing services"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>

            {/* Right content - positioned at far right edge */}
            <div className="md:w-[30%] z-20">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">Schedule a Consultation</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-4">
            <StaggeredText
              text="How Can We Help You"
              className="text-3xl md:text-4xl font-bold text-center"
              highlightWords={["Help"]}
              highlightColor="#2563EB"
            />
          </div>
          <p className="text-center max-w-3xl mx-auto mb-16">
            With industry knowledge for over 10 years, our team knows how to get things done quickly and efficiently.
            Take your practice to maximum capacity without worrying about a thing!
          </p>

          {/* New Service Cards Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="w-full h-56 overflow-hidden">
                <Image
                  src="/images/billing-icon-BIG.png"
                  alt="Dental Billing Service"
                  width={1024}
                  height={750}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1">
                <h4 className="text-xl font-semibold mb-3 text-center">
                  <span className="text-blue-500 text-2xl">
                    Dental Billing Services
                  </span>
                </h4>
                <p className="text-gray-600">
                  Maximize your revenue with our expert billing team handling all claims, appeals, and follow-ups for optimal reimbursements.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="w-full h-56 overflow-hidden">
                <Image
                  src="/images/insurance-verification-icon.png"
                  alt="Dental Insurance Verification"
                  width={1024}
                  height={750}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1">
                <h4 className="text-xl font-semibold mb-3 text-center">
                  <span className="text-blue-500 text-2xl">
                    Dental Insurance Verification
                  </span>
                </h4>
                <p className="text-gray-600">
                  Verify patient benefits before appointments to reduce claim denials and improve your practice's financial predictability.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="w-full h-56 overflow-hidden">
                <Image
                  src="/images/Claim Masters Billing.zip - 6.png"
                  alt="Dental Credentialing Service"
                  width={1024}
                  height={750}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1">
                <h4 className="text-xl font-semibold mb-3 text-center">
                  <span className="text-blue-500 text-2xl">
                    Dental Credentialing Service
                  </span>
                </h4>
                <p className="text-gray-600">
                  Streamline your provider enrollment process with our experts handling all paperwork, follow-ups and maintenance.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="w-full h-56 overflow-hidden">
                <Image
                  src="/images/Claim Masters Billing.zip - 4.png"
                  alt="Dental AR Follow-Up"
                  width={1024}
                  height={750}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1">
                <h4 className="text-xl font-semibold mb-3 text-center">
                  <span className="text-blue-500 text-2xl">
                    Dental AR Follow-Up
                  </span>
                </h4>
                <p className="text-gray-600">
                  Recover aging accounts receivable with our systematic approach to track, appeal, and collect outstanding payments.
                </p>
              </div>
            </div>
          </div>
            
          {/* Service 5 - Virtual Assistant - Wider card as it's alone in its row */}
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col md:flex-row lg:w-1/2 mx-auto">
              <div className="w-full md:w-1/2 h-56 md:h-auto overflow-hidden">
                <Image
                  src="/images/Claim Masters Billing.zip - 5.png"
                  alt="Dental Virtual Assistance"
                  width={1024}
                  height={750}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1 md:flex md:flex-col md:justify-center">
                <h4 className="text-xl font-semibold mb-3 text-center md:text-left">
                  <span className="text-blue-500 text-2xl">
                    Dental Virtual Assistant
                  </span>
                </h4>
                <p className="text-gray-600">
                  Let our virtual assistants handle scheduling, confirmations, and administrative tasks to increase efficiency and patient satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center">About Claim Masters Dental Billing</h2>
              <p className="text-lg text-gray-700 mb-6">
                Claim Masters isn't just another billing company — we're your dedicated partner in dental practice success. By combining cutting-edge technology with a personalized touch, we've crafted a billing solution tailored specifically for dentists. Our team of billing experts and client success managers work hand-in-hand to deliver exceptional service that drives results for your practice.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With over a decade of experience in the dental billing industry, we pride ourselves on our unwavering commitment to hard work, transparency, and attention to detail. We don't just process claims; we fight for your revenue, ensuring your practice thrives while you focus on delivering outstanding patient care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower dental practices by handling the complexity of billing and administrative tasks so they can focus on patient care.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, excellence, and dedication to delivering exceptional results for every practice we serve.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
                <p className="text-gray-600">
                  Serving dental practices nationwide with customized billing and administrative solutions.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block">
                Get to Know Us
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* Why Choose Us Section
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">What Makes Our Dental Billing Services Unique?</h2>
          <h3 className="text-xl md:text-2xl font-medium text-center mb-12 max-w-4xl mx-auto">
            A Customized Dental Billing & Schedule Management Solution for Dentists.
          </h3>
          <p className="text-center max-w-3xl mx-auto mb-12">
            We are your dental billing experts, and we take care of the time-consuming processes for you so, 
            you can focus on what matters most, delivering the best patient experience. 
            We fight on your behalf to get you the money owed to you!
          </p>
          <div className="text-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block">
              Get a Free Billing Audit
            </Link>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get a Consultation Now</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </section> */}
    </div>
  );
}
