import Logo from "../Logo/Logo";
import FooterLink from "./FooterLink/FooterLink";
import FooterLanguage from "./FooterLanguage/FooterLanguage";
import FooterSocials from "./FooterSocials/FooterSocials";

import footerLinkData from "./FooterLink/footerLinkData";
import footerLanguageData from "./FooterLanguage/footerLanguageData";
import footerSocialsData from "./FooterSocials/footerSocialsData";

import { languageIcon } from "@/assets/img";

import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
        <Logo />
        <div className={styles.info}>
          <div className={styles.infoList}>
            {footerLinkData.map((el) => {
              return (
                <FooterLink key={el.id} href={el.href} textKey={el.textKey} />
              );
            })}
          </div>
          <div className={styles.infoTerms}>
            <a className={styles.termsDesc} href="#">
              {t("footer.terms")}
            </a>
            <div className={styles.language}>
              <button className={styles.languageBtn}>
                <img src={languageIcon} alt={t("footer.languageSelector")} />
              </button>
              {footerLanguageData.map((el) => {
                return (
                  <FooterLanguage
                    key={el.id}
                    language={el.language}
                    code={el.code}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.social}>
          {footerSocialsData.map((el) => {
            return (
              <FooterSocials
                key={el.id}
                link={el.link}
                icon={el.icon}
                altKey={el.altKey}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
