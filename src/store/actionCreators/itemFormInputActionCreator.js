import {
  SET_ITEMFORM_INPUT,
  SHOW_ITEM_FORM,
  HIDE_ITEM_FORM,
  SET_ITEMFORM_ALL_INPUTS,
} from "store/actions";

export const itemFormInputActionCreator = (value = "", name) => {
  return {
    type: SET_ITEMFORM_INPUT,
    payload: {
      value: value,
      name: name,
    },
  };
};

export const setAllInputsActionCreator = (inputs) => {
  return {
    type: SET_ITEMFORM_ALL_INPUTS,
    payload: inputs,
  };
};

export const showItemForm = () => {
  return {
    type: SHOW_ITEM_FORM,
  };
};

export const hideItemForm = () => {
  return {
    type: HIDE_ITEM_FORM,
  };
};
