import styles from "./FooterLanguage.module.scss";
import type { FooterLanguageModel } from "./footerLanguageData";

type FooterLanguageProps = Pick<FooterLanguageModel, "language">;

const FooterLanguage = ({ language }: FooterLanguageProps) => {
  return <button className={styles.languageItem}>{language}</button>;
};

export default FooterLanguage;
