import { SET_CUR_PAGE } from "store/actions";
import { SET_PAGE_COUNT } from "store/actions";

export const setCurPageActionCreator = (curPage) => {
  return {
    type: SET_CUR_PAGE,
    payload: curPage,
  };
};

export const setPageCountActionCreator = (pageCount) => {
  return {
    type: SET_PAGE_COUNT,
    payload: pageCount,
  };
};
