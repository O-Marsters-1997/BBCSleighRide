import React from "react";
// import styled from "styled-components";
// import { Dispatch } from "redux";
// import { useDispatch } from "react-redux";
// import { ActionType } from "../../state/actionTypes";
// import Text from "../Text";
// import Card from "../Card";
// import Image from "../Image";
// import QuizExitCracker from "../Svg/QuizExitCracker";
// import JokeItem from "./JokeItem";
import {
  HomePageCardOverlayWrapper,
  // CentralRowContainer,
  // CentralColumnContainer,
} from "../Lib";
import { endpoints } from "../../types/constants";
// import { shuffleArray } from "../../utils/sharedHelpers";

import useAxios from "../../hooks/useAxios";
import axios from "../../services/quizTest";
// import santa from "../../assets/images/santa_happy.svg";

// const StyledJokeRow = styled(CentralRowContainer)`
//   margin: 0 auto;
//   padding-bottom: 0.85rem;
//   width: 90%;
//   border-bottom: ${({ theme }) =>
//     `2px solid ${theme.palette.primary.contrastText}`};
//   &.top-row {
//     margin-top: 1.25em;
//   }
//   .chat-bot {
//     height: 150px;
//     width: 120px;
//     cursor: pointer;
//   }
// `;

const Joke: React.FC = () => {
  // const [jokes, setJokes] = useState<Joke[] | undefined>();
  // const [toggleJokeView, setToggleJokeView] = useState<boolean>(false);
  // const dispatch: Dispatch = useDispatch();

  console.log(
    useAxios({
      axiosInstance: axios,
      method: "get",
      url: endpoints.jokes,
      requestConfig: {
        header: {
          "Content-Language": "EN-US",
        },
      },
    }),
  );

  // console.log(jokes);

  // const getMyJokes = async () => {
  //   const data = await getData(endpoints.jokes);
  //   return setJokes(data.jokes);
  // };

  // useEffect(() => {
  //   getMyJokes();
  // }, []);

  // const selectJoke = () => {
  //   setToggleJokeView(false);
  //   const chooseNewJoke = () => {
  //     try {
  //       const shuffledJoke = jokes && shuffleArray(jokes).find((item) => item);
  //       dispatch({ type: ActionType.SELECT_JOKE, payload: shuffledJoke });
  //       setToggleJokeView(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   setTimeout(() => chooseNewJoke(), 500);
  // };

  return (
    <HomePageCardOverlayWrapper>
      {/* <Card bordercolor="primaryAlt" borderthickness={6}>
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
      </Card> */}
      <div>hello world</div>
    </HomePageCardOverlayWrapper>
  );
};

export default Joke;
