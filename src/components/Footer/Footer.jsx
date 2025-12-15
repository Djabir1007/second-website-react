import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo.jsx";
import FooterLink from "./FooterLink/FooterLink.jsx";
import FooterLinkData from "./FooterLink/FooterLinkData.js";
import FooterLanguage from "./FooterLanguage/FooterLanguage";
import FooterLanguageData from "./FooterLanguage/FooterLanguageData";
import FooterSocials from "./FooterSocials/FooterSocials.jsx";
import FooterSocialsData from "./FooterSocials/FooterSocialsData";
import group from "../../assets/img/footer/Group.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
        <Logo />
        <div className={styles.info}>
          <div className={styles.infoList}>
            {FooterLinkData.map((el) => {
              return <FooterLink key={el.id} href={el.href} text={el.text} />;
            })}
          </div>
          <div className={styles.infoTerms}>
            <a className={styles.termsDesc} href="#">
              Условия сервиса
            </a>
            <div className={styles.language}>
              <button className={styles.languageBtn}>
                <img src={group} alt="выбор языка" />
              </button>
              {FooterLanguageData.map((el) => {
                return <FooterLanguage key={el.id} value={el.language} />;
              })}
            </div>
          </div>
        </div>
        <div className={styles.social}>
          {FooterSocialsData.map((el) => {
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
