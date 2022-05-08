import cx from "classnames";
import { DataTableFieldContainer } from "common/components/DataTableFieldContainer/DataTableFieldContainer";
import { DataTableCheckBox } from "common/components/DataTableCheckBox/DataTableCheckBox";

import styles from "./DataTableHeader.module.css";

export const DataTableHeader = ({ className, fields_with_width }) => {
  return (
    <div className={cx(styles._, className)}>
      <DataTableCheckBox id="all" className={styles.checkbox} />
      {fields_with_width.map(({ name, alias, width }) => (
        <DataTableFieldContainer
          key={name}
          width={width}
          name={name}
          alias={alias}
        />
      ))}
    </div>
  );
};
