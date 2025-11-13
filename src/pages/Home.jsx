import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Trending />
    </div>
  );
}
