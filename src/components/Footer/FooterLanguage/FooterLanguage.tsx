import type { FooterLanguageModel } from "./footerLanguageData";

import styles from "./FooterLanguage.module.scss";
import { useTranslation } from "react-i18next";

type FooterLanguageProps = Pick<FooterLanguageModel, "language" | "code">;

const FooterLanguage = ({ language, code }: FooterLanguageProps) => {
  const { i18n } = useTranslation();

  return (
    <button
      type="button"
      className={styles.languageItem}
      onClick={() => i18n.changeLanguage(code)}
    >
      {language}
    </button>
  );
};

export default FooterLanguage;
