import cx from "classnames";

import {
  removeCheckedActionCreator,
  addCheckedActionCreator,
  checkAllActionCreator,
  uncheckAllActionCreator,
} from "store/actionCreators/addRemoveChecked";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckBox.module.css";

export const CheckBox = ({ label, className, id, ...props }) => {
  console.log("selector checkbox ");
  const checked = useSelector((state) => state.checks.checked.includes(id));

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.checked && id === "all") {
      dispatch(checkAllActionCreator());
    } else if (!target.checked && id === "all") {
      dispatch(uncheckAllActionCreator());
    } else if (target.checked) {
      dispatch(addCheckedActionCreator(id));
    } else {
      dispatch(removeCheckedActionCreator(id));
    }
  };

  return (
    <label
      className={cx(styles._, className)}
      onChange={handleChange}
      {...props}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={() => {}}
      />
      <span className={styles.span}>
        {label && <div className={styles.text}>{label}</div>}
      </span>
    </label>
  );
};
