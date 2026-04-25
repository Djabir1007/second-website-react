export interface FooterLinkModel {
  id: number;
  href: string;
  textKey: string;
}

const footerLinkData: FooterLinkModel[] = [
  { id: 1, href: "/favorites", textKey: "footer.links.favorites" },
  { id: 2, href: "/cart", textKey: "footer.links.cart" },
  { id: 3, href: "/", textKey: "footer.links.contacts" },
];

export default footerLinkData;
