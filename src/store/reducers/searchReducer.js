import { CHANGE_SEARCH_TEXT } from "store/actions";

const defaultState = {
  text: "",
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
