import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  User, 
  Mail, 
  Phone, 
  MessageCircle, 
  Layers 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: User,
      placeholder: 'Enter your full name',
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: Mail,
      placeholder: 'your.email@example.com',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      icon: Phone,
      placeholder: '(555) 123-4567',
    },
    {
      name: 'service',
      label: 'Service Interested In',
      type: 'select',
      icon: Layers,
      options: [
        { value: '', label: 'Select a service' },
        { value: 'general', label: 'General Dentistry' },
        { value: 'cosmetic', label: 'Cosmetic Dentistry' },
        { value: 'orthodontics', label: 'Orthodontics' },
        { value: 'implants', label: 'Dental Implants' },
      ]
    },
    {
      name: 'message',
      label: 'Your Message',
      type: 'textarea',
      icon: MessageCircle,
      placeholder: 'Write your message here...',
    }
  ];

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }
    },
    hover: { 
      scale: 1.05,
      rotateX: -5,
      rotateY: 5,
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
      transition: { 
        type: 'spring', 
        stiffness: 400 
      }
    }
  };

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
      y: 50,
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
      scale: 1.02,
      transition: { 
        type: 'spring', 
        stiffness: 300 
      }
    }
  };

  const formContainerVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 overflow-hidden"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title Section with Entrance Animation */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-xl text-gray-600"
          >
            We're here to help with all your dental care needs
          </motion.p>
        </motion.div>

        {/* Grid Layout with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 perspective-1000"
        >
          {/* Contact Information Section */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="space-y-6"
          >
            <motion.div 
              variants={contactInfoVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg p-8 group transform transition-all duration-300 preserve-3d"
            >
              <div className="space-y-6">
                {[
                  { 
                    icon: MapPinIcon, 
                    title: 'Location', 
                    content: '123 Dental Street, Medical District' 
                  },
                  { 
                    icon: PhoneIcon, 
                    title: 'Phone', 
                    content: '(555) 123-4567' 
                  },
                  { 
                    icon: MailIcon, 
                    title: 'Email', 
                    content: 'info@dentalcare.com' 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: index * 0.2,
                        type: 'spring',
                        stiffness: 300
                      }
                    }}
                    className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <item.icon className="h-6 w-6 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                      <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={contactInfoVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg p-8 group transform transition-all duration-300 preserve-3d"
            >
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <motion.div 
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: index * 0.2,
                        type: 'spring',
                        stiffness: 300
                      }
                    }}
                    className="flex justify-between group-hover:text-blue-600 transition-colors"
                  >
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form with Advanced Entrance */}
          <motion.div 
            variants={formContainerVariants}
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
            }}
            className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 preserve-3d"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      rotate: [0, 20, -20, 0],
                      transition: { type: 'spring', stiffness: 300 }
                    }}
                    className="text-green-500 text-5xl mb-4"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {inputFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      variants={itemVariants}
                      whileHover="hover"
                      className="relative group"
                    >
                      <motion.label 
                        htmlFor={field.name}
                        className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                          focusedField === field.name 
                            ? 'text-blue-600' 
                            : 'text-gray-700'
                        }`}
                        animate={{
                          color: focusedField === field.name 
                            ? '#2563EB' 
                            : '#374151'
                        }}
                      >
                        {field.label}
                      </motion.label>

                      <div className="relative">
                        <motion.div 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 
                            transition-all duration-300 
                            ${focusedField === field.name 
                              ? 'text-blue-600 scale-110' 
                              : 'text-gray-400'}`}
                          animate={{
                            color: focusedField === field.name 
                              ? '#2563EB' 
                              : '#9CA3AF',
                            scale: focusedField === field.name ? 1.1 : 1
                          }}
                        >
                          <field.icon className="w-5 h-5" />
                        </motion.div>

                        {field.type === 'select' ? (
                          <motion.select
                            id={field.name}
                            name={field.name}
                            required
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 
                              transition-all duration-300 
                              ${focusedField === field.name 
                                ? 'border-blue-500 ring-2 ring-blue-200' 
                                : 'border-gray-300'} 
                              bg-gray-50 focus:outline-none`}
                            whileFocus={{ 
                              scale: 1.02,
                              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                          >
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </motion.select>
                        ) : field.type === 'textarea' ? (
                          <motion.textarea
                            id={field.name}
                            name={field.name}
                            rows={4}
                            required
                            placeholder={field.placeholder}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 
                              transition-all duration-300 
                              ${focusedField === field.name 
                                ? 'border-blue-500 ring-2 ring-blue-200' 
                                : 'border-gray-300'} 
                              bg-gray-50 focus:outline-none`}
                            whileFocus={{ 
                              scale: 1.02,
                              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                          />
                        ) : (
                          <motion.input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            required
                            placeholder={field.placeholder}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 
                              transition-all duration-300 
                              ${focusedField === field.name 
                                ? 'border-blue-500 ring-2 ring-blue-200' 
                                : 'border-gray-300'} 
                              bg-gray-50 focus:outline-none`}
                            whileFocus={{ 
                              scale: 1.02,
                              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}

                  <motion.button
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-xl text-white font-semibold 
                      transition-all duration-300 transform 
                      ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}