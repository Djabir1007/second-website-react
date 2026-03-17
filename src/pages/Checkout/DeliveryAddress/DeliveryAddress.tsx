import { useState } from "react";

import { addressLabel, citySelection, editIcon } from "@/assets/img";

import styles from "./DeliveryAddress.module.scss";
import { useGetCities } from "./hooks/useGetCities";

const DeliveryAddress = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const { data: cities } = useGetCities();

  const handleChange = (value: string) => {
    setSelectedCity(value);
  };

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
          <div className={styles.addressWrapper}>
            <select
              className={`${styles.input} ${styles.citySelect} ${selectedCity === "" ? styles.isPlaceholder : ""}`}
              value={selectedCity}
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="" disabled>
                Город
              </option>
              {(cities || []).map((u) => (
                <option key={u.id} value={u.city}>
                  {u.city}
                </option>
              ))}
            </select>

            <img
              className={styles.arrowMain}
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
  );
};

export default DeliveryAddress;
