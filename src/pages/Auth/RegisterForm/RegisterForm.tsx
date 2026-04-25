import styles from "./RegisterForm.module.scss";
import AuthInput from "@/components/AuthInput/AuthInput";
import { registerFormFields } from "./registerFormData";
import { authActionsData } from "../authActionsData";
import AuthActions from "@/components/AuthActions/AuthActions";

const RegisterForm = () => {
  return (
    <section className={styles.register}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.registerForm}>
        <h2 className={styles.registerFormTitle}>Создание аккаунта</h2>
        {registerFormFields.map((el) => {
          return <AuthInput key={el.id} {...el} />;
        })}
        <label className={styles.registerFormAgreement}>
          <input className={styles.registerFormCheckbox} type="checkbox" />
          <span className={styles.registerFormAgreementText}>
            Я согласен с условиями обработки персональных данных
          </span>
        </label>
        <AuthActions {...authActionsData.register} />
      </form>
    </section>
  );
};

export default RegisterForm;
