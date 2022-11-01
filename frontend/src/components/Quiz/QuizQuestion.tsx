import React, { useContext } from "react";
import { ActionsContext } from "../../contexts/StateActions.context";

type Props = {
  question: Quiz;
};

const QuizQuestion: React.FC<Props> = ({ question }: { question: Quiz }) => {
  const { answerCorrectly } = useContext(ActionsContext) ?? {};
  return (
    <>
      <div>{question.question}</div>
      <button type="button" onClick={answerCorrectly}>
        Click me
      </button>
    </>
  );
};

export default QuizQuestion;
