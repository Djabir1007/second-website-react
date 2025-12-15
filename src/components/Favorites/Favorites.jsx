import styles from "./Favorites.module.scss";

const Favorites = () => {
  return (
    <>
      <h2 className={styles.title}>Избранное</h2>
      <section className={styles.headphones}>
        <h2 className={styles.headphonesTitle}>Наушники</h2>
        <div className={styles.headphonesGrid}></div>
      </section>
      <section className={styles.wireless}>
        <h2 className={styles.wirelessTitle}>Беспроводные наушники</h2>
        <div className={styles.wirelessGrid}></div>
      </section>
    </>
  );
};

export default Favorites;
