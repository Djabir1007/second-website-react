// React
import { Link } from "react-router-dom";

// Assets
import { cart } from "@/assets/img";

// Styles
import styles from "./EmptyCart.module.scss";
import { useTranslation } from "react-i18next";

const EmptyCart = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.flex}>
      <div className={styles.icon}>
        <img src={cart} alt={t("cart.empty.alt")} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{t("cart.empty.title")}</h2>
        <p className={styles.desc}>{t("cart.empty.desc")}</p>
      </div>
      <Link className={styles.btn} to={"/"}>
        {t("cart.empty.button")}
      </Link>
    </div>
  );
};

export default EmptyCart;
