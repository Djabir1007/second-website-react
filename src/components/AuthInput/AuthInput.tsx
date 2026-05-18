import { LoginFormValues } from "@/pages/Auth/authForm";
import styles from "./AuthInput.module.scss";
import { UseFormRegister } from "react-hook-form";

type AuthInputProps = {
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
  isLast?: boolean;
};

const AuthInput = ({
  icon,
  alt,
  placeholder,
  type,
  rightIcon,
  rightAlt,
  isLast,
}: AuthInputProps) => {
  return (
    <div className={`${styles.formGroup} ${isLast ? styles.lastInput : ""}`}>
      <button className={styles.formIconButton} type="button">
        <img src={icon} alt={alt} />
      </button>
      <input
        className={styles.formInput}
        type={type}
        placeholder={placeholder}
      />
      {rightIcon && (
        <button className={styles.passwordButton} type="button">
          <img src={rightIcon} alt={rightAlt} />
        </button>
      )}
    </div>
  );
};

export default AuthInput;
