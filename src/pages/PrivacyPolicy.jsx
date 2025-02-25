import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Last Updated: February 25, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to Prime Balance Advisory's Privacy Policy. This document outlines how we collect, use, store, and protect your personal information when you use our website and services.
            </p>
            <p>
              Prime Balance Advisory ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy applies to our website, services, and all related tools and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Contact Information</strong>: Name, email address, phone number, and postal address</li>
              <li><strong>Business Information</strong>: Business name, ABN/ACN, industry, number of employees</li>
              <li><strong>Financial Information</strong>: Bank account details, payment information, financial statements (only when necessary for providing our services)</li>
              <li><strong>Communication Records</strong>: Records of communications between you and us</li>
              <li><strong>Website Usage Information</strong>: Information about how you use our website</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 How We Collect Information</h3>
            <p>We collect information through:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Direct interactions when you contact us or use our services</li>
              <li>Forms you complete on our website</li>
              <li>Automated technologies such as cookies and similar tracking technologies</li>
              <li>Third-party service providers (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and manage the services you request</li>
              <li>Communicate with you about our services</li>
              <li>Process payments and maintain accounting records</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve our website and services</li>
              <li>Send you information about services that may interest you (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal information based on:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your consent</li>
              <li>The necessity to perform our contract with you</li>
              <li>Our legitimate business interests</li>
              <li>Compliance with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who assist us in providing our services</li>
              <li>Professional advisors such as lawyers, accountants, and insurers</li>
              <li>Government bodies and regulatory authorities when required by law</li>
              <li>Third parties in connection with a business transition (e.g., merger or acquisition)</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access and receive a copy of your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
              <li>Right to complain to a supervisory authority</li>
            </ul>
            <p>To exercise these rights, please contact us using the details provided in Section 12.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. International Data Transfers</h2>
            <p>
              We primarily store your data in Australia. However, some of our service providers may process your information internationally. When we transfer your information internationally, we ensure appropriate safeguards are in place.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The most current version will always be posted on our website with the effective date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p className="my-4">
              <strong>Prime Balance Advisory</strong><br />
              Email: pbaadvisory@gmail.com<br />
              Phone: 0405 856 365
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Additional Information for Australian Residents</h2>
            <p>
              We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). For more information about your privacy rights in Australia, visit the Office of the Australian Information Commissioner's website at <a href="https://www.oaic.gov.au" className="text-blue-600 hover:underline">www.oaic.gov.au</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;