import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent z-10">
   
      <Link to="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" className="w-24 h-auto"/>
          </Link>

     
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search for trends, outfits..."
          className="w-full py-2 pl-10 pr-4 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <FaSearch className="absolute left-3 top-3 text-white/80" />
      </div>

    
      <ul className="flex space-x-8 text-white font-semibold">
        <li className="hover:text-red-400 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-400 transition">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="hover:text-red-400 transition">
          <Link to="/trending">Trending</Link>
        </li>
        <li className="hover:text-red-400 transition">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
