'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Luis Molina',
    content: 'ClaimMasters Dental Billing has been an absolute game-changer for our practice! Their team is incredibly knowledgeable, efficient, and always on top of every detail. From handling insurance claims to managing our accounts receivable, they make the entire billing process seamless and stress-free. Fred and his team go above and beyond for our office! Our collections have improved, and we\'ve seen a significant reduction in claim denials thanks to their expertise. Their customer service is top-notch—responsive, professional, and genuinely dedicated to helping our practice succeed. If you\'re looking for a reliable dental billing partner, look no further than ClaimMasters Dental Billing. Highly recommended!',
  },
  {
    id: 2,
    name: 'Dilan Talsida',
    content: 'They do an excellent job! We have multiple offices with Curve and Dentrix and they are able to work with both softwares!',
  },
  {
    id: 3,
    name: 'Antonia Holderbaum (Toni)',
    content: 'Zayne from ClaimMasters Dental Billing has helped me so much! When it comes to updating me or answering any questions I have he responds back very quickly. I am satisfied with the care given.',
  },
  {
    id: 4,
    name: 'Harshiv Vyas',
    content: 'Zap\'s customer service has been outstanding. Arsen, Albert and Austin are very hardworking and sincere. Over the past few years, they have been a great asset to our team. Would highly recommend them.',
  },
  {
    id: 5,
    name: 'Deepa Sreenivasan',
    content: 'The billing and insurance verification service has been great! They are very detail oriented and communicative. I highly recommend this business to help your practice grow and thrive',
  },
  {
    id: 6,
    name: 'Jasmin Ortiz',
    content: 'Zap dental is great. Very fast and efficient. They are very knowledgable as well with everything. Great company! Everyone is sweet.',
  },
  {
    id: 7,
    name: 'Kricket Koehn',
    content: 'I have thoroughly enjoyed services with ClaimMasters Dental Billing. They are very through and have done the absolute best helping our patients understanding their dental billing. Thank you!',
  },
  {
    id: 8,
    name: 'Men Le',
    content: 'I love the servicer from Erika who helped me to get through tough questions and multiple calls with kindness.',
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextClick = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-lg p-2 focus:outline-none"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-lg p-2 focus:outline-none"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 