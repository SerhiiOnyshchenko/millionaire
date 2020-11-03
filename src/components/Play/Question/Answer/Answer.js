import React from "react";
import "../../../../index.css";
import GameOver from "../../../../GameOver";

const Answer = (props) => {
  let count = props.count;
  let check = () => {
    setTimeout(5000);
    if (count === 11) {
      count++;
      GameOver(count, props.moneyData, props.addCountCreator);
    } else if (props.status) {
      count++;
      props.addCountCreator(count);
    } else {
      GameOver(count, props.moneyData, props.addCountCreator);
    }
  };
  return (
    <div className="answ-before">
      <div className="answ answer">
        <div className="answ_inside" onClick={check}>
          <div className="answ_text">
            <span className="ans_1">
              <i></i>
              {props.ans1}
            </span>{" "}
            <span className="ans_2" id="A">
              {props.ans2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Answer;
