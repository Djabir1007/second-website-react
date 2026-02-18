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
import { useRef } from "react";

type CheckoutProps = {
  cart: CartItem[];
};

const Checkout = ({ cart }: CheckoutProps) => {
  const focusInput = useRef<HTMLInputElement | null>(null);

  const total = calculateTotal(cart);
  const delivery = calculateDelivery(cart);
  const totalSum = calculateTotalSum(cart);

  return (
    <div>
      <h2 className={styles.title}>Оформление заказа</h2>
      <section className={styles.checkout}>
        <article className={styles.address}>
          <div className={styles.addressContainer}>
            <div className={styles.addressDelivery}>
              <h3 className={styles.deliveryTitle}>Доставка курьером</h3>
              <span className={styles.deliveryPrice}>499 ₸</span>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A54ed4fdd38b933e935bc7dfc39a655b503bab30f057134b144ef7afedc7c7754&amp;source=constructor"
              className={styles.addressMap}
            ></iframe>
            <div className={styles.addressForm}>
              <div className={styles.addressInfo}>
                <img
                  className={styles.infoImg}
                  src={addressLabel}
                  alt="Адрес доставки"
                />
                <span className={styles.infoText}>Адрес доставки</span>
              </div>
              <div className={styles.addressWrapper}>
                <input
                  className={`${styles.input} ${styles.cityInput}`}
                  type="text"
                  placeholder="Город"
                />
                <img
                  className={styles.cityInputImg}
                  src={citySelection}
                  alt="Выбор города"
                />
              </div>
              <div className={styles.addressWrapper}>
                <input
                  className={`${styles.input} ${styles.streetInput}`}
                  type="text"
                  placeholder="Улица / Район"
                />
                <img
                  className={styles.streetInputImg}
                  src={editIcon}
                  alt="Редактировать адрес"
                />
              </div>
              <div className={styles.addressRow}>
                <div className={styles.addressRowItem}>
                  <input
                    className={styles.houseInput}
                    type="text"
                    placeholder="Дом"
                  />
                  <img
                    className={styles.houseInputImg}
                    src={editIcon}
                    alt="Редактировать адрес"
                  />
                </div>
                <div className={styles.addressRowItem}>
                  <input
                    className={styles.entranceInput}
                    type="text"
                    placeholder="Подъезд"
                  />
                  <img
                    className={styles.entranceInputImg}
                    src={editIcon}
                    alt="Редактировать адрес"
                  />
                </div>
              </div>
              <div className={styles.addressFlat}>
                <input
                  className={styles.flatInput}
                  type="text"
                  placeholder="Квартира"
                />
                <img
                  className={styles.flatInputImg}
                  src={editIcon}
                  alt="Редактировать адрес"
                />
              </div>
            </div>
          </div>
        </article>
        <aside className={styles.result}>
          <section className={styles.orderCard}>
            <h3 className={styles.orderNameTitle}>Ваш заказ</h3>
            <div className={styles.orderInfo}>
              {cart.map((el) => (
                <div className={styles.orderRow} key={el.id}>
                  <span className={styles.orderQty}>{`${el.qty}x`}</span>
                  <span className={styles.orderLabel}>{el.title}</span>
                  <span
                    className={styles.orderValue}
                  >{`₸ ${el.qty * el.price}`}</span>
                </div>
              ))}
              {/* <div className={styles.orderRow}>
                <span className={styles.orderQty}>1</span>
                <span className={styles.orderLabel}>
                  Наушники Apple BYZ S852I
                </span>
                <span className={styles.orderValue}>29</span>
              </div> */}
              <div className={styles.orderRow}>
                <span className={styles.orderLabel}>Доставка</span>
                <span className={styles.orderValue}>₸ 499</span>
              </div>

              <div className={styles.orderRow}>
                <span className={styles.orderLabel}>К оплате</span>
                <span className={styles.orderValue}>{`₸ ${totalSum}`}</span>
              </div>
            </div>
          </section>
          <section className={styles.payment}>
            <h3 className={styles.paymentTitle}>Способ оплаты</h3>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentMethod}>
                <img className={styles.paymentIcon} src={visaIcon} alt="visa" />
                <span className={styles.paymentText}>Счет на kaspi.kz</span>
              </div>
              <button className={styles.paymentBtn}>
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
                  ref={focusInput}
                />
              </div>
              <button
                className={styles.promoCodeBtn}
                onClick={() => {
                  focusInput.current?.focus();
                }}
              >
                <img src={arrowRightIcon} alt="" />
              </button>
            </div>
          </section>
          <section className={styles.recipientPhone}>
            <h3 className={styles.recipientPhoneTitle}>Номер получателя</h3>
            <div className={styles.recipientPhoneInfo}>
              <input
                className={styles.recipientPhoneValue}
                type="tel"
                placeholder="+7 ___ ___ ____"
              />
              <img
                className={styles.editIcon}
                src={editIcon}
                alt="Номер телефона"
              />
            </div>
          </section>
          <div className={styles.actions}>
            <button className={styles.submitBtn} type="submit">
              Закончить оформление
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Checkout;
