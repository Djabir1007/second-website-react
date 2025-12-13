import styles from "./Wireless.module.scss";

const WirelessCard = ({
  img,
  alt,
  title,
  star,
  altStar,
  ratingValue,
  price,
  favorite,
  apple,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={img} alt={alt} />
        </div>
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.rating}>
              <img src={star} alt={altStar} />
              <span className={styles.ratingValue}>{ratingValue}</span>
            </div>
          </div>
          <div className={styles.prices}>
            <span className={styles.price}>{price}</span>
          </div>
        </div>
      </div>
      <button className={styles.heart}>
        <img src={favorite} alt="Избранное" />
      </button>
      {apple && (
        <button className={styles.apple}>
          <img src={apple} alt="Продукция apple" />
        </button>
      )}
    </article>
  );
};

export default WirelessCard;
