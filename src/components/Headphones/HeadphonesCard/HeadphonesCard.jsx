import { Link } from "react-router-dom";
import styles from "./HeadphonesCard.module.scss";

const HeadphonesCard = ({
  id,
  type,
  src,
  alt,
  title,
  value,
  price,
  oldPrice,
  sale,
  rating,
  altStar,
  salePrice,
  favorites,
  toggleFavorite,
}) => {
  const isFavorite = favorites.some((el) => el.id === id && el.type === type);

  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <Link to={"/product"}>
            <img className={styles.cardImg} src={src} alt={alt} />
          </Link>
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardInfoLeft}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardRating}>
              <img
                className={styles.cardRatingStar}
                src={rating}
                alt={altStar}
              />
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
      <button
        className={`${styles.heart} ${isFavorite ? styles.active : ""}`}
        onClick={() => toggleFavorite(id, type)}
      >
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.999 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898Z" />
        </svg>
      </button>
    </article>
  );
};

export default HeadphonesCard;
