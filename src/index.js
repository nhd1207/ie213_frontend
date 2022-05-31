import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { createBrowserHistory } from "history";
import saga from "./saga";
import { routerMiddleware } from "connected-react-router";
import RouteContext from "./context/RouteContext";
const history = createBrowserHistory({ basename: "/" });
const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  reducer(history),
  composeSetup(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);
sagaMiddleware.run(saga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RouteContext.Provider value={{ url: "" }}>
        {/* <React.StrictMode> */}
        <App history={history} />
        {/* </React.StrictMode> */}
      </RouteContext.Provider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
