import { useForm } from "react-hook-form";

import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentSection from "./PaymentSection/PaymentSection";
import RecipientContact from "./RecipientContact/RecipientContact";
import CheckoutActions from "./CheckoutActions/CheckoutActions";
import type { CartItem } from "@/types/cart";
import type { CheckoutFormValues } from "@/types/checkoutForm";
import styles from "./Checkout.module.scss";

type CheckoutProps = {
  cart: CartItem[];
};

const Checkout = ({ cart }: CheckoutProps) => {
  const {
    register,
    handleSubmit,
    setFocus,
    control,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      city: "",
      street: "",
      house: "",
      entrance: "",
      apartment: "",
      phone: "",
      promocode: "",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  return (
    <>
      <h2 className={styles.title}>Оформление заказа</h2>
      <section className={styles.checkout}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <DeliveryAddress
            register={register}
            setFocus={setFocus}
            control={control}
            errors={errors}
          />
          <aside className={styles.result}>
            <OrderSummary cart={cart} />
            <PaymentSection register={register} setFocus={setFocus} />
            <RecipientContact
              control={control}
              setFocus={setFocus}
              errors={errors}
            />
            <CheckoutActions />
          </aside>
        </form>
      </section>
    </>
  );
};

export default Checkout;
