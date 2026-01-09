// Components
import Hero from "@/components/Hero/Hero";
import Covers from "@/components/Covers/Covers";
import Headphones from "@/components/Headphones/Headphones";
import Wireless from "@/components/Wireless/Wireless";

// Types
import type { Favorite, ToggleFavorite } from "@/types/favorite";

type HomeProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Home = ({ favorites, toggleFavorite }: HomeProps) => {
  return (
    <>
      <Hero />
      <Covers />
      <Headphones favorites={favorites} toggleFavorite={toggleFavorite} />
      <Wireless favorites={favorites} toggleFavorite={toggleFavorite} />
    </>
  );
};

export default Home;
