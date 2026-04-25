import CoversCard from "./CoversCard/CoversCard";

import coversCardData from "./CoversCard/coversCardData";

import styles from "./Covers.module.scss";
import { useTranslation } from "react-i18next";

const Covers = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.covers}>
      <h2 className={styles.title}>{t("covers.title")}</h2>
      <div className={styles.flex}>
        {coversCardData.map((el) => {
          return (
            <CoversCard
              key={el.id}
              src={el.src}
              altKey={el.altKey}
              descKey={el.descKey}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Covers;
