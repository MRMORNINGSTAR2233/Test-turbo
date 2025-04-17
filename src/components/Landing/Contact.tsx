import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, User, AtSign, MessageSquare } from 'lucide-react';
import anime from 'animejs';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsFormSubmitting(false);
      setFormSubmitted(true);
      
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.contact-title',
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 800,
              easing: 'easeOutExpo',
            });
            
            anime({
              targets: '.contact-info',
              translateX: [-30, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutExpo',
            });
            
            anime({
              targets: '.contact-form-element',
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo',
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (contactRef.current) observer.observe(contactRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={contactRef} className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <motion.div 
        className="absolute top-0 left-0 w-3/4 h-1/2 bg-indigo-500/5 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          x: [-100, 0, -100],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-indigo-600/5 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          x: [50, -20, 50],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="contact-title text-4xl md:text-5xl font-bold text-center mb-16 text-white opacity-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get in <span className="text-indigo-400 relative">
            Touch
            <motion.span 
              className="absolute -top-1 -right-2 w-2 h-2 bg-indigo-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <motion.h3 
                className="text-2xl font-semibold mb-8 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-6 text-gray-300">
                <motion.div 
                  className="contact-info flex items-center opacity-0 p-3 rounded-xl hover:bg-indigo-500/10 transition-colors duration-300"
                  whileHover={{ x: 5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span>contact@searchify.ai</span>
                </motion.div>
                <motion.div 
                  className="contact-info flex items-center opacity-0 p-3 rounded-xl hover:bg-indigo-500/10 transition-colors duration-300"
                  whileHover={{ x: 5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span>+91 (999) 888-7777</span>
                </motion.div>
                <motion.div 
                  className="contact-info flex items-center opacity-0 p-3 rounded-xl hover:bg-indigo-500/10 transition-colors duration-300"
                  whileHover={{ x: 5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span>123 AI Avenue, Bangalore, India 560001</span>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-lg shadow-indigo-500/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)",
                y: -5
              }}
            >
              <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-indigo-400" />
                Support Hours
              </h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-indigo-300">9:00 AM - 8:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-indigo-300">10:00 AM - 5:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-indigo-300">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.form 
            className="space-y-6 bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-lg shadow-indigo-500/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <AnimatePresence>
              {formSubmitted ? (
                <motion.div 
                  className="bg-indigo-500/20 rounded-xl p-6 flex flex-col items-center justify-center h-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <motion.p 
                    className="text-white text-xl font-medium text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Message sent successfully!
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 text-center mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    We'll get back to you as soon as possible.
                  </motion.p>
                </motion.div>
              ) : (
                <>
                  <div className="contact-form-element opacity-0">
                    <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 mr-2 text-indigo-400" />
                      Full Name
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="Your name"
                        required
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-all duration-1000" />
                    </motion.div>
                  </div>
                  
                  <div className="contact-form-element opacity-0">
                    <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                      <AtSign className="w-4 h-4 mr-2 text-indigo-400" />
                      Email Address
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div className="contact-form-element opacity-0">
                    <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                      Your Message
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <textarea
                        rows={5}
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                        placeholder="Your message here..."
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="contact-form-element w-full bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center group relative overflow-hidden opacity-0 disabled:opacity-70"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                    }}
                    whileTap={{ y: 0 }}
                    disabled={isFormSubmitting}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={isFormSubmitting ? {
                        x: ["0%", "100%"],
                        opacity: [0, 0.3, 0]
                      } : {}}
                      transition={isFormSubmitting ? {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                      } : {}}
                    />
                    
                    <span className="relative z-10 flex items-center">
                      {isFormSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;