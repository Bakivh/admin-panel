import { SET_SORT_RULE } from "store/actions";

const defaultState = {
  field: "id",
  sortOrder: "asc",
};

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SORT_RULE:
      return {
        ...state,
        field: action.payload.field,
        sortOrder: action.payload.sortOrder,
      };
    default:
      return state;
  }
};
