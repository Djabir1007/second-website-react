import product1 from "../../../assets/img/product/product-1.png";
import product2 from "../../../assets/img/product/product-2.png";
import product3 from "../../../assets/img/product/product-3.png";
import product4 from "../../../assets/img/product/product-4.png";
import product5 from "../../../assets/img/product/product-5.png";

export interface ProductImgModel {
  id: number;
  img: string;
}

const productImgData: ProductImgModel[] = [
  {
    id: 1,
    img: product1,
  },
  {
    id: 2,
    img: product2,
  },
  {
    id: 3,
    img: product3,
  },
  {
    id: 4,
    img: product4,
  },
  {
    id: 5,
    img: product5,
  },
];

export default productImgData;
