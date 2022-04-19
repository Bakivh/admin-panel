import { Filters } from "common/components/Filters/Filters";
import { DataTableContainer } from "common/components/DataTableContainer/DataTableContainer";

import styles from "./Project.module.css";

export const Project = () => {
  return (
    <div className={styles._}>
      <div className={styles.header}>Список заказов</div>
      <Filters />
      <DataTableContainer />
    </div>
  );
};
