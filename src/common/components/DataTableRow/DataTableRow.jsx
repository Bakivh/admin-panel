import cx from "classnames";
import { DataTableRowItem } from "common/components/DataTableRowItem/DataTableRowItem";
import { CheckBox } from "common/components/CheckBox/CheckBox";

import styles from "./DataTableRow.module.css";

export const DataTableRow = ({ className, fields_with_width, dataItem }) => {
  return (
    <div className={cx(styles._, className)}>
      <CheckBox className={styles.checkbox} />
      {fields_with_width.map(({ name, width }) => (
        <DataTableRowItem key={name} width={width}>
          {dataItem[name]}
        </DataTableRowItem>
      ))}
    </div>
  );
};
