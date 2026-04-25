import {
  nameIcon,
  contactIcon,
  phoneIcon,
  lockIcon,
  eyeIcon,
} from "@/assets/img";

type RegisterFormField = {
  id: number;
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
};

export const registerFormFields: RegisterFormField[] = [
  {
    id: 1,
    icon: nameIcon,
    alt: "Введите имя",
    type: "text",
    placeholder: "Имя",
  },
  {
    id: 2,
    icon: contactIcon,
    alt: "Введите E-mail",
    type: "email",
    placeholder: "E-mail",
  },
  {
    id: 3,
    icon: phoneIcon,
    alt: "Введите номер телефона",
    type: "tel",
    placeholder: "Номер телефона",
  },
  {
    id: 4,
    icon: lockIcon,
    alt: "Введите пароль",
    type: "password",
    placeholder: "Пароль",
    rightIcon: eyeIcon,
    rightAlt: "Показать пароль",
  },
  {
    id: 5,
    icon: lockIcon,
    alt: "Повторите пароль",
    type: "password",
    placeholder: "Повторите пароль",
    rightIcon: eyeIcon,
    rightAlt: "Показать пароль",
  },
];
