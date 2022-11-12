import React, { useEffect } from "react";
// import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
// import { ActionType } from "../state/actionTypes";
import QuizWelcome from "../components/Quiz/QuizWelcome";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizEnd from "../components/Quiz/QuizEnd";
import Loading from "../components/Loading";
import { LoadingWrapper, CentralOverlayContainer } from "../components/Lib";
// import { endpoints } from "../types/constants";
// import { shuffleArray } from "../utils/sharedHelpers";
// import { getData } from "../services";
import useFetchDuplicate from "../hooks/useFetchDuplicate";
import axios from "../services/quizTest";

const Quiz = () => {
  const { totalQuestions, livesLeft, readyToPlay } = useSelector(
    (state: State) => state.quiz,
  );

  const {
    response: questions,
    // error,
    loading,
  } = useFetchDuplicate({
    axiosInstance: axios,
    method: "get",
    url: "questions",
    requestConfig: {
      header: {
        "Content-Language": "EN-US",
      },
    },
  });

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading size="medium" title="loading questions" />
      </LoadingWrapper>
    );
  }

  if (totalQuestions == questions.length || livesLeft == 0) {
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
