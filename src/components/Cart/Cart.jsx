import styles from "./Cart.module.scss";
import cart from "../../assets/img/cart/cart.svg";

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
        <button className={styles.btn}>В каталог товаров</button>
      </div>
    </section>
  );
};

export default Cart;
