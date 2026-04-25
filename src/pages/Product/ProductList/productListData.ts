export interface ProductListModel {
  id: number;
  descriptionKey: string;
  characteristicKey?: string;
  characteristic?: string;
}

const productListData: ProductListModel[] = [
  {
    id: 1,
    descriptionKey: "product.details.noiseCancellation",
    characteristicKey: "product.values.no",
  },
  {
    id: 2,
    descriptionKey: "product.details.weight",
    characteristicKey: "product.values.weight10g",
  },
  {
    id: 3,
    descriptionKey: "product.details.waterProtection",
    characteristicKey: "product.values.no",
  },
  {
    id: 4,
    descriptionKey: "product.details.cableLength",
    characteristicKey: "product.values.cableLength12m",
  },
  {
    id: 5,
    descriptionKey: "product.details.packageContents",
    characteristicKey: "product.values.headphones",
  },
  {
    id: 6,
    descriptionKey: "product.details.caseMaterial",
    characteristicKey: "product.values.plasticRubber",
  },
  {
    id: 7,
    descriptionKey: "product.details.microphone",
    characteristicKey: "product.values.yes",
  },
  {
    id: 8,
    descriptionKey: "product.details.purpose",
    characteristicKey: "product.values.wiredHeadphones",
  },
  {
    id: 9,
    descriptionKey: "product.details.callControl",
    characteristicKey: "product.values.yes",
  },
  {
    id: 10,
    descriptionKey: "product.details.connector",
    characteristic: "Lightning",
  },
  {
    id: 11,
    descriptionKey: "product.details.volumeControl",
    characteristicKey: "product.values.yes",
  },
  {
    id: 12,
    descriptionKey: "product.details.mountType",
    characteristicKey: "product.values.withoutMount",
  },
  {
    id: 13,
    descriptionKey: "product.details.headphoneType",
    characteristicKey: "product.values.earbuds",
  },
  {
    id: 14,
    descriptionKey: "product.details.connectionType",
    characteristicKey: "product.values.wired",
  },
  {
    id: 15,
    descriptionKey: "product.details.frequencyRange",
    characteristicKey: "product.values.frequencyRange20_20000",
  },
  {
    id: 16,
    descriptionKey: "product.details.sensitivity",
    characteristicKey: "product.values.sensitivity109db",
  },
];

export default productListData;
