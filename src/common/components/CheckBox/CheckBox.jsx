import cx from "classnames";

import styles from "./CheckBox.module.css";

export const CheckBox = ({ label, className }) => {
  return (
    <label className={cx(styles._, className)}>
      <input className={styles.input} type="checkbox" />
      <span className={styles.span}>
        {label && <div className={styles.text}>{label}</div>}
      </span>
    </label>
  );
};
