import {
  nameIcon,
  contactIcon,
  phoneIcon,
  lockIcon,
  eyeIcon,
} from "@/assets/img";
import { RegisterFormValues } from "../authForm";

type RegisterFormFieldConfig = {
  id: number;
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
  name: keyof RegisterFormValues;
  requiredMessage: string;
};

export const registerFormFields: RegisterFormFieldConfig[] = [
  {
    id: 1,
    icon: nameIcon,
    alt: "Введите имя",
    type: "text",
    placeholder: "Имя",
    name: "fullName",
    requiredMessage: "Введите имя",
  },
  {
    id: 2,
    icon: contactIcon,
    alt: "Введите E-mail",
    type: "email",
    placeholder: "E-mail",
    name: "email",
    requiredMessage: "Введите email",
  },
  {
    id: 3,
    icon: phoneIcon,
    alt: "Введите номер телефона",
    type: "tel",
    placeholder: "Номер телефона",
    name: "phone",
    requiredMessage: "Введите номер телефона",
  },
  {
    id: 4,
    icon: lockIcon,
    alt: "Введите пароль",
    type: "password",
    placeholder: "Пароль",
    rightIcon: eyeIcon,
    rightAlt: "Показать пароль",
    name: "password",
    requiredMessage: "Введите пароль",
  },
  {
    id: 5,
    icon: lockIcon,
    alt: "Повторите пароль",
    type: "password",
    placeholder: "Повторите пароль",
    rightIcon: eyeIcon,
    rightAlt: "Показать пароль",
    name: "confirmPassword",
    requiredMessage: "Повторите пароль",
  },
];
