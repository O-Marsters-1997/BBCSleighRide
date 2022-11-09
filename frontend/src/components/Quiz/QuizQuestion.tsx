import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
import QuizNextCracker from "../Svg/QuizNextCracker";
import QuizExitCracker from "../Svg/QuizExitCracker";
import {
  CardOverlayWrapper,
  RowContainer,
  DetailsContainer,
  CentralColumnContainer,
} from "../Lib";
import { useViewport } from "../../hooks/useViewport";

import candy_cane from "../../assets/images/candy_cane.svg";
import present from "../../assets/images/present.svg";
import correct from "../../assets/sounds/Correct-answer.mp3";
import incorrect from "../../assets/sounds/Incorrect-answer.mp3";

type Props = {
  question: Quiz;
};

const QuizQuestion: React.FC<Props> = ({ question }: { question: Quiz }) => {
  const { correctQuestions, livesLeft, currentAnswer, answeredCorrectly } =
    useSelector((state: State) => state.quiz);
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  const viewport = useViewport();
  const [selected, setSelected] = useState<number>(-1);
  const [warning, setWarning] = useState<boolean>(false);
  const [soundCorrect] = useSound(correct);
  const [soundIncorrect] = useSound(incorrect);

  const handleClick = useCallback(
    (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if ((e.target as Element).innerHTML == question.correct) {
        dispatch({ type: ActionType.ANSWER_CORRECTLY });
        soundCorrect();
      } else {
        dispatch({ type: ActionType.ANSWER_INCORRECTLY });
        soundIncorrect();
      }
      setSelected(index);
    },
    [question],
  );

  const rejectClick = () => {
    setWarning(true);
  };

  const handleQuizNext = () => {
    setWarning(false);
    dispatch({ type: ActionType.NEXT_QUESTION });
    setSelected(-1);
  };

  const handleQuizExit = () => {
    dispatch({ type: ActionType.RESET_QUIZ });
    navigate("/");
  };

  const presents = [...Array(correctQuestions)].map((index) => (
    <Image
      src={present}
      alt="present to demonstrate correct answers in quiz"
      key={index}
      height={viewport("large") ? 6 : 4}
      width={viewport("large") ? 6 : 4}
      heightSizeUnits="em"
      widthSizeUnits="em"
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

  const quizNavigationCrackers = () => (
    <>
      <QuizNextCracker onClick={handleQuizNext} />
      <QuizExitCracker pageSide="right" onClick={handleQuizExit} />
    </>
  );

  return (
    <CardOverlayWrapper>
      <Card>
        <RowContainer justifyContent="flex-end">
          <View style={{ padding: "2em 1.5em 1em 0" }}>
            {viewport("smallMedium") ? (
              candyCanes
            ) : (
              <Text variant="body1">
                Total lives
                <View component="span" display="inline">
                  {livesLeft}
                </View>
              </Text>
            )}
          </View>
        </RowContainer>
        <RowContainer>
          <DetailsContainer style={{ padding: "0 2.5em 1.15em 2.5em" }}>
            <View style={{ padding: "0 0 1em 0" }}>
              <Text variant="h5">{question.question}</Text>
            </View>
            <View>
              {question?.options?.map((option: string, index: number) => (
                <>
                  {!answeredCorrectly ? (
                    <QuizQuestionItem
                      option={option}
                      onSelect={handleClick(index)}
                      key={index}
                      index={index}
                      answer={currentAnswer}
                      selected={selected}
                    />
                  ) : (
                    <QuizQuestionItem
                      option={option}
                      onSelect={rejectClick}
                      key={index}
                      index={index}
                      answer={currentAnswer}
                      selected={selected}
                    />
                  )}
                </>
              ))}
            </View>
            {warning && (
              <View style={{ padding: ".75rem 0 0 5px" }}>
                <Text variant="subtitle1" colorvariant="secondary">
                  You have already selected the correct answer. Please click
                  next.
                </Text>
              </View>
            )}
          </DetailsContainer>
        </RowContainer>
        {viewport("mediumPlus") ? (
          <RowContainer
            style={{ padding: "0 4em" }}
            justifyContent="center"
            gap="4vw"
          >
            {quizNavigationCrackers()}
          </RowContainer>
        ) : (
          <CentralColumnContainer>
            {quizNavigationCrackers()}
          </CentralColumnContainer>
        )}
        {viewport("mediumPlus") && (
          <RowContainer
            justifyContent="center"
            style={{ paddingBottom: "1em" }}
            gap="2.5rem"
          >
            {presents}
          </RowContainer>
        )}
      </Card>
    </CardOverlayWrapper>
  );
};

export default QuizQuestion;
