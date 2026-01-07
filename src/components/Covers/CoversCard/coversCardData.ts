import glass from "../../../assets/img/covers/glass-case.png";
import silicone from "../../../assets/img/covers/silicone-case.png";
import leather from "../../../assets/img/covers/leather-case.png";

export interface CoversCardModel {
  id: number;
  src: string;
  alt: string;
  desc: string;
}

const coversCardData: CoversCardModel[] = [
  { id: 1, src: glass, alt: "Стеклянный чехол", desc: "Стеклянные" },
  { id: 2, src: silicone, alt: "Силиконовый чехол", desc: "Силиконовые" },
  { id: 3, src: leather, alt: "Кожаныq чехол", desc: "Кожаные" },
];

export default coversCardData;
