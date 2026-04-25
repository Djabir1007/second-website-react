import { forwardRef } from "react";
import { InputMask } from "@react-input/mask";
import styles from "./PhoneInput.module.scss";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange }, ref) => {
    return (
      <InputMask
        className={styles.input}
        mask="+7 (9__) ___-__-__"
        replacement={{ _: /\d/ }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="+7 (9__) ___-__-__"
        type="tel"
        ref={ref}
      />
    );
  },
);

export default PhoneInput;
