import styles from "./Headphones.module.scss";

const HeadphonesCard = ({
  id,
  src,
  alt,
  title,
  value,
  price,
  oldPrice,
  sale,
  heart,
  star,
  altStar,
  salePrice,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <img className={styles.cardImg} src={src} alt={alt} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardInfoLeft}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardRating}>
              <img className={styles.cardRatingStar} src={star} alt={altStar} />
              <span className={styles.cardRatingValue}>{value}</span>
            </div>
          </div>
          <div className={styles.cardPrices}>
            <span
              className={`${styles.cardPrice} ${
                id === 4 ? styles.cardPriceRed : ""
              }`}
            >
              {price}
            </span>
            {oldPrice && (
              <span className={styles.cardPriceOld}>{oldPrice}</span>
            )}
            {salePrice && (
              <span className={styles.cardPriceSale}>{salePrice}</span>
            )}
          </div>
          {sale && (
            <div className={styles.cardSale}>
              <span className={styles.cardSaleValue}>{sale}</span>
            </div>
          )}
        </div>
      </div>
      <button className={styles.heart}>
        <img src={heart} alt="Избранное" />
      </button>
    </article>
  );
};

export default HeadphonesCard;
