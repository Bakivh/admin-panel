import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import "./ui-kit/input.css";
import './ui-kit/search-bar.css"';
import './ui-kit/checkbox-radio.css"';
import './ui-kit/button.css"';
import './ui-kit/dropdown.css"';
import './ui-kit/ui-kit.css"';

function App() {
  return (
    <div class="app">
      <div class="wrapper">
        <div class="input-space">
          <div class="input-block">
            <label>
              <div class="input-block__label">Дата и время заказа</div>
              <div class="input-block__input">
                <input
                  placeholder="Введите"
                  type="text"
                  class="input-block__input-text"
                />
              </div>
            </label>
          </div>
          <div class="input-block">
            <label>
              <div class="input-block__label">Дата и время заказа</div>
              <div class="input-block__input input-block__input_incorrect">
                <input
                  placeholder="ММ.ДД.ГГГГ"
                  value="06.12.2021"
                  type="text"
                  class="input-block__input-text input-block__input-text_incorrect"
                />
                <button class="input-block__button">
                  <img
                    class="input-block__button-icon"
                    src="../icons/x-medium.svg"
                  />
                </button>
              </div>
            </label>
          </div>
          <div class="input-block">
            <label>
              <div class="input-block__label">Дата и время заказа</div>
              <div class="input-block__input input-block__input_disabled">
                <input
                  placeholder="ММ.ДД.ГГГГ"
                  value="06.12.2021"
                  type="text"
                  class="input-block__input-text input-block__input-text_disabled"
                  disabled="disabled"
                />
                <img
                  class="input-block__button-icon"
                  src="../icons/locked.svg"
                />
              </div>
            </label>
          </div>
        </div>
        <div class="search-bar-space">
          <div class="search-block">
            <div class="search-block__input">
              <img
                class="search-block__button-icon"
                src="../icons/search.svg"
              />
              <input
                placeholder="Номер заказа или ФИО"
                type="text"
                class="search-block__input-text"
              />
            </div>
          </div>
          <div class="search-block">
            <div class="search-block__input">
              <img
                class="search-block__button-icon"
                src="../icons/search.svg"
              />
              <input
                value="50744"
                type="text"
                class="search-block__input-text"
              />

              <button class="search-block__button">
                <img
                  class="search-block__button-icon"
                  src="../icons/x-medium.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="checkbox-space">
          <label class="checkbox-input">
            <input type="checkbox" />
            <span></span>
          </label>
          <label class="checkbox-input">
            <input type="checkbox" checked="checked" />
            <span></span>
          </label>
        </div>
        <div class="radio-space">
          <label class="radio-input">
            <input type="radio" name="choice" />
            <span></span>
          </label>

          <label class="radio-input">
            <input type="radio" name="choice" checked="checked" />
            <span></span>
          </label>
        </div>
      </div>
      <div class="wrapper">
        <div class="button-space">
          <div class="button-block">
            <button class="button button_theme-regular button_size-big">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-regular button_size-big">
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-regular button_size-big button_icon-only">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
          <div class="button-block">
            <button class="button button_theme-light button_size-big">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-light button_size-big">
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-light button_size-big button_icon-only">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
          <div class="button-block">
            <button class="button button_theme-contrast button_size-big">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-contrast button_size-big">
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-contrast button_size-big button_icon-only">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
          <div class="button-block">
            <button class="button button_theme-regular button_size-small">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-regular button_size-small">
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-regular button_size-small button_icon-only">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
          <div class="button-block">
            <button class="button button_theme-light button_size-small">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-light button_size-small">
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-light button_size-small button_icon-only">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
          <div class="button-block">
            <button class="button button_theme-contrast button_size-small">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-contrast button_size-small">
              <div class="button__text">Text here</div>
            </button>
            <button class="button button_theme-contrast button_size-small button_icon-only">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="dropdown-space">
          <div class="dropdown">
            <label class="checkbox-input">
              <input type="checkbox" />
              <span>
                <div class="checkbox-input__text">Новый</div>
              </span>
            </label>
            <label class="checkbox-input">
              <input type="checkbox" />
              <span>
                <div class="checkbox-input__text">Расчет</div>
              </span>
            </label>
            <label class="checkbox-input">
              <input type="checkbox" checked="checked" />
              <span>
                <div class="checkbox-input__text">Подтвержден</div>
              </span>
            </label>
            <label class="checkbox-input">
              <input type="checkbox" />
              <span>
                <div class="checkbox-input__text">Отложен</div>
              </span>
            </label>
            <label class="checkbox-input">
              <input type="checkbox" />
              <span>
                <div class="checkbox-input__text">Выполнен</div>
              </span>
            </label>
            <label class="checkbox-input">
              <input type="checkbox" />
              <span>
                <div class="checkbox-input__text">Отменен</div>
              </span>
            </label>
          </div>
          <div class="dropdown">
            <label class="radio-input radio-input_text-only">
              <input type="radio" name="dropdown-list" />
              <span>
                <div class="radio-input__text">Новый</div>
              </span>
            </label>
            <label class="radio-input radio-input_text-only">
              <input type="radio" name="dropdown-list" />
              <span>
                <div class="radio-input__text">Расчет</div>
              </span>
            </label>
            <label class="radio-input radio-input_text-only">
              <input type="radio" name="dropdown-list" checked="checked" />
              <span>
                <div class="radio-input__text">Подтвержден</div>
              </span>
            </label>
            <label class="radio-input radio-input_text-only">
              <input type="radio" name="dropdown-list" />
              <span>
                <div class="radio-input__text">Отложен</div>
              </span>
            </label>
            <label class="radio-input radio-input_text-only">
              <input type="radio" name="dropdown-list" />
              <span>
                <div class="radio-input__text">Выполнен</div>
              </span>
            </label>
            <label class="radio-input radio-input_text-only">
              <input type="radio" name="dropdown-list" />
              <span>
                <div class="radio-input__text">Отменен</div>
              </span>
            </label>
          </div>
          <div></div>
          <div class="dropdown dropdown_size-short">
            <div class="input-block input-block_size-short">
              <label>
                <div class="input-block__label">Номер страницы</div>
                <div class="input-block__input">
                  <input
                    placeholder="Введите номер"
                    type="text"
                    class="input-block__input-text"
                  />
                </div>
              </label>
            </div>
          </div>
          <div class="dropdown dropdown_size-short">
            <label class="dropdown__label">Удалить n записей?</label>
            <button class="button button_theme-light button_size-small button_width-flexible">
              <div class="button__text">Удалить</div>
            </button>
            <button class="button button_theme-regular button_size-small button_width-flexible">
              <div class="button__text">Отмена</div>
            </button>
          </div>
          <div class="dropdown dropdown_size-short">
            <label class="dropdown__label">Выберите тему</label>
            <button class="button button_theme-light button_size-small button_width-flexible">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                strok="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="4" stroke="none" />
                <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
                <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
                <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
                <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
                <path
                  d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                  stroke="none"
                />
                <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
                <path
                  d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                  stroke="none"
                />
                <path
                  d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Светлая</div>
            </button>
            <button class="button button_theme-regular button_size-small button_width-flexible">
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <div class="button__text">Темная</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
