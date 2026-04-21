import HeadphonesCard from "./HeadphonesCard/HeadphonesCard";

import headphonesCardData from "./HeadphonesCard/headphonesCardData";

import type { Favorite, ToggleFavorite } from "@/types/favorite";

import styles from "./Headphones.module.scss";
import { useTranslation } from "react-i18next";

type HeadphonesProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Headphones = ({ favorites, toggleFavorite }: HeadphonesProps) => {
  const { t } = useTranslation();

  const headphonesItems = headphonesCardData.filter(
    (el) => el.type === "headphones",
  );
  const wirelessItem = headphonesCardData.filter(
    (el) => el.type === "wireless",
  );

  return (
    <>
      <section className={styles.headphones}>
        <h2 className={styles.title}>{t("headphones.title")}</h2>
        <div className={styles.grid}>
          {headphonesItems.map((el) => {
            return (
              <HeadphonesCard
                key={el.id}
                {...el}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            );
          })}
        </div>
      </section>
      <section className={styles.wireless}>
        <h2 className={styles.title}>{t("headphones.wirelessTitle")}</h2>
        <div className={styles.grid}>
          {wirelessItem.map((el) => {
            return (
              <HeadphonesCard
                key={el.id}
                {...el}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Headphones;
