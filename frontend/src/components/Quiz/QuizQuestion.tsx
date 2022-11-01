import React, { useContext } from "react";
import useSound from "use-sound";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
// import { State } from "../../state/reducers";
import { ActionType } from "../../state/actionTypes";
import { ActionsContext } from "../../contexts/StateActions.context";

import correct from "../../assets/sounds/Correct-answer.mp3";
import incorrect from "../../assets/sounds/Incorrect-answer.mp3";

type Props = {
  question: Quiz;
};

const QuizQuestion: React.FC<Props> = ({ question }: { question: Quiz }) => {
  const { answerCorrectly } = useContext(ActionsContext) ?? {};
  const dispatch: Dispatch = useDispatch();
  const [sound1] = useSound(correct);
  const [sound2] = useSound(incorrect);

  // const infoState = useSelector((state: State) => state.quiz);

  const handleClick = async (event: any): Promise<void> => {
    const toPlayCorrect = sound1;
    const toPlayIncorrect = sound2;
    if (event.target.innerHTML == question.correct) {
      dispatch({ type: ActionType.ANSWER_CORRECTLY });
      toPlayCorrect();
    } else {
      dispatch({ type: ActionType.ANSWER_INCORRECTLY });
      console.log(event.target.innerHTML, question.correct);
      toPlayIncorrect();
    }
  };

  return (
    <div>
      <p>{question.question}</p>
      <ul>
        {question?.options?.map((option: string, index: number) => (
          <button type="button" onClick={handleClick} key={index}>
            {option}
          </button>
        ))}
      </ul>
      <p>{question.correct}</p>
      <button type="button" onClick={answerCorrectly}>
        Click me
      </button>
    </div>
  );
};

export default QuizQuestion;
