import cx from "classnames";

import styles from "./Dropdown.module.css";

export const Dropdown = ({ label, className, children }) => {
  return (
    <div className={cx(styles._, className)}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
    </div>
  );
};
