import styles from "./ForgotPassword.module.scss";
import AuthActions from "@/components/AuthActions/AuthActions";
import { authActionsData } from "../authActionsData";
import { forgotPasswordFields } from "./forgotPasswordData";
import AuthInput from "@/components/AuthInput/AuthInput";

const ForgotPassword = () => {
  return (
    <section className={styles.forgotPassword}>
      <h1 className={styles.title}>Забыли пароль?</h1>
      <form className={styles.forgotPasswordForm}>
        <h2 className={styles.forgotPasswordTitle}>Восстановление пароля</h2>
        <span className={styles.forgotPasswordInfo}>
          Введите E-mail или номер телефона, который вы использовали при
          регистрации. Мы отправим вам инструкции по сбросу пароля.
        </span>
        {forgotPasswordFields.map((el) => {
          return <AuthInput key={el.id} {...el} />;
        })}
        <AuthActions {...authActionsData.forgotPassword} />
      </form>
    </section>
  );
};

export default ForgotPassword;
