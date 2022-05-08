import { useSelector, useDispatch } from "react-redux";
import { textInputActionCreator } from "store/actionCreators/filtersActionCreator";
import { Input } from "common/components/Input/Input";

export const FiltersInput = ({ name, ...props }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.filters[`${name}Input`]);

  const handleChange = (event) => {
    dispatch(textInputActionCreator(event.target.value, name));
  };

  const handleClear = () => {
    dispatch(textInputActionCreator("", name));
  };

  return (
    <Input
      onClear={handleClear}
      onChange={handleChange}
      value={text}
      name={name}
      {...props}
    />
  );
};
