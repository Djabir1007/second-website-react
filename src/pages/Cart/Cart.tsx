import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { cart } from "@/assets/img";

const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.flex}>
        <div className={styles.icon}>
          <img src={cart} alt="Корзина" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Корзина пуста</h2>
          <p className={styles.desc}>Но это никогда не поздно исправить :)</p>
        </div>
        <Link className={styles.btn} to={"/"}>
          В каталог товаров
        </Link>
      </div>
    </section>
  );
};

export default Cart;
