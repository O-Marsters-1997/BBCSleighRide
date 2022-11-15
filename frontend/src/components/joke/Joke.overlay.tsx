import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ActionType } from "../../state/actionTypes";
import Text from "../Text";
import Card from "../Card";
import Image from "../Image";
import QuizExitCracker from "../Svg/QuizExitCracker";
import JokeItem from "./JokeItem";
import {
  RowContainerOverlayBorderBottom,
  HomePageCardOverlayWrapper,
  CentralRowContainer,
  CentralColumnContainer,
} from "../Lib";
import { endpoints } from "../../types/constants";
import useAxios from "../../hooks/useAxios";
import axios from "../../services/quizTest";
import santa from "../../assets/images/santa_happy.svg";

const StyledJokeRow = styled(RowContainerOverlayBorderBottom)`
  &.top-row {
    margin-top: 1.25em;
  }
  .chat-bot {
    height: 150px;
    width: 120px;
    cursor: pointer;
  }
`;

const Joke: React.FC = () => {
  const [toggleJokeView, setToggleJokeView] = useState<boolean>(false);
  const dispatch: Dispatch = useDispatch();

  const { response: joke } = useAxios({
    axiosInstance: axios,
    method: "get",
    url: endpoints.joke,
    requestConfig: {
      headers: {
        "Content-Language": "EN-US",
      },
    },
  });

  useEffect(() => {
    setToggleJokeView(true);
  }, [joke]);

  const selectJoke = () => {
    setToggleJokeView(false);

    const chooseNewJoke = async () => {
      try {
        dispatch({ type: ActionType.RESET_JOKE });
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => chooseNewJoke(), 500);
  };

  return (
    <HomePageCardOverlayWrapper>
      <Card bordercolor="primaryAlt" borderthickness={6}>
        <StyledJokeRow className="top-row">
          <Text variant="h3">Joke Generator</Text>
        </StyledJokeRow>
        <StyledJokeRow className="top-row">
          <Image
            src={santa}
            alt="santa chatbot image"
            className="chat-bot"
            onClick={selectJoke}
          />
        </StyledJokeRow>
        <CentralRowContainer style={{ padding: "1.5em 0" }}>
          <CentralColumnContainer>
            {toggleJokeView && <JokeItem />}
            <QuizExitCracker
              onClick={() => dispatch({ type: ActionType.HIDE_MODAL })}
            />
          </CentralColumnContainer>
        </CentralRowContainer>
      </Card>
    </HomePageCardOverlayWrapper>
  );
};

export default Joke;
