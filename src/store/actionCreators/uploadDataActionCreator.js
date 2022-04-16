import { UPLOAD_DATA } from "store/actions";

export const uploadDataActionCreator = (data, fields_with_width) => {
  return {
    type: UPLOAD_DATA,
    payload: {
      data: data,
      fields_with_width: fields_with_width,
    },
  };
};
