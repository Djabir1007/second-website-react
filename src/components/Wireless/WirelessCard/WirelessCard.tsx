// Router
import { Link } from "react-router-dom";

// Types
import type { Favorite, ToggleFavorite } from "@/types/favorite";
import type { WirelessCardModel } from "./wirelessCardData";

// Styles
import styles from "./WirelessCard.module.scss";

type WirelessCardProps = Pick<
  WirelessCardModel,
  | "id"
  | "type"
  | "img"
  | "alt"
  | "title"
  | "star"
  | "altStar"
  | "ratingValue"
  | "price"
  | "apple"
> & {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const WirelessCard = ({
  id,
  type,
  img,
  alt,
  title,
  star,
  altStar,
  ratingValue,
  price,
  apple,
  favorites,
  toggleFavorite,
}: WirelessCardProps) => {
  const isFavorite = favorites.some((el) => el.id === id && el.type === type);
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Link to={`/product/${type}/${id}`}>
            <img src={img} alt={alt} />
          </Link>
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
            <span className={styles.price}>{`${price} ${
              id === 1 ? "₸" : "KZT"
            }`}</span>
          </div>
        </div>
      </div>
      <button
        className={`${styles.heart} ${isFavorite ? styles.active : ""}`}
        onClick={() => {
          toggleFavorite(id, type);
        }}
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
      {apple && (
        <button className={styles.apple}>
          <img src={apple} alt="Продукция apple" />
        </button>
      )}
    </article>
  );
};

export default WirelessCard;
