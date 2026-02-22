// Router
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

// Types
import type { Favorite, ToggleFavorite } from "@/types/favorite";
import type { HeadphonesCardModel } from "./headphonesCardData";

// Styles
import styles from "./HeadphonesCard.module.scss";

type HeadphonesCardProps = HeadphonesCardModel & {
  favorites: Favorite[];
  toggleFavorite: ToggleFavorite;
};

const HeadphonesCard = ({
  favorites,
  toggleFavorite,
  ...card
}: HeadphonesCardProps) => {
  const isFavorite = favorites.some(
    (el) => el.id === card.id && el.type === card.type,
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      toast.info("Удалено из избранного");
    } else {
      toast.success("Добавлено в избранное");
    }

    toggleFavorite(card.id, card.type);
  };

  return (
    <article className={styles.card}>
      <Link to={`/product/${card.type}/${card.id}`}>
        <div className={styles.cardContent}>
          <div className={styles.cardImage}>
            <img className={styles.cardImg} src={card.img} alt={card.alt} />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardInfoLeft}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.cardRating}>
                <img
                  className={styles.cardRatingStar}
                  src={card.rating}
                  alt={card.altStar}
                />
                <span className={styles.cardRatingValue}>{card.value}</span>
              </div>
            </div>
            <div className={styles.cardPrices}>
              <span
                className={`${styles.cardPrice} ${
                  card.id === 4 ? styles.cardPriceRed : ""
                }`}
              >
                {`${card.price} ₸`}
              </span>
              {card.oldPrice && (
                <span
                  className={styles.cardPriceOld}
                >{`${card.oldPrice} ₸`}</span>
              )}
              {card.salePrice && (
                <span
                  className={styles.cardPriceSale}
                >{`${card.salePrice} ₸`}</span>
              )}
            </div>
            {card.sale && (
              <div className={styles.cardSale}>
                <span className={styles.cardSaleValue}>{`${card.sale}%`}</span>
              </div>
            )}
          </div>
        </div>
        <button
          className={`${styles.heart} ${isFavorite ? styles.active : ""}`}
          onClick={(e) => {
            handleFavoriteClick();
            e.preventDefault();
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
        {card.apple && (
          <button className={styles.apple}>
            <img src={card.apple} alt="Продукция apple" />
          </button>
        )}
      </Link>
    </article>
  );
};

export default HeadphonesCard;
