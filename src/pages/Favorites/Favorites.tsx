import FavoritesSection from "./FavoritesSection/FavoritesSection";

import type { Favorite, ToggleFavorite } from "@/types/favorite";

import styles from "./Favorites.module.scss";
import { useTranslation } from "react-i18next";

type FavoritesProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Favorites = ({ favorites, toggleFavorite }: FavoritesProps) => {
  const { t } = useTranslation();

  return (
    <>
      {!!favorites.length ? (
        <FavoritesSection
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <div className={styles.favoritesInfo}>
          <h1 className={styles.infoTitle}>{t("favorites.empty")}</h1>
        </div>
      )}
    </>
  );
};

export default Favorites;
