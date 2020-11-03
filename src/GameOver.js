import React from "react";
import ReactDOM from "react-dom";
import Play from "./GamePlay";
import hand from "./img/hand.png";
import "./index.css";

function GameOver(count, moneyData, addCountCreator) {
  let Cash;
  if (count === 0) {
    Cash = "$0";
    addCountCreator(0);
  } else {
    var id = count;
    Cash = moneyData.find((o) => o.id === id).money;
    addCountCreator(0);
  }
  return ReactDOM.render(
    <React.StrictMode>
      <section className="game-over">
        <div className="wrapper">
          <img className="img-2" src={hand} alt="hand" />
          <div className="over">
            <h2 className="text-h2">
              Total score:
              <br />
              <span>{Cash} earned</span>
            </h2>
            <button className="btn" onClick={Play}>
              Try again
            </button>
          </div>
        </div>
      </section>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default GameOver;
