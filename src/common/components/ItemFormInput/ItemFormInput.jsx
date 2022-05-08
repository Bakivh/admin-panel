import { useSelector, useDispatch } from "react-redux";
import { itemFormInputActionCreator } from "store/actionCreators/itemFormInputActionCreator";
import { Input } from "common/components/Input/Input";

export const ItemFormInput = ({ name, ...props }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.itemForm[`${name}Input`]);

  const handleChange = (event) => {
    dispatch(itemFormInputActionCreator(event.target.value, name));
  };

  const handleClear = () => {
    dispatch(itemFormInputActionCreator("", name));
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
