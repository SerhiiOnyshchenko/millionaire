import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import Play from "./components/Play/Play";
import PlayContainer from "./components/Play/PlayContainer";
import store from "./Redux/ReduxStore";

const GamePlay = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PlayContainer />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
export default GamePlay;
