import { Input } from "common/components/Input/Input";
import { Search } from "common/components/Search/Search";
import { CheckBox } from "common/components/CheckBox/CheckBox";
import { RadioButton } from "common/components/RadioButton/RadioButton";
import { Button } from "common/components/Button/Button";
import { Dropdown } from "common/components/Dropdown/Dropdown";

import { ReactComponent as IconMoon } from "common/icons/moon.svg";
import { ReactComponent as IconSun } from "common/icons/sun.svg";

import shortid from "shortid";

import styles from "./UiKit.module.css";

export const UiKit = () => {
  const uniq_name = shortid.generate(); // для радиобуттона
  const uniq_name1 = shortid.generate(); // для радиобуттона

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.inputSpace}>
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
        <div className={styles.searchBarSpace}>
          <Search placeholder="Номер заказа или ФИО" />
          <Search placeholder="Номер заказа или ФИО" defaultValue="50744" />
        </div>
        <div className={styles.checkboxSpace}>
          <CheckBox />
          <CheckBox checked />
        </div>
        <div className={styles.radioSpace}>
          <RadioButton name={uniq_name} />
          <RadioButton name={uniq_name} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.buttonSpace}>
          <div className={styles.buttonBlock}>
            <Button Icon={IconMoon}>Text here</Button>
            <Button>Text here</Button>
            <Button Icon={IconMoon} />
          </div>
          <div className={styles.buttonBlock}>
            <Button theme="light" Icon={IconMoon}>
              Text here
            </Button>
            <Button theme="light">Text here</Button>
            <Button theme="light" Icon={IconMoon} />
          </div>
          <div className={styles.buttonBlock}>
            <Button theme="contrast" Icon={IconMoon}>
              Text here
            </Button>
            <Button theme="contrast">Text here</Button>
            <Button theme="contrast" Icon={IconMoon} />
          </div>
          <div className={styles.buttonBlock}>
            <Button size="small" Icon={IconMoon}>
              Text here
            </Button>
            <Button size="small">Text here</Button>
            <Button size="small" Icon={IconMoon} />
          </div>
          <div className={styles.buttonBlock}>
            <Button size="small" theme="light" Icon={IconMoon}>
              Text here
            </Button>
            <Button size="small" theme="light">
              Text here
            </Button>
            <Button size="small" theme="light" Icon={IconMoon} />
          </div>
          <div className={styles.buttonBlock}>
            <Button size="small" theme="contrast" Icon={IconMoon}>
              Text here
            </Button>
            <Button size="small" theme="contrast">
              Text here
            </Button>
            <Button size="small" theme="contrast" Icon={IconMoon} />
          </div>
        </div>
        <div className={styles.dropdownSpace}>
          <Dropdown className={styles.dropdownStyleList}>
            <CheckBox className={styles.listInDropdown} label="Новый" />
            <CheckBox className={styles.listInDropdown} label="Расчет" />
            <CheckBox className={styles.listInDropdown} label="Подтвержден" />
            <CheckBox className={styles.listInDropdown} label="Отложен" />
            <CheckBox className={styles.listInDropdown} label="Выполнен" />
            <CheckBox className={styles.listInDropdown} label="Отменен" />
          </Dropdown>
          <Dropdown className={styles.dropdownStyleList}>
            <RadioButton
              className={styles.listInDropdown}
              label="Новый"
              textOnly
              name={uniq_name1}
            />
            <RadioButton
              className={styles.listInDropdown}
              label="Расчет"
              textOnly
              name={uniq_name1}
            />
            <RadioButton
              className={styles.listInDropdown}
              label="Подтвержден"
              textOnly
              name={uniq_name1}
            />
            <RadioButton
              className={styles.listInDropdown}
              label="Отложен"
              textOnly
              name={uniq_name1}
            />
            <RadioButton
              className={styles.listInDropdown}
              label="Выполнен"
              textOnly
              name={uniq_name1}
            />
            <RadioButton
              className={styles.listInDropdown}
              label="Отменен"
              textOnly
              name={uniq_name1}
            />
          </Dropdown>
          <div></div>
          <Dropdown sizeShort>
            <Input
              className={styles.input_sizeShort}
              label="Номер страницы"
              placeholder="Введите номер"
            />
          </Dropdown>
          <Dropdown sizeShort label="Удалить n записей?">
            <Button
              className={styles.buttonInDropdown}
              size="small"
              theme="light"
              fullWidth
            >
              Удалить
            </Button>
            <Button className={styles.buttonInDropdown} size="small" fullWidth>
              Отмена
            </Button>
          </Dropdown>
          <Dropdown sizeShort label="Выберите тему">
            <Button
              className={styles.buttonInDropdown}
              size="small"
              theme="light"
              Icon={IconSun}
              fullWidth
            >
              Светлая
            </Button>
            <Button
              className={styles.buttonInDropdown}
              size="small"
              Icon={IconMoon}
              fullWidth
            >
              Темная
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
