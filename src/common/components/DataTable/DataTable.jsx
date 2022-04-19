import cx from "classnames";
import { DataTableBody } from "common/components/DataTableBody/DataTableBody";
import { DataTableHeader } from "common/components/DataTableHeader/DataTableHeader";

import styles from "./DataTable.module.css";

export const DataTable = ({ className, data, fields_with_width }) => {
  return (
    <div className={cx(styles._, className)}>
      <DataTableHeader fields_with_width={fields_with_width} />
      <DataTableBody fields_with_width={fields_with_width} data={data} />
      <div className={styles.footer}></div>
    </div>
  );
};
