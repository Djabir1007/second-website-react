// Components
import HeadphonesCard from "./HeadphonesCard/HeadphonesCard";

// Data
import headphonesCardData from "./HeadphonesCard/headphonesCardData";

// Types
import type { Favorite, ToggleFavorite } from "@/types/favorite";

// Styles
import styles from "./Headphones.module.scss";

type HeadphonesProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Headphones = ({ favorites, toggleFavorite }: HeadphonesProps) => {
  const headphonesItems = headphonesCardData.filter(
    (el) => el.type === "headphones",
  );
  const wirelessItem = headphonesCardData.filter(
    (el) => el.type === "wireless",
  );

  return (
    <>
      <section className={styles.headphones}>
        <h2 className={styles.title}>Наушники</h2>
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
        <h2 className={styles.title}>Беспроводные наушники</h2>
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
