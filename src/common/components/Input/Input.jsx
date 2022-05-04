import cx from "classnames";

import { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { ReactComponent as XMediumIcon } from "common/icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "common/icons/locked.svg";
import { useSelector, useDispatch } from "react-redux";
import { textInputActionCreator } from "store/actionCreators/filtersActionCreator";

import styles from "./Input.module.css";

export const Input = ({
  placeholder = "Введите",
  incorrect = false,
  disabled = false,
  name,
  label = null,
  type = "text",
  prefix = null,
  className,
}) => {
  const [id] = useState(_uniqueId("prefix-"));
  /*
  const [text, setText] = useState(defaultValue);

  const handleChange = (event) => {
    setText(event.target.value);
  }
*/

  const dispatch = useDispatch();
  const text = useSelector((state) => state.filters[`${name}Input`]);

  //  console.log([`${name}Input`]);
  //  console.log("text ", text );

  const handleChange = (event) => {
    dispatch(textInputActionCreator(event.target.value, name));
  };

  const handleClear = () => {
    dispatch(textInputActionCreator("", name));
  };

  const inputClass = cx(styles.input, {
    [styles.input_incorrect]: incorrect,
    [styles.input_disabled]: disabled,
  });

  return (
    <div className={cx(styles._, className)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={inputClass}>
        {prefix && <div className={styles.input__prefix}>{prefix}</div>}
        <input
          className={styles.inputText}
          placeholder={placeholder}
          type={type}
          id={id}
          value={text}
          disabled={disabled}
          onChange={handleChange}
        />
        {text && text !== "" && (
          <button className={styles.button}>
            <XMediumIcon className={styles.icon} onClick={handleClear} />
          </button>
        )}
        {disabled && <LockedIcon className={styles.icon} />}
      </div>
    </div>
  );
};
