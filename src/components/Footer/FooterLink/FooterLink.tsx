import { Link } from "react-router-dom";
import styles from "./FooterLink.module.scss";
import type { FooterLinkModel } from "./footerLinkData";

type FooterLinkProps = Pick<FooterLinkModel, "href" | "text">;

const FooterLink = ({ href, text }: FooterLinkProps) => {
  return (
    <Link className={styles.link} to={href}>
      {text}
    </Link>
  );
};

export default FooterLink;
