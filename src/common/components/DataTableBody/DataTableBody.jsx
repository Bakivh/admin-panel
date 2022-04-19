import cx from "classnames";
import { DataTableRow } from "common/components/DataTableRow/DataTableRow";
import { nanoid } from "nanoid";

import styles from "./DataTableBody.module.css";

export const DataTableBody = ({ className, fields_with_width, data }) => {
  return (
    <div className={cx(styles._, className)}>
      {data.map((e) => (
        <DataTableRow
          key={nanoid()} // FIXME поменять на что-то другое. но как правильно кстати?
          fields_with_width={fields_with_width}
          dataItem={e}
        />
      ))}
    </div>
  );
};