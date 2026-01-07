import wireless from "../../../assets/img/wireless/wireless.png";
import wirelessTwo from "../../../assets/img/wireless/wireless-2.png";
import wirelessThree from "../../../assets/img/wireless/wireless-3.png";
import star from "../../../assets/img/icons/star.svg";
import apple from "../../../assets/img/icons/apple.svg";

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
    img: wireless,
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
    img: wirelessTwo,
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
    img: wirelessThree,
    alt: "Наушники",
    title: "BOROFONE BO4",
    star: star,
    altStar: "Рейтинг",
    ratingValue: 4.7,
    price: "7527 KZT",
  },
];

export default wirelessCardData;
