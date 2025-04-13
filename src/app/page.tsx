import Image from "next/image";
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Your Trusted Dental Billing Company
            </h1>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">Increase your Collections with Our Dental Billing Services</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">Customized & Affordable Plans to Suit Your Budget</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">Get Live Support From our Experts</span>
              </li>
            </ul>
            <div>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block">
                Talk to Our Experts
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Schedule a Consultation</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Customers love us</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Can We Help You</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Dental Billing Services</h3>
          <p className="text-center max-w-3xl mx-auto mb-16">
            With industry knowledge for over 10 years, our team knows how to get things done quickly and efficiently. 
            Take your practice to maximum capacity without worrying about a thing!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Dental Equipment Image]
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Dental Insurance Eligibility Verification</h4>
                <p className="mb-4">
                  Prior verification allows you to be proactive, save time, and have confidence while delivering patient treatment plans.
                </p>
                <Link href="/services/insurance-verification" className="text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Patient Appointment Image]
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Dental Insurance Billing and AR/Collection</h4>
                <p className="mb-4">
                  Zap Dental team is here to make it quick and convenient for you to track and collect any outstanding claims and payments from insurance companies. Get paid what you are owed.
                </p>
                <Link href="/services/insurance-billing" className="text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Doctor and Patient Image]
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Patient Follow-ups/Fill the Chair</h4>
                <p className="mb-4">
                  Are you struggling to juggle all of your responsibilities? Let us take care of that for you. We will handle everything from appointments and follow-ups with active and inactive patients, so don't worry about a thing!
                </p>
                <Link href="/services" className="text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Dental Equipment Image]
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Appointment Scheduling</h4>
                <p className="mb-4">
                  Need a more efficient way to schedule your patient appointments? Our technology schedules and streamlines new appointments in real-time and syncs them with your daily calendar.
                </p>
                <Link href="/services" className="text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Dentist Examining Patient Image]
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Appointment Confirmation</h4>
                <p className="mb-4">
                  Our team makes sure that patient appointments are confirmed and there are no last-minute cancellations. Our system follows up via phone and text before an appointment.
                </p>
                <Link href="/services" className="text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Doctor Image]
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Inbound and Outbound Calls</h4>
                <p className="mb-4">
                  Whether you have 1 call per day or 100+, we will create a customized solution so you can be confident that each call is answered professionally and taken care of.
                </p>
                <Link href="/services" className="text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-block">
              Speak with Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get a Consultation Now</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
