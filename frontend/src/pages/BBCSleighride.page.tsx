import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
          <StyledGrid item xs={4}>
            <MapCracker pageSide="left" onClick={() => navigate("/map")} />
          </StyledGrid>
        ) : (
          <StyledGrid item xs={12}>
            <View style={{ paddingTop: "2em" }}>
              <Countdown />
            </View>
          </StyledGrid>
        )}
        {viewport("medium") ? (
          <StyledGrid item xs={4}>
            <Countdown />
          </StyledGrid>
        ) : (
          <StyledGrid item xs={4}>
            <MapCracker pageSide="left" onClick={() => navigate("/map")} />
          </StyledGrid>
        )}
        <StyledGrid item xs={4}>
          <QuizCracker pageSide="right" onClick={() => navigate("/quiz")} />
        </StyledGrid>
        {viewport("medium") ? (
          <StyledGrid item xs={4}>
            <Image
              src={snowflake}
              alt="snowflakes"
              width="clamp(150px, 25vw, 300px)"
              pointer
              onClick={snowStart}
            />
          </StyledGrid>
        ) : (
          <StyledGrid item xs={4}>
            <JokeCracker pageSide="right" onClick={showModal} />
          </StyledGrid>
        )}
        {viewport("medium") ? (
          <StyledGrid item xs={4}>
            <JokeCracker pageSide="right" onClick={showModal} />
          </StyledGrid>
        ) : (
          <StyledGrid item xs={6}>
            <Image
              src={snowflake}
              alt="snowflakes"
              width="clamp(60px, 35vw, 200px)"
              height="fit-content"
              pointer
              onClick={snowStart}
            />
          </StyledGrid>
        )}
        <StyledGrid item xs={viewport("medium") ? 4 : 6}>
          <Image
            src={present}
            alt="present brings you to 404"
            width={
              viewport("medium")
                ? "clamp(150px, 25vw, 300px)"
                : "clamp(60px, 35vw, 200px)"
            }
            height="fit-content"
            pointer
            onClick={navigateErrorPage}
          />
        </StyledGrid>
      </Grid>
    </View>
  );
};

export default BBCSleighride;
