import React from "react";
import GamePlay from "./GamePlay";
import "./index.css";
import hand from "./img/hand.png";

function Game() {
  return (
    <section className="game-start">
      <div className="wrapper">
        <img className="img" src={hand} alt="hand"></img>
        <div className="start">
          <h1 className="text">Who wants to be a millionaire?</h1>
          <button className="btn" onClick={GamePlay}>
            Start
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Game;
