import { Link } from "react-router-dom";

import styles from "./LoginForm.module.scss";

import { authActionsData } from "../authActionsData";
import AuthActions from "@/components/AuthActions/AuthActions";
import { loginFormFields } from "./loginFormFields";

import { useForm } from "react-hook-form";
import { LoginFormValues } from "../authForm";
import LoginFormField from "./LoginFormField/LoginFormField";
import { loginUser } from "@/api/auth";
import { useState } from "react";
import axios from "axios";

type ServerErrorResponse = {
  message: string;
};

const LoginForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      password: "",
      emailOrPhone: "",
    },
  });

  const handleLoginSubmit = async (data: LoginFormValues) => {
    try {
      const result = await loginUser(data);
      setServerError(null);
      console.log(result);
    } catch (error) {
      if (axios.isAxiosError<ServerErrorResponse>(error)) {
        setServerError(error.response?.data.message ?? "Ошибка входа");
      } else {
        setServerError("Ошибка входа");
      }
    }
  };

  return (
    <>
      <h1 className={styles.title}>Вход в аккаунт</h1>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(handleLoginSubmit)}
      >
        <h2 className={styles.loginFormTitle}>Авторизация</h2>
        {loginFormFields.map((el) => {
          return (
            <LoginFormField
              key={el.id}
              {...el}
              register={register}
              setFocus={setFocus}
              errors={errors}
            />
          );
        })}
        {serverError !== null ? (
          <span className={styles.serverError}>{serverError}</span>
        ) : (
          ""
        )}
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
