import cx from "classnames";

import xMediumIcon from "../../icons/x-medium.svg";
import lockedIcon from "../../icons/locked.svg";

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

  const inputTextClass = cx(styles.inputText, {
    [styles.inputText_incorrect]: incorrect,
    [styles.inputText_disabled]: disabled,
  });

  return (
    <div className={styles._}>
      <label>
        <div className={styles.label}>{children}</div>
        <div className={inputClass}>
          <input
            className={inputTextClass}
            placeholder={placeholder}
            type="text"
            defaultValue={value}
            disabled={disabled}
          />
          {incorrect && (
            <button className={styles.button}>
              <img className={styles.buttonIcon} src={xMediumIcon} />
            </button>
          )}
          {disabled && <img className={styles.buttonIcon} src={lockedIcon} />}
        </div>
      </label>
    </div>
  );
};
