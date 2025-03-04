import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
import QuizWelcome from "../components/Quiz/QuizWelcome";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizEnd from "../components/Quiz/QuizEnd";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {
  LoadingWrapper,
  CentralOverlayContainer,
  ErrorWrapper,
} from "../components/Lib";
import { endpoints } from "../types/constants";
import useAxios from "../hooks/useAxios";
import axios from "../services";

const Quiz = () => {
  const { totalQuestions, livesLeft, readyToPlay } = useSelector(
    (state: State) => state.quiz,
  );

  const {
    response: questions,
    error,
    loading,
  } = useAxios({
    axiosInstance: axios,
    method: "get",
    url: endpoints.quiz,
    requestConfig: {
      headers: {
        "Content-Language": "EN-US",
      },
    },
  });

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading size="medium" title="loading questions" />
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <ErrorWrapper>
        <Error title={`${error.message}`} />
      </ErrorWrapper>
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
