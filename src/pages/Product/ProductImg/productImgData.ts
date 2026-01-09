import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
} from "@/assets/img";

export interface ProductImgModel {
  id: number;
  img: string;
}

const productImgData: ProductImgModel[] = [
  {
    id: 1,
    img: productImg1,
  },
  {
    id: 2,
    img: productImg2,
  },
  {
    id: 3,
    img: productImg3,
  },
  {
    id: 4,
    img: productImg4,
  },
  {
    id: 5,
    img: productImg5,
  },
];

export default productImgData;
