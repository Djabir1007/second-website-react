// Components
import EmptyCart from "./EmptyCart/EmptyCart";
import CartAdd from "./CartAdd/CartAdd";

// Types
import type {
  CartItem,
  RemoveCart,
  IncreaseQty,
  DecreaseQty,
} from "@/types/cart";

//Styles
import styles from "./Cart.module.scss";

type CartProps = {
  cart: CartItem[];
  removeCart: RemoveCart;
  increaseQty: IncreaseQty;
  decreaseQty: DecreaseQty;
};

const Cart = ({ cart, removeCart, increaseQty, decreaseQty }: CartProps) => {
  return (
    <section className={styles.cart}>
      {!!cart.length ? (
        <CartAdd
          cart={cart}
          removeCart={removeCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
