import { useState } from "react";

import { useForm } from "react-hook-form";

import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentSection from "./PaymentSection/PaymentSection";
import RecipientContact from "./RecipientContact/RecipientContact";
import CheckoutActions from "./CheckoutActions/CheckoutActions";

import { createOrder } from "@/api/orders";

import type { CartItem } from "@/types/cart";
import type { CheckoutFormValues } from "@/types/checkoutForm";
import styles from "./Checkout.module.scss";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import { useTranslation } from "react-i18next";

type CheckoutProps = {
  cart: CartItem[];
};

const Checkout = ({ cart }: CheckoutProps) => {
  const { t } = useTranslation();

  const [orderNumber, setOrderNumber] = useState<number | null>(null);

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

  const handleOrderSubmit = async (data: CheckoutFormValues) => {
    const orderData = {
      customer: data,
      items: cart,
    };

    try {
      const result = await createOrder(orderData);
      setOrderNumber(result.orderNumber);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  if (orderNumber !== null) {
    return <OrderConfirmation orderNumber={orderNumber} />;
  }

  return (
    <>
      <h2 className={styles.title}>{t("checkout.title")}</h2>
      <section className={styles.checkout}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleOrderSubmit)}
        >
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
