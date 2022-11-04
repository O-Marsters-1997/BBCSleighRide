import React, { useContext } from "react";
import { ActionsContext } from "../../contexts/StateActions.context";
import Button from "../Button";
import Image from "../Image";
import logo from "../../assets/images/logo_star.svg";

const QuizWelcome = () => {
  const { startQuiz } = useContext(ActionsContext) ?? {};
  return (
    <>
      <div>I am the quiz welcome</div>
      <Button onClick={startQuiz} text="click here to start the quiz" />
      <Image
        logo
        src={logo}
        alt="BBC Sleighrid logo"
        className="logo"
        onClick={() => console.log("hurry")}
      />
    </>
  );
};

export default QuizWelcome;
