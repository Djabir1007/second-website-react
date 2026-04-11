import { UseFormRegister, UseFormSetFocus } from "react-hook-form";

import { visaIcon, checkIcon, promoCode, arrowRightIcon } from "@/assets/img";

import type { CheckoutFormValues } from "@/types/checkoutForm";

import styles from "./PaymentSection.module.scss";

type PaymentSectionProps = {
  register: UseFormRegister<CheckoutFormValues>;
  setFocus: UseFormSetFocus<CheckoutFormValues>;
};

const PaymentSection = ({ register, setFocus }: PaymentSectionProps) => {
  return (
    <section className={styles.payment}>
      <h3 className={styles.paymentTitle}>Способ оплаты</h3>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentMethod}>
          <img className={styles.paymentIcon} src={visaIcon} alt="visa" />
          <span className={styles.paymentText}>Счет на kaspi.kz</span>
        </div>
        <button className={styles.paymentBtn} type="button">
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
            {...register("promocode")}
          />
        </div>
        <button
          type="button"
          className={styles.promoCodeBtn}
          onClick={() => setFocus("promocode")}
        >
          <img src={arrowRightIcon} alt="Введите промокод" />
        </button>
      </div>
    </section>
  );
};

export default PaymentSection;
