// import React from "react";
import { motion } from "framer-motion";
// import AnimatedText from "./AnimatedText";

export default function HeroSection() {
  return (
   
    <div className="relative h-[90vh] w-full overflow-hidden">
      
      <video
        src="/videos/videos01.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

     
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl sm:text-6xl font-bold mb-4"
        >
          Discover Your Style
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-lg sm:text-2xl mb-6"
        >
          Trendy fashion for Men, Women & Accessories
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-red-700 transition"
        >
          Shop Now
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/25 px-6 py-3 rounded-lg">
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">
          Latest Trends in Fashion
        </h2>
      </div>
    </div>
  );
}
