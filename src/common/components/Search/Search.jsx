import cx from "classnames";

import styles from "./Search.module.css";

import xMediumIcon from "common/icons/x-medium.svg";
import searchIcon from "common/icons/search.svg";

export const Search = ({ placeholder = "", type = "text", defaultValue }) => {
  return (
    <div className={styles._}>
      <div className={styles.input}>
        <img className={styles.icon} src={searchIcon} />
        <input
          defaultValue={defaultValue}
          type={type}
          className={styles.inputText}
          placeholder={placeholder}
        />

        {defaultValue && (
          <button className={styles.button}>
            <img className={styles.icon} src={xMediumIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
