import { useSelector, useDispatch } from "react-redux";

import { DataTableField } from "common/components/DataTableField/DataTableField";
import { setSortActionCreator } from "store/actionCreators/setSortActionCreator";

export const DataTableFieldContainer = ({
  className,
  width = "auto", // FIXME наверное так делать неправильно
  ...props
}) => {
  const sortRule = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const name = event.currentTarget.getAttribute("name");
    let sortOrder = "asc"; // по умолчанию
    // если уже сортировали по этому полю в предыдущий раз, то меням направление

    if (name === sortRule.field && sortRule.sortOrder === "asc") {
      sortOrder = "desc";
    }
    dispatch(setSortActionCreator(name, sortOrder));
  };

  return (
    <DataTableField
      className={className}
      width={width}
      onClick={handleClick}
      {...props}
    />
  );
};
