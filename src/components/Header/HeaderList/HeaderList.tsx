import { Link } from "react-router-dom";
import styles from "./headerList.module.scss";
import type { HeaderModel } from "./headerListData";

type HeaderListProps = Pick<HeaderModel, "model">;

const HeaderList = ({ model }: HeaderListProps) => {
  return (
    <li className={styles.listItem}>
      <Link to={"/"}>{model}</Link>
    </li>
  );
};

export default HeaderList;
