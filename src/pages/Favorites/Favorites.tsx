import headphonesCardData from "@/components/Headphones/HeadphonesCard/headphonesCardData";
import HeadphonesCard from "@/components/Headphones/HeadphonesCard/HeadphonesCard";
import WirelessCard from "@/components/Wireless/WirelessCard/WirelessCard";
import wirelessCardData from "@/components/Wireless/WirelessCard/wirelessCardData";
import styles from "./Favorites.module.scss";
import type { Favorite, ToggleFavorite } from "@/types/favorite";

type FavoritesProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Favorites = ({ favorites, toggleFavorite }: FavoritesProps) => {
  const favoriteHeadphones = headphonesCardData.filter((el) =>
    favorites.some((f) => f.id === el.id && f.type === el.type)
  );

  const favoriteWireless = wirelessCardData.filter((el) =>
    favorites.some((f) => f.id === el.id && f.type === el.type)
  );

  return (
    <>
      <h2 className={styles.title}>Избранное</h2>
      <section
        className={`${styles.headphones} ${
          favoriteHeadphones.length > 0 ? styles.cardMargin : ""
        }`}
      >
        <h2 className={styles.headphonesTitle}>Наушники</h2>
        <div className={styles.headphonesGrid}>
          {favoriteHeadphones.length > 0
            ? favoriteHeadphones.map((el) => (
                <HeadphonesCard
                  key={el.id}
                  {...el}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              ))
            : ""}
        </div>
      </section>
      <section className={styles.wireless}>
        <h2 className={styles.wirelessTitle}>Беспроводные наушники</h2>
        <div className={styles.wirelessGrid}>
          {favoriteWireless.length > 0
            ? favoriteWireless.map((el) => (
                <WirelessCard
                  key={el.id}
                  {...el}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              ))
            : ""}
        </div>
      </section>
    </>
  );
};

export default Favorites;
