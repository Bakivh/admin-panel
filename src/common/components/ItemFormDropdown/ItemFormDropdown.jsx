import cx from "classnames";

import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "common/components/Dropdown/Dropdown";
import { RadioButton } from "common/components/RadioButton/RadioButton";
import { ReactComponent as IconV } from "common/icons/v_arrow.svg";
import { itemFormInputActionCreator } from "store/actionCreators/itemFormInputActionCreator";
//import OutsideClickHandler from 'react-outside-click-handler';

import { useState } from "react";

import styles from "./ItemFormDropdown.module.css";

export const ItemFormDropdown = ({
  name,
  type = "text",
  className,
  statuses,
}) => {
  const [isShowDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!isShowDropdown);
  };

  const dispatch = useDispatch();

  const handleRadioClick = (e) => {
    dispatch(itemFormInputActionCreator(e.currentTarget.value, name));
  };

  const curStatus = useSelector((state) => state.itemForm[`${name}Input`]);

  return (
    <>
      <div className={cx(styles._, className)} onClick={handleClick}>
        <input
          className={styles.inputText}
          value={curStatus}
          type={type}
          readOnly
        />
        <button className={styles.button}>
          <IconV className={styles.icon} />
        </button>
      </div>
      {isShowDropdown && (
        /* <OutsideClickHandler onOutsideClick={handleClick_out}>*/
        <Dropdown className={styles.dropdownStyleList}>
          {statuses.map((item) => (
            <RadioButton
              className={styles.listInDropdown}
              label={item}
              value={item}
              textOnly
              name={name}
              key={item}
              checked={item === curStatus ? true : false}
              onChange={handleRadioClick}
            />
          ))}
        </Dropdown>
        /* </OutsideClickHandler>*/
      )}
    </>
  );
};
