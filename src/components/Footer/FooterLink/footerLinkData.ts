export interface FooterLinkModel {
  id: number;
  href: string;
  text: string;
}

const footerLinkData: FooterLinkModel[] = [
  { id: 1, href: "/favorites", text: "Избранное" },
  { id: 2, href: "/cart", text: "Корзина" },
  { id: 3, href: "/", text: "Контакты" },
];

export default footerLinkData;
