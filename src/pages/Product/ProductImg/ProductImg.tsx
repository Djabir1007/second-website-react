import type { ProductImgModel } from "./productImgData";

type ProductImgProps = Pick<ProductImgModel, "img">;

const ProductImg = ({ img }: ProductImgProps) => {
  return <img src={img} alt="Изображение товара" />;
};

export default ProductImg;
