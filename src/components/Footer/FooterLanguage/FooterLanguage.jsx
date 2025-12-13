import styles from "./FooterLanguage.module.scss";

const FooterLanguage = ({ value }) => {
  return <button className={styles.languageItem}>{value}</button>;
};

export default FooterLanguage;
