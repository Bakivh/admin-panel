export const calcCheckCount = (state) => {
  return state.checks.checked.filter((e) => (e === "all" ? false : true))
    .length;
};
