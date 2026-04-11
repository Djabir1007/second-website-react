import { useEffect, useRef, useState } from "react";
import {
  UseFormRegister,
  UseFormSetFocus,
  FieldErrors,
  Control,
  Controller,
} from "react-hook-form";

import { addressLabel, citySelection, editIcon } from "@/assets/img";

import type { CheckoutFormValues } from "@/types/checkoutForm";
import styles from "./DeliveryAddress.module.scss";
import { useGetCities } from "./hooks/useGetCities";

type DeliveryAddressProps = {
  register: UseFormRegister<CheckoutFormValues>;
  setFocus: UseFormSetFocus<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
  control: Control<CheckoutFormValues>;
};

const DeliveryAddress = ({
  register,
  setFocus,
  control,
  errors,
}: DeliveryAddressProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const { data: cities } = useGetCities();

  const clickButton = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;

      if (boxRef.current && !boxRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
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

          <Controller
            name="city"
            control={control}
            rules={{
              required: "Выберите ваш город",
            }}
            render={({ field }) => (
              <div className={styles.fieldWrapper} ref={boxRef}>
                <div className={styles.fieldInner}>
                  <input
                    className={`${styles.input} ${styles.cityInput}`}
                    placeholder="Город"
                    value={field.value}
                    readOnly
                    onClick={() => setIsOpen(true)}
                  />

                  <button
                    className={`${styles.addressCityBtn} ${isOpen ? styles.arrowOpen : ""}`}
                    type="button"
                    onClick={clickButton}
                  >
                    <img src={citySelection} alt="Выбор города" />
                  </button>
                </div>

                {isOpen ? (
                  <div className={styles.dropdown}>
                    <ul className={styles.dropdownList}>
                      {(cities || []).map((u) => (
                        <li
                          className={styles.dropdownItem}
                          key={u.id}
                          onClick={() => {
                            field.onChange(u.city);
                            setIsOpen(false);
                          }}
                        >
                          {u.city}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {errors.city?.message && (
                  <p className={styles.textError}>{errors.city.message}</p>
                )}
              </div>
            )}
          />

          <div className={styles.fieldWrapper}>
            <div className={styles.fieldInner}>
              <input
                className={`${styles.input} ${styles.streetInput} ${
                  errors.street ? styles.inputError : ""
                }`}
                type="text"
                placeholder="Улица / Район"
                {...register("street", {
                  required: "Введите улицу или район",
                  minLength: {
                    value: 2,
                    message: "Минимум 2 символа",
                  },
                })}
              />
              <button
                className={styles.inputBtn}
                type="button"
                onClick={() => setFocus("street")}
              >
                <img src={editIcon} alt="Редактировать адрес" />
              </button>
            </div>
            {errors.street?.message && (
              <p className={styles.textError}>{errors.street.message}</p>
            )}
          </div>

          <div className={styles.addressRow}>
            <div className={styles.fieldWrapper}>
              <div className={styles.fieldInner}>
                <input
                  className={`${styles.houseInput} ${
                    errors.house ? styles.inputError : ""
                  }`}
                  type="text"
                  placeholder="Дом"
                  {...register("house", {
                    required: "Введите номер дома",
                    minLength: {
                      value: 1,
                      message: "Минимум 1 символ",
                    },
                  })}
                />
                <button
                  className={styles.inputHouseBtn}
                  type="button"
                  onClick={() => setFocus("house")}
                >
                  <img src={editIcon} alt="Редактировать адрес" />
                </button>
              </div>
              {errors.house?.message && (
                <p className={styles.textError}>{errors.house.message}</p>
              )}
            </div>

            <div className={styles.fieldWrapper}>
              <div className={styles.fieldInner}>
                <input
                  className={`${styles.entranceInput} ${
                    errors.entrance ? styles.inputError : ""
                  }`}
                  type="text"
                  placeholder="Подъезд"
                  {...register("entrance", {
                    required: "Введите номер подъезда",
                    minLength: {
                      value: 1,
                      message: "Минимум 1 символ",
                    },
                  })}
                />
                <button
                  className={styles.entranceInputBtn}
                  type="button"
                  onClick={() => setFocus("entrance")}
                >
                  <img src={editIcon} alt="Редактировать адрес" />
                </button>
              </div>
              {errors.entrance?.message && (
                <p className={styles.textError}>{errors.entrance.message}</p>
              )}
            </div>
          </div>

          <div className={`${styles.fieldWrapper} ${styles.fieldWrapperFlat}`}>
            <div className={styles.fieldInner}>
              <input
                className={`${styles.flatInput} ${
                  errors.apartment ? styles.inputError : ""
                }`}
                type="text"
                placeholder="Квартира"
                {...register("apartment", {
                  required: "Введите номер квартиры",
                  minLength: {
                    value: 1,
                    message: "Минимум 1 символ",
                  },
                })}
              />
              <button
                className={styles.inputFlatBtn}
                type="button"
                onClick={() => setFocus("apartment")}
              >
                <img
                  className={styles.flatInputImg}
                  src={editIcon}
                  alt="Редактировать адрес"
                />
              </button>
            </div>
            {errors.apartment?.message && (
              <p className={styles.textError}>{errors.apartment.message}</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeliveryAddress;
