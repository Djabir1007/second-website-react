import HeadphonesCard from "./HeadphonesCard";
import HeadphonesData from "./HeadphonesData";
import styles from "./Headphones.module.scss";

const Headphones = ({ favorites, toggleFavorite }) => {
  return (
    <section className={styles.headphones}>
      <h2 className={styles.title}>Наушники</h2>
      <div className={styles.grid}>
        {HeadphonesData.map((el) => {
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
