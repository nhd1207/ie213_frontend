import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { createBrowserHistory } from "history";
import saga from "./saga";
import { routerMiddleware } from "connected-react-router";
const history = createBrowserHistory({ basename: "/" });
const sagaMiddleware = createSagaMiddleware();
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
  <Provider store={store}>
  <BrowserRouter >
  {/* <React.StrictMode> */}
    <App history={history} />
  {/* </React.StrictMode> */}
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
