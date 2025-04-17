import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './Navbar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';
import EntranceAnimation from './EntranceAnimation';
import ChatBot from '../ChatBot';

const Landing: React.FC = () => {
  const [showEntrance, setShowEntrance] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  useEffect(() => {
    // Hide entrance animation after animation completes
    const timer = setTimeout(() => {
      // Set content as loaded before hiding entrance to prevent blank screen
      setContentLoaded(true);
      
      // Small delay to ensure content is ready before hiding entrance
      setTimeout(() => {
        setShowEntrance(false);
      }, 200);
    }, 6000);  // Increased from 1400 to 5000 to give animations time to complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showEntrance ? (
          <EntranceAnimation key="entrance" />
        ) : (
          <motion.div 
            key="content"
            className="overflow-hidden bg-gray-950 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Consistent background applied to entire content area */}
            <div className="fixed inset-0 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen w-full -z-10"></div>
            
            {/* Navbar - fixed position */}
            <div className="sticky top-0 w-full z-50">
              <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                  <NavbarLogo />
                  <NavItems items={navItems} />
                  <div className="flex items-center gap-4">
                    <NavbarButton variant="secondary">Login</NavbarButton>
                  </div>
                </NavBody>
       
                {/* Mobile Navigation */}
                <MobileNav>
                  <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                      isOpen={isMobileMenuOpen}
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                  </MobileNavHeader>
       
                  <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    {navItems.map((item, idx) => (
                      <a
                        key={`mobile-link-${idx}`}
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative text-gray-300 hover:text-white"
                      >
                        <span className="block">{item.name}</span>
                      </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                      <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                      >
                        Login
                      </NavbarButton>
                    </div>
                  </MobileNavMenu>
                </MobileNav>
              </Navbar>
            </div>

            {/* Content sections */}
            {contentLoaded && (
              <div className="relative z-10">
                <motion.section 
                  id="hero"
                  className="relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero />
                </motion.section>
                <motion.section 
                  id="about"
                  className="relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.section>
                <motion.section 
                  id="features"
                  className="relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="container mx-auto px-4 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                      Powerful <span className="text-indigo-400">Features</span>
                    </h2>
                    <Features />
                  </div>
                </motion.section>
                <motion.section 
                  id="pricing"
                  className="relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Pricing />
                </motion.section>
                <motion.section 
                  id="contact"
                  className="relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.section>
                <div className="relative z-10">
                  <Footer />
                </div>
              </div>
            )}
            
            {/* Chatbot only appears when entrance animation is complete */}
            {contentLoaded && !showEntrance && <ChatBot />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Landing; 