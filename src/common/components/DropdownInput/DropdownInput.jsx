import cx from "classnames";

import { useSelector } from "react-redux";
import { Dropdown } from "common/components/Dropdown/Dropdown";
import { DropdownCheckBox } from "common/components/DropdownCheckBox/DropdownCheckBox";
import { ReactComponent as IconV } from "common/icons/v_arrow.svg";
//import OutsideClickHandler from 'react-outside-click-handler';

import { useState } from "react";

import styles from "./DropdownInput.module.css";

export const DropdownInput = ({ name, type = "text", className }) => {
  const [isShowDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    // console.log("in ", isShowDropdown);
    setShowDropdown(!isShowDropdown);
  };

  // FIXME разобраться с клик аутсайд
  /*
  const handleClick_out = () => {
    console.log("out");
    setShowDropdown(!isShowDropdown); 
  }*/

  //const dispatch = useDispatch();

  const list = useSelector((state) => state.filters[`${name}Input`]);

  const text = list.length > 0 ? list.join(", ") : "Любой";

  /*const handleChange = (event) => {
    dispatch(textInputActionCreator(event.target.value, name ));
  };*/

  return (
    <>
      <div className={cx(styles._, className)} onClick={handleClick}>
        <input className={styles.inputText} value={text} type={type} readOnly />
        <button className={styles.button}>
          <IconV className={styles.icon} />
        </button>
      </div>
      {isShowDropdown && (
        /* <OutsideClickHandler onOutsideClick={handleClick_out}>*/
        <Dropdown className={styles.dropdownStyleList}>
          <DropdownCheckBox
            className={styles.listInDropdown}
            label="downloaded"
          />
          <DropdownCheckBox className={styles.listInDropdown} label="watched" />
          <DropdownCheckBox
            className={styles.listInDropdown}
            label="marked to watch"
          />
          <DropdownCheckBox
            className={styles.listInDropdown}
            label="marked not to watch"
          />
        </Dropdown>
        /* </OutsideClickHandler>*/
      )}
    </>
  );
};
