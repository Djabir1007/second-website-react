import styles from "./Covers.module.scss";

const CoversCard = ({ src, alt, desc }) => {
  return (
    <article className={styles.card}>
      <img className={styles.cardImg} src={src} alt={alt} />
      <p className={styles.cardDesc}>{desc}</p>
    </article>
  );
};

export default CoversCard;
