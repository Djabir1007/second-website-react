// Styles
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Страница не найдена!</p>
    </div>
  );
};

export default NotFound;
