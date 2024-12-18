import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu as MenuIcon, 
  X, 
  Calendar, 
  Home, 
  Briefcase, 
  Info, 
  MessageCircle, 
  Layers 
} from 'lucide-react';
import BookingModal from './BookingModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Contact', href: '#contact', icon: MessageCircle }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-transparent backdrop-blur-sm border-b border-white/10'}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold 
              ${isScrolled ? 'text-blue-600' : 'text-white'}
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
          >
            DentalCare
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`
                  transition-all duration-300 
                  cursor-pointer
                  hover:scale-105 transform
                  font-medium
                  relative
                  group
                  ${isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'}
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                  after:w-0 after:h-[2px] 
                  after:transition-all after:duration-300
                  hover:after:w-full
                  ${isScrolled 
                    ? 'after:bg-blue-600' 
                    : 'after:bg-white'}`}
              >
                {link.name}
              </a>
            ))}

            {/* Book Appointment Button */}
            <motion.button
              onClick={openBookingModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center justify-center space-x-2 px-4 py-2 rounded-full 
                transition-all duration-300 
                font-medium
                ${isScrolled 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-white/20 text-white border border-white hover:bg-white/30 backdrop-blur-sm'}`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={openBookingModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center justify-center p-2 rounded-full 
                transition-all duration-300 
                ${isScrolled ? 'text-blue-600' : 'text-white'}`}
            >
              <Calendar className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className={`focus:outline-none
                ${isScrolled ? 'text-blue-600' : 'text-white'}`}
            >
              {isMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuIcon size={24} />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-blue-600/90 backdrop-blur-md"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="container mx-auto px-6 py-12 h-full flex flex-col justify-center"
            >
              <div className="space-y-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    variants={linkVariants}
                    className="block text-white text-4xl font-bold flex items-center space-x-4 group"
                  >
                    <link.icon 
                      className="w-10 h-10 text-white/70 group-hover:text-white transition-colors" 
                    />
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link.name}
                    </span>
                  </motion.a>
                ))}

                <motion.button
                  onClick={openBookingModal}
                  variants={linkVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex items-center space-x-4 text-3xl font-bold text-white 
                    bg-white/20 px-6 py-4 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Calendar className="w-8 h-8" />
                  <span>Book Appointment</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;