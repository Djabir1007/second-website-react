import { useTranslation } from "react-i18next";
import styles from "./CoversCard.module.scss";
import type { CoversCardModel } from "./coversCardData";

type CoversCardProps = Pick<CoversCardModel, "src" | "altKey" | "descKey">;

const CoversCard = ({ src, altKey, descKey }: CoversCardProps) => {
  const { t } = useTranslation();

  return (
    <article className={styles.card}>
      <img className={styles.cardImg} src={src} alt={t(altKey)} />
      <p className={styles.cardDesc}>{t(descKey)}</p>
    </article>
  );
};

export default CoversCard;
