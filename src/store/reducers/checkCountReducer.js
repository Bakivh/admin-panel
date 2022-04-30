import {
  ADD_CHECKED,
  SET_CHECK_COUNT,
  REMOVE_CHECKED,
  CHECK_ALL,
  UNCHECK_ALL,
  SET_CURRENT_FILTER_IDS,
} from "store/actions";

const defaultState = {
  checked: [],
  currentIDs: [],
};

export const checkCountReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CHECK_COUNT:
      return { ...state, checkCount: action.payload };
    case ADD_CHECKED:
      return { ...state, checked: [...state.checked, action.payload] };
    case REMOVE_CHECKED:
      return {
        ...state,
        checked: state.checked.filter((e) =>
          e === action.payload ? false : true
        ),
      };
    case SET_CURRENT_FILTER_IDS:
      state.currentIDs = action.payload;
      return state; //{ ...state, currentIDs: action.payload };
    case CHECK_ALL:
      return {
        ...state,
        checked: [...state.checked, ...state.currentIDs, "all"],
      };
    case UNCHECK_ALL:
      return { ...state, checked: [] };
    default:
      return state;
  }
};
