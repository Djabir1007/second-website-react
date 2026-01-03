import styles from "./Wireless.module.scss";
import WirelessCard from "./WirelessCard/WirelessCard";
import wirelessCardData from "./WirelessCard/wirelessCardData";

const Wireless = ({ favorites, toggleFavorite }) => {
  return (
    <section className={styles.wireless}>
      <h2 className={styles.title}>Беспроводные наушники</h2>
      <div className={styles.grid}>
        {wirelessCardData.map((el) => {
          return (
            <WirelessCard
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

export default Wireless;
