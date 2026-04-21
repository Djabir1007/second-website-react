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
  altKey: string;
}

const productImgData: ProductImgModel[] = [
  {
    id: 1,
    img: productImg1,
    altKey: "product.images.main",
  },
  {
    id: 2,
    img: productImg2,
    altKey: "product.images.gallery",
  },
  {
    id: 3,
    img: productImg3,
    altKey: "product.images.gallery",
  },
  {
    id: 4,
    img: productImg4,
    altKey: "product.images.gallery",
  },
  {
    id: 5,
    img: productImg5,
    altKey: "product.images.gallery",
  },
];

export default productImgData;
