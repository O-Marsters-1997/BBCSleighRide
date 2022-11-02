import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState<string | number>("00");
  const [timerHours, setTimerHours] = useState<string | number>("00");
  const [timerMinutes, setTimerMinutes] = useState<string | number>("00");
  const [timerSeconds, setTimerSeconds] = useState<string | number>("00");

  useEffect(() => {
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
  }, []);

  return (
    <p className="timer-clock">
      {timerDays}
      <span className="timer-colon-span">:</span>
      {timerHours}
      <span className="timer-colon-span">:</span>
      {timerMinutes}
      <span className="timer-colon-span">:</span>
      {timerSeconds}
    </p>
  );
};

export default Countdown;
