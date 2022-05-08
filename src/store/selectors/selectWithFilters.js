// извращения с замыканием
const compareFunctionCreator = (field, sortRule) => (a_in, b_in) => {
  const a = a_in[field];
  const b = b_in[field];
  if (a < b) {
    return sortRule === "asc" ? -1 : 1;
  }
  if (a > b) {
    return sortRule === "asc" ? 1 : -1;
  }
  return 0;
};

/*
dateWatchedFrom: "",
dateWatchedTo: "",
filmStatus: [],
idFrom: "",
idTo:

id
    status: "watched",
    watch_dt:
*/
const applyFilters = (array, filters) =>
  array.filter(
    (item) =>
      !(
        // описываем услвоия "неправильности"
        (
          (filters.idFrom !== "" && item.id < filters.idFrom) ||
          (filters.idTo !== "" && item.id > filters.idTo) ||
          (filters.dateWatchedFrom !== "" &&
            (item.watch_dt < filters.dateWatchedFrom ||
              item.watch_dt === "")) ||
          (filters.dateWatchedTo !== "" &&
            (item.watch_dt > filters.dateWatchedTo || item.watch_dt === "")) ||
          (filters.filmStatus.length > 0 &&
            !filters.filmStatus.includes(item.status))
        )
      )
  );

// функция сортировки и фильтрации
const sortAndFilter = (data, textFilter, sortRule, pagination, filters) => {
  // фильтруем сначала
  const filteredData_1stage = data.filter((item) => {
    for (var property in item) {
      if (item[property].toString().includes(textFilter)) {
        return true;
      }
    }
    return false;
  });

  const filteredData = applyFilters(filteredData_1stage, filters);

  return {
    data: filteredData
      .sort(
        // сортировка
        // FIXME убрать заглушку на имя первого поля
        compareFunctionCreator(
          sortRule.field === "" ? "id" : sortRule.field,
          sortRule.sortOrder
        )
      )
      .slice(
        // пагинация
        (pagination.curPage - 1) * pagination.rowsPerPage,
        (pagination.curPage - 1) * pagination.rowsPerPage +
          pagination.rowsPerPage
      ),
    dataSize: filteredData.length,
  };
};

// TODO при диспатче фильтрации сбрасывать страницу на один

// возвращает селектор
export const selectWithFilters = (state) => {
  const data = sortAndFilter(
    state.data.data,
    state.filters.textFilter,
    state.sort,
    state.page,
    state.filters
  );

  return {
    data: data.data,
    dataSize: data.dataSize,
    fields_with_width: state.data.fields_with_width,
  };
};
