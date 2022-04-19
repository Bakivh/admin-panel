import { DataTable } from "common/components/DataTable/DataTable";
import { useSelector } from "react-redux";
import { selectWithFiltersSC } from "store/selectors/selectWithFilters";

export const DataTableContainer = ({ className }) => {
  const { textFilter } = useSelector((state) => state.filters);
  const sortRule = useSelector((state) => state.sort);

  const selectWithFilters = selectWithFiltersSC(textFilter, sortRule);

  const { data, fields_with_width } = useSelector(selectWithFilters);

  return (
    <DataTable
      className={className}
      data={data}
      fields_with_width={fields_with_width}
    />
  );
};
