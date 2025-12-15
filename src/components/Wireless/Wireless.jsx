import styles from "./Wireless.module.scss";
import WirelessCard from "./WirelessCard";
import WirelessData from "./WirelessData";

const Wireless = () => {
  return (
    <section className={styles.wireless}>
      <h2 className={styles.title}>Беспроводные наушники</h2>
      <div className={styles.grid}>
        {WirelessData.map((el) => {
          return (
            <WirelessCard
              key={el.id}
              img={el.img}
              alt={el.alt}
              title={el.title}
              star={el.icon}
              altStar={el.altStar}
              ratingValue={el.value}
              price={el.price}
              apple={el.apple}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Wireless;
