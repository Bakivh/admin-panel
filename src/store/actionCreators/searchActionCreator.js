import { CHANGE_SEARCH_TEXT } from "store/actions";

export const searchActionCreator = (text) => {
  return {
    type: CHANGE_SEARCH_TEXT,
    payload: text,
  };
};
