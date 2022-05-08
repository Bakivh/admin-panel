import { UPLOAD_DATA, UPDATE_BY_ID } from "store/actions";

export const uploadDataActionCreator = (data, fields_with_width) => {
  return {
    type: UPLOAD_DATA,
    payload: {
      data: data,
      fields_with_width: fields_with_width,
    },
  };
};

export const updateByIdActionCreator = (data) => {
  return {
    type: UPDATE_BY_ID,
    payload: data,
  };
};
