import cx from "classnames";
import { useState } from "react";
import _uniqueId from "lodash/uniqueId";

import { ReactComponent as XMediumIcon } from "common/icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "common/icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({
  placeholder = "Введите",
  defaultValue,
  incorrect = false,
  disabled = false,
  label,
  type = "text",
  sizeShort,
  className,
}) => {
  const [id] = useState(_uniqueId("prefix-"));

  const inputBlockClass = cx(styles._, {
    [styles.sizeShort]: sizeShort,
  });

  const inputClass = cx(styles.input, className, {
    [styles.input_incorrect]: incorrect,
    [styles.input_disabled]: disabled,
  });

  return (
    <div className={inputBlockClass}>
      {label && (
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
            <XMediumIcon className={styles.icon} />
          </button>
        )}
        {disabled && <LockedIcon className={styles.icon} />}
      </div>
    </div>
  );
};
