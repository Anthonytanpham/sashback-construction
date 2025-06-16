import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-5 h-5" />,
      href: '#'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      href: '#'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      href: '#'
    }
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-near-black mb-2">
              Sashback Construction
            </h3>
            <p className="text-gray-600">
              © 2025 Sashback Construction. All rights reserved.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0"
          >
            <a 
              href="#" 
              className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            >
              License Info
            </a>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-green-600 hover:bg-pastel-green transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-300 text-center"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Licensed and insured construction company serving the greater metro area. 
            Specializing in flooring, carpentry, and custom construction solutions. 
            Contact us today for your free consultation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 