import cx from "classnames";

import styles from "./Search.module.css";

import { ReactComponent as XMediumIcon } from "common/icons/x-medium.svg";
import { ReactComponent as SearchIcon } from "common/icons/search.svg";

export const Search = ({
  placeholder = "",
  type = "text",
  defaultValue,
  className,
}) => {
  return (
    <div className={cx(styles._, className)}>
      <div className={styles.input}>
        <SearchIcon className={styles.icon} />
        <input
          defaultValue={defaultValue}
          type={type}
          className={styles.inputText}
          placeholder={placeholder}
        />

        {defaultValue && (
          <button className={styles.button}>
            <XMediumIcon className={styles.icon} />
          </button>
        )}
      </div>
    </div>
  );
};
