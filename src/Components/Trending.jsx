import React from "react";
import { motion } from "framer-motion";

 function Trending() {
  const trends = [
    {
      title: "Urban Streetwear",
      img: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      desc: "Oversized tees, cargo pants & sneakers for the ultimate street look.",
    },
    {
      title: "Elegant Evening",
      img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
      desc: "Glamorous outfits perfect for parties & events.",
    },
    {
      title: "Sporty Essentials",
      img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      desc: "Performance wear designed for comfort & movement.",
    },
    {
      title: "Classic Denim",
      img: "https://plus.unsplash.com/premium_photo-1713483533285-fcab8ce2a705?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      desc: "Denim jackets, jeans & shirts that never go out of style.",
    },
    {
      title: "Accessories Trend",
      img: "https://images.unsplash.com/photo-1597737175203-3b86b744081a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      desc: "Stylish bags, belts, and jewelry to complete your look.",
    },
    {
      title: "Footwear Faves",
      img: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
      desc: "Trendy sneakers, heels & boots that make a statement.",
    },
  ];

  // Animation Variants
  const headingVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.4 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotate: -5 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-white py-20">
     
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
          animate={{
            textShadow: [
              "0 0 5px #f00",
              "0 0 20px #ff0",
              "0 0 5px #f00",
              "0 0 20px #ff0",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Trending <span className="text-red-500">Collections</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Explore our top fashion picks — curated styles designed to make every look iconic.
        </motion.p>
      </motion.div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-16">
        {trends.map((trend, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow: "0px 10px 25px rgba(255,0,0,0.4)",
            }}
            className="bg-white/10 backdrop-blur-md border border-gray-500 rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 hover:shadow-2xl"
          >
            <div className="relative">
              <motion.img
                src={trend.img}
                alt={trend.title}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
            </div>

            <div className="p-6 text-center text-white">
              <motion.h3
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold mb-3 text-red-400"
              >
                {trend.title}
              </motion.h3>
              <p className="text-gray-200 text-sm mb-5">{trend.desc}</p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 15px rgba(255,0,0,0.6)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md"
              >
                Explore
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Section (unchanged) */}
      <div className="relative mt-16 h-[450px] sm:h-[550px] overflow-hidden">
        <video
          src="/videos/videoooosssss.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Redefine Fashion Every Day 👗
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white max-w-xl mx-auto text-base sm:text-lg"
          >
            Fashion isn’t just about clothes — it’s about expression, comfort, and confidence.
            Discover the looks that speak your style.
          </motion.p>
        </div>
      </div>
    </div>
  );
}


export default Trending;

