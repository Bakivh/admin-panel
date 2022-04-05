import cx from "classnames";

import styles from "./RadioButton.module.css";

export const RadioButton = ({
  name,
  textOnly = false,
  label,
  checked,
  className,
}) => {
  // класс собираем
  const radioClass = cx(styles._, className, {
    [styles.textOnly]: textOnly,
  });

  return (
    <label className={radioClass}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        checked={checked}
      />
      <span className={styles.span}>
        {label && <div className={styles.text}>{label}</div>}
      </span>
    </label>
  );
};
