import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-black" size={20} />
                  <a href="tel:0405856365" className="text-gray-600 hover:text-black">
                    0405 856 365
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-black" size={20} />
                  <a href="mailto:pbaadvisory@gmail.com" className="text-gray-600 hover:text-black">
                    pbaadvisory@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input-field"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="input-field"
            />
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
