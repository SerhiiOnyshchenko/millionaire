import "../../index.css";
import { connect } from "react-redux";
import Play from "./Play";
import { addCountCreator } from "../../Redux/GameReduser";

const mapStateToProps = (state) => {
  return {
    moneyData: state.gamePage.moneyData,
    questionAnswer: state.gamePage.questionAnswer,
    count: state.gamePage.count,
  };
};

export default connect(mapStateToProps, { addCountCreator })(Play);
