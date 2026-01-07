import HeadphonesCard from "./HeadphonesCard/HeadphonesCard";
import headphonesCardData from "./HeadphonesCard/headphonesCardData";
import styles from "./Headphones.module.scss";
import type { Favorite } from "../../types/favorite";
import type { ToggleFavorite } from "../../types/favorite";

type HeadphonesProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Headphones = ({ favorites, toggleFavorite }: HeadphonesProps) => {
  return (
    <section className={styles.headphones}>
      <h2 className={styles.title}>Наушники</h2>
      <div className={styles.grid}>
        {headphonesCardData.map((el) => {
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
  );
};

export default Headphones;
