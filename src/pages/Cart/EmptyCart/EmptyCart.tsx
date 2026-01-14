// React
import { Link } from "react-router-dom";

// Assets
import { cart } from "@/assets/img";

// Styles
import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;
