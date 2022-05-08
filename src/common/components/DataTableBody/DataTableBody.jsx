import cx from "classnames";
import { DataTableRow } from "common/components/DataTableRow/DataTableRow";
import { useDispatch } from "react-redux";
import {
  setAllInputsActionCreator,
  showItemForm,
} from "store/actionCreators/itemFormInputActionCreator";

import styles from "./DataTableBody.module.css";

export const DataTableBody = ({ className, fields_with_width, data }) => {
  const dispatch = useDispatch();

  const onDoubleClickCreator = (e) => () => {
    dispatch(setAllInputsActionCreator(e));
    dispatch(showItemForm());
  };

  return (
    <div className={cx(styles._, className)}>
      {data.map((e) => (
        <DataTableRow
          key={e["id"]}
          fields_with_width={fields_with_width}
          dataItem={e}
          onDoubleClick={onDoubleClickCreator(e)}
        />
      ))}
    </div>
  );
};
