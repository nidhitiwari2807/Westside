
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Trending />
    </div>
  );
}
