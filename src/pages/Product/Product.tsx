// Components
import ProductImg from "./ProductImg/ProductImg";
import ProductList from "./ProductList/ProductList";

// Data
import productImgData from "./ProductImg/productImgData";
import productListData from "./ProductList/productListData";

// Assets
import { addToCartIcon, productBrandLogo } from "@/assets/img";

// Styles
import styles from "./Product.module.scss";

const Product = () => {
  return (
    <>
      <section className={styles.product}>
        <h2 className={styles.productTitle}>Автодержатель</h2>
        <article className={styles.productCard}>
          <div className={styles.productElements}>
            <button className={styles.productHeart}>
              <svg
                width="20"
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
            <h2 className={styles.productName}>BOROFONE BH32</h2>
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
            <button className={styles.detailsBtn}>
              <img src={addToCartIcon} alt="Корзина" />
              добавить в корзину
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
