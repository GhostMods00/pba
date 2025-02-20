import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Bookkeeping',
    'Tax Returns',
    'Payroll Processing',
    'GST Calculations',
    'Financial Reporting',
    'Business Advisory'
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/api/placeholder/150/50" 
              alt="Prime Balance Advisory" 
              className="h-12"
            />
            <p className="text-gray-300 mt-4">
              Your trusted partner in business success. We provide comprehensive accounting 
              and administrative services to help your business thrive.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-gray-300 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-300" />
                <a 
                  href="tel:0405856365" 
                  className="text-gray-300 hover:text-white transition"
                >
                  0405 856 365
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-300" />
                <a 
                  href="mailto:pbaadvisory@gmail.com" 
                  className="text-gray-300 hover:text-white transition"
                >
                  pbaadvisory@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-gray-300" />
                <span className="text-gray-300">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gray-300" />
                <span className="text-gray-300">
                  Melbourne, VIC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prime Balance Advisory. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;