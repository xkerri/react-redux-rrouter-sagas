import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import reducers from "./reducers";
import { watchPostsAsync, watchPokemonAsync } from "./sagas/sagas";
import { watchAlbumsAsyc } from "./sagas/sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  )
);

sagaMiddleware.run(watchPostsAsync);
sagaMiddleware.run(watchAlbumsAsyc);
sagaMiddleware.run(watchPokemonAsync);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
