import React from "react";
import useSound from "use-sound";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import { ActionType } from "../../state/actionTypes";
import QuizQuestionItem from "./QuizQuestionItem";
import Image from "../Image";
import Card from "../Card";
import View from "../View";
import Text from "../Text";
import { CardOverlayWrapper, RowContainer } from "../Lib";
import { useViewport } from "../../hooks/useViewport";

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
  const viewport = useViewport();
  const [soundCorrect] = useSound(correct);
  const [soundIncorrect] = useSound(incorrect);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if ((e.target as Element).innerHTML == question.correct) {
      dispatch({ type: ActionType.ANSWER_CORRECTLY });
      soundCorrect();
    } else {
      dispatch({ type: ActionType.ANSWER_INCORRECTLY });
      soundIncorrect();
    }
  };

  const presents = [...Array(totalQuestions)].map((index) => (
    <Image
      src={present}
      alt="present to demonstrate correct answers in quiz"
      key={index}
    />
  ));

  const candyCanes = [...Array(livesLeft)].map((index) => (
    <Image
      src={candy_cane}
      alt={`${livesLeft} candy canes to show how many lives are left`}
      key={index}
      height={3.5}
      width={3.5}
      heightSizeUnits="em"
      widthSizeUnits="em"
    />
  ));

  return (
    <CardOverlayWrapper>
      <Card>
        <RowContainer justifyContent="flex-end">
          <View style={{ padding: "2em 1.5em 0 0" }}>
            {viewport("smallMedium") ? (
              candyCanes
            ) : (
              <Text variant="body1">Total lives {livesLeft}</Text>
            )}
          </View>
        </RowContainer>
        <Text variant="h5">{question.question}</Text>
        <ul>
          {question?.options?.map((option: string, index: number) => (
            <QuizQuestionItem
              option={option}
              onSelect={handleClick}
              key={index}
            />
          ))}
        </ul>
        <p>{question.correct}</p>
        <div className="presents">{presents}</div>
      </Card>
    </CardOverlayWrapper>
  );
};

export default QuizQuestion;
