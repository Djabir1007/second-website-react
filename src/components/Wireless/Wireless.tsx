// Components
import WirelessCard from "./WirelessCard/WirelessCard";

// Data
import wirelessCardData from "./WirelessCard/wirelessCardData";

// Types
import type { Favorite, ToggleFavorite } from "@/types/favorite";

// Styles
import styles from "./Wireless.module.scss";

type WirelessProps = {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const Wireless = ({ favorites, toggleFavorite }: WirelessProps) => {
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
