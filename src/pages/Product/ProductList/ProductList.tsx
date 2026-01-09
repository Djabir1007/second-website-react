// Types
import type { ProductListModel } from "./productListData";

// Styles
import styles from "./ProductList.module.scss";

type ProductListProps = Pick<
  ProductListModel,
  "description" | "characteristic"
>;

const ProductList = ({ description, characteristic }: ProductListProps) => {
  return (
    <li className={styles.detailsListItem}>
      <span className={styles.detailsName}>{description}</span>
      <span>{characteristic}</span>
    </li>
  );
};

export default ProductList;
