import { useTranslation } from "react-i18next";
import type { ProductImgModel } from "./productImgData";

type ProductImgProps = Pick<ProductImgModel, "img" | "altKey">;

const ProductImg = ({ img, altKey }: ProductImgProps) => {
  const { t } = useTranslation();

  return <img src={img} alt={t(altKey)} />;
};

export default ProductImg;
