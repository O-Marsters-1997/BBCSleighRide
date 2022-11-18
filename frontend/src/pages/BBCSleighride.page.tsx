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
import { useViewport } from "../hooks/useViewport";
import { ActionsContext } from "../contexts/StateActions.context";
import snowflake from "../assets/images/snowflake_button.svg";
import present from "../assets/images/present.svg";

const BBCSleighride = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflakes | null>(null);
  const navigate = useNavigate();
  const viewport = useViewport();
  const { showModal } = useContext(ActionsContext) ?? {};

  const snowStop = () => {
    if (snowflakes) {
      snowflakes.destroy();
    }
  };

  const navigateErrorPage = () => {
    navigate("/santa-smells");
  };

  useEffect(() => {
    setTimeout(() => snowStop(), 10000);
  }, [snowflakes]);

  const snowStart = () => {
    const snowflakes: Snowflakes = new Snowflakes({
      color: "#FEFFFD",
      count: 150,
      minOpacity: 0.3,
      maxOpacity: 0.9,
      minSize: 40,
      maxSize: 70,
      rotation: true,
      speed: 2,
      wind: true,
      width: 500,
      zIndex: 100,
    });
    setSnowflakes(snowflakes);
  };

  return (
    <View>
      <CentralRowContainer>
        <CountdownImage src={countdownTitle} alt="countdown to Christmas" />
      </CentralRowContainer>
      <Grid container spacing={2}>
        {viewport("medium") ? (
          <Grid item xs={4}>
            <MapCracker pageSide="left" onClick={() => navigate("/map")} />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Countdown />
          </Grid>
        )}
        {viewport("medium") ? (
          <Grid item xs={4}>
            <Countdown />
          </Grid>
        ) : (
          <Grid item xs={4}>
            <MapCracker pageSide="left" onClick={() => navigate("/map")} />
          </Grid>
        )}
        <Grid item xs={4}>
          <QuizCracker pageSide="right" onClick={() => navigate("/quiz")} />
        </Grid>
        {viewport("medium") ? (
          <Grid item xs={4}>
            <Image
              src={snowflake}
              alt="snowflakes"
              width="100%"
              pointer
              onClick={snowStart}
            />
          </Grid>
        ) : (
          <Grid item xs={4}>
            <JokeCracker pageSide="right" onClick={showModal} />
          </Grid>
        )}
        {viewport("medium") ? (
          <Grid item xs={4}>
            <JokeCracker pageSide="right" onClick={showModal} />
          </Grid>
        ) : (
          <Grid item xs={6}>
            <Image
              src={snowflake}
              alt="snowflakes"
              width="100%"
              pointer
              onClick={snowStart}
            />
          </Grid>
        )}
        <Grid item xs={viewport("medium") ? 4 : 6}>
          <Image
            src={present}
            alt="present brings you to 404"
            width="100%"
            pointer
            onClick={navigateErrorPage}
          />
        </Grid>
      </Grid>
    </View>
  );
};

export default BBCSleighride;
