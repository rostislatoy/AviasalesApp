import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import {
  ticketReducer,
  filterReducer,
  formReducer,
  addFiveTicketsReducer,
  stopFetchingReducer,
} from "./redux/reducer";

import App from "./App/App";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer = combineReducers({
  tickets: ticketReducer,
  filter: filterReducer,
  form: formReducer,
  visTickets: addFiveTicketsReducer,
  stop: stopFetchingReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
