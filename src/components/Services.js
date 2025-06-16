import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaHammer, FaLayerGroup, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLayerGroup className="w-12 h-12 text-green-600" />,
      title: "Luxury Vinyl Planks",
      description: "Premium luxury vinyl plank installation with expert precision and attention to detail for lasting beauty and durability."
    },
    {
      icon: <FaHome className="w-12 h-12 text-green-600" />,
      title: "Hardwood Installation",
      description: "Professional hardwood flooring installation using the finest materials and time-tested techniques for exceptional results."
    },
    {
      icon: <FaTools className="w-12 h-12 text-green-600" />,
      title: "Tile Work",
      description: "Comprehensive tile installation services including ceramic, porcelain, and natural stone for kitchens, bathrooms, and more."
    },
    {
      icon: <FaHammer className="w-12 h-12 text-green-600" />,
      title: "Carpentry",
      description: "Custom carpentry solutions including trim work, built-ins, and structural modifications with meticulous craftsmanship."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-near-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From flooring to custom carpentry, we deliver exceptional results with every project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-near-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Need something else? We handle a wide range of construction projects.
          </p>
          <button className="btn-primary">
            Get A Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 