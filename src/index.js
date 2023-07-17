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
import { ticketReducer } from "./redux/reducers/ticketReducer";
import { filterReducer } from "./redux/reducers/filterReducer";
import { formReducer } from "./redux/reducers/formReducer";
import { addFiveTicketsReducer } from "./redux/reducers/addFiveTicketsReducer";
import { stopFetchingReducer } from "./redux/reducers/stopFetchingReducer";
import { setIdReducer } from "./redux/reducers/setIdReducer";

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
  id: setIdReducer,
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
