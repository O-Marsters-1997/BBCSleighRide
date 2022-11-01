import React from "react";

type Props = {
  question: Quiz;
};

const QuizQuestion: React.FC<Props> = ({ question }: { question: Quiz }) => (
  <div>{question.question}</div>
);

export default QuizQuestion;
