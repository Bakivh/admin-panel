import { UPLOAD_DATA, UPDATE_BY_ID } from "store/actions";

const defaultState = {
  data: [],
  fields_with_width: [],
};

export const dataTableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPLOAD_DATA:
      return {
        ...state,
        data: action.payload.data,
        fields_with_width: action.payload.fields_with_width,
      };
    case UPDATE_BY_ID:
      return {
        ...state,
        data: [
          ...state.data.filter((item) =>
            item.id === action.payload.id ? false : true
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};
