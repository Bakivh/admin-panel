import "./ui-kit.css";
import "./reset.css";
import "./style.css";
import { Input } from "./common/components/Input/Input";
import { Search } from "./common/components/Search/Search";
import { CheckBox } from "./common/components/CheckBox/CheckBox";
import { RadioButton } from "./common/components/RadioButton/RadioButton";
import { Button } from "./common/components/Button/Button";
import { Dropdown } from "./common/components/Dropdown/Dropdown";

import { ReactComponent as IconMoon } from "common/icons/moon.svg";
import { ReactComponent as IconSun } from "common/icons/sun.svg";

import shortid from "shortid";

export const App = () => {
  const uniq_name = shortid.generate(); // для радиобуттона
  const uniq_name1 = shortid.generate(); // для радиобуттона

  return (
    <>
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
        <div className="search-bar-space">
          <Search placeholder="Номер заказа или ФИО" />
          <Search placeholder="Номер заказа или ФИО" defaultValue="50744" />
        </div>
        <div className="checkbox-space">
          <CheckBox />
          <CheckBox checked />
        </div>
        <div className="radio-space">
          <RadioButton name={uniq_name} />
          <RadioButton name={uniq_name} />
        </div>
      </div>
      <div className="wrapper">
        <div className="button-space">
          <div className="button-block">
            <Button>Text here</Button>
            <Button style="textOnly">Text here</Button>
            <Button style="iconOnly" />
          </div>
          <div class="button-block">
            <Button theme="light">Text here</Button>
            <Button theme="light" style="textOnly">
              Text here
            </Button>
            <Button theme="light" style="iconOnly" />
          </div>
          <div class="button-block">
            <Button theme="contrast">Text here</Button>
            <Button theme="contrast" style="textOnly">
              Text here
            </Button>
            <Button theme="contrast" style="iconOnly" />
          </div>
          <div className="button-block">
            <Button size="small">Text here</Button>
            <Button size="small" style="textOnly">
              Text here
            </Button>
            <Button size="small" style="iconOnly" />
          </div>
          <div class="button-block">
            <Button size="small" theme="light">
              Text here
            </Button>
            <Button size="small" theme="light" style="textOnly">
              Text here
            </Button>
            <Button size="small" theme="light" style="iconOnly" />
          </div>
          <div class="button-block">
            <Button size="small" theme="contrast">
              Text here
            </Button>
            <Button size="small" theme="contrast" style="textOnly">
              Text here
            </Button>
            <Button size="small" theme="contrast" style="iconOnly" />
          </div>
        </div>
        <div class="dropdown-space">
          <Dropdown styleList>
            <CheckBox label="Новый" />
            <CheckBox label="Расчет" />
            <CheckBox label="Подтвержден" />
            <CheckBox label="Отложен" />
            <CheckBox label="Выполнен" />
            <CheckBox label="Отменен" />
          </Dropdown>
          <Dropdown styleList>
            <RadioButton label="Новый" textOnly name={uniq_name1} />
            <RadioButton label="Расчет" textOnly name={uniq_name1} />
            <RadioButton label="Подтвержден" textOnly name={uniq_name1} />
            <RadioButton label="Отложен" textOnly name={uniq_name1} />
            <RadioButton label="Выполнен" textOnly name={uniq_name1} />
            <RadioButton label="Отменен" textOnly name={uniq_name1} />
          </Dropdown>
          <div></div>
          <Dropdown sizeShort>
            <Input
              sizeShort
              label="Номер страницы"
              placeholder="Введите номер"
            />
          </Dropdown>
          <Dropdown sizeShort styleButtons label="Удалить n записей?">
            <Button
              size="small"
              theme="light"
              style="textOnly"
              width="flexible"
            >
              Удалить
            </Button>
            <Button size="small" style="textOnly" width="flexible">
              Отмена
            </Button>
          </Dropdown>
          <Dropdown sizeShort styleButtons label="Выберите тему">
            <Button size="small" theme="light" Icon={IconSun} width="flexible">
              Светлая
            </Button>
            <Button size="small" Icon={IconMoon} width="flexible">
              Темная
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
