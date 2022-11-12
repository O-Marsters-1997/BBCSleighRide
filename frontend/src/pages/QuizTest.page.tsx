import React from "react";
// import { Dispatch } from "redux";
// import { useDispatch } from "react-redux";
// import { State } from "../state/reducers";
// import { ActionType } from "../state/actionTypes";
// import { endpoints } from "../types/constants";
// import { getData } from "../services";
// import { shuffleArray } from "../utils/sharedHelpers";
import useFetchDuplicate from "../hooks/useFetchDuplicate";
import axios from "../services/quizTest";

const QuizTest: React.FC = () => {
  // const dispatch: Dispatch = useDispatch();
  // const { response: questions } = useSelector((state: State) => state.quiz);

  const { response } = useFetchDuplicate({
    axiosInstance: axios,
    method: "get",
    url: "questions",
    requestConfig: {
      header: {
        "Content-Language": "EN-US",
      },
    },
  });

  console.log(response);

  // const getMyQuestions = async () => {
  //   const data = await getData(endpoints.quiz);
  //   return dispatch({
  //     type: ActionType.SET_QUESTIONS,
  //     payload: shuffleArray(data.quiz),
  //   });
  // };

  // useEffect(() => {
  //   getMyQuestions();
  // }, []);

  // const repeatQuestions = () => {
  //   getMyQuestions();
  //   console.log(questions);
  // };

  return (
    <article>
      <button type="button" onClick={() => console.log(response)}>
        hello world
      </button>
    </article>
  );
};

export default QuizTest;
