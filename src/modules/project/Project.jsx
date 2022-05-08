import { Filters } from "common/components/Filters/Filters";
import { DataTableContainer } from "common/components/DataTableContainer/DataTableContainer";
import { ItemForm } from "common/components/ItemForm/ItemForm";

import styles from "./Project.module.css";

export const Project = () => {
  return (
    <div className={styles._}>
      <div className={styles.header}>Список заказов</div>
      <Filters />
      <DataTableContainer />
      <ItemForm id="3" />
    </div>
  );
};
