import { DataTableField } from "common/components/DataTableField/DataTableField";

export const DataTableFieldContainer = ({
  className,
  width = "auto", // FIXME наверное так делать неправильно
  ...props
}) => {
  // FIXME : убрать этот контейнер
  return <DataTableField className={className} width={width} {...props} />;
};
