import React, { useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import { ActionType } from "../../state/actionTypes";
import View from "../View";
import Card from "../Card";
import Text from "../Text";
import Image from "../Image";
import QuizReplayCracker from "../Svg/QuizReplayCracker";
import QuizExitCracker from "../Svg/QuizExitCracker";
import {
  CardOverlayWrapper,
  RowContainer,
  CentralRowContainer,
  DetailsContainer,
  TextWrapper,
  CentralColumnContainer,
  ElfImageWrapper,
} from "../Lib";
import { useViewport } from "../../hooks/useViewport";
import { ActionsContext } from "../../contexts/StateActions.context";
import { correctPercentage } from "../../utils/quizHelpers";
import quizElf from "../../assets/images/elf_happy.svg";

const QuizEnd = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const viewport = useViewport();
  const { livesLeft, totalQuestions, correctQuestions } = useSelector(
    (state: State) => state.quiz,
  );
  const { endQuiz } = useContext(ActionsContext) ?? {};

  const handleEndQuiz = (): void => {
    dispatch({ type: ActionType.END_QUIZ });
    navigate("/");
  };

  const endContentMainRow = (): ReactNode => (
    <>
      <DetailsContainer>
        <TextWrapper childrenPadding=".5em" style={{ padding: "0 1em" }}>
          {livesLeft != 0 ? (
            <>
              <Text variant="h4" marginBottom=".75em">
                You have completed the quiz
              </Text>
              <Text variant="body1">
                Congratulations, play again to beat your score!
              </Text>
            </>
          ) : (
            <Text variant="h4" marginBottom=".75em">
              You have been unsuccessful, try again!
            </Text>
          )}
          <Text variant="body1">
            You got {correctQuestions} correct out of
            <View component="span" display="inline">
              {totalQuestions}
            </View>
          </Text>
          <Text variant="body1">
            That is
            <View component="span" display="inline">
              {correctPercentage(correctQuestions, totalQuestions)}
            </View>
          </Text>
        </TextWrapper>
      </DetailsContainer>
      <ElfImageWrapper>
        <Image
          src={quizElf}
          alt="Buddy elf"
          height={viewport("medium") ? 14 : 10}
          width={viewport("medium") ? 14 : 10}
          heightSizeUnits="em"
          widthSizeUnits="em"
        />
      </ElfImageWrapper>
    </>
  );

  return (
    <CardOverlayWrapper>
      <Card>
        {viewport("mediumLarge") ? (
          <CentralRowContainer>{endContentMainRow()}</CentralRowContainer>
        ) : (
          <CentralColumnContainer reverse>
            {endContentMainRow()}
          </CentralColumnContainer>
        )}
        {viewport("mediumPlus") ? (
          <RowContainer
            style={{ padding: "0 4em" }}
            justifyContent="center"
            gap="4vw"
          >
            <QuizReplayCracker onClick={endQuiz} />
            <QuizExitCracker onClick={handleEndQuiz} pageSide="right" />
          </RowContainer>
        ) : (
          <CentralColumnContainer>
            <QuizReplayCracker onClick={endQuiz} />
            <QuizExitCracker onClick={handleEndQuiz} pageSide="right" />
          </CentralColumnContainer>
        )}
      </Card>
    </CardOverlayWrapper>
  );
};

export default QuizEnd;
