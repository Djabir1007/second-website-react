import Hero from "../components/Hero/Hero";
import Covers from "../components/Covers/Covers";
import Headphones from "../components/Headphones/Headphones";
import Wireless from "../components/Wireless/Wireless";

const Home = ({ favorites, toggleFavorite }) => {
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
