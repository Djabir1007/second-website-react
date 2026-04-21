import { useTranslation } from "react-i18next";
import styles from "./CheckoutActions.module.scss";

const CheckoutActions = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.actions}>
      <button className={styles.submitBtn} type="submit">
        {t("checkout.actions.submit")}
      </button>
    </div>
  );
};

export default CheckoutActions;
