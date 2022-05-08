import {
  SET_ITEMFORM_INPUT,
  SHOW_ITEM_FORM,
  HIDE_ITEM_FORM,
  SET_ITEMFORM_ALL_INPUTS,
} from "store/actions";

const defaultState = {
  id: "",
  titleInput: "",
  typeInput: "",
  directorInput: "",
  statusInput: "",
  watch_dtInput: "",
  showItemForm: false,
};

export const itemFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ITEMFORM_INPUT:
      return {
        ...state,
        [`${action.payload.name}Input`]: action.payload.value,
      };
    case SHOW_ITEM_FORM:
      return {
        ...state,
        showItemForm: true,
      };
    case HIDE_ITEM_FORM:
      return {
        ...state,
        showItemForm: false,
      };
    case SET_ITEMFORM_ALL_INPUTS:
      return {
        ...state,
        id: action.payload.id,
        titleInput: action.payload.title,
        typeInput: action.payload.type,
        directorInput: action.payload.director,
        statusInput: action.payload.status,
        watch_dtInput: action.payload.watch_dt,
      };
    default:
      return state;
  }
};
