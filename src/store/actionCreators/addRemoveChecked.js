import {
  ADD_CHECKED,
  REMOVE_CHECKED,
  SET_CURRENT_FILTER_IDS,
  CHECK_ALL,
  UNCHECK_ALL,
} from "store/actions";

export const addCheckedActionCreator = (id) => {
  return {
    type: ADD_CHECKED,
    payload: id,
  };
};

export const removeCheckedActionCreator = (id) => {
  return {
    type: REMOVE_CHECKED,
    payload: id,
  };
};

export const checkAllActionCreator = () => {
  return {
    type: CHECK_ALL,
  };
};

export const uncheckAllActionCreator = () => {
  return {
    type: UNCHECK_ALL,
  };
};

export const setCurrentIDs = (ids) => {
  return {
    type: SET_CURRENT_FILTER_IDS,
    payload: ids,
  };
};
