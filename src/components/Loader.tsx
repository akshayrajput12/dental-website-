import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap 
} from 'lucide-react';

const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className={className}
  >
    <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
    <path d="M12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 to-white 
      flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center justify-center">
        {/* 3D Tooth Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ 
            opacity: 1, 
            scale: [0.5, 1.1, 1],
            rotateY: [0, 360],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="relative"
        >
          {/* Tooth Icon */}
          <ToothIcon 
            className="w-48 h-48 text-blue-500 
            drop-shadow-[0_10px_15px_rgba(59,130,246,0.3)]"
          />

          {/* Sparkle Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 360],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            className="absolute top-0 right-0 text-yellow-400"
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, -360],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="absolute bottom-0 left-0 text-green-400"
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.5
            }
          }}
          className="mt-8 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-600 tracking-wide">
            DentalCare
          </h2>
          <p className="text-lg text-gray-500 mt-2 animate-pulse">
            Preparing your smile...
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ 
            width: ['0%', '100%'],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }
          }}
          className="mt-6 w-64 h-2 bg-blue-200 rounded-full overflow-hidden"
        >
          <div className="h-full bg-blue-500 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
