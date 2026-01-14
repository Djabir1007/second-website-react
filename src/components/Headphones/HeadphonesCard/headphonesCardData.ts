import { headphones1, headphones2, headphones3, star } from "@/assets/img";

export interface HeadphonesCardModel {
  id: number;
  type: "headphones";
  img: string;
  alt: string;
  title: string;
  value: number;
  price: number;
  oldPrice?: number;
  sale?: number;
  salePrice?: number;
  rating: string;
  altStar: string;
}

const headphonesCardData: HeadphonesCardModel[] = [
  {
    id: 1,
    type: "headphones",
    img: headphones1,
    alt: "Наушники",
    title: "Apple BYZ S852I",
    value: 4.7,
    price: 2927,
    oldPrice: 3527,
    rating: star,
    altStar: "Рейтинг",
  },
  {
    id: 2,
    type: "headphones",
    img: headphones2,
    alt: "Наушники",
    title: "Apple EarPods",
    value: 4.5,
    price: 2327,
    rating: star,
    altStar: "Рейтинг",
  },
  {
    id: 3,
    type: "headphones",
    img: headphones3,
    alt: "Наушники",
    title: "Apple EarPods",
    value: 4.5,
    price: 2327,
    rating: star,
    altStar: "Рейтинг",
  },
  {
    id: 4,
    type: "headphones",
    img: headphones1,
    alt: "Наушники",
    title: "Apple BYZ S852I",
    value: 4.7,
    price: 2927,
    sale: 20,
    rating: star,
    altStar: "Рейтинг",
    salePrice: 3527,
  },
  {
    id: 5,
    type: "headphones",
    img: headphones2,
    alt: "Наушники",
    title: "Apple EarPods",
    value: 4.5,
    price: 2327,
    rating: star,
    altStar: "Рейтинг",
  },
  {
    id: 6,
    type: "headphones",
    img: headphones3,
    alt: "Наушники",
    title: "Apple EarPods",
    value: 4.5,
    price: 2327,
    rating: star,
    altStar: "Рейтинг",
  },
];

export default headphonesCardData;
