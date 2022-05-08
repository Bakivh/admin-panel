import cx from "classnames";

import styles from "./DataTableRowItem.module.css";

export const DataTableRowItem = ({ className, width = "auto", children }) => {
  return (
    <div className={cx(styles._, className)} style={{ width: width }}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
