import React from "react";
import styled from "styled-components";
import View from "../View";
import Text from "../Text";

type Props = {
  option: string;
  onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledView = styled(View)``;

const QuizQuestionItem: React.FC<Props> = ({ option, onSelect }) => (
  <StyledView onClick={onSelect}>
    <Text variant="body2">{option}</Text>
  </StyledView>
);

export default QuizQuestionItem;
