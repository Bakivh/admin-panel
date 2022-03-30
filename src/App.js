import "./ui-kit.css";
import "./reset.css";
import "./style.css";
import { Input } from "./common/components/Input/Input";

export const App = () => {
  return (
    <div className="wrapper">
      <div className="input-space">
        <Input label="Дата и время заказа" />
        <Input
          label="Дата и время заказа"
          placeholder="ММ.ДД.ГГГГ"
          defaultValue="06.12.2021"
          incorrect
        />
        <Input
          label="Дата и время заказа"
          placeholder="ММ.ДД.ГГГГ"
          defaultValue="06.12.2021"
          disabled
        />
      </div>
    </div>
  );
};
