import styles from "./ProductList.module.scss";

const ProductList = ({ description, characteristic }) => {
  return (
    <li className={styles.detailsListItem}>
      <span className={styles.detailsName}>{description}</span>
      <span>{characteristic}</span>
    </li>
  );
};

export default ProductList;
