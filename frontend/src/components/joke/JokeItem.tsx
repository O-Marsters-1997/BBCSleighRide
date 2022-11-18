import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../state/reducers";
import View from "../View";
import Text from "../Text";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const StyledPunchline = styled(View)`
  opacity: 0;
  animation: ${fadeIn} 1 0.75s linear;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  padding-top: 0.85em;
`;

const JokeItem: React.FC = () => {
  const { response: joke } = useSelector((state: State) => state.joke);
  return (
    <View>
      <Text variant="body1" textAlign="center">
        {joke?.joke}
      </Text>
      <StyledPunchline>
        <Text variant="body2" textAlign="center">
          {joke?.punchline}
        </Text>
      </StyledPunchline>
    </View>
  );
};

export default JokeItem;
