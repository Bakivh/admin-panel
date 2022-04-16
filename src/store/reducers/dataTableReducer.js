import { UPLOAD_DATA } from "store/actions";

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
    default:
      return state;
  }
};
