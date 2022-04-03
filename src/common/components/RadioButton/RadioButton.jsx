import cx from "classnames";
import shortid from "shortid";

import styles from "./RadioButton.module.css";

export const RadioButton = ({
  name = shortid.generate(), // индивидуальный идентификатор для имени
  textOnly = false,
  label,
}) => {
  // класс собираем
  const radioClass = cx(styles._, {
    [styles.textOnly]: textOnly,
  });

  return (
    <label className={radioClass}>
      <input type="radio" name={name} />
      <span>{label && <div className={styles.text}>{label}</div>}</span>
    </label>
  );
};
