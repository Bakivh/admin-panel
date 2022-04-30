import cx from "classnames";
import { DataTableFieldContainer } from "common/components/DataTableFieldContainer/DataTableFieldContainer";
import { CheckBox } from "common/components/CheckBox/CheckBox";

import styles from "./DataTableHeader.module.css";

export const DataTableHeader = ({ className, fields_with_width }) => {
  return (
    <div className={cx(styles._, className)}>
      <CheckBox id="all" className={styles.checkbox} />
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
