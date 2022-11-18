import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import View from "./View";
import Loading from "./Loading";

const StyledView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
    return <Loading title="fetching countdown" size="medium" />;
  }

  return (
    <StyledView>
      <Typography
        variant="h1"
        className="timer-clock"
        style={{ fontFamily: "Raleway Extra Bold" }}
      >
        {timerDays}
        <View display="inline" className="timer-colon-span">
          :
        </View>
        {timerHours}
        <View display="inline" className="timer-colon-span">
          :
        </View>
        {timerMinutes}
        <View display="inline" className="timer-colon-span">
          :
        </View>
        {timerSeconds}
      </Typography>
    </StyledView>
  );
};

export default Countdown;
