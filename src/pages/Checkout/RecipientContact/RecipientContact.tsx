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
  return (
    <section className={styles.recipientPhone}>
      <h3 className={styles.recipientPhoneTitle}>Номер получателя</h3>
      <div className={styles.recipientPhoneForm}>
        <div className={styles.recipientPhoneInfo}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Введите номер телефона",
              validate: (value) => {
                const digits = value.replace(/\D/g, "");
                return digits.length === 11 || "Введите номер полностью";
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
            <img src={editIcon} alt="Номер телефона" />
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
