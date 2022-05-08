import {
  UPDATE_FILTERS,
  SET_FILTER_INPUT,
  SET_SHOW_FILTERS,
  ADD_DROPDOWN_CHECKED,
  REMOVE_DROPDOWN_CHECKED,
  CLEAR_FILTERS,
  APPLY_FILTERS,
} from "store/actions";

export const filtersActionCreator = (textFilter = "") => {
  return {
    type: UPDATE_FILTERS,
    payload: {
      textFilter: textFilter,
    },
  };
};

export const textInputActionCreator = (value = "", name) => {
  return {
    type: SET_FILTER_INPUT,
    payload: {
      value: value,
      name: name,
    },
  };
};

export const addDropdownChecked = (label) => {
  return {
    type: ADD_DROPDOWN_CHECKED,
    payload: label,
  };
};

export const removeDropdownChecked = (label) => {
  return {
    type: REMOVE_DROPDOWN_CHECKED,
    payload: label,
  };
};

export const showFiltersActionCreator = (isShow) => {
  return {
    type: SET_SHOW_FILTERS,
    payload: isShow,
  };
};

export const clearFiltersActionCreator = () => {
  return {
    type: CLEAR_FILTERS,
  };
};

export const applyFiltersActionCreator = () => {
  return {
    type: APPLY_FILTERS,
  };
};
