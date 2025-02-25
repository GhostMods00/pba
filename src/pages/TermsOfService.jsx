import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
              Welcome to Prime Balance Advisory. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p>
              Please read these Terms carefully before using our services. If you do not agree with these Terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>"We", "us", "our"</strong> refers to Prime Balance Advisory.</li>
              <li><strong>"You", "your"</strong> refers to the user or client of our services.</li>
              <li><strong>"Services"</strong> refers to accounting, bookkeeping, and business advisory services provided by Prime Balance Advisory.</li>
              <li><strong>"Website"</strong> refers to our website located at [website address].</li>
              <li><strong>"Content"</strong> refers to information, text, graphics, images, and other materials displayed on our Website.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Services</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Service Description</h3>
            <p>
              Prime Balance Advisory provides accounting, bookkeeping, and business advisory services to individuals and businesses. Our services may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Bookkeeping and accounting</li>
              <li>Tax return preparation</li>
              <li>BAS and GST services</li>
              <li>Payroll management</li>
              <li>Financial reporting</li>
              <li>Business advisory services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Service Engagement</h3>
            <p>
              Before providing services, we may require you to sign a separate service agreement or engagement letter that outlines specific terms, fees, and deliverables. Such agreements will be incorporated into these Terms.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 No Guarantee</h3>
            <p>
              While we strive to provide accurate and reliable services, we cannot guarantee specific outcomes, including but not limited to tax savings or business performance improvements.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Your Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Accurate Information</h3>
            <p>
              You are responsible for providing accurate, complete, and timely information necessary for us to perform our services. We rely on the information you provide and are not responsible for verifying its accuracy unless specifically engaged to do so.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Compliance with Laws</h3>
            <p>
              You agree to use our services in compliance with all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Confidentiality</h3>
            <p>
              You agree to keep confidential any proprietary information, methodologies, or systems we disclose to you during the provision of our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Fees and Payment</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Fees</h3>
            <p>
              Our fees will be agreed upon before services are provided, either in a service agreement, engagement letter, or through written communication. Fees may be based on hourly rates, fixed fees, or other arrangements as agreed.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Payment Terms</h3>
            <p>
              Payment terms will be specified in our invoices or service agreements. Generally, payments are due within 14 days of invoice date unless otherwise specified.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Late Payments</h3>
            <p>
              We reserve the right to charge interest on late payments at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Our Intellectual Property</h3>
            <p>
              All content on our Website, including but not limited to text, graphics, logos, images, software, and code, is our property or the property of our licensors and is protected by Australian and international intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our Website for personal and non-commercial purposes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Restrictions</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from our Website</li>
              <li>Use our Website or Content for any commercial purpose without our express written consent</li>
              <li>Remove any copyright, trademark, or other proprietary notices from our Website or Content</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">7.1 No Warranties</h3>
            <p>
              Our Website and services are provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation of our Website or the accuracy, completeness, or reliability of the content.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use or inability to use our Website or services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any errors or omissions in our content</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Cap on Liability</h3>
            <p>
              Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the total amount paid by you for the services giving rise to such claim in the 12 months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Prime Balance Advisory, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Termination by You</h3>
            <p>
              You may terminate our services at any time by providing written notice, subject to the payment of any outstanding fees for services rendered.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Termination by Us</h3>
            <p>
              We may terminate or suspend your access to our services, with or without notice, for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use our services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to, ownership provisions, warranty disclaimers, and limitations of liability.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">10.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Victoria, Australia, without regard to its conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.2 Dispute Resolution</h3>
            <p>
              Any dispute arising out of or in connection with these Terms or our services shall first be attempted to be resolved by good faith negotiation. If such negotiation fails, the dispute shall be submitted to mediation in accordance with the rules of the Australian Disputes Centre. If mediation is unsuccessful, the parties may pursue their rights and remedies in the courts of Victoria, Australia.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our Website. Your continued use of our Website or services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. General Provisions</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">12.1 Entire Agreement</h3>
            <p>
              These Terms, together with any applicable service agreements or engagement letters, constitute the entire agreement between you and us regarding the use of our services and supersede all prior agreements and understandings.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.3 No Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms without our prior written consent. We may assign or transfer these Terms at our discretion without restriction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="my-4">
              <strong>Prime Balance Advisory</strong><br />
              Email: pbaadvisory@gmail.com<br />
              Phone: 0405 856 365
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;