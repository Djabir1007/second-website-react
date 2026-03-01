import styles from "./CheckoutActions.module.scss";

const CheckoutActions = () => {
  return (
    <div className={styles.actions}>
      <button className={styles.submitBtn} type="submit">
        Закончить оформление
      </button>
    </div>
  );
};

export default CheckoutActions;
