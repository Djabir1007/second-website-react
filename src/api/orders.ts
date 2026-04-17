import axios from "axios";
import { CheckoutFormValues } from "@/types/checkoutForm";
import { CartItem } from "@/types/cart";

type CreateOrderPayload = {
  customer: CheckoutFormValues;
  items: CartItem[];
};

type CreateOrderResponse = {
  message: string;
  orderNumber: number;
  order: CreateOrderPayload;
};

export const createOrder = async (
  orderData: CreateOrderPayload,
): Promise<CreateOrderResponse> => {
  const response = await axios.post(
    "http://localhost:4000/api/orders",
    orderData,
  );
  return response.data;
};
