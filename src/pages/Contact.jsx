import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975913387-4be7ef0b3d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl sm:text-6xl font-bold text-center"
          >
            Get in Touch
          </motion.h1>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 px-6 gap-10">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 bg-gray-100 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
              Send Message
            </button>
          </form>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Info</h2>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Fashion Street, New York, NY 10001
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> contact@hmfashion.com
          </p>

          
          <div className="flex space-x-4 mt-6 text-gray-700">
            <FaFacebookF className="hover:text-red-600 cursor-pointer transition" size={20} />
            <FaInstagram className="hover:text-red-600 cursor-pointer transition" size={20} />
            <FaTwitter className="hover:text-red-600 cursor-pointer transition" size={20} />
            <FaLinkedinIn className="hover:text-red-600 cursor-pointer transition" size={20} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
