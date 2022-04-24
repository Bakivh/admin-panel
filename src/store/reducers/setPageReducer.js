import { SET_CUR_PAGE } from "store/actions";
import { SET_PAGE_COUNT } from "store/actions";

const defaultState = {
  curPage: 1,
  pageCount: 1,
  rowsPerPage: 10,
};

export const setPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CUR_PAGE:
      return { ...state, curPage: action.payload };
    case SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    default:
      return state;
  }
};
