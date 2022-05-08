import cx from "classnames";

import { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { ReactComponent as XMediumIcon } from "common/icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "common/icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({
  placeholder = "Введите",
  incorrect = false,
  disabled = false,
  name,
  label = null,
  type = "text",
  prefix = null,
  onClear = () => {},
  onChange = () => {},
  value,
  className,
}) => {
  const [id] = useState(_uniqueId("prefix-"));

  /*
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
*/
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
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        {value && value !== "" && (
          <button className={styles.button}>
            <XMediumIcon className={styles.icon} onClick={onClear} />
          </button>
        )}
        {disabled && <LockedIcon className={styles.icon} />}
      </div>
    </div>
  );
};
