// извращения с замыканием
const compareFunctionCreator = (field, sortRule) => {
  return (a_in, b_in) => {
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
};

// функция сортировки и фильтрации
const sortAndFilter = (data, textFilter, sortRule, pagination) => {
  const fdata = data.filter((item) => {
    for (var property in item) {
      if (item[property].toString().includes(textFilter)) {
        return true;
      }
      console.log(item[property]);
    }
    return false;
  });

  const r = {
    data: fdata
      .sort(
        // FIXME убрать заглушку на имя первого поля
        compareFunctionCreator(
          sortRule.field === "" ? "id" : sortRule.field,
          sortRule.sortOrder
        )
      )
      .slice(
        (pagination.curPage - 1) * pagination.rowsPerPage,
        (pagination.curPage - 1) * pagination.rowsPerPage +
          pagination.rowsPerPage
      ),
    dataSize: fdata.length,
  };
  return r;
};

// TODO при диспатче фильтрации сбрасывать страницу на один

// возвращает селектор
export const selectWithFiltersSC = (textFilter, sortRule, pagination) => {
  const selectWithFilters = (state) => {
    const data = sortAndFilter(
      state.data.data,
      textFilter,
      sortRule,
      pagination
    );

    const r = {
      data: data.data,
      dataSize: data.dataSize,
      fields_with_width: state.data.fields_with_width,
    };
    return r;
  };

  return selectWithFilters;
};
