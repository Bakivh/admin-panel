import { CheckBox } from "common/components/CheckBox/CheckBox";

import {
  addDropdownChecked,
  removeDropdownChecked,
} from "store/actionCreators/filtersActionCreator";
import { useDispatch, useSelector } from "react-redux";

export const DropdownCheckBox = ({ label, className, ...props }) => {
  // console.log("selector checkbox ");
  const checkedList = useSelector((state) => state.filters.filmStatusInput);

  const checked = checkedList.includes(label);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.checked) {
      dispatch(addDropdownChecked(label));
    } else {
      dispatch(removeDropdownChecked(label));
    }
  };

  return (
    <CheckBox
      onChange={handleChange}
      label={label}
      className={className}
      checked={checked}
      {...props}
    />
  );
};
