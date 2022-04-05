import cx from "classnames";

import styles from "./Dropdown.module.css";

export const Dropdown = ({ label, className, children }) => {
  return (
    <>
      <div className={cx(styles._, className)}>
        {label && <label className={styles.label}>{label}</label>}
        {children}
      </div>
    </>
  );
};
