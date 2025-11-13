import React from "react";
import Trending from "../Components/Trending";
import HeroSection from "../Components/Categories";
import CategoryScroll from "../Components/Categories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryScroll />
      <Trending />
    </div>
  );
}
