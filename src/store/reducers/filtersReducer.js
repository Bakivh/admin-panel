import { UPDATE_FILTERS } from "store/actions";

const defaultState = {
  textFilter: "",
};

export const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return { ...state, textFilter: action.payload.textFilter };
    default:
      return state;
  }
};
