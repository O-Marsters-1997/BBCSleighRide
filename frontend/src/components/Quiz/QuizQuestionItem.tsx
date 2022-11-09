import React from "react";
import styled from "styled-components";
import View from "../View";
import Text from "../Text";
import { getTextBackgroundColor } from "../../utils/styleHelpers";

type QuestionProps = {
  selected: number;
  index: number;
  answer: Quiz.CurrentAnswer;
};

type Props = {
  option: string;
  onSelect?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & QuestionProps;

const StyledView = styled(View)<QuestionProps>`
  background-color: ${(props) =>
    getTextBackgroundColor(props.selected, props.index, props.answer)};
  border-radius: 10px;
  padding: 1em;
  color: ${(props) =>
    props.selected == props.index
      ? props.theme.palette.primaryText.main
      : props.theme.palette.primaryText.contrastText};
`;

const QuizQuestionItem: React.FC<Props> = ({
  option,
  selected,
  index,
  answer,
  onSelect,
}) => (
  <StyledView
    onClick={onSelect}
    selected={selected}
    index={index}
    answer={answer}
  >
    <Text variant="body2">{option}</Text>
  </StyledView>
);

export default QuizQuestionItem;

// ${({ selected }) => getBackgroundColor(selected)}
