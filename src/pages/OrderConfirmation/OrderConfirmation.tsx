import styles from "./OrderConfirmation.module.scss";

type OrderConfirmationProps = {
  orderNumber: number;
};

const OrderConfirmation = ({ orderNumber }: OrderConfirmationProps) => {
  return (
    <div className={styles.orderConfirmation}>
      <span className={styles.orderConfirmationText}>
        Номер вашего заказа {`№${orderNumber}`}, с Вами свяжется наш менеджер.
      </span>
    </div>
  );
};

export default OrderConfirmation;
