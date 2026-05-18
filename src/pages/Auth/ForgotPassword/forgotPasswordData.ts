import { contactIcon } from "@/assets/img";

type ForgotPasswordField = {
  id: number;
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
};

export const forgotPasswordFields: ForgotPasswordField[] = [
  {
    id: 1,
    icon: contactIcon,
    alt: "Введите E-mail или телефон",
    placeholder: "E-mail или телефон",
    type: "text",
  },
];
