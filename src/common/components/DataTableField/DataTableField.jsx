import cx from "classnames";

import styles from "./DataTableField.module.css";

export const DataTableField = ({
  className,
  width = "auto", // FIXME наверное так делать неправильно
  name,
  alias,
  onClick = () => {},
}) => {
  return (
    <div
      name={name}
      className={cx(styles._, className)}
      style={{ width: width }}
      onClick={onClick}
    >
      <div className={styles.text}>{alias}</div>
    </div>
  );
};
