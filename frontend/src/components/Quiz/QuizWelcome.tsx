import React, { ReactNode, useContext } from "react";
import { ActionsContext } from "../../contexts/StateActions.context";
import Image from "../Image";
import Card from "../Card";
import Text from "../Text";
import {
  RowContainer,
  CentralRowContainer,
  CentralColumnContainer,
  CardWrapper,
  TextWrapper,
  CardOverlayWrapper,
  ElfImageWrapper,
} from "../Lib";
import QuizCracker from "../Svg/QuizStartCracker";
import quizElf from "../../assets/images/elf_happy.svg";
import { useViewport } from "../../hooks/useViewport";
import { getElfSize } from "../../utils/style/styleHelpers";

const QuizWelcome = () => {
  const { startQuiz } = useContext(ActionsContext) ?? {};
  const viewport = useViewport();
  const welcomeContent = (): ReactNode => (
    <>
      <TextWrapper lineHeight={1.75} indent>
        <Text variant="body1">
          Buddy the elf loves candy canes, get answers right to help him keep
          his candy.
        </Text>
        <Text variant="body1">
          Get presents for each question you get right!
        </Text>
      </TextWrapper>
      <ElfImageWrapper>
        <Image
          src={quizElf}
          alt="Buddy elf"
          height={getElfSize(viewport)}
          width={getElfSize(viewport)}
        />
      </ElfImageWrapper>
    </>
  );

  return (
    <CardOverlayWrapper>
      <Card>
        <CardWrapper padding={viewport("small") ? 60 : 40}>
          <RowContainer style={{ padding: ".1em 0 .2rem 0 " }}>
            <Text variant="h3">Welcome to the Christmas quiz</Text>
          </RowContainer>
          {viewport("mediumLarge") ? (
            <CentralRowContainer>{welcomeContent()}</CentralRowContainer>
          ) : (
            <CentralColumnContainer reverse>
              {welcomeContent()}
            </CentralColumnContainer>
          )}
          <RowContainer>
            <QuizCracker
              onClick={startQuiz}
              alt="click here to start the quiz"
            />
          </RowContainer>
        </CardWrapper>
      </Card>
    </CardOverlayWrapper>
  );
};

export default QuizWelcome;
