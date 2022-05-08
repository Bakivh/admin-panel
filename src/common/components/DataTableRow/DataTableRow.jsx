import cx from "classnames";
import { DataTableRowItem } from "common/components/DataTableRowItem/DataTableRowItem";
import { DataTableCheckBox } from "common/components/DataTableCheckBox/DataTableCheckBox";

import styles from "./DataTableRow.module.css";

export const DataTableRow = ({
  className,
  fields_with_width,
  dataItem,
  onDoubleClick = () => {},
}) => {
  return (
    <div className={cx(styles._, className)}>
      <DataTableCheckBox id={dataItem["id"]} className={styles.checkbox} />
      <div className={styles.row} onDoubleClick={onDoubleClick}>
        {fields_with_width.map(({ name, width }) => (
          <DataTableRowItem key={name} width={width}>
            {dataItem[name]}
          </DataTableRowItem>
        ))}
      </div>
    </div>
  );
};
