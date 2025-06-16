import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely exceptional work! Sashback Construction transformed our living room with beautiful hardwood floors. The attention to detail and professionalism was outstanding. Highly recommend!"
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      review: "The team did an amazing job with our kitchen tile work. They were punctual, clean, and the quality of their craftsmanship exceeded our expectations. Will definitely hire them again."
    },
    {
      name: "Emily Chen",
      rating: 5,
      review: "From start to finish, the entire process was smooth and professional. The luxury vinyl planks they installed look incredible and have held up beautifully. Great value for the quality!"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <FaStar 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-near-black mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <StarRating rating={review.rating} />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-near-black text-lg">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-pastel-green rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-near-black mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-gray-700 mb-6">
              Experience the Sashback Construction difference. Quality workmanship, 
              professional service, and results that exceed expectations.
            </p>
            <button className="bg-white text-near-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 