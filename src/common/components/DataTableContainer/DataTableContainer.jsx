import { DataTable } from "common/components/DataTable/DataTable";
import { useSelector, useDispatch } from "react-redux";
import { selectWithFilters } from "store/selectors/selectWithFilters";
import { setCurrentIDs } from "store/actionCreators/addRemoveChecked";

export const DataTableContainer = ({ className }) => {
  const { data, dataSize, fields_with_width } = useSelector(selectWithFilters);

  //console.log("selector data");
  const dispatch = useDispatch(); // FIXME почему то два акшена вызывается, вообще не пойму почему

  // сохраняем состояние того что сейчас показывем
  dispatch(setCurrentIDs(data.map((e) => e["id"])));

  return (
    <DataTable
      className={className}
      data={data}
      fields_with_width={fields_with_width}
      dataSize={dataSize}
    />
  );
};
