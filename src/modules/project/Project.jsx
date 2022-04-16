import { Filters } from "common/components/Filters/Filters";
import { DataTable } from "common/components/DataTable/DataTable";

import styles from "./Project.module.css";

export const Project = () => {
  return (
    <div className={styles._}>
      <div className={styles.header}>Список заказов</div>
      <Filters />
      <DataTable />
    </div>
  );
};
