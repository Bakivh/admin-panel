import {
  UPDATE_FILTERS,
  SET_FILTER_INPUT,
  SET_SHOW_FILTERS,
  ADD_DROPDOWN_CHECKED,
  REMOVE_DROPDOWN_CHECKED,
  CLEAR_FILTERS,
  APPLY_FILTERS,
} from "store/actions";

const defaultState = {
  textFilter: "",
  dateWatchedFrom: "",
  dateWatchedTo: "",
  filmStatus: [],
  idFrom: "",
  idTo: "",
  dateWatchedFromInput: "",
  dateWatchedToInput: "",
  filmStatusInput: [],
  idFromInput: "",
  idToInput: "",
  showFilters: false,
};

export const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return { ...state, textFilter: action.payload.textFilter };
    case SET_FILTER_INPUT:
      return {
        ...state,
        [`${action.payload.name}Input`]: action.payload.value,
      };
    case CLEAR_FILTERS:
      return { ...defaultState, showFilters: state.showFilters };
    case ADD_DROPDOWN_CHECKED:
      return {
        ...state,
        filmStatusInput: [...state.filmStatusInput, action.payload],
      };
    case REMOVE_DROPDOWN_CHECKED:
      return {
        ...state,
        filmStatusInput: state.filmStatusInput.filter((e) =>
          e === action.payload ? false : true
        ),
      };
    case APPLY_FILTERS:
      return {
        ...state,
        dateWatchedFrom: state.dateWatchedFromInput,
        dateWatchedTo: state.dateWatchedToInput,
        filmStatus: state.filmStatusInput,
        idFrom: state.idFromInput,
        idTo: state.idToInput,
      };
    case SET_SHOW_FILTERS:
      return { ...state, showFilters: action.payload };
    default:
      return state;
  }
};
