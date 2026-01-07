import styles from "./CoversCard.module.scss";
import type { CoversCardModel } from "./coversCardData";

type CoversCardProps = Pick<CoversCardModel, "src" | "alt" | "desc">;

const CoversCard = ({ src, alt, desc }: CoversCardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.cardImg} src={src} alt={alt} />
      <p className={styles.cardDesc}>{desc}</p>
    </article>
  );
};

export default CoversCard;
