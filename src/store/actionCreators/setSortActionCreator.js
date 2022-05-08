import { SET_SORT_RULE } from "store/actions";

export const setSortActionCreator = (field, sortOrder) => {
  return {
    type: SET_SORT_RULE,
    payload: {
      field: field,
      sortOrder: sortOrder,
    },
  };
};
