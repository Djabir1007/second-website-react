import { useState } from "react";
import styles from "./RegisterFormField.module.scss";
import { UseFormRegister, UseFormSetFocus, FieldErrors } from "react-hook-form";
import { RegisterFormValues } from "../../authForm";

type RegisterFormFieldProps = {
  icon: string;
  alt: string;
  placeholder: string;
  type: string;
  rightIcon?: string;
  rightAlt?: string;
  requiredMessage: string;
  register: UseFormRegister<RegisterFormValues>;
  name: keyof RegisterFormValues;
  setFocus: UseFormSetFocus<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>;
};

const RegisterFormField = ({
  icon,
  alt,
  placeholder,
  type,
  rightIcon,
  rightAlt,
  requiredMessage,
  register,
  name,
  setFocus,
  errors,
}: RegisterFormFieldProps) => {
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

export default RegisterFormField;
