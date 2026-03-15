import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentSection from "./PaymentSection/PaymentSection";
import RecipientContact from "./RecipientContact/RecipientContact";
import CheckoutActions from "./CheckoutActions/CheckoutActions";
import type { CartItem } from "@/types/cart";
import styles from "./Checkout.module.scss";

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
