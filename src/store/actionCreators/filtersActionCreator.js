import { UPDATE_FILTERS } from "store/actions";

export const filtersActionCreator = (textFilter = "") => {
  return {
    type: UPDATE_FILTERS,
    payload: {
      textFilter: textFilter,
    },
  };
};
