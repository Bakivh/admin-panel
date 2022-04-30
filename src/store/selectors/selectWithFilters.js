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

// функция сортировки и фильтрации
const sortAndFilter = (data, textFilter, sortRule, pagination) => {
  // фильтруем сначала
  const filteredData = data.filter((item) => {
    for (var property in item) {
      if (item[property].toString().includes(textFilter)) {
        return true;
      }
    }
    return false;
  });

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
    state.page
  );

  return {
    data: data.data,
    dataSize: data.dataSize,
    fields_with_width: state.data.fields_with_width,
  };
};
