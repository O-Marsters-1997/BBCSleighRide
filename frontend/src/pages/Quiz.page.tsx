import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ActionsContext } from "../contexts/StateActions.context";
import { State } from "../state/reducers";
// import { getQuestions } from "../services";

const Quiz = () => {
  const { answerCorrectly } = useContext(ActionsContext) ?? {};
  const amount = useSelector((state: State) => state.quiz);

  return (
    <div>
      <p>I am a quiz</p>
      <button type="button" onClick={answerCorrectly}>
        Click me
      </button>
      <button type="button" onClick={() => console.log(amount)}>
        Reveal state
      </button>
    </div>
  );
};

export default Quiz;
