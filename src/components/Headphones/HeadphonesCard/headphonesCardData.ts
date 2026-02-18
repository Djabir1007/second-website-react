import {
  headphones1,
  headphones2,
  headphones3,
  wireless1,
  wireless2,
  wireless3,
  star,
  apple,
} from "@/assets/img";

export interface HeadphonesCardModel {
  id: number;
  type: "headphones" | "wireless";
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
  apple?: string;
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
  {
    id: 7,
    type: "wireless",
    img: wireless1,
    alt: "Наушники",
    title: "Apple AirPods",
    rating: star,
    altStar: "Рейтинг",
    value: 4.7,
    price: 9527,
    apple: apple,
  },
  {
    id: 8,
    type: "wireless",
    img: wireless2,
    alt: "Наушники",
    title: "GERLAX GH-04",
    rating: star,
    altStar: "Рейтинг",
    value: 4.7,
    price: 6527,
  },
  {
    id: 9,
    type: "wireless",
    img: wireless3,
    alt: "Наушники",
    title: "BOROFONE BO4",
    rating: star,
    altStar: "Рейтинг",
    value: 4.7,
    price: 7527,
  },
];

export default headphonesCardData;
