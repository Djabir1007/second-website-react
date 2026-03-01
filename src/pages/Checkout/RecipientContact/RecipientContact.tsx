import styles from "./RecipientContact.module.scss";

import { editIcon } from "@/assets/img";

const RecipientContact = () => {
  return (
    <section className={styles.recipientPhone}>
      <h3 className={styles.recipientPhoneTitle}>Номер получателя</h3>
      <div className={styles.recipientPhoneInfo}>
        <input
          className={styles.recipientPhoneValue}
          type="tel"
          placeholder="+7 ___ ___ ____"
        />
        <img className={styles.editIcon} src={editIcon} alt="Номер телефона" />
      </div>
    </section>
  );
};

export default RecipientContact;
