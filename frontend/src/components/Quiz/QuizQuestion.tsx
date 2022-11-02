import React from "react";
import useSound from "use-sound";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import { ActionType } from "../../state/actionTypes";
import Image from "../Image";

import candy_cane from "../../assets/images/candy_cane.svg";
import present from "../../assets/images/present.svg";
import correct from "../../assets/sounds/Correct-answer.mp3";
import incorrect from "../../assets/sounds/Incorrect-answer.mp3";

type Props = {
  question: Quiz;
};

const QuizQuestion: React.FC<Props> = ({ question }: { question: Quiz }) => {
  const { totalQuestions, livesLeft } = useSelector(
    (state: State) => state.quiz,
  );
  const dispatch: Dispatch = useDispatch();
  const [soundCorrect] = useSound(correct);
  const [soundIncorrect] = useSound(incorrect);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();
    if ((e.target as Element).innerHTML == question.correct) {
      dispatch({ type: ActionType.ANSWER_CORRECTLY });
      soundCorrect();
    } else {
      dispatch({ type: ActionType.ANSWER_INCORRECTLY });
      soundIncorrect();
    }
  };

  const presents = [...Array(totalQuestions)].map(() => (
    <Image src={present} alt="present to demonstrate correct answers in quiz" />
  ));

  const candyCanes = [...Array(livesLeft)].map(() => (
    <Image
      src={candy_cane}
      alt={`${livesLeft} candy canes to show how many lives are left`}
    />
  ));

  return (
    <div>
      <div>{candyCanes}</div>
      <p>{question.question}</p>
      <ul>
        {question?.options?.map((option: string, index: number) => (
          <button type="button" onClick={handleClick} key={index}>
            {option}
          </button>
        ))}
      </ul>
      <p>{question.correct}</p>
      <div className="presents">{presents}</div>
    </div>
  );
};

export default QuizQuestion;
