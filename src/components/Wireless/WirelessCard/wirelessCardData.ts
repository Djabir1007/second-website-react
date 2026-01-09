import { wireless1, wireless2, wireless3, star, apple } from "@/assets/img";
export interface WirelessCardModel {
  id: number;
  type: string;
  img: string;
  alt: string;
  title: string;
  star: string;
  altStar: string;
  ratingValue: number;
  price: string;
  apple?: string;
}

const wirelessCardData: WirelessCardModel[] = [
  {
    id: 1,
    type: "wireless",
    img: wireless1,
    alt: "Наушники",
    title: "Apple AirPods",
    star: star,
    altStar: "Рейтинг",
    ratingValue: 4.7,
    price: "9527 ₸",
    apple: apple,
  },
  {
    id: 2,
    type: "wireless",
    img: wireless2,
    alt: "Наушники",
    title: "GERLAX GH-04",
    star: star,
    altStar: "Рейтинг",
    ratingValue: 4.7,
    price: "6527 KZT",
  },
  {
    id: 3,
    type: "wireless",
    img: wireless3,
    alt: "Наушники",
    title: "BOROFONE BO4",
    star: star,
    altStar: "Рейтинг",
    ratingValue: 4.7,
    price: "7527 KZT",
  },
];

export default wirelessCardData;
