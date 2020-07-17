import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import resultReducer from "./store/reducers/result";
import counterReducer from "./store/reducers/counter";
import { Provider } from "react-redux";
const rootreducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
const store = createStore(rootreducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
