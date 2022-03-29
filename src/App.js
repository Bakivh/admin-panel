import "./ui-kit.css";
import "./reset.css";
import "./style.css";
import { Input } from "./common/components/Input/Input";

export const App = () => {
  return (
    <div className="wrapper">
      <div className="input-space">
        <Input>Дата и время заказа</Input>
        <Input placeholder="ММ.ДД.ГГГГ" value="06.12.2021" incorrect>
          Дата и время заказа
        </Input>
        <Input placeholder="ММ.ДД.ГГГГ" value="06.12.2021" disabled>
          Дата и время заказа
        </Input>
      </div>
    </div>
  );
};
