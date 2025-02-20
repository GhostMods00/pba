import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Calculator,
  FileSpreadsheet,
  Briefcase,
  Award,
  Users2,
  ShieldCheck,
  BarChart4,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: "Financial Excellence",
      description: "Expert bookkeeping and accounting services for business growth"
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Optimization",
      description: "Strategic tax planning and compliance services"
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description: "Professional guidance for your business decisions"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Maintaining the highest standards in all our services"
    }
  ];

  const stats = [
    { value: "500+", label: "Clients Served", icon: Users2 },
    { value: "98%", label: "Client Satisfaction", icon: ShieldCheck },
    { value: "15+", label: "Years Experience", icon: BarChart4 },
    { value: "100%", label: "Growth Rate", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-black text-white min-h-[60vh] flex items-center justify-center relative pt-20 px-4 md:pt-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20"></div>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
              Your Partner in Financial Success
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Comprehensive accounting and administrative solutions tailored to 
              your business needs. Let us handle the numbers while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-12 md:mb-16"
          >
            <img 
              src="/assets/images/pba-logo.png"
              alt="Prime Balance Advisory"
              className="h-60 md:h-72 w-auto object-contain"
            />
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-black" />
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600">Comprehensive solutions for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-black mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let us help you streamline your operations and achieve your financial goals
          </p>
          <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center mx-auto">
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;