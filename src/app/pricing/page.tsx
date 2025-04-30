"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import RotatingText from '../../components/RotatingText';
import ScrollRevealText from '../../components/ScrollRevealText';
import MagnifyingText from '../../components/MagnifyingText';
import WavyText from '../../components/WavyText';
import AnimatedCard from '../../components/AnimatedCard';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("billing");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/dentist-turkey-antalya.webp')",
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
              text="Pricing & Plans"
              className="text-4xl md:text-5xl font-bold mb-6"
              textColor="#fff"
              fontSize="3rem"
              waveHeight={25}
              duration={1.2}
            />
            <ScrollRevealText
              text="Customized and affordable solutions designed to fit your practice's unique needs"
              className="text-lg md:text-xl mb-8 leading-relaxed"
              fromDirection="bottom"
              threshold={0.2}
              staggerDelay={0.02}
            />
          </div>
        </div>
      </section>

      {/* Service Tabs - Clickable Tabs */}
      <section className="py-12 relative z-20">
        <div className="container mx-auto px-4">
          <AnimatedCard className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100" delay={0.2}>
            <div className="flex flex-col md:flex-row">
              {/* Tabs */}
              <div onClick={() => setActiveTab("billing")} 
                className={`flex-1 p-6 cursor-pointer transition-all duration-300 ${activeTab === "billing" 
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
                  : "bg-blue-50 hover:bg-blue-100 text-blue-800"}`}>
                <div className="flex flex-col items-center text-center p-2">
                  <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide mb-2">Insurance Billing & AR</h3>
                  <p className={`text-sm ${activeTab === "billing" ? "text-blue-100" : "text-blue-600"}`}>
                    Get your insurance claims handled efficiently
                  </p>
                </div>
              </div>
              
              <div onClick={() => setActiveTab("verification")} 
                className={`flex-1 p-6 cursor-pointer transition-all duration-300 ${activeTab === "verification" 
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
                  : "bg-blue-50 hover:bg-blue-100 text-blue-800"}`}>
                <div className="flex flex-col items-center text-center p-2">
                  <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide mb-2">Insurance Eligibility & Verification</h3>
                  <p className={`text-sm ${activeTab === "verification" ? "text-blue-100" : "text-blue-600"}`}>
                    Verify patient benefits
                  </p>
                </div>
              </div>
              
              <div onClick={() => setActiveTab("insurance")} 
                className={`flex-1 p-6 cursor-pointer transition-all duration-300 ${activeTab === "insurance" 
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
                  : "bg-blue-50 hover:bg-blue-100 text-blue-800"}`}>
                <div className="flex flex-col items-center text-center p-2">
                  <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide mb-2">Dental Insurance Billing</h3>
                  <p className={`text-sm ${activeTab === "insurance" ? "text-blue-100" : "text-blue-600"}`}>
                    Commercial PPO & HMO
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Content Sections */}
      <div className="min-h-[600px] py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Insurance Billing & AR */}
          {activeTab === "billing" && (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MagnifyingText 
                  text="Insurance Billing & AR"
                  className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
                  fontSize="2.5rem"
                  magnifyScale={1.3}
                  hoverColor="#2563EB"
                />
                <ScrollRevealText
                  text="Our team makes it hassle-free for you by managing and tracking outstanding claims and payments. Get paid faster and accurately with our strong Dental Management follow-ups."
                  className="text-lg text-blue-700 max-w-3xl mx-auto"
                  fromDirection="bottom"
                />
              </div>
              
              <AnimatedCard className="overflow-x-auto rounded-xl shadow-xl bg-white border border-blue-100 mb-12" delay={0.3}>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="py-4 px-6 text-left rounded-tl-lg">Monthly Pricing</th>
                      <th className="py-4 px-6 text-center">Small</th>
                      <th className="py-4 px-6 text-center">Medium</th>
                      <th className="py-4 px-6 text-center">Large</th>
                      <th className="py-4 px-6 text-center">Enterprise</th>
                      <th className="py-4 px-6 text-center rounded-tr-lg">Multi-Location/DSO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="py-6 px-6 text-blue-900 font-semibold">Price</td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-3xl font-bold text-blue-600">$1099</div>
                        <div className="text-sm text-blue-500">Monthly</div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-3xl font-bold text-blue-600">2.99%</div>
                        <div className="text-sm text-blue-500">Monthly</div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-3xl font-bold text-blue-600">2.50%</div>
                        <div className="text-sm text-blue-500">Monthly</div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-3xl font-bold text-blue-600">2%</div>
                        <div className="text-sm text-blue-500">Monthly</div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-xl font-bold text-blue-600">Custom</div>
                        <div className="text-sm text-blue-500">as low as 1.75%</div>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="py-6 px-6 text-blue-900 font-semibold">Practice Monthly Collections</td>
                      <td className="py-6 px-6 text-center text-blue-700">If the office insurance collections are under $40,000 month</td>
                      <td className="py-6 px-6 text-center text-blue-700">If the office insurance collections are between $40,000 and $100,000</td>
                      <td className="py-6 px-6 text-center text-blue-700">If the office insurance collections are between $100,000 and $150,000</td>
                      <td className="py-6 px-6 text-center text-blue-700">If the office insurance collections are between $150,000 and $200,000 per month</td>
                      <td className="py-6 px-6 text-center text-blue-700">For multi-location dental practices, contact us for a tailored solution.</td>
                    </tr>
                  </tbody>
                </table>
              </AnimatedCard>

              <div className="text-center">
                <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us For More Information
                </Link>
              </div>
            </div>
          )}

          {/* Create a section for dental insurance billing (commercial) */}
          {activeTab === "insurance" && (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MagnifyingText 
                  text="Dental Insurance Billing"
                  className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
                  fontSize="2.5rem"
                  magnifyScale={1.3}
                  hoverColor="#2563EB"
                />
                <ScrollRevealText
                  text="Comprehensive insurance billing services for your dental practice"
                  className="text-lg text-blue-700 max-w-3xl mx-auto"
                  fromDirection="bottom"
                />
              </div>
              
              <AnimatedCard className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100 mb-12 transform hover:scale-105 transition-transform duration-300" delay={0.3}>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                  <h3 className="text-xl font-bold text-white">Commercial</h3>
                </div>
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">$199</div>
                  <p className="text-blue-700 mb-6">For both PPO and HMO</p>
                </div>
              </AnimatedCard>

              <div className="text-center">
                <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us For More Information
                </Link>
              </div>
            </div>
          )}

          {/* Insurance Eligibility & Verification */}
          {activeTab === "verification" && (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MagnifyingText 
                  text="Insurance Eligibility & Verification"
                  className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
                  fontSize="2.5rem"
                  magnifyScale={1.3}
                  hoverColor="#2563EB"
                />
                <ScrollRevealText
                  text="Comprehensive verification of patient benefits before appointments"
                  className="text-lg text-blue-700 max-w-3xl mx-auto"
                  fromDirection="bottom"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Small Plan */}
                <AnimatedCard className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100" delay={0.2}>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                    <h3 className="text-xl font-bold text-white">Small</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600">$275</div>
                      <p className="text-sm text-blue-500 mt-1">Monthly</p>
                    </div>
                    <div className="text-blue-700 text-center">
                      <p>Up to 5 verifications per day</p>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Medium Plan */}
                <AnimatedCard className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100" delay={0.3}>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                    <h3 className="text-xl font-bold text-white">Medium</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600">$375</div>
                      <p className="text-sm text-blue-500 mt-1">Monthly</p>
                    </div>
                    <div className="text-blue-700 text-center">
                      <p>Up to 10 verifications per day</p>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Large Plan */}
                <AnimatedCard className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100" delay={0.4}>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                    <h3 className="text-xl font-bold text-white">Large</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600">$475</div>
                      <p className="text-sm text-blue-500 mt-1">Monthly</p>
                    </div>
                    <div className="text-blue-700 text-center">
                      <p>Up to 15 verifications per day</p>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Enterprise Plan */}
                <AnimatedCard className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100" delay={0.5}>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                    <h3 className="text-xl font-bold text-white">Enterprise</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600">Custom</div>
                      <p className="text-sm text-blue-500 mt-1">Contact us</p>
                    </div>
                    <div className="text-blue-700 text-center">
                      <p>Unlimited verifications</p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              <div className="text-center">
                <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg transform hover:scale-105 active:scale-95">
                  Contact Us For More Information
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to streamline your dental practice?</h2>
            <p className="text-lg mb-8 text-blue-100">Contact us today to learn more about our billing solutions and how we can help your practice thrive.</p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg transform hover:scale-105 active:scale-95">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 