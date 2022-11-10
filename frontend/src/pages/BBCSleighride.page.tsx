import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { CountdownImage } from "../components/Lib/Image";
import Countdown from "../components/Countdown";
import View from "../components/View";
import countdownTitle from "../assets/images/christmas_countdown.svg";
import MapCracker from "../components/Svg/MapCracker";
import QuizCracker from "../components/Svg/QuizCracker";
import JokeCracker from "../components/Svg/JokeCracker";
// import Background from "../components/Svg/Background"
import { CentralRowContainer } from "../components/Lib";
import { ActionsContext } from "../contexts/StateActions.context";

const BBCSleighride = () => {
  const navigate = useNavigate();
  const { showModal } = useContext(ActionsContext) ?? {};
  return (
    <View>
      <CentralRowContainer>
        <CountdownImage src={countdownTitle} alt="countdown to Christmas" />
      </CentralRowContainer>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MapCracker pageSide="left" onClick={() => navigate("/map")} />
        </Grid>
        <Grid item xs={4}>
          <Countdown />
        </Grid>
        <Grid item xs={4}>
          <QuizCracker pageSide="right" onClick={() => navigate("/quiz")} />
        </Grid>
        <Grid item xs={4}>
          <JokeCracker pageSide="right" onClick={showModal} />
        </Grid>
      </Grid>
    </View>
  );
};

export default BBCSleighride;
