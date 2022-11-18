import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";
import View from "./View";
import Loading from "./Loading";
import { useViewport } from "../hooks/useViewport";
import { deviceMin } from "../types/constants";

const StyledView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .timer-colon-span {
    font-size: inherit;
    transform: translateX(-10px);
    @media ${deviceMin.medium} {
      transform: translateX(-15px);
    }
  }
`;

const Countdown = () => {
  const [timerDays, setTimerDays] = useState<string | number | undefined>();
  const [timerHours, setTimerHours] = useState<string | number | undefined>();
  const [timerMinutes, setTimerMinutes] = useState<
    string | number | undefined
  >();
  const [timerSeconds, setTimerSeconds] = useState<
    string | number | undefined
  >();
  const viewport = useViewport();

  const createTimer = async () => {
    const target = new Date("December 25 2022 00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setTimerDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setTimerHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setTimerMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setTimerSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    createTimer();
  }, [timerSeconds]);

  if (!timerSeconds) {
    return (
      <Loading
        title="fetching countdown"
        size={viewport("medium") ? "medium" : "small"}
      />
    );
  }

  return (
    <StyledView>
      <Text
        variant="h1"
        className="timer-clock"
        colorvariant="primary"
        sizeadjust={!viewport("xSmall") ? 0.8 : 1}
      >
        {timerDays}
        <View component="span" display="inline" className="timer-colon-span">
          :
        </View>
        {timerHours}
        <View component="span" display="inline" className="timer-colon-span">
          :
        </View>
        {timerMinutes}
        <View component="span" display="inline" className="timer-colon-span">
          :
        </View>
        {timerSeconds}
      </Text>
    </StyledView>
  );
};

export default Countdown;
