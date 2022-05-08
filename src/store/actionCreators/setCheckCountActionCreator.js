import { SET_CHECK_COUNT } from "store/actions";

export const setCheckCountActionCreator = (checkCount) => {
  return {
    type: SET_CHECK_COUNT,
    payload: checkCount,
  };
};
