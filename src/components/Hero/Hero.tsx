import { iphone13ProMaxSilver } from "@/assets/img";

import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <p className={styles.desc}>{t("hero.accessoriesFor")}</p>
          <p className={styles.desc}>Iphone 13 Pro Max</p>
        </div>
        <img
          className={styles.img}
          src={iphone13ProMaxSilver}
          alt={t("hero.iphone13ProMaxAlt")}
        />
      </div>
    </section>
  );
};

export default Hero;
