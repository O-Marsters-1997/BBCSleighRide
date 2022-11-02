import React from "react";
// import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { CentralRowContainer } from "../components/Lib";
import { CountdownImage } from "../components/Lib/Image";
// import Item from "@mui/material/Item";
import View from "../components/View";

import countdownTitle from "../assets/images/christmas_countdown.svg";
// import quizCracker from "../assets/images/christmas_cracker_quiz.svg";
// import jokeCracker from "../assets/images/christmas_cracker_joke.svg";
// import mapCracker from "../assets/images/christmas_cracker_map.svg";
import MapCracker from "../components/Svg/MapCracker";

const BBCSleighride = () => (
  <View>
    <CentralRowContainer>
      <CountdownImage src={countdownTitle} alt="countdown to Christmas" />
    </CentralRowContainer>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <MapCracker />
      </Grid>
    </Grid>
  </View>
);

export default BBCSleighride;
