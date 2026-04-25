import { useTranslation } from "react-i18next";
import styles from "./OrderConfirmation.module.scss";

type OrderConfirmationProps = {
  orderNumber: number;
};

const OrderConfirmation = ({ orderNumber }: OrderConfirmationProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.orderConfirmation}>
      <span className={styles.orderConfirmationText}>
        {t("checkout.orderConfirmation.text", {
          orderNumber: `№${orderNumber}`,
        })}
      </span>
    </div>
  );
};

export default OrderConfirmation;
