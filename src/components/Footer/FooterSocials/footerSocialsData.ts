import { vk, instagram, telegram, whatsapp } from "@/assets/img";

export interface FooterSocialsModel {
  id: number;
  link: string;
  icon: string;
  altKey: string;
}

const footerSocialsData: FooterSocialsModel[] = [
  {
    id: 1,
    link: "https://vk.com/",
    icon: vk,
    altKey: "footer.socials.vk",
  },
  {
    id: 2,
    link: "https://www.instagram.com/",
    icon: instagram,
    altKey: "footer.socials.instagram",
  },
  {
    id: 3,
    link: "https://web.telegram.org/",
    icon: telegram,
    altKey: "footer.socials.telegram",
  },
  {
    id: 4,
    link: "https://api.whatsapp.com/",
    icon: whatsapp,
    altKey: "footer.socials.whatsapp",
  },
];

export default footerSocialsData;
