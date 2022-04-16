import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { searchReducer } from "store/reducers/searchReducer";
import { dataTableReducer } from "store/reducers/dataTableReducer";
import { filtersReducer } from "store/reducers/filtersReducer";

const rootReducer = combineReducers({
  searchField: searchReducer,
  data: dataTableReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
