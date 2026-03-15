import FavoritesSection from "./FavoritesSection/FavoritesSection";

import type { Favorite, ToggleFavorite } from "@/types/favorite";

import styles from "./Favorites.module.scss";

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
