import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import ProductImg from "./ProductImg/ProductImg";
import ProductList from "./ProductList/ProductList";

import productImgData from "./ProductImg/productImgData";
import productListData from "./ProductList/productListData";
import headphonesCardData from "@/components/Headphones/HeadphonesCard/headphonesCardData";

import { addToCartIcon, productBrandLogo } from "@/assets/img";

import type {
  ToggleCart,
  CartItem,
  IncreaseQty,
  DecreaseQty,
} from "@/types/cart";

import type { ToggleFavorite, Favorite } from "@/types/favorite";

import styles from "./Product.module.scss";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const { id, type } = useParams();

  const navigate = useNavigate();

  const headphonesItems = headphonesCardData.filter(
    (el) => el.type === "headphones",
  );
  const wirelessItem = headphonesCardData.filter(
    (el) => el.type === "wireless",
  );

  const products = type === "headphones" ? headphonesItems : wirelessItem;

  const product = products.find(
    (el) => el.id === Number(id) && el.type === type,
  );

  if (!product) {
    return <h1 className={styles.favorites}>{t("product.notFound")}</h1>;
  }

  const cartItem = cart.find(
    (item) => item.id === product.id && item.type === product.type,
  );

  const isFavorite = favorites.some(
    (el) => el.id === product.id && el.type === product.type,
  );

  const handleFavClick = () => {
    if (isFavorite) {
      toast.info(t("common.toast.removedFromFavorites"));
    } else {
      toast.success(t("common.toast.addedToFavorites"));
    }
  };

  return (
    <>
      <section className={styles.product}>
        <h2 className={styles.productTitle}>
          {product.type === "headphones"
            ? t("product.categories.headphones")
            : t("product.categories.wireless")}
        </h2>
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
            <img src={productBrandLogo} alt={t("product.alt.brandLogo")} />
          </div>
          <div className={styles.productGrid}>
            {productImgData.map((el) => {
              return <ProductImg key={el.id} img={el.img} altKey={el.altKey} />;
            })}
          </div>
          <div className={styles.productContent}>
            <h2 className={styles.productName}>{product.title}</h2>
            <div className={styles.productPrices}>
              <div className={styles.productPrice}>
                <span
                  className={`${styles.priceWithoutSales} ${product.id === 4 ? styles.cardPriceRed : ""}`}
                >
                  {`${product.price} ₸`}
                </span>

                {product.oldPrice && (
                  <span
                    className={styles.cardPriceOld}
                  >{`${product.oldPrice} ₸`}</span>
                )}

                {product.salePrice && (
                  <span
                    className={styles.cardPriceSale}
                  >{`${product.salePrice} ₸`}</span>
                )}
              </div>
              {product.sale && (
                <div className={styles.productPriceSale}>
                  <span
                    className={styles.percentage}
                  >{`${product.sale}%`}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      </section>
      <section className={styles.details}>
        <div className={styles.detailsFlex}>
          <div className={styles.detailsContent}>
            <div className={styles.detailsTitleBlock}>
              <h3 className={styles.detailsTitle}>
                {t("product.details.title")}
              </h3>
            </div>
            <div className={styles.detailsListBlock}>
              <ul className={styles.detailsList}>
                {productListData.map((el) => {
                  return (
                    <ProductList
                      key={el.id}
                      descriptionKey={el.descriptionKey}
                      characteristic={el.characteristic}
                      characteristicKey={el.characteristicKey}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.detailsBtns}>
            {cartItem ? (
              <div
                className={styles.detailsCartStatus}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <button className={styles.detailsCartStatusText}>
                  {t("product.actions.goToCart")}
                </button>
              </div>
            ) : (
              <button
                className={styles.detailsBtn}
                onClick={() => {
                  toast.success(t("common.toast.addedToCart"));
                  toggleCart(
                    product.id,
                    product.type,
                    product.title,
                    product.price,
                    product.img,
                  );
                  navigate("/cart");
                }}
              >
                {t("product.actions.buy")}
              </button>
            )}

            {cartItem ? (
              <div className={styles.cardCounter}>
                <button
                  className={`${styles.counterBtn} `}
                  onClick={() => {
                    if (cartItem.qty === 1) {
                      toast.info(t("common.toast.removedFromCart"));
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
                  toast.success(t("common.toast.addedToCart"));
                  toggleCart(
                    product.id,
                    product.type,
                    product.title,
                    product.price,
                    product.img,
                  );
                }}
              >
                <img src={addToCartIcon} alt={t("product.alt.addToCart")} />
                {t("product.actions.addToCart")}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
