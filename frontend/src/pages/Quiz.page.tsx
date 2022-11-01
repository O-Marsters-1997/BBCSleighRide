import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
import QuizWelcome from "../components/Quiz/QuizWelcome";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import { getQuestions } from "../services";

const Quiz = () => {
  const [questions, setQuestions] = useState<Quiz[] | undefined>();
  const [readyToPlay] = useState<boolean>(false);
  const { totalQuestions } = useSelector((state: State) => state.quiz);

  const shuffleArray = (array: Quiz[]) => {
    let currentIndex: number = array.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const getMyQuestions = async () => {
    const data = await getQuestions();
    return setQuestions(shuffleArray(data.quiz));
  };

  useEffect(() => {
    getMyQuestions();
  }, []);

  if (!questions) {
    return <p>No questions have been loaded</p>;
  }

  return (
    <div>
      {readyToPlay ? (
        <QuizWelcome />
      ) : (
        <QuizQuestion question={questions[totalQuestions]} />
      )}
    </div>
  );
};

export default Quiz;
