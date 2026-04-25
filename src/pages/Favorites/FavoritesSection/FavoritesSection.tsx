import HeadphonesCard from "@/components/Headphones/HeadphonesCard/HeadphonesCard";
import headphonesCardData from "@/components/Headphones/HeadphonesCard/headphonesCardData";

import type { Favorite, ToggleFavorite } from "@/types/favorite";

import styles from "./FavoritesSection.module.scss";
import { useTranslation } from "react-i18next";

type FavoritesSectionProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const FavoritesSection = ({
  favorites,
  toggleFavorite,
}: FavoritesSectionProps) => {
  const { t } = useTranslation();

  const headphonesItems = headphonesCardData.filter(
    (el) => el.type === "headphones",
  );
  const wirelessItem = headphonesCardData.filter(
    (el) => el.type === "wireless",
  );

  const favoriteHeadphones = headphonesItems.filter((el) =>
    favorites.some((f) => f.id === el.id && f.type === el.type),
  );

  const favoriteWireless = wirelessItem.filter((el) =>
    favorites.some((f) => f.id === el.id && f.type === el.type),
  );

  return (
    <>
      <h2 className={styles.title}>{t("favorites.title")}</h2>
      <section
        className={`${!!favoriteHeadphones.length ? styles.headphones : ""}`}
      >
        {!!favoriteHeadphones.length ? (
          <h2 className={styles.headphonesTitle}>
            {t("favorites.categories.headphones")}
          </h2>
        ) : null}
        <div className={styles.headphonesGrid}>
          {!!favoriteHeadphones.length
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
      <section
        className={`${!!favoriteWireless.length ? styles.wireless : ""}`}
      >
        {!!favoriteWireless.length ? (
          <h2 className={styles.wirelessTitle}>
            {t("favorites.categories.wireless")}
          </h2>
        ) : null}

        <div className={styles.wirelessGrid}>
          {!!favoriteWireless.length
            ? favoriteWireless.map((el) => (
                <HeadphonesCard
                  key={el.id}
                  {...el}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default FavoritesSection;
