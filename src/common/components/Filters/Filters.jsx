import cx from "classnames";
//import { useState } from "react";

import { Search } from "common/components/Search/Search";
import { Button } from "common/components/Button/Button";
import { Input } from "common/components/Input/Input";
import { DropdownInput } from "common/components/DropdownInput/DropdownInput";
import { ReactComponent as IconFilter } from "common/icons/filter.svg";
import { ReactComponent as IconRefresh } from "common/icons/refresh.svg";
import { useDispatch } from "react-redux";
import { uploadDataActionCreator } from "store/actionCreators/uploadDataActionCreator";
import { filtersActionCreator } from "store/actionCreators/filtersActionCreator";
import { setCurPageActionCreator } from "store/actionCreators/pageActionCreators";
import { useSelector } from "react-redux";
import {
  showFiltersActionCreator,
  clearFiltersActionCreator,
  applyFiltersActionCreator,
} from "store/actionCreators/filtersActionCreator";

import { movies, fields_with_width } from "mocks/list";

import styles from "./Filters.module.css";

export const Filters = ({ className }) => {
  const dispatch = useDispatch();

  // считываем значение в поле поиска
  const searchField = useSelector((state) => state.searchField.text);
  const showFilters = useSelector((state) => state.filters.showFilters);

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      dispatch(filtersActionCreator(searchField));
      dispatch(setCurPageActionCreator("1"));
    }
  };

  // функция - типа получаем с сервера данные
  const getInitialData = () => {
    return {
      data: movies,
      fields_with_width: fields_with_width,
    };
  };

  const handleRefreshClick = () => {
    const { data, fields_with_width } = getInitialData();
    dispatch(uploadDataActionCreator(data, fields_with_width));
  };

  const handleShowFiltersClick = () => {
    dispatch(showFiltersActionCreator(!showFilters));
  };

  const handleApplyClick = () => {
    dispatch(applyFiltersActionCreator());
    dispatch(setCurPageActionCreator("1"));
  };

  const handleClearFiltersClick = () => {
    dispatch(clearFiltersActionCreator());
    dispatch(setCurPageActionCreator("1"));
  };

  return (
    <>
      <div className={cx(styles._, className)}>
        <div className={styles.search}>
          <Search
            placeholder="Введите что-нибудь для поиска"
            className={cx(styles.input, styles.primary_color)}
            onKeyDown={handleKeyDown}
          />
          <Button
            size="big"
            theme={showFilters === false ? "light" : "regular"}
            Icon={IconFilter}
            className={cx(styles.getFilters)}
            onClick={handleShowFiltersClick}
          >
            Фильтры
          </Button>
          {showFilters && (
            <Button
              size="big"
              theme="light"
              className={cx(styles.clearFilters)}
              onClick={handleClearFiltersClick}
            >
              Сбросить фильтры
            </Button>
          )}
        </div>
        <Button
          size="big"
          theme="light"
          Icon={IconRefresh}
          className={cx(styles.refresh, styles.primary_color)}
          onClick={handleRefreshClick}
        >
          Загрузка
        </Button>
      </div>
      {showFilters && (
        <div className={styles.filters}>
          <div className={styles.filters__inputBlock}>
            <div className={styles.label}>Дата просмотра</div>
            <div className={styles.filters__inputsWrapper}>
              <Input
                prefix="с"
                className={styles.filters__input_dateInput}
                name="dateWatchedFrom"
                placeholder="yyyy-mm-dd"
              />
              <Input
                prefix="по"
                className={cx(
                  styles.filters__input_dateInput,
                  styles.filters__input_last
                )}
                name="dateWatchedTo"
                placeholder="yyyy-mm-dd"
              />
            </div>
          </div>
          <div
            className={cx(
              styles.filters__inputBlock,
              styles.filters__inputBlock_dropdown
            )}
          >
            <div className={cx(styles.label, styles.label_dropdown)}>
              Статус просмотра
            </div>
            <DropdownInput
              className={styles.filters__dropdownInput}
              name="filmStatus"
            />
          </div>
          <div
            className={cx(
              styles.filters__inputBlock,
              styles.filters__inputBlock_short
            )}
          >
            <div className={cx(styles.label, styles.label_short)}>
              Id фильма
            </div>
            <div
              className={cx(
                styles.filters__inputsWrapper,
                styles.filters__inputsWrapper_short
              )}
            >
              <Input
                prefix="от"
                className={styles.filters__input_idInput}
                name="idFrom"
                placeholder=""
              />
              <Input
                prefix="до"
                className={cx(
                  styles.filters__input_idInput,
                  styles.filters__input_last
                )}
                name="idTo"
                placeholder=""
              />
            </div>
          </div>
          <Button
            size="big"
            theme="light"
            className={cx(styles.apply)}
            onClick={handleApplyClick}
          >
            Применить
          </Button>
        </div>
      )}
    </>
  );
};
