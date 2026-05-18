import { contactIcon, lockIcon, eyeIcon } from "@/assets/img";
import { LoginFormValues } from "../authForm";

type LoginFormFieldConfig = {
  id: number;
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
  name: keyof LoginFormValues;
  requiredMessage: string;
};

export const loginFormFields: LoginFormFieldConfig[] = [
  {
    id: 1,
    icon: contactIcon,
    alt: "Введите E-mail или телефон",
    placeholder: "E-mail или телефон",
    type: "text",
    name: "emailOrPhone",
    requiredMessage: "Введите E-mail или телефон",
  },
  {
    id: 2,
    icon: lockIcon,
    alt: "Введите пароль",
    placeholder: "Пароль",
    type: "password",
    rightIcon: eyeIcon,
    rightAlt: "Показать пароль",
    name: "password",
    requiredMessage: "Введите пароль",
  },
];
