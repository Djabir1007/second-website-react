import { Link } from "react-router-dom";

import styles from "./LoginForm.module.scss";

import { authActionsData } from "../authActionsData";
import AuthActions from "@/components/AuthActions/AuthActions";
import AuthInput from "@/components/AuthInput/AuthInput";
import { loginFormFields } from "./loginFormData";

const LoginForm = () => {
  return (
    <>
      <h1 className={styles.title}>Вход в аккаунт</h1>
      <form className={styles.loginForm}>
        <h2 className={styles.loginFormTitle}>Авторизация</h2>
        {loginFormFields.map((el, index) => {
          return (
            <AuthInput
              key={el.id}
              {...el}
              isLast={index === loginFormFields.length - 1}
            />
          );
        })}
        <Link className={styles.loginFormForgotPassword} to="/forgot-password">
          Забыли пароль?
        </Link>
        <AuthActions {...authActionsData.login} />
        <span className={styles.loginFormHint}>
          Войдите, чтобы видеть заказы, избранное и быстрее оформлять покупки.
        </span>
      </form>
    </>
  );
};

export default LoginForm;
