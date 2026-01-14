export type ProductType = "headphones" | "wireless";

export type CartItem = {
  id: number;
  type: ProductType;
  title: string;
  price: number;
  img: string;
  qty: number;
};

export type ToggleCart = (
  id: number,
  type: ProductType,
  title: string,
  price: number,
  img: string
) => void;

export type RemoveCart = (id: number, type: string) => void;

export type IncreaseQty = (id: number, type: string) => void;

export type DecreaseQty = (id: number, type: string) => void;
