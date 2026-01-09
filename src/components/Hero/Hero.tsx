// Assets
import { iphone13ProMaxSilver } from "@/assets/img";

// Styles
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <p className={styles.desc}>Аксессуары для</p>
          <p className={styles.desc}>Iphone 13 Pro Max</p>
        </div>
        <img
          className={styles.img}
          src={iphone13ProMaxSilver}
          alt="Айфон 13 про макс"
        />
      </div>
    </section>
  );
};

export default Hero;
