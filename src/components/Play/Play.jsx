import React, { useEffect, useState } from "react";
import "../../index.css";
import Money from "./Money/Money";
import Answer from "./Question/Answer/Answer";

const Play = ({ count, moneyData, questionAnswer, addCountCreator }) => {
  const MoneyElements = moneyData.map((m) => (
    <Money money={m.money} id={m.id} count={count} />
  ));
  const toggleActiv = () => {
    var element = document.getElementById("act");
    element.classList.toggle("active");
    var element1 = document.getElementById("act1");
    element1.classList.toggle("active");
  };

  useEffect(() => {
    questionAnswer.sort(() => Math.random() - 0.5);
  }, []);
  const questionElements = questionAnswer[count].quest;
  const answerElements = questionAnswer[count].answers.map((m) => (
    <Answer
      ans2={m.ans2}
      ans1={m.ans1}
      status={m.status}
      id={m.id}
      key={m.id}
      count={count}
      addCountCreator={addCountCreator}
      moneyData={moneyData}
    />
  ));
  return (
    <section className="game">
      <div className="game__question-answer">
        <div className="quest">
          <span id="quest">{questionElements}</span>
        </div>
        <div className="answ_block">{answerElements}</div>
      </div>
      <div className="game__counter number_block">
        <div id="act" className="header__buger" onClick={toggleActiv}>
          <span></span>
        </div>
        <div id="act1" className="shagi header__menu ">
          {MoneyElements}
        </div>
      </div>
    </section>
  );
};

export default Play;
