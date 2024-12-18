import React, { useState, useEffect } from 'react';
import { StarIcon } from './icons';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'The team at DentalCare is exceptional! They made my dental experience comfortable and stress-free.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Michael Chen',
    text: "Professional, caring, and thorough. Best dental experience I have ever had!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Emily Rodriguez',
    text: 'State-of-the-art facility with a warm and friendly staff. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Patients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real experiences from our valued patients
          </p>
        </div>

        <div className="relative h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`absolute w-full transition-all duration-500 ${
                index === activeIndex
                  ? 'opacity-100 translate-x-0'
                  : index < activeIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="max-w-2xl mx-auto text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-6"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl text-gray-600 italic mb-6">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}