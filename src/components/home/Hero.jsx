import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-black leading-tight">
            Your Trusted Partner in Business Success
          </h1>
          <p className="text-lg text-gray-600">
            Prime Balance Advisory provides comprehensive accounting and administrative 
            services to help your business thrive. Let us handle the numbers while 
            you focus on growth.
          </p>
          <button className="btn-primary flex items-center">
            Get Started
            <ChevronRight className="ml-2" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <img src="/assets/images/hero-image.png" alt="Hero" className="max-w-md rounded-lg shadow-xl" />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;