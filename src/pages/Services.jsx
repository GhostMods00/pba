import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  FileSpreadsheet, 
  DollarSign, 
  FileText, 
  BarChart, 
  Clock,
  Mail,
  Phone,
  Calendar,
  FileCheck
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: "Accounting & Bookkeeping",
      description: "Comprehensive bookkeeping services including transaction recording, reconciliation, and financial statement preparation.",
      icon: Calculator,
      features: [
        "Daily transaction recording",
        "Bank reconciliation",
        "Financial statements",
        "Account maintenance"
      ]
    },
    {
      title: "Tax Services",
      description: "Complete tax preparation and planning services for businesses and individuals.",
      icon: FileSpreadsheet,
      features: [
        "Tax return preparation",
        "GST calculations",
        "BAS lodgment",
        "Tax planning"
      ]
    },
    {
      title: "Payroll Processing",
      description: "End-to-end payroll management services to ensure accurate and timely payments.",
      icon: DollarSign,
      features: [
        "Salary processing",
        "Superannuation management",
        "PAYG compliance",
        "Leave management"
      ]
    },
    {
      title: "Financial Reporting",
      description: "Detailed financial reporting and analysis to help you make informed decisions.",
      icon: BarChart,
      features: [
        "P&L statements",
        "Balance sheets",
        "Cash flow reports",
        "Budget analysis"
      ]
    }
  ];

  const adminServices = [
    {
      title: "Email Management",
      description: "Professional email handling and organization",
      icon: Mail
    },
    {
      title: "Phone Support",
      description: "Customer and supplier call handling",
      icon: Phone
    },
    {
      title: "Calendar Management",
      description: "Appointment scheduling and reminders",
      icon: Calendar
    },
    {
      title: "Document Processing",
      description: "Document preparation and filing",
      icon: FileCheck
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive accounting and administrative solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Accounting Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <service.icon className="w-8 h-8 text-black mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-black" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Administrative Support</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {adminServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <service.icon className="w-10 h-10 mx-auto mb-4 text-black" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Customized Solution?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can tailor our services to meet your specific business needs
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;