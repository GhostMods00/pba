import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  TrendingUp,
  Check
} from 'lucide-react';
import Modal from '../components/Modal';

const Home = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false);

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
              <button 
                onClick={() => setIsGetStartedModalOpen(true)}
                className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsLearnMoreModalOpen(true)}
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
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

          {/* Founder Introduction */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Meet Your Accountant</h2>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in accounting and auditing, Leticia brings international expertise from her work at Ernst & Young and Baker Tilly in Brazil to serve businesses across Australia.
              </p>
              <p className="text-gray-600 mb-4">
                Passionate about helping businesses improve their operations, Leticia offers comprehensive financial solutions tailored to each client's unique needs.
              </p>
              <Link to="/about" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center text-sm font-medium w-fit">
                Learn More About Leticia
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="/assets/images/Leticia.jpeg" 
                alt="Leticia - Founder" 
                className="rounded-lg shadow-xl object-cover w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>

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
      {/* Visual Appeal Section */}
<section className="py-20 bg-white-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img 
          src="/assets/images/financial-success.jpg" 
          alt="Financial Success" 
          className="rounded-lg shadow-xl object-cover w-full max-h-96"
        />
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
          <img 
            src="/assets/images/pba-logo.png" 
            alt="Prime Balance Advisory" 
            className="h-16 w-auto"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold leading-tight">We Handle the Numbers <br />So You Can Focus on Growth</h2>
        <p className="text-gray-600">
          At Prime Balance Advisory, we believe that financial clarity leads to better business decisions. 
          Our comprehensive accounting solutions provide the foundation you need to confidently move your business forward.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Accurate</span>
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Reliable</span>
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Professional</span>
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Personalized</span>
        </div>
        <p className="text-gray-600 italic">
          "Our success is measured by your financial well-being."
        </p>
      </motion.div>
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
          <button 
            className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center mx-auto"
            onClick={() => setIsGetStartedModalOpen(true)}
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
      
      {/* Modals */}
      <Modal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)}
        title="Get Started with Prime Balance Advisory"
      >
        <div className="space-y-6">
          <p className="text-gray-600">
            Thank you for your interest in Prime Balance Advisory. We're excited to help you achieve your financial goals. Please fill out the form below to get started.
          </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Services Needed</label>
              <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                <option value="">Select a service</option>
                <option value="bookkeeping">Bookkeeping</option>
                <option value="tax">Tax Services</option>
                <option value="payroll">Payroll Management</option>
                <option value="advisory">Business Advisory</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"></textarea>
            </div>
            <button 
              type="button" 
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
              onClick={() => {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const service = document.getElementById('service').value;
                const message = document.getElementById('message').value;
                
                const subject = "New Inquiry from Prime Balance Advisory Website";
                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}%0D%0A%0D%0A`;
                
                window.location.href = `mailto:pbaadvisory@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              Send Us Email
            </button>
          </form>
        </div>
      </Modal>
      
      <Modal 
        isOpen={isLearnMoreModalOpen} 
        onClose={() => setIsLearnMoreModalOpen(false)}
        title="Why Choose Prime Balance Advisory"
      >
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <div className="bg-black rounded-full p-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">International Expertise</h4>
              <p className="text-gray-600">Benefit from Leticia's experience at Ernst & Young and other major accounting firms in Brazil, bringing a global perspective to your finances.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-black rounded-full p-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Personalized Service</h4>
              <p className="text-gray-600">We take the time to understand your unique business needs and create customized solutions that align with your goals.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-black rounded-full p-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Comprehensive Solutions</h4>
              <p className="text-gray-600">From bookkeeping and tax preparation to payroll management and business advisory, we provide end-to-end financial services.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-black rounded-full p-1 flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Modern Approach</h4>
              <p className="text-gray-600">We leverage the latest accounting technologies like Xero, MYOB, and SAP to streamline processes and enhance accuracy.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/about"
              className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300"
              onClick={() => setIsLearnMoreModalOpen(false)}
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;