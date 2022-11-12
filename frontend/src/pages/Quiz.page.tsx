import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../state/reducers";
import { ActionType } from "../state/actionTypes";
import QuizWelcome from "../components/Quiz/QuizWelcome";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizEnd from "../components/Quiz/QuizEnd";
import Loading from "../components/Loading";
import { CentralOverlayContainer, LoadingWrapper } from "../components/Lib";
import { endpoints } from "../types/constants";
import { shuffleArray } from "../utils/sharedHelpers";
import { getData } from "../services";

const Quiz = () => {
  // const [questions, setQuestions] = useState<Quiz[] | undefined>();
  const {
    response: questions,
    totalQuestions,
    readyToPlay,
    livesLeft,
  } = useSelector((state: State) => state.quiz);

  const dispatch: Dispatch = useDispatch();

  const getMyQuestions = async () => {
    const data = await getData(endpoints.quiz);
    return dispatch({
      type: ActionType.SET_QUESTIONS,
      payload: shuffleArray(data.quiz),
    });
  };

  useEffect(() => {
    dispatch({ type: ActionType.RESET_QUIZ });
    getMyQuestions();
  }, []);

  if (!questions) {
    return (
      <LoadingWrapper>
        <Loading size="medium" title="loading questions" />
      </LoadingWrapper>
    );
  }

  if (totalQuestions == questions.length || livesLeft == 0) {
    getMyQuestions();
    return (
      <CentralOverlayContainer>
        <QuizEnd />
      </CentralOverlayContainer>
    );
  }
  return (
    <CentralOverlayContainer>
      {!readyToPlay ? (
        <QuizWelcome />
      ) : (
        <QuizQuestion question={questions[totalQuestions]} />
      )}
    </CentralOverlayContainer>
  );
};

export default Quiz;
