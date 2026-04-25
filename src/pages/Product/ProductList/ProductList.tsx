import type { ProductListModel } from "./productListData";

import styles from "./ProductList.module.scss";
import { useTranslation } from "react-i18next";

type ProductListProps = Pick<
  ProductListModel,
  "descriptionKey" | "characteristicKey" | "characteristic"
>;

const ProductList = ({
  descriptionKey,
  characteristicKey,
  characteristic,
}: ProductListProps) => {
  const { t } = useTranslation();

  return (
    <li className={styles.detailsListItem}>
      <span className={styles.detailsName}>{t(descriptionKey)}</span>
      <span>{characteristicKey ? t(characteristicKey) : characteristic}</span>
    </li>
  );
};

export default ProductList;
