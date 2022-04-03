import cx from "classnames";

import styles from "./CheckBox.module.css";

export const CheckBox = ({ label }) => {
  return (
    <label className={styles._}>
      <input type="checkbox" />
      <span>{label && <div className={styles.text}>{label}</div>}</span>
    </label>
  );
};
