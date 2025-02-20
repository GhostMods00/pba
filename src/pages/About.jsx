import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Trophy, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: Trophy
    },
    {
      number: "500+",
      label: "Satisfied Clients",
      icon: Users
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: TrendingUp
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the highest quality of work for our clients."
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of professional ethics and transparency in all our business dealings."
    },
    {
      title: "Innovation",
      description: "We continuously adapt to changing business environments and implement innovative solutions."
    },
    {
      title: "Client Focus",
      description: "Our clients' success is our priority. We provide personalized services tailored to each client's needs."
    }
  ];

  const services = [
    "Expert Bookkeeping",
    "Tax Return Preparation",
    "GST & BAS Services",
    "Payroll Management",
    "Financial Reporting",
    "Business Advisory"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Prime Balance Advisory</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in business success. We provide comprehensive accounting 
              and administrative services to help your business thrive in today's competitive environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-3xl font-bold text-black mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Prime Balance Advisory was founded with a vision to provide comprehensive 
                accounting and administrative solutions to businesses of all sizes. Our 
                journey began with a simple mission: to help businesses thrive by taking 
                care of their financial and administrative needs.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we continue to grow and adapt to meet the evolving needs of our 
                clients. Our team of experienced professionals brings expertise across 
                various domains of business administration and accounting.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="text-black w-5 h-5" />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Office" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you streamline your business operations and focus on what matters most - growing your business.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;