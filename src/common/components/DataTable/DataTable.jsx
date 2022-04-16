import cx from "classnames";
import { DataTableBody } from "common/components/DataTableBody/DataTableBody";
import { DataTableHeader } from "common/components/DataTableHeader/DataTableHeader";
import { useSelector } from "react-redux";

import styles from "./DataTable.module.css";

export const DataTable = ({ className }) => {
  const { textFilter } = useSelector((state) => state.filters);

  const selectWithFilers = (state) => {
    const r = {
      data: state.data.data.filter((item) => {
        for (var property in item) {
          if (item[property].toString().includes(textFilter)) {
            return true;
          }
          console.log(item[property]);
        }
        return false;
      }),
      fields_with_width: state.data.fields_with_width,
    };
    return r;
  };

  const { data, fields_with_width } = useSelector(selectWithFilers);

  return (
    <div className={cx(styles._, className)}>
      <DataTableHeader fields_with_width={fields_with_width} />
      <DataTableBody fields_with_width={fields_with_width} data={data} />
      <div className={styles.footer}></div>
    </div>
  );
};
