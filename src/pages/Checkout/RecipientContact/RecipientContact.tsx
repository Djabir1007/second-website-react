import {
  Control,
  Controller,
  UseFormSetFocus,
  FieldErrors,
} from "react-hook-form";
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import type { CheckoutFormValues } from "@/types/checkoutForm";
import styles from "./RecipientContact.module.scss";
import { editIcon } from "@/assets/img";
import { useTranslation } from "react-i18next";

type RecipientContactProps = {
  control: Control<CheckoutFormValues>;
  setFocus: UseFormSetFocus<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

const RecipientContact = ({
  control,
  setFocus,
  errors,
}: RecipientContactProps) => {
  const { t } = useTranslation();

  return (
    <section className={styles.recipientPhone}>
      <h3 className={styles.recipientPhoneTitle}>
        {t("checkout.recipientContact.title")}
      </h3>
      <div className={styles.recipientPhoneForm}>
        <div className={styles.recipientPhoneInfo}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: t("checkout.recipientContact.errors.required"),
              validate: (value) => {
                const digits = value.replace(/\D/g, "");
                return (
                  digits.length === 11 ||
                  t("checkout.recipientContact.errors.invalid")
                );
              },
            }}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                ref={field.ref}
              />
            )}
          />
          <button
            className={styles.editBtn}
            type="button"
            onClick={() => setFocus("phone")}
          >
            <img
              src={editIcon}
              alt={t("checkout.recipientContact.alt.editPhone")}
            />
          </button>
        </div>
        {errors.phone?.message && (
          <p className={styles.textError}>{errors.phone.message}</p>
        )}
      </div>
    </section>
  );
};

export default RecipientContact;
