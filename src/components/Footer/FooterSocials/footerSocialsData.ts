import { vk, instagram, telegram, whatsapp } from "@/assets/img";

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
    icon: instagram,
    alt: "Инстаграм",
  },
  {
    id: 3,
    link: "https://web.telegram.org/",
    icon: telegram,
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
