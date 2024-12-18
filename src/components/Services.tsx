import React, { useState } from 'react';
import { 
  HeartPulse, 
  Zap, 
  Stethoscope, 
  Sparkles, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Leaf,
  Smile
} from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';
import BookingModal from './BookingModal';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  accentColor: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Comprehensive dental care for all ages',
    fullDescription: 'Our general dentistry services provide comprehensive care, focusing on preventive treatments, routine check-ups, and personalized oral health strategies.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1662837625427-970713d74aa6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: 'bg-blue-500',
    features: ['Routine Check-ups', 'Preventive Care', 'Family Dentistry']
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with advanced treatments',
    fullDescription: 'Transform your smile with our cutting-edge cosmetic dentistry. From teeth whitening to veneers, we offer personalized aesthetic solutions.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: 'bg-pink-500',
    features: ['Teeth Whitening', 'Veneers', 'Smile Makeover']
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Precision alignment for perfect smiles',
    fullDescription: 'Our orthodontic treatments use state-of-the-art techniques to correct misalignments, providing you with a confident, perfectly aligned smile.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: 'bg-green-500',
    features: ['Braces', 'Clear Aligners', 'Teeth Straightening']
  },
  {
    id: 4,
    title: 'Emergency Dental Care',
    description: 'Immediate support when you need it most',
    fullDescription: 'Our emergency dental services provide rapid, compassionate care for urgent dental issues, ensuring you receive prompt and effective treatment.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: 'bg-red-500',
    features: ['24/7 Support', 'Urgent Care', 'Immediate Treatment']
  },
  {
    id: 5,
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth',
    fullDescription: 'Restore your smile and dental function with our advanced dental implant solutions. Our expert team provides state-of-the-art implant treatments that look, feel, and function like natural teeth.',
    icon: Zap,
    image: 'https://plus.unsplash.com/premium_photo-1664298230730-be266c461847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: 'bg-blue-500',
    features: ['Permanent Solution', 'Natural Look and Feel', 'Improved Oral Function']
  },
  {
    id: 6,
    title: 'Preventive Care',
    description: 'Stop dental problems before they start',
    fullDescription: 'Prevention is key to long-term oral health. Our preventive care services include professional cleanings, dental sealants, fluoride treatments, and personalized oral hygiene guidance.',
    icon: Stethoscope,
    image: 'https://plus.unsplash.com/premium_photo-1661376706631-d3c72a767785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: 'bg-green-500',
    features: ['Professional Cleanings', 'Dental Sealants', 'Fluoride Treatments']
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsDetailModalOpen(true);
  };

  const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const ServiceIcon = service.icon;

    return (
      <motion.div
        className="service-card-container group perspective-900"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 15 
        }}
      >
        <div 
          className="relative overflow-hidden rounded-xl shadow-lg 
          transform transition-all duration-500 
          hover:scale-[1.03] hover:shadow-xl 
          bg-white border border-gray-100
          will-change-transform preserve-3d"
        >
          {/* Background Gradient and Overlay */}
          <div 
            className={`absolute top-0 left-0 right-0 h-1.5 ${service.accentColor} 
            transition-all duration-500 group-hover:h-full opacity-20 group-hover:opacity-30`}
          ></div>

          {/* Image Section */}
          <div className="relative h-36 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover 
              transition-transform duration-500 
              group-hover:scale-110 brightness-75 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            
            {/* Service Icon */}
            <div className="absolute top-3 right-3">
              <ServiceIcon 
                className={`w-10 h-10 text-white/80 
                ${service.accentColor.replace('bg-', 'text-')} 
                transform transition-all duration-500 
                group-hover:rotate-12 group-hover:scale-110`}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 relative z-10">
            <h3 className={`text-xl font-bold mb-2 
            transition-colors duration-300 
            ${service.accentColor.replace('bg-', 'text-')}`}>
              {service.title}
            </h3>

            <p className="text-gray-600 mb-3 text-xs">
              {service.description}
            </p>

            {/* Features List */}
            <div className="mb-3 space-y-1">
              {service.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-xs text-gray-700 
                  opacity-0 group-hover:opacity-100 
                  transform translate-x-4 group-hover:translate-x-0 
                  transition-all duration-300 delay-100"
                >
                  <Leaf className="w-3 h-3 mr-2 text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <motion.button
              onClick={() => handleServiceClick(service)}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-2 rounded-full 
              ${service.accentColor} text-white 
              hover:${service.accentColor.replace('bg-', 'bg-')} 
              transition-all duration-300 
              flex items-center justify-center 
              text-sm
              group/button`}
            >
              <span className="mr-2">Learn More</span>
              <ArrowRight 
                className="w-4 h-4 transform transition-transform duration-300 
                group-hover/button:translate-x-1" 
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  const handleBookNow = () => {
    setIsDetailModalOpen(false);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Our Dental Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          Comprehensive, compassionate care tailored to your unique dental needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </AnimatePresence>
      </div>

      {selectedService && (
        <ServiceDetailModal
          isOpen={isDetailModalOpen}
          onClose={handleCloseDetailModal}
          onBookNow={handleBookNow}
          service={selectedService}
        />
      )}

      {selectedService && (
        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={handleCloseBookingModal}
          service={selectedService}
        />
      )}
    </div>
  );
}