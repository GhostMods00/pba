import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Accounting Services",
      description: "Comprehensive bookkeeping, tax returns, GST calculations, and financial reporting",
      icon: "📊"
    },
    {
      title: "Payroll Processing",
      description: "Complete payroll management and processing services for your business",
      icon: "💰"
    },
    {
      title: "Tax Compliance",
      description: "BAS preparation, tax compliance, and year-end closing processes",
      icon: "📝"
    },
    {
      title: "Administrative Support",
      description: "Full administrative services including email, calendar, and document management",
      icon: "📋"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;