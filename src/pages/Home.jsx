import React from "react";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import HeroSection from "../Components/Categories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Trending />
    </div>
  );
}
