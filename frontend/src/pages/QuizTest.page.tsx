import React from "react";
import useAxios from "../hooks/useAxios";
import axios from "../services/quizTest";

const QuizTest: React.FC = () => {
  const { response, error, loading } = useAxios({
    axiosInstance: axios,
    method: "get",
    url: "questions",
    requestConfig: {
      header: {
        "Content-Language": "EN-US",
      },
    },
  });

  return (
    <article>
      <h3>Random questions</h3>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <div>
          {response.map((question: Quiz, index: number) => (
            <p key={index}>{question.question}</p>
          ))}
        </div>
      )}
    </article>
  );
};

export default QuizTest;
