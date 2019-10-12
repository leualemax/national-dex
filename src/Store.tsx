/* istanbul ignore file */
import { applyMiddleware, createStore } from "redux";
import promises from "redux-promise";
import { DexReducer } from "./reducers/dex.reducer";

export const ReduxStore = applyMiddleware(promises)(createStore)(
  DexReducer,
  // next line code for dev tools
  // @ts-ignore: Unreachable code error
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);