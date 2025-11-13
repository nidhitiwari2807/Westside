import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CategoryScroll = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotateY: 60 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const categories = [
    {
      title: "👗 Women's Fashion",
      desc: "Trendy outfits for every occasion.",
    },
    {
      title: "👕 Men's Collection",
      desc: "Style that defines confidence.",
    },
    {
      title: "👜 Accessories",
      desc: "Add flair to your every look.",
    },
    {
      title: "👟 Shoes & Sneakers",
      desc: "Step out in comfort and style.",
    },
    {
      title: "🧸 Kids Wear",
      desc: "Cute, comfy, and colorful picks.",
    },
    
    
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black py-12 px-4 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-8">
        ✨ Shop by <span className="text-red-500">Category</span>
      </h1>

     
      <div className="flex flex-col items-center gap-16">
        {categories.map((cat, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-gray-800 text-white w-full sm:w-3/4 lg:w-1/2 py-12 rounded-2xl 
                       text-center shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-semibold">{cat.title}</h2>
            <p className="text-gray-400 mt-3 text-lg">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroll;