import { useState } from "react";
import { LoginFormValues } from "../../authForm";
import styles from "./LoginFormField.module.scss";
import { UseFormRegister, UseFormSetFocus, FieldErrors } from "react-hook-form";

type LoginFormFieldProps = {
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
  register: UseFormRegister<LoginFormValues>;
  name: keyof LoginFormValues;
  requiredMessage: string;
  setFocus: UseFormSetFocus<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
};

const LoginFormField = ({
  icon,
  alt,
  placeholder,
  type,
  rightIcon,
  rightAlt,
  register,
  name,
  setFocus,
  errors,
  requiredMessage,
}: LoginFormFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isPasswordField = type === "password";

  return (
    <div className={styles.formGroup}>
      <button
        className={styles.formIconButton}
        type="button"
        onClick={() => setFocus(name)}
      >
        <img src={icon} alt={alt} />
      </button>
      <input
        className={styles.formInput}
        type={isPasswordField && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        {...register(name, {
          required: requiredMessage,
        })}
      />
      {rightIcon && (
        <button
          className={styles.passwordButton}
          type="button"
          onClick={handleTogglePasswordVisibility}
        >
          <img src={rightIcon} alt={rightAlt} />
        </button>
      )}
      {errors[name]?.message && (
        <p className={styles.textError}>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default LoginFormField;
