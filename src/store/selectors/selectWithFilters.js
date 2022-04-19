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
const sortAndFilter = (data, textFilter, sortRule) => {
  return data
    .filter((item) => {
      for (var property in item) {
        if (item[property].toString().includes(textFilter)) {
          return true;
        }
        console.log(item[property]);
      }
      return false;
      // FIXME убрать заглушку на имя первого поля
    })
    .sort(
      compareFunctionCreator(
        sortRule.field === "" ? "id" : sortRule.field,
        sortRule.sortOrder
      )
    );
};

// возвращает селектор
export const selectWithFiltersSC = (textFilter, sortRule) => {
  const selectWithFilters = (state) => {
    const r = {
      data: sortAndFilter(state.data.data, textFilter, sortRule),

      fields_with_width: state.data.fields_with_width,
    };
    return r;
  };

  return selectWithFilters;
};
