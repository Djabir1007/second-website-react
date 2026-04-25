import { Link } from "react-router-dom";

import styles from "./FooterLink.module.scss";

import type { FooterLinkModel } from "./footerLinkData";
import { useTranslation } from "react-i18next";

type FooterLinkProps = Pick<FooterLinkModel, "href" | "textKey">;

const FooterLink = ({ href, textKey }: FooterLinkProps) => {
  const { t } = useTranslation();

  return (
    <Link className={styles.link} to={href}>
      {t(textKey)}
    </Link>
  );
};

export default FooterLink;
