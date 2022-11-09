import React from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ActionType } from "../../state/actionTypes";
import Text from "../Text";
import Card from "../Card";
import Image from "../Image";
import QuizExitCracker from "../Svg/QuizExitCracker";
import { HomePageCardOverlayWrapper, CentralRowContainer } from "../Lib";
// import { ActionsContext } from "../../contexts/StateActions.context";
import santa from "../../assets/images/santa_happy.svg";

const StyledJokeRow = styled(CentralRowContainer)`
  margin: 0 auto;
  padding-bottom: 0.85rem;
  width: 90%;
  border-bottom: ${({ theme }) =>
    `2px solid ${theme.palette.primary.contrastText}`};
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
  // const { hideModal } = useContext(ActionsContext) ?? {};

  const dispatch: Dispatch = useDispatch();

  return (
    <HomePageCardOverlayWrapper>
      <Card borderColor="primaryAlt" borderThickness={6}>
        <StyledJokeRow className="top-row">
          <Text variant="h3">Joke Generator</Text>
        </StyledJokeRow>
        <StyledJokeRow className="top-row">
          <Image src={santa} alt="santa chatbot image" className="chat-bot" />
        </StyledJokeRow>
        <CentralRowContainer style={{ padding: "1.5em 0" }}>
          <QuizExitCracker
            onClick={() => dispatch({ type: ActionType.HIDE_MODAL })}
          />
        </CentralRowContainer>
      </Card>
    </HomePageCardOverlayWrapper>
  );
};

export default Joke;
