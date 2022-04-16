import cx from "classnames";
import { DataTableField } from "common/components/DataTableField/DataTableField";
import { CheckBox } from "common/components/CheckBox/CheckBox";

import styles from "./DataTableHeader.module.css";

export const DataTableHeader = ({ className, fields_with_width }) => {
  return (
    <div className={cx(styles._, className)}>
      <CheckBox className={styles.checkbox} />
      {fields_with_width.map(({ alias, width }) => (
        <DataTableField key={alias} width={width}>
          {alias}
        </DataTableField>
      ))}
    </div>
  );
};
