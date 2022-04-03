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
  type = "text",
  sizeShort,
}) => {
  const [id] = useState(_uniqueId("prefix-"));

  const inputBlockClass = cx(styles._, {
    [styles.sizeShort]: sizeShort,
  });

  const inputClass = cx(styles.input, {
    [styles.input_incorrect]: incorrect,
    [styles.input_disabled]: disabled,
  });

  return (
    <div className={inputBlockClass}>
      {label != "" && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={inputClass}>
        <input
          className={styles.inputText}
          placeholder={placeholder}
          type={type}
          id={id}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        {defaultValue && (
          <button className={styles.button}>
            <img className={styles.icon} src={xMediumIcon} />
          </button>
        )}
        {disabled && <img className={styles.icon} src={lockedIcon} />}
      </div>
    </div>
  );
};
