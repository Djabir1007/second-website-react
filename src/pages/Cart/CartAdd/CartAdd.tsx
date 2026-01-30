import { toast } from "react-toastify";

// Assets
import { deleteItem, delivery, deliveryChoice } from "@/assets/img";

// Types
import type {
  CartItem,
  RemoveCart,
  IncreaseQty,
  DecreaseQty,
} from "@/types/cart";

// Styles
import styles from "./CartAdd.module.scss";

type CartAddProps = {
  cart: CartItem[];
  removeCart: RemoveCart;
  increaseQty: IncreaseQty;
  decreaseQty: DecreaseQty;
};

const CartAdd = ({
  cart,
  removeCart,
  increaseQty,
  decreaseQty,
}: CartAddProps) => {
  const result = cart.reduce((sum, item) => {
    return sum + item.qty * item.price;
  }, 0);

  const deliverySum = !!cart.length ? 499 : 0;
  const total = result + deliverySum;

  return (
    <>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.flex}>
        <div className={styles.cards}>
          <div className={styles.content}>
            {cart.map((el) => (
              <article className={styles.card} key={el.id}>
                <div className={styles.cardDelete}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => {
                      removeCart(el.id, el.type);
                      toast.info("Удалено из корзины");
                    }}
                  >
                    <img src={deleteItem} alt="удалить товар" />
                  </button>
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardImg}>
                    <img
                      className={styles.cardImage}
                      src={el.img}
                      alt="наушники"
                    />
                  </div>
                  <div className={styles.cardName}>
                    <h3 className={styles.cardTitle}>{el.title}</h3>
                    <span className={styles.cardPrice}>{`${el.price} ₸`}</span>
                  </div>
                </div>
                <div className={styles.cardControls}>
                  <div className={styles.cardCounter}>
                    <button
                      className={styles.counterBtn}
                      onClick={() => {
                        if (el.qty === 1) {
                          toast.info("Удалено из корзины");
                        }
                        decreaseQty(el.id, el.type);
                      }}
                    >
                      -
                    </button>
                    <span className={styles.counterValue}>{el.qty}</span>
                    <button
                      className={styles.counterBtn}
                      onClick={() => {
                        increaseQty(el.id, el.type);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.CardPrices}>
                    <span className={styles.priceValue}>
                      {`${el.qty * el.price} ₸`}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <article className={styles.delivery}>
            <div className={styles.deliveryHeader}>
              <h2 className={styles.deliveryTitle}>Доставка</h2>
            </div>

            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aabf3dffc6eac8deda1f3c62e4edff0cadf79a3d1c1175c4fe22dcfd1945e94b1&amp;source=constructor"
              width={585}
              height={240}
              className={styles.deliveryMap}
            ></iframe>

            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryChoice}>
                <img src={delivery} alt="" />
                <p className={styles.deliveryDesc}>Доставка курьером</p>
                <button className={styles.deliveryBtn}>
                  <img src={deliveryChoice} alt="" />
                </button>
              </div>
              <div className={styles.deliveryPrices}>
                <span
                  className={styles.deliveryPrice}
                >{`${deliverySum} ₸`}</span>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryFlex}>
              <span className={styles.summaryResult}>ИТОГО</span>
              <span className={styles.summaryPrice}>{`${total} ₸`}</span>
            </div>
            <button className={styles.summaryBtn}> Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartAdd;
