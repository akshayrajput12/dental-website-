import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';

const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: 0.04 * i 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          className="inline-block mr-2"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 
            min-w-full min-h-full 
            transform -translate-x-1/2 -translate-y-1/2 
            object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6529153/6529153-uhd_1440_2732_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 100 
          }}
          className="text-center max-w-4xl px-6 py-12 md:py-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight 
            text-white 
            mb-4 md:mb-6 leading-tight
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            <AnimatedText 
              text="Transforming Smiles, Enhancing Lives" 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.6 
            }}
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 
              font-light tracking-wide leading-relaxed
              drop-shadow-lg px-4"
          >
            Experience compassionate, cutting-edge dental care that goes beyond treatment. 
            We're dedicated to creating beautiful, healthy smiles that boost your confidence.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.7, 
              type: "spring", 
              stiffness: 300 
            }}
            onClick={() => setIsBookingModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-md text-white 
              px-6 md:px-8 py-3 md:py-4 rounded-full 
              border border-white/30
              flex items-center justify-center mx-auto
              text-sm md:text-base
              hover:bg-white/30 transition-all duration-300
              group"
          >
            Book Your Consultation
            <ArrowRight 
              className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" 
            />
          </motion.button>
        </motion.div>
      </div>

      {isBookingModalOpen && (
        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={() => setIsBookingModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Hero;