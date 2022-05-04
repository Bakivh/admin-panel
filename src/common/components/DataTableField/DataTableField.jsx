import cx from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { setSortActionCreator } from "store/actionCreators/setSortActionCreator";
import { ReactComponent as IconV } from "common/icons/v_arrow.svg";

import styles from "./DataTableField.module.css";

export const DataTableField = ({
  className,
  width = "auto", // FIXME наверное так делать неправильно
  name,
  alias,
}) => {
  const sortRule = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const name = event.currentTarget.getAttribute("name");
    let sortOrder;
    // если уже сортировали по этому полю в предыдущий раз, то меням направление
    if (name === sortRule.field && sortRule.sortOrder === "asc") {
      sortOrder = "desc";
    } else {
      sortOrder = "asc"; // по умолчанию
    }
    dispatch(setSortActionCreator(name, sortOrder));
  };

  return (
    <div
      name={name}
      className={cx(styles._, className)}
      style={{ width: width }}
      onClick={handleClick}
    >
      <div className={styles.text}>{alias}</div>
      {sortRule.field === name && (
        <IconV
          className={cx(styles.icon, {
            [styles.icon_up]: sortRule.sortOrder === "desc",
          })}
        />
      )}
    </div>
  );
};
