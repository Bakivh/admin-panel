import cx from "classnames";
//import { useState } from "react";

import { Search } from "common/components/Search/Search";
import { Button } from "common/components/Button/Button";
import { ReactComponent as IconFilter } from "common/icons/filter.svg";
import { ReactComponent as IconRefresh } from "common/icons/refresh.svg";
import { useDispatch } from "react-redux";
import { uploadDataActionCreator } from "store/actionCreators/uploadDataActionCreator";
import { filtersActionCreator } from "store/actionCreators/filtersActionCreator";
import { setCurPageActionCreator } from "store/actionCreators/pageActionCreators";
import { useSelector } from "react-redux";

import { movies, fields_with_width } from "mocks/list";

import styles from "./Filters.module.css";

export const Filters = ({ className }) => {
  const dispatch = useDispatch();

  // считываем значение в поле поиска
  const searchField = useSelector((state) => state.searchField.text);

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      dispatch(filtersActionCreator(searchField));
      dispatch(setCurPageActionCreator(1));
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

  return (
    <div className={cx(styles._, className)}>
      <div className={styles.search}>
        <Search
          placeholder="Введите что-нибудь для поиска"
          className={cx(styles.input, styles.primary_color)}
          onKeyDown={handleKeyDown}
        />
        <Button
          size="big"
          theme="light"
          Icon={IconFilter}
          className={cx(styles.getFilters)}
        >
          Фильтры
        </Button>
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
  );
};
