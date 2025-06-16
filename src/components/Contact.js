import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-near-black mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-near-black mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pastel-green focus:outline-none transition-all duration-300 peer"
                    placeholder=" "
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.name || focusedField === 'name'
                      ? '-top-2 text-sm bg-white px-2 text-green-600'
                      : 'top-3 text-gray-500'
                  }`}>
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pastel-green focus:outline-none transition-all duration-300 peer"
                    placeholder=" "
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.email || focusedField === 'email'
                      ? '-top-2 text-sm bg-white px-2 text-green-600'
                      : 'top-3 text-gray-500'
                  }`}>
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pastel-green focus:outline-none transition-all duration-300 peer resize-none"
                    placeholder=" "
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message || focusedField === 'message'
                      ? '-top-2 text-sm bg-white px-2 text-green-600'
                      : 'top-3 text-gray-500'
                  }`}>
                    Project Details
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-pastel-green text-near-black py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-200 hover:shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-near-black mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-pastel-green p-3 rounded-full">
                      <FaPhone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-near-black">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-pastel-green p-3 rounded-full">
                      <FaEnvelope className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-near-black">Email</h4>
                      <p className="text-gray-600">info@sashbackconstruction.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-pastel-green p-3 rounded-full">
                      <FaMapMarkerAlt className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-near-black">Service Area</h4>
                      <p className="text-gray-600">Greater Metro Area</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-near-black mb-4">Service Area Map</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                  {/* You can replace this with a real Google Maps embed */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 