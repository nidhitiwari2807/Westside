import React from "react";
import Trending from "../components/Trending";
import HeroSection from "../Components/Categories";
import CategoryScroll from "../components/Categories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryScroll />
      <Trending />
    </div>
  );
}
