import headphonesData from "../../components/Headphones/HeadphonesData";
import HeadphonesCard from "../../components/Headphones/HeadphonesCard";
import styles from "./Favorites.module.scss";

const Favorites = ({ favorites, toggleFavorite }) => {
  const favoriteHeadphones = headphonesData.filter((el) =>
    favorites.includes(el.id)
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
        <div className={styles.wirelessGrid}></div>
      </section>
    </>
  );
};

export default Favorites;
