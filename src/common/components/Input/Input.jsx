import cx from "classnames";
import { useState } from "react";
import _uniqueId from "lodash/uniqueId";

import xMediumIcon from "common/icons/x-medium.svg";
import lockedIcon from "common/icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({
  placeholder = "Введите",
  defaultValue,
  incorrect = false,
  disabled = false,
  label = "",
  inputType = "text",
}) => {
  const [id] = useState(_uniqueId("prefix-"));

  const inputClass = cx(styles.input, {
    [styles.input_incorrect]: incorrect,
    [styles.input_disabled]: disabled,
  });

  return (
    <div className={styles._}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={inputClass}>
        <input
          className={styles.inputText}
          placeholder={placeholder}
          type={inputType}
          id={id}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        {incorrect && (
          <button className={styles.button}>
            <img className={styles.icon} src={xMediumIcon} />
          </button>
        )}
        {disabled && <img className={styles.icon} src={lockedIcon} />}
      </div>
    </div>
  );
};
