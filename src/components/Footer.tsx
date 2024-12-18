import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Smile,
  Code 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { 
    icon: Facebook, 
    href: 'https://facebook.com', 
    color: 'text-blue-600 hover:text-blue-800' 
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com', 
    color: 'text-sky-500 hover:text-sky-700' 
  },
  { 
    icon: Instagram, 
    href: 'https://instagram.com', 
    color: 'text-pink-600 hover:text-pink-800' 
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com', 
    color: 'text-blue-700 hover:text-blue-900' 
  }
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const servicesLinks = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Orthodontics',
  'Dental Implants',
  'Teeth Whitening',
  'Emergency Care'
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9 
    },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        type: 'spring', 
        stiffness: 300 
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="space-y-4 md:col-span-1"
        >
          <div className="flex items-center space-x-3">
            <Smile className="w-10 h-10 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Dental Care
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Transforming smiles and improving lives through compassionate, 
            cutting-edge dental care.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover="hover"
                className={`${social.color} transition-all duration-300`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="space-y-4"
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  color: '#2563EB'
                }}
              >
                <Link 
                  to={link.path} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="space-y-4"
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Our Services
          </h4>
          <ul className="space-y-2">
            {servicesLinks.map((service, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  color: '#2563EB'
                }}
              >
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {service}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="space-y-4 md:col-span-1"
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h4>
          <div className="space-y-3">
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3 text-gray-600"
            >
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>123 Dental Street, City, State 12345</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3 text-gray-600"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span>(555) 123-4567</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3 text-gray-600"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span>contact@dentalcare.com</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Copyright and Website Builder Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 pt-8 border-t border-gray-200 text-center"
      >
        <p className="text-gray-600 mb-2">
          &copy; {new Date().getFullYear()} Dental Care. All Rights Reserved.
        </p>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="flex items-center justify-center space-x-2 text-gray-500 text-sm"
        >
          <Code className="w-4 h-4" />
          <span>Website built by </span>
          <motion.a
            href="https://akshayys.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Akshay S
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
