import FavoritesSection from "./FavoritesSection/FavoritesSection";

import styles from "./Favorites.module.scss";

import type { Favorite, ToggleFavorite } from "@/types/favorite";

type FavoritesProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Favorites = ({ favorites, toggleFavorite }: FavoritesProps) => {
  return (
    <>
      {!!favorites.length ? (
        <FavoritesSection
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <div className={styles.favoritesInfo}>
          <h1 className={styles.infoTitle}>В Избранном ничего нет!</h1>
        </div>
      )}
    </>
  );
};

export default Favorites;
