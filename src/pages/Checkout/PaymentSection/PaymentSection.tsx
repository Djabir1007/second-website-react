import { UseFormRegister, UseFormSetFocus } from "react-hook-form";

import { visaIcon, checkIcon, promoCode, arrowRightIcon } from "@/assets/img";

import type { CheckoutFormValues } from "@/types/checkoutForm";

import styles from "./PaymentSection.module.scss";
import { useTranslation } from "react-i18next";

type PaymentSectionProps = {
  register: UseFormRegister<CheckoutFormValues>;
  setFocus: UseFormSetFocus<CheckoutFormValues>;
};

const PaymentSection = ({ register, setFocus }: PaymentSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className={styles.payment}>
      <h3 className={styles.paymentTitle}>
        {t("checkout.paymentSection.title")}
      </h3>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentMethod}>
          <img
            className={styles.paymentIcon}
            src={visaIcon}
            alt={t("checkout.paymentSection.alt.visa")}
          />
          <span className={styles.paymentText}>
            {t("checkout.paymentSection.method")}
          </span>
        </div>
        <button className={styles.paymentBtn} type="button">
          <img
            src={checkIcon}
            alt={t("checkout.paymentSection.alt.paymentMethod")}
          />
        </button>
      </div>
      <div className={styles.promoCode}>
        <div className={styles.promoCodeInfo}>
          <img
            className={styles.promoCodeIcon}
            src={promoCode}
            alt={t("checkout.paymentSection.alt.promoCode")}
          />
          <input
            className={styles.promoCodeValue}
            type="text"
            placeholder={t("checkout.paymentSection.placeholder")}
            {...register("promocode")}
          />
        </div>
        <button
          type="button"
          className={styles.promoCodeBtn}
          onClick={() => setFocus("promocode")}
        >
          <img
            src={arrowRightIcon}
            alt={t("checkout.paymentSection.alt.enterPromoCode")}
          />
        </button>
      </div>
    </section>
  );
};

export default PaymentSection;
