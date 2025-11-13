import React from "react";
import { Router, Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer /> 
    </>
  );
}

export default App;
