// components/Testimonials.jsx
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jean-Claude M.',
      role: 'CEO, AgriConnect',
      content: 'UbakaSoft transformed our manual tracking into a high-performance digital dashboard. Our efficiency increased by 40% in just three months.',
      rating: 5,
      company: 'AgriConnect'
    },
    {
      name: 'Alice Mutoni',
      role: 'CTO, FinTech Rwanda',
      content: 'The team at UbakaSoft delivered an exceptional mobile banking solution. Their expertise in security and scalability is unmatched.',
      rating: 5,
      company: 'FinTech Rwanda'
    },
    {
      name: 'Paul Kagire',
      role: 'Founder, EduTech Africa',
      content: 'Working with UbakaSoft has been transformative. They understood our vision and executed flawlessly.',
      rating: 5,
      company: 'EduTech Africa'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Voices of Success</h2>
          <p className="text-xl text-gray-200">Don't take our word for it. Hear from the visionaries we've partnered with.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-black/70 bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <p className="text-xl mb-6 italic">"{testimonials[currentIndex].content}"</p>
            <div className="text-center">
              <p className="font-bold text-xl">{testimonials[currentIndex].name}</p>
              <p className="text-gray-300">{testimonials[currentIndex].role}</p>
              <p className="text-yellow-400 text-sm mt-2">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;