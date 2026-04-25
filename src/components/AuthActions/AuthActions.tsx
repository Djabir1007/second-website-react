import { useNavigate } from "react-router-dom";
import styles from "./AuthActions.module.scss";

type AuthActionsProps = {
  submitText: string;
  secondaryText: string;
  secondaryPath: string;
};

const AuthActions = ({
  submitText,
  secondaryText,
  secondaryPath,
}: AuthActionsProps) => {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.submitButton} type="submit">
        {submitText}
      </button>
      <div className={styles.divider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.dividerText}>или</span>
        <span className={styles.dividerLine}></span>
      </div>
      <button
        className={styles.secondaryButton}
        type="button"
        onClick={() => {
          navigate(secondaryPath);
        }}
      >
        {secondaryText}
      </button>
    </>
  );
};

export default AuthActions;
