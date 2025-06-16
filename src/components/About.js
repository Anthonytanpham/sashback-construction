import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-near-black mb-12 text-center">
            Built on Trust & Craftsmanship
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With over two decades of experience in the construction industry, Sashback Construction has built 
              a reputation for delivering exceptional craftsmanship and unparalleled quality. Our team of skilled 
              professionals brings expertise, attention to detail, and a commitment to excellence to every project 
              we undertake.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We believe that professionalism is the cornerstone of successful construction projects. From the 
              initial consultation to the final walkthrough, we maintain clear communication, respect deadlines, 
              and ensure that every aspect of your project meets our high standards. Our licensed and insured 
              team works with precision and care, treating your property as if it were our own.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              As a locally owned and operated business, we take pride in serving our community and building 
              lasting relationships with our clients. Our dedication to quality workmanship, competitive pricing, 
              and customer satisfaction has made us the trusted choice for residential and commercial construction 
              projects throughout the region.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-green-600 mb-2">20+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-green-600 mb-2">500+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-green-600 mb-2">100%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 