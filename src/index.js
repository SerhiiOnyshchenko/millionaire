import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./Redux/ReduxStore";
import Game from "./Game";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
