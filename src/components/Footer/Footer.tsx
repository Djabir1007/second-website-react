import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import FooterLink from "./FooterLink/FooterLink";
import footerLinkData from "./FooterLink/footerLinkData";
import FooterLanguage from "./FooterLanguage/FooterLanguage";
import footerLanguageData from "./FooterLanguage/footerLanguageData";
import FooterSocials from "./FooterSocials/FooterSocials";
import footerSocialsData from "./FooterSocials/footerSocialsData";
import { languageIcon } from "@/assets/img";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
        <Logo />
        <div className={styles.info}>
          <div className={styles.infoList}>
            {footerLinkData.map((el) => {
              return <FooterLink key={el.id} href={el.href} text={el.text} />;
            })}
          </div>
          <div className={styles.infoTerms}>
            <a className={styles.termsDesc} href="#">
              Условия сервиса
            </a>
            <div className={styles.language}>
              <button className={styles.languageBtn}>
                <img src={languageIcon} alt="выбор языка" />
              </button>
              {footerLanguageData.map((el) => {
                return <FooterLanguage key={el.id} language={el.language} />;
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
                alt={el.alt}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
