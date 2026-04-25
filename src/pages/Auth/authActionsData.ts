type AuthActionsItem = {
  submitText: string;
  secondaryText: string;
  secondaryPath: string;
};

type AuthActionsData = {
  login: AuthActionsItem;
  forgotPassword: AuthActionsItem;
  register: AuthActionsItem;
};

export const authActionsData: AuthActionsData = {
  login: {
    submitText: "Войти",
    secondaryText: "Создать аккаунт",
    secondaryPath: "/register",
  },
  forgotPassword: {
    submitText: "Отправить код",
    secondaryText: "Вернуться к входу",
    secondaryPath: "/auth",
  },
  register: {
    submitText: "Зарегистрироваться",
    secondaryText: "Уже есть аккаунт? Войти",
    secondaryPath: "/auth",
  },
};
