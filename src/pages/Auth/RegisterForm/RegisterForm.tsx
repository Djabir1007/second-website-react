import styles from "./RegisterForm.module.scss";
import { registerFormFields } from "./registerFormFields";
import { authActionsData } from "../authActionsData";
import AuthActions from "@/components/AuthActions/AuthActions";
import RegisterFormField from "./RegisterFormField/RegisterFormField";
import { useForm } from "react-hook-form";
import { RegisterFormValues } from "../authForm";
import { registerUser } from "@/api/auth";
import { useState } from "react";
import axios from "axios";

type ServerErrorResponse = {
  message: string;
};

const RegisterForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterSubmit = async (data: RegisterFormValues) => {
    try {
      const result = await registerUser(data);
      setServerError(null);
      console.log(result);
    } catch (error) {
      if (axios.isAxiosError<ServerErrorResponse>(error)) {
        setServerError(error.response?.data.message ?? "Ошибка регистрации");
      } else {
        setServerError("Ошибка регистрации");
      }
    }
  };

  return (
    <section className={styles.register}>
      <h1 className={styles.title}>Регистрация</h1>
      <form
        className={styles.registerForm}
        onSubmit={handleSubmit(handleRegisterSubmit)}
      >
        <h2 className={styles.registerFormTitle}>Создание аккаунта</h2>
        {registerFormFields.map((el) => {
          return (
            <RegisterFormField
              key={el.id}
              {...el}
              register={register}
              setFocus={setFocus}
              errors={errors}
            />
          );
        })}
        <label className={styles.registerFormAgreement}>
          <input className={styles.registerFormCheckbox} type="checkbox" />
          <span className={styles.registerFormAgreementText}>
            Я согласен с условиями обработки персональных данных
          </span>
        </label>
        {serverError !== null ? (
          <span className={styles.serverError}>{serverError}</span>
        ) : (
          ""
        )}
        <AuthActions {...authActionsData.register} />
      </form>
    </section>
  );
};

export default RegisterForm;
