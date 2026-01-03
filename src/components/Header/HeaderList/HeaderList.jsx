import { Link } from "react-router-dom";
import styles from "./headerList.module.scss";

const HeaderList = ({ model }) => {
  return (
    <li className={styles.listItem}>
      <Link to={"/"}>{model}</Link>
    </li>
  );
};

export default HeaderList;
