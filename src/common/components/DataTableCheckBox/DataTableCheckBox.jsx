import { CheckBox } from "common/components/CheckBox/CheckBox";

import {
  removeCheckedActionCreator,
  addCheckedActionCreator,
  checkAllActionCreator,
  uncheckAllActionCreator,
} from "store/actionCreators/addRemoveChecked";
import { useDispatch, useSelector } from "react-redux";

export const DataTableCheckBox = ({ label, className, id, ...props }) => {
  // console.log("selector checkbox ");
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
    <CheckBox
      onChange={handleChange}
      label={label}
      className={className}
      id={id}
      checked={checked}
      {...props}
    />
  );
};
