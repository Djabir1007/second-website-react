import type { CartItem } from "@/types/cart";

export const calculateTotal = (cart: CartItem[]) => {
  return cart.reduce((sum, item) => (sum += item.qty * item.price), 0);
};

export const calculateDelivery = (cart: CartItem[]) => {
  return !!cart.length ? 499 : 0;
};

export const calculateTotalSum = (cart: CartItem[]) => {
  const total = calculateTotal(cart);
  const delivery = calculateDelivery(cart);
  return total + delivery;
};
