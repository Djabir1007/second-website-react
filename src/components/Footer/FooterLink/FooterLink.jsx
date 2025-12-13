import { Link } from "react-router-dom";
import styles from "./FooterLink.module.scss";

const FooterLink = ({ href, text }) => {
  return (
    <Link className={styles.link} to={href}>
      {text}
    </Link>
  );
};

export default FooterLink;
