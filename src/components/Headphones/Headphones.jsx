import HeadphonesCard from "./HeadphonesCard/HeadphonesCard";
import headphonesCardData from "./HeadphonesCard/headphonesCardData";
import styles from "./Headphones.module.scss";

const Headphones = ({ favorites, toggleFavorite }) => {
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
