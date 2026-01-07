import vk from "../../../assets/img/footer/VK.svg";
import inst from "../../../assets/img/footer/Instagram.svg";
import tg from "../../../assets/img/footer/Telegram.svg";
import whatsapp from "../../../assets/img/footer/Whatsapp.svg";

export interface FooterSocialsModel {
  id: number;
  link: string;
  icon: string;
  alt: string;
}

const footerSocialsData: FooterSocialsModel[] = [
  {
    id: 1,
    link: "https://vk.com/",
    icon: vk,
    alt: "Вконтакте",
  },
  {
    id: 2,
    link: "https://www.instagram.com/",
    icon: inst,
    alt: "Инстаграм",
  },
  {
    id: 3,
    link: "https://web.telegram.org/",
    icon: tg,
    alt: "Телеграм",
  },
  {
    id: 4,
    link: "https://api.whatsapp.com/",
    icon: whatsapp,
    alt: "Ватсапп",
  },
];

export default footerSocialsData;
