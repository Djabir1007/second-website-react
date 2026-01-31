// React
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

// Components
import ProductImg from "./ProductImg/ProductImg";
import ProductList from "./ProductList/ProductList";

// Data
import productImgData from "./ProductImg/productImgData";
import productListData from "./ProductList/productListData";
import wirelessCardData from "@/components/Wireless/WirelessCard/wirelessCardData";
import headphonesCardData from "@/components/Headphones/HeadphonesCard/headphonesCardData";

// Assets
import { addToCartIcon, productBrandLogo } from "@/assets/img";

// Types
import type {
  ToggleCart,
  CartItem,
  IncreaseQty,
  DecreaseQty,
} from "@/types/cart";

import type { ToggleFavorite, Favorite } from "@/types/favorite";

// Styles
import styles from "./Product.module.scss";

type ProductProps = {
  toggleCart: ToggleCart;
  cart: CartItem[];
  increaseQty: IncreaseQty;
  decreaseQty: DecreaseQty;
  toggleFavorite: ToggleFavorite;
  favorites: Favorite[];
};

const Product = ({
  toggleCart,
  cart,
  increaseQty,
  decreaseQty,
  toggleFavorite,
  favorites,
}: ProductProps) => {
  const { id, type } = useParams();

  const products =
    type === "headphones" ? headphonesCardData : wirelessCardData;

  const product = products.find(
    (el) => el.id === Number(id) && el.type === type,
  );

  if (!product) {
    return <h1 className={styles.favorites}> Такого товара нет!</h1>;
  }

  const cartItem = cart.find(
    (item) => item.id === product.id && item.type === product.type,
  );

  const isFavorite = favorites.some(
    (el) => el.id === product.id && el.type === product.type,
  );

  const handleFavClick = () => {
    if (isFavorite) {
      toast.info("Удалено из избранного");
    } else {
      toast.success("Добавлено в избранное");
    }
  };

  return (
    <>
      <section className={styles.product}>
        <h2 className={styles.productTitle}>{product.type}</h2>
        <article className={styles.productCard}>
          <div className={styles.productElements}>
            <button
              className={`${styles.productHeart} ${isFavorite ? styles.active : ""}`}
              onClick={() => {
                handleFavClick();
                toggleFavorite(product.id, product.type);
              }}
            >
              <svg
                width="24"
                height="19"
                viewBox="0 0 20 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.999 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898Z" />
              </svg>
            </button>
            <img src={productBrandLogo} alt="" />
          </div>
          <div className={styles.productGrid}>
            {productImgData.map((el) => {
              return <ProductImg key={el.id} img={el.img} />;
            })}
          </div>
          <div className={styles.productContent}>
            <h2 className={styles.productName}>{product.title}</h2>
            <div className={styles.productPrices}>
              <div className={styles.productPrice}>
                <span className={styles.priceNow}>2 927 ₸</span>
                <span className={styles.priceOld}>3 527 ₸</span>
              </div>
              <div className={styles.productPriceSale}>
                <span className={styles.percentage}>20%</span>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.details}>
        <div className={styles.detailsFlex}>
          <div className={styles.detailsContent}>
            <div className={styles.detailsTitleBlock}>
              <h3 className={styles.detailsTitle}>Описание и характеристики</h3>
            </div>
            <div className={styles.detailsListBlock}>
              <ul className={styles.detailsList}>
                {productListData.map((el) => {
                  return (
                    <ProductList
                      key={el.id}
                      description={el.description}
                      characteristic={el.characteristic}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.detailsBtns}>
            <button className={styles.detailsBtn}>Купить</button>
            {cartItem ? (
              <div className={styles.cardCounter}>
                <button
                  className={`${styles.counterBtn} `}
                  onClick={() => {
                    if (cartItem.qty === 1) {
                      toast.info("Удалено из корзины");
                    }
                    decreaseQty(product.id, product.type);
                  }}
                >
                  -
                </button>
                <span className={styles.counterValue}>{cartItem.qty}</span>
                <button
                  className={styles.counterBtn}
                  onClick={() => {
                    increaseQty(product.id, product.type);
                  }}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className={styles.detailsBtn}
                onClick={() => {
                  toast.success("Добавлено в корзину");
                  toggleCart(
                    product.id,
                    product.type,
                    product.title,
                    product.price,
                    product.img,
                  );
                }}
              >
                <img src={addToCartIcon} alt="добавить в корзину" />
                добавить в корзину
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
