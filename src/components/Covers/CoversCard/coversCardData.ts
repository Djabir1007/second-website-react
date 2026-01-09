// Assets
import { glassCase, siliconeCase, leatherCase } from "@/assets/img";

export interface CoversCardModel {
  id: number;
  src: string;
  alt: string;
  desc: string;
}

const coversCardData: CoversCardModel[] = [
  { id: 1, src: glassCase, alt: "Стеклянный чехол", desc: "Стеклянные" },
  { id: 2, src: siliconeCase, alt: "Силиконовый чехол", desc: "Силиконовые" },
  { id: 3, src: leatherCase, alt: "Кожаный чехол", desc: "Кожаные" },
];

export default coversCardData;
