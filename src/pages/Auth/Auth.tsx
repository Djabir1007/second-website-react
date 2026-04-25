import LoginForm from "./LoginForm/LoginForm";
import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <section className={styles.auth}>
      <LoginForm />
    </section>
  );
};

export default Auth;
