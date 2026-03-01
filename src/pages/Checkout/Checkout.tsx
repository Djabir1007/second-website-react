// Assets
import {
  addressLabel,
  citySelection,
  editIcon,
  visaIcon,
  checkIcon,
  promoCode,
  arrowRightIcon,
} from "@/assets/img";

import type { CartItem } from "@/types/cart";

import {
  calculateTotalSum,
  calculateTotal,
  calculateDelivery,
} from "@/utils/cartUtils";

// Styles
import styles from "./Checkout.module.scss";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentSection from "./PaymentSection/PaymentSection";
import RecipientContact from "./RecipientContact/RecipientContact";
import CheckoutActions from "./CheckoutActions/CheckoutActions";

type CheckoutProps = {
  cart: CartItem[];
};

const Checkout = ({ cart }: CheckoutProps) => {
  return (
    <>
      <h2 className={styles.title}>Оформление заказа</h2>
      <section className={styles.checkout}>
        <DeliveryAddress />
        <aside className={styles.result}>
          <OrderSummary cart={cart} />
          <PaymentSection />
          <RecipientContact />
          <CheckoutActions />
        </aside>
      </section>
    </>
  );
};

export default Checkout;
