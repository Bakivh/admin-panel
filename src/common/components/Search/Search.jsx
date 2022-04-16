import cx from "classnames";

import styles from "./Search.module.css";

import { ReactComponent as XMediumIcon } from "common/icons/x-medium.svg";
import { ReactComponent as SearchIcon } from "common/icons/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchActionCreator } from "store/actionCreators/searchActionCreator";

export const Search = ({
  placeholder = "",
  type = "text",
  defaultValue,
  className,
  ...props
}) => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.searchField.text);

  const handleChange = (event) => {
    dispatch(searchActionCreator(event.target.value));
  };

  return (
    <div className={cx(styles._, className)}>
      <div className={styles.input}>
        <SearchIcon className={styles.icon} />
        <input
          defaultValue={defaultValue}
          value={searchField}
          type={type}
          className={styles.inputText}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
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
