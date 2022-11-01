import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";

const BBCSleighride = () => {
  const amount = useSelector((state: State) => state.quiz);
  return <div onClick={() => console.log(amount)}>hello world</div>;
};

export default BBCSleighride;
