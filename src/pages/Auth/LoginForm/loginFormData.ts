import { contactIcon, lockIcon, eyeIcon } from "@/assets/img";

type LoginFormField = {
  id: number;
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
};

export const loginFormFields: LoginFormField[] = [
  {
    id: 1,
    icon: contactIcon,
    alt: "Введите E-mail или телефон",
    placeholder: "E-mail или телефон",
    type: "text",
  },
  {
    id: 2,
    icon: lockIcon,
    alt: "Введите пароль",
    placeholder: "Пароль",
    type: "password",
    rightIcon: eyeIcon,
    rightAlt: "Показать пароль",
  },
];
