import { useRef } from "react";
import styles from "./PaymentSection.module.scss";
import { visaIcon, checkIcon, promoCode, arrowRightIcon } from "@/assets/img";

const PaymentSection = () => {
  const focusInput = useRef<HTMLInputElement | null>(null);

  return (
    <section className={styles.payment}>
      <h3 className={styles.paymentTitle}>Способ оплаты</h3>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentMethod}>
          <img className={styles.paymentIcon} src={visaIcon} alt="visa" />
          <span className={styles.paymentText}>Счет на kaspi.kz</span>
        </div>
        <button className={styles.paymentBtn}>
          <img src={checkIcon} alt="Способ оплаты" />
        </button>
      </div>
      <div className={styles.promoCode}>
        <div className={styles.promoCodeInfo}>
          <img
            className={styles.promoCodeIcon}
            src={promoCode}
            alt="Промокод"
          />
          <input
            className={styles.promoCodeValue}
            type="text"
            placeholder="Есть промокод?"
            ref={focusInput}
          />
        </div>
        <button
          className={styles.promoCodeBtn}
          onClick={() => {
            focusInput.current?.focus();
          }}
        >
          <img src={arrowRightIcon} alt="" />
        </button>
      </div>
    </section>
  );
};

export default PaymentSection;
