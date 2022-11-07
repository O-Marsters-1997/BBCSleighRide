import React, { useContext } from "react";
import styled from "styled-components";
import { ActionsContext } from "../../contexts/StateActions.context";
import Image from "../Image";
import Card from "../Card";
import Text from "../Text";
import {
  RowContainer,
  DetailsContainer,
  CentralRowContainer,
  CardWrapper,
} from "../Lib";
import QuizCracker from "../Svg/QuizStartCracker";
import quizElf from "../../assets/images/elf_happy.svg";

const StyledView = styled(CentralRowContainer)`
  padding: 80px 0;
  width: clamp(250px, 40vw, 500px);
`;

const QuizWelcome = () => {
  const { startQuiz } = useContext(ActionsContext) ?? {};
  return (
    <StyledView>
      <Card>
        <CardWrapper padding={40}>
          <RowContainer>
            <Text variant="h2">Welcome to the Christmas quiz</Text>
          </RowContainer>
          <RowContainer>
            <DetailsContainer>
              <Text variant="body1">
                Buddy the elf loves candy canes, get answers right to help him
                keep his candy.
              </Text>
              <Text variant="body1">
                Get presents for each question you get right!
              </Text>
            </DetailsContainer>
            <Image src={quizElf} alt="Buddy elf" />
          </RowContainer>
          <RowContainer>
            <QuizCracker
              onClick={startQuiz}
              alt="click here to start the quiz"
            />
          </RowContainer>
        </CardWrapper>
      </Card>
    </StyledView>
  );
};

export default QuizWelcome;
