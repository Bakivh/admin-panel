import cx from "classmates";

import styles from "./Input.module.css";

export const Input = ({
  placeholder = "Введите",
  value,
  incorrect = false,
  disabled = false,
  children = "",
}) => {
  const inputClass = cx(styles.input, {
    [styles.input_incorrect]: incorrect,
    [styles.input_disabled]: disabled,
  });

  /*   const  inputTextClass = cx(
    styles.inputText, { 
      [styles.inputText_incorrect]: incorrect, 
      [styles.inputText_disabled]: disabled
    });
 */
  const inputTextClass = cx(styles.inputText);

  return (
    <div className={styles._}>
      <label>
        <div className={styles.label}>{children}</div>
        <div className={styles.input}>
          <input
            placeholder={placeholder}
            type="text"
            value={value}
            className={inputTextClass}
            disabled={disabled}
          />
        </div>
      </label>
    </div>
  );
};
