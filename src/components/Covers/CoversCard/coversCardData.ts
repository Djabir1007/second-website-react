import { glassCase, siliconeCase, leatherCase } from "@/assets/img";

export interface CoversCardModel {
  id: number;
  src: string;
  altKey: string;
  descKey: string;
}

const coversCardData: CoversCardModel[] = [
  {
    id: 1,
    src: glassCase,
    altKey: "covers.cards.glass.alt",
    descKey: "covers.cards.glass.desc",
  },
  {
    id: 2,
    src: siliconeCase,
    altKey: "covers.cards.silicone.alt",
    descKey: "covers.cards.silicone.desc",
  },
  {
    id: 3,
    src: leatherCase,
    altKey: "covers.cards.leather.alt",
    descKey: "covers.cards.leather.desc",
  },
];

export default coversCardData;
