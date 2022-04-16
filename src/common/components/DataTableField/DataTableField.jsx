import cx from "classnames";

import styles from "./DataTableField.module.css";

export const DataTableField = ({ className, width = "auto", children }) => {
  return (
    <div className={cx(styles._, className)} style={{ width: width }}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
