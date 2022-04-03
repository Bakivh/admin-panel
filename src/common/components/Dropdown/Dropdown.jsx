import cx from "classnames";
import shortid from "shortid";
import { useState } from "react";

import styles from "./Dropdown.module.css";

export const Dropdown = ({
  sizeShort = false,
  styleList = false,
  styleButtons = false,
  label,
  children,
}) => {
  // класс собираем
  const dropdownClass = cx(styles._, {
    [styles.sizeShort]: sizeShort,
    [styles.styleList]: styleList,
    [styles.styleButtons]: styleButtons,
  });

  return (
    <>
      <div className={dropdownClass}>
        {label && <label className={styles.label}>{label}</label>}
        {children}
      </div>
    </>
  );
};
