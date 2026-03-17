import PhoneInput from "@/components/PhoneInput/PhoneInput";

import styles from "./RecipientContact.module.scss";

import { editIcon } from "@/assets/img";
import { useState } from "react";

const RecipientContact = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className={styles.recipientPhone}>
      <h3 className={styles.recipientPhoneTitle}>Номер получателя</h3>
      <div className={styles.recipientPhoneInfo}>
        <PhoneInput value={phone} onChange={setPhone} />
        <img className={styles.editIcon} src={editIcon} alt="Номер телефона" />
      </div>
    </section>
  );
};

export default RecipientContact;
