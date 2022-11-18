import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Snowflakes from "magic-snowflakes";

import { CountdownImage } from "../components/Lib/Image";
import Countdown from "../components/Countdown";
import View from "../components/View";
import Image from "../components/Image";
import countdownTitle from "../assets/images/christmas_countdown.svg";
import MapCracker from "../components/Svg/MapCracker";
import QuizCracker from "../components/Svg/QuizCracker";
import JokeCracker from "../components/Svg/JokeCracker";
import { CentralRowContainer } from "../components/Lib";
import { ActionsContext } from "../contexts/StateActions.context";
import snowflake from "../assets/images/snowflake_button.svg";
import present from "../assets/images/present.svg";

const BBCSleighride = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflakes | null>(null);
  const navigate = useNavigate();
  const { showModal } = useContext(ActionsContext) ?? {};

  const snowStop = () => {
    if (snowflakes) {
      console.log("ending snow");
      snowflakes.destroy();
    }
  };

  const navigateErrorPage = () => {
    navigate("/santa-smells");
  };

  useEffect(() => {
    console.log("starting snow");
    setTimeout(() => snowStop(), 10000);
  }, [snowflakes]);

  const snowStart = () => {
    const snowflakes: Snowflakes = new Snowflakes({
      color: "#FEFFFD", // Default: "#5ECDEF"
      // container: document.querySelector('#snowflakes-container'), // Default: document.body
      count: 150, // 100 snowflakes. Default: 50
      minOpacity: 0.3, // From 0 to 1. Default: 0.6
      maxOpacity: 0.9, // From 0 to 1. Default: 1
      minSize: 40, // Default: 10
      maxSize: 70, // Default: 25
      rotation: true, // Default: true
      speed: 2, // The property affects the speed of falling. Default: 1
      wind: true, // Without wind. Default: true
      width: 500, // Default: width of container
      // height: 80%, // Default: height of container
      zIndex: 100, // Default: 9999
    });
    console.log(snowflakes);
    setSnowflakes(snowflakes);
    // setTimeout(snowStop, 500);
  };

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
          <Image src={snowflake} alt="snowflakes" onClick={snowStart} />
        </Grid>
        <Grid item xs={4}>
          <JokeCracker pageSide="right" onClick={showModal} />
        </Grid>
        <Grid item xs={4}>
          <Image
            src={present}
            alt="present brings you to 404"
            pointer
            onClick={navigateErrorPage}
          />
        </Grid>
      </Grid>
    </View>
  );
};

export default BBCSleighride;
