import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Trophy, TrendingUp, GraduationCap, Briefcase, Award, Globe, Building, FileText } from 'lucide-react';

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

  const professionalJourney = [
    {
      year: "2010-2014",
      achievement: "Began career at Ernst & Young as Audit Trainee, promoted to Senior Audit Associate",
      icon: Building
    },
    {
      year: "2014-2017",
      achievement: "Senior Auditor at Baker Tilly Brazil, expanding audit expertise",
      icon: Briefcase
    },
    {
      year: "2017",
      achievement: "Relocated to Australia and commenced Bachelor's in Business Accounting at King's Own Institute",
      icon: Globe
    },
    {
      year: "2020",
      achievement: "Completed Bachelor's degree and began CPA program",
      icon: GraduationCap
    },
    {
      year: "2025-Present",
      achievement: "Founded Prime Balance Advisory",
      icon: Award
    }
  ];

  const expertise = [
    {
      area: "Accounting Systems",
      skills: "Xero, MYOB, SAP"
    },
    {
      area: "Standards & Regulations",
      skills: "IFRS, US GAAP, PCAOB, SOX compliance"
    },
    {
      area: "Industries",
      skills: "Real Estate, Manufacturing, Small Business"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Prime Balance Advisory</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in business success. We provide comprehensive accounting 
              and administrative services to help your business thrive in today's competitive environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="/assets/images/Leticia.jpeg" 
                alt="Leticia - Founder" 
                className="rounded-lg shadow-xl object-cover w-full max-w-md mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-lg">
                <p className="text-white text-xl font-bold">Leticia</p>
                <p className="text-gray-300">Founder & Principal Accountant</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Meet Leticia</h2>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in accounting and auditing, Leticia has established herself as a trusted financial consultant for businesses across Australia. Originally from Brazil, she brings a wealth of international experience and a fresh perspective to the accounting industry.
              </p>
              <p className="text-gray-600 mb-4">
                After an impressive career at leading firms including Ernst & Young and Baker Tilly in Brazil, Leticia relocated to Australia in 2017 to pursue her Bachelor's degree in Business Accounting at King's Own Institute, which she completed in 2020. She is currently advancing her qualifications through the CPA program.
              </p>
              <p className="text-gray-600 mb-6">
                Leticia founded Prime Balance Advisory with a passion for the business world and a commitment to helping clients improve their operations. Her diverse experience across accounting, bookkeeping, and administration enables her to provide comprehensive financial solutions tailored to each client's unique needs.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                      <p className="font-semibold text-black">{item.area}</p>
                      <p className="text-gray-600 text-sm">{item.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Professional Journey Section - Improved Mobile Friendly Timeline */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
    
    <div className="relative">
      {/* Timeline line - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
      
      <div className="space-y-12">
        {professionalJourney.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center"
          >
            {/* For desktop: Left content or empty space */}
            <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-3 md:pl-8 md:text-left'}`}>
              {index % 2 === 0 ? (
                <>
                  <h3 className="text-xl font-bold text-black">{item.year}</h3>
                  <p className="text-gray-600">{item.achievement}</p>
                </>
              ) : null}
            </div>
            
            {/* Center icon - always visible */}
            <div className={`z-10 flex-shrink-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="bg-black p-3 rounded-full">
                <item.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* For desktop: Right content or empty space */}
            <div className={`hidden md:block md:w-1/2 ${index % 2 === 1 ? 'md:text-left md:pl-8 md:order-1' : 'md:order-3'}`}>
              {index % 2 === 1 ? (
                <>
                  <h3 className="text-xl font-bold text-black">{item.year}</h3>
                  <p className="text-gray-600">{item.achievement}</p>
                </>
              ) : null}
            </div>
            
            {/* Mobile only content - hidden on desktop */}
            <div className="md:hidden text-center mt-4">
              <h3 className="text-xl font-bold text-black">{item.year}</h3>
              <p className="text-gray-600">{item.achievement}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* International Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">International Experience</h2>
              <p className="text-gray-600 mb-4">
                Leticia's career began at Ferrolene S/A, a prominent metal company in Brazil, where she managed essential accounting tasks using the SAP system for three years. Her career quickly advanced when she joined Ernst & Young as an Audit Trainee in 2010.
              </p>
              <p className="text-gray-600 mb-4">
                After three years of exceptional performance, she was promoted to Senior Audit Associate at EY, where she reviewed and led workpapers for the audit team. Her client portfolio included major Brazilian real estate companies like Cyrela, Eztec, and Gafisa—publicly listed companies with annual revenues exceeding $2.5 billion—as well as manufacturing firms like Formitex Group.
              </p>
              <p className="text-gray-600 mb-4">
                At EY, Leticia applied US GAAP, PCAOB auditing standards, IFRS, and SEC regulations to ensure the highest audit standards. After four successful years, she transitioned to Baker Tilly Brazil as a Senior Auditor, further expanding her expertise with a diverse client base.
              </p>
              <p className="text-gray-600">
                Since relocating to Australia, Leticia has gained local experience at Emanuel Synagogue as an Accounting Assistant and at Boating Syndication Australia as an Assistant Accountant and Administrator, developing proficiency with Xero and Australian accounting practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative order-1 md:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                  <Globe className="w-10 h-10 text-black mb-3" />
                  <h3 className="font-semibold text-lg">International Perspective</h3>
                  <p className="text-gray-600 text-sm">Bringing global accounting insights to Australian businesses</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                  <Building className="w-10 h-10 text-black mb-3" />
                  <h3 className="font-semibold text-lg">Big 4 Experience</h3>
                  <p className="text-gray-600 text-sm">Professional standards from Ernst & Young</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                  <FileText className="w-10 h-10 text-black mb-3" />
                  <h3 className="font-semibold text-lg">Multilingual</h3>
                  <p className="text-gray-600 text-sm">Services available in English and Portuguese</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                  <Award className="w-10 h-10 text-black mb-3" />
                  <h3 className="font-semibold text-lg">Continuing Education</h3>
                  <p className="text-gray-600 text-sm">Currently pursuing CPA qualification</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-3xl font-bold text-black mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <p className="text-gray-600 mb-4">
                At Prime Balance Advisory, we leverage Leticia's extensive experience across international and Australian accounting practices to provide comprehensive solutions for businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you need assistance with day-to-day bookkeeping, complex financial reporting, tax optimization, or strategic business advice, we have the expertise to help your business thrive.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">We Specialize In:</h3>
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
                src="/assets/images/Services.jpg" 
                alt="Accounting Services" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Individual Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-black w-5 h-5 mt-1" />
                    <div>
                      <span className="font-medium">Personal Tax Returns</span>
                      <p className="text-gray-600 text-sm">Comprehensive tax preparation services for individuals</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-black w-5 h-5 mt-1" />
                    <div>
                      <span className="font-medium">Investment Property Analysis</span>
                      <p className="text-gray-600 text-sm">Detailed financial analysis for property investors</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-black w-5 h-5 mt-1" />
                    <div>
                      <span className="font-medium">Retirement Planning</span>
                      <p className="text-gray-600 text-sm">Strategic financial planning for retirement</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-black w-5 h-5 mt-1" />
                    <div>
                      <span className="font-medium">Small Business Accounting</span>
                      <p className="text-gray-600 text-sm">Comprehensive bookkeeping and accounting for SMEs</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-black w-5 h-5 mt-1" />
                    <div>
                      <span className="font-medium">Business Structure Setup</span>
                      <p className="text-gray-600 text-sm">Advice on optimal business structures for tax efficiency</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-black w-5 h-5 mt-1" />
                    <div>
                      <span className="font-medium">Growth Strategy Consulting</span>
                      <p className="text-gray-600 text-sm">Financial guidance for business expansion</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
    <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 inline-block">
      Contact Us Today
    </Link>
  </div>
</section>
    </div>
  );
};

export default About;