import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
    
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">H&M</h1>
          <p className="text-gray-400 text-sm">
            Elevate your style with our curated fashion collections for men, women, and accessories.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-red-600 cursor-pointer transition">Home</li>
            <li className="hover:text-red-600 cursor-pointer transition">Shop</li>
            <li className="hover:text-red-600 cursor-pointer transition">About</li>
            <li className="hover:text-red-600 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <FaFacebookF className="hover:text-red-600 cursor-pointer transition" />
            <FaInstagram className="hover:text-red-600 cursor-pointer transition" />
            <FaTwitter className="hover:text-red-600 cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-red-600 cursor-pointer transition" />
          </div>
        </div>

       
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-400 text-sm">Get the latest fashion updates & offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md outline-none text-gray-900"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md font-semibold hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; 2025 H&M Fashion. All rights reserved.
      </div>
    </footer>
  );
}
