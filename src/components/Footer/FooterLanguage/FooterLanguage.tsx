// Types
import type { FooterLanguageModel } from "./footerLanguageData";

// Styles
import styles from "./FooterLanguage.module.scss";

type FooterLanguageProps = Pick<FooterLanguageModel, "language">;

const FooterLanguage = ({ language }: FooterLanguageProps) => {
  return <button className={styles.languageItem}>{language}</button>;
};

export default FooterLanguage;
