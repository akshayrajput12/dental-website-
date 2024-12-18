import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Sarah Wilson',
    role: 'Lead Dentist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    description: 'Dr. Wilson brings over 15 years of experience in cosmetic and restorative dentistry.',
  },
  {
    name: 'Dr. Michael Chang',
    role: 'Orthodontist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    description: 'Specializing in advanced orthodontic treatments and Invisalign procedures.',
  },
  {
    name: 'Dr. Emily Martinez',
    role: 'Pediatric Dentist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    description: 'Dedicated to providing gentle and caring dental services for children.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experienced professionals dedicated to your dental health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                rotateX: -20,
                y: 50 
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotateX: 0,
                y: 0,
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.5
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: -5,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: { 
                  type: 'spring', 
                  stiffness: 400,
                  damping: 15
                }
              }}
              className="relative group bg-white rounded-xl overflow-hidden 
                         transform transition-all duration-300 
                         perspective-1000 preserve-3d 
                         hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Background Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 
                            bg-gradient-to-br from-blue-200 to-blue-400 
                            transition-all duration-500 z-0"
              />

              <div className="aspect-w-3 aspect-h-4 overflow-hidden relative z-10">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  className="w-full h-full object-cover 
                             transform transition-transform duration-300 
                             group-hover:brightness-90"
                />
              </div>

              <div className="p-6 relative z-20 bg-white bg-opacity-90 backdrop-blur-sm">
                <motion.h3 
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-xl font-semibold text-gray-900 
                             transition-colors duration-300 
                             group-hover:text-blue-600"
                >
                  {member.name}
                </motion.h3>
                <p className="text-blue-600 mb-4 
                              transition-colors duration-300 
                              group-hover:text-blue-800">{member.role}</p>
                <p className="text-gray-600 
                              transition-colors duration-300 
                              group-hover:text-gray-800">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At DentalCare, we are committed to providing exceptional dental care in a comfortable
                and welcoming environment. Our team of experienced professionals uses the latest
                technology and techniques to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-gray-600">
                We believe in preventive care and patient education as the keys to optimal dental
                health. Our goal is to help each patient maintain a healthy and beautiful smile for
                life.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
                alt="Modern dental office"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}