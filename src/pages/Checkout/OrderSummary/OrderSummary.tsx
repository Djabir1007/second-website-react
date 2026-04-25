import { calculateTotalSum } from "@/utils/cartUtils";

import type { CartItem } from "@/types/cart";

import styles from "./OrderSummary.module.scss";
import { useTranslation } from "react-i18next";

type OrderSummaryProps = {
  cart: CartItem[];
};

const OrderSummary = ({ cart }: OrderSummaryProps) => {
  const { t } = useTranslation();

  const totalSum = calculateTotalSum(cart);
  return (
    <section className={styles.orderCard}>
      <h3 className={styles.orderNameTitle}>
        {t("checkout.orderSummary.title")}
      </h3>
      <div className={styles.orderInfo}>
        {cart.map((el) => (
          <div className={styles.orderRow} key={el.id}>
            <span className={styles.orderQty}>{`${el.qty}x`}</span>
            <span className={styles.orderLabel}>{el.title}</span>
            <span
              className={styles.orderValue}
            >{`₸ ${el.qty * el.price}`}</span>
          </div>
        ))}
        <div className={styles.orderRow}>
          <span className={styles.orderLabel}>
            {t("checkout.orderSummary.delivery")}
          </span>
          <span className={styles.orderValue}>₸ 499</span>
        </div>

        <div className={styles.orderRow}>
          <span className={styles.orderLabel}>
            {t("checkout.orderSummary.total")}
          </span>
          <span className={styles.orderValue}>{`₸ ${totalSum}`}</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
