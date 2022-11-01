import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ActionsContext } from "../contexts/StateActions.context";
import { State } from "../state/reducers";
import QuizWelcome from "../components/Quiz/QuizWelcome";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import { getQuestions } from "../services";

const Quiz = () => {
  const [questions, setQuestions] = useState<Quiz[] | undefined>();
  const [readyToPlay] = useState<boolean>(false);
  const { answerCorrectly } = useContext(ActionsContext) ?? {};
  const amount = useSelector((state: State) => state.quiz);

  const getMyQuestions = async () => {
    const data = await getQuestions();
    return setQuestions(data.quiz);
  };

  useEffect(() => {
    console.log("component mounted");
    getMyQuestions();
  }, []);

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

  if (!questions) {
    return <p>No questions have been loaded</p>;
  }

  const shuffledQuestions = shuffleArray(questions);

  return (
    <div>
      <p>I am a quiz</p>
      {readyToPlay ? (
        <QuizWelcome />
      ) : (
        shuffledQuestions
          .map((question: Quiz) => (
            <QuizQuestion
              question={question}
              key={shuffledQuestions.indexOf(question) + 1}
            />
          ))
          .splice(0, 1)
      )}
      <button type="button" onClick={() => console.log(amount)}>
        Show amount
      </button>
      <button type="button" onClick={answerCorrectly}>
        Answer correctly to change state
      </button>
    </div>
  );
};

export default Quiz;
