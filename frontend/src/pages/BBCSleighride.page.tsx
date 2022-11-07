import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { CentralRowContainer } from "../components/Lib";
import { CountdownImage } from "../components/Lib/Image";
import Countdown from "../components/Countdown";
// import Item from "@mui/material/Item";
import View from "../components/View";

import countdownTitle from "../assets/images/christmas_countdown.svg";
// import jokeCracker from "../assets/images/christmas_cracker_joke.svg";
import MapCracker from "../components/Svg/MapCracker";
import QuizCracker from "../components/Svg/QuizCracker";
// import QuizCracker from "../components/Svg/QuizCracker";

const BBCSleighride = () => {
  const navigate = useNavigate();
  return (
    <View>
      <CentralRowContainer>
        <CountdownImage src={countdownTitle} alt="countdown to Christmas" />
      </CentralRowContainer>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MapCracker pageSide="left" />
        </Grid>
        <Grid item xs={4}>
          <Countdown />
        </Grid>
        <Grid item xs={4}>
          <QuizCracker pageSide="right" onClick={() => navigate("/quiz")} />
        </Grid>
      </Grid>
    </View>
  );
};

export default BBCSleighride;
