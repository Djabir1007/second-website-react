import { InputMask } from "@react-input/mask";

import styles from "./PhoneInput.module.scss";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  return (
    <InputMask
      className={styles.input}
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="+7 (___) ___-__-__"
      type="tel"
    />
  );
};

export default PhoneInput;
