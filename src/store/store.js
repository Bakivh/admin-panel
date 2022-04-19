import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { searchReducer } from "store/reducers/searchReducer";
import { dataTableReducer } from "store/reducers/dataTableReducer";
import { filtersReducer } from "store/reducers/filtersReducer";
import { sortReducer } from "store/reducers/sortReduces";

const rootReducer = combineReducers({
  searchField: searchReducer,
  data: dataTableReducer,
  filters: filtersReducer,
  sort: sortReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
