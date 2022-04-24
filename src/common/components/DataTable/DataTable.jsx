import cx from "classnames";
import { DataTableBody } from "common/components/DataTableBody/DataTableBody";
import { DataTableHeader } from "common/components/DataTableHeader/DataTableHeader";
import { DataTableFooter } from "common/components/DataTableFooter/DataTableFooter";

import styles from "./DataTable.module.css";

export const DataTable = ({ className, data, dataSize, fields_with_width }) => {
  return (
    <div className={cx(styles._, className)}>
      <DataTableHeader fields_with_width={fields_with_width} />
      <DataTableBody fields_with_width={fields_with_width} data={data} />
      <DataTableFooter dataSize={dataSize} />
    </div>
  );
};
