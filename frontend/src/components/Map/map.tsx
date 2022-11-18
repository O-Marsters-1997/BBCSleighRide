import React, { useState, ReactNode, useContext } from "react";
import styled from "styled-components";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { ActionType } from "../../state/actionTypes";
import Button from "../Button";
import View from "../View";
import Card from "../Card";
import Image from "../Image";
import Tooltip from "../Tooltip";
import DateCracker from "../Svg/DateCracker";
import FoodCracker from "../Svg/FoodCracker";
import GreetingCracker from "../Svg/GreetingCracker";
import {
  CentralRowContainer,
  RowContainer,
  CentralColumnContainer,
  DetailsContainer,
} from "../Lib";
import { useViewport } from "../../hooks/useViewport";
import useSounds from "../../hooks/useSounds";
import { ActionsContext } from "../../contexts/StateActions.context";
import { HandleZoom, randomChristmasSound } from "../../utils";
import { shake } from "../../utils/style/keyframes";
import { deviceMax } from "../../types/constants";
import BaubleInstructions from "../../assets/images/bauble_instructions.svg";
import Sleigh from "../../assets/images/sleigh_55_33.svg";

type Props = {
  countriesData: Country[];
};

const StyledView = styled(DetailsContainer)<Props>`
  cursor: url(${Sleigh}) 6 6, auto;
  @media ${deviceMax.medium} {
    padding-top: 50px;
  }
`;

const StyledBaubleWrapper = styled(View)`
  position: absolute;
  top: 90%;
  cursor: pointer;
  transform: rotate(-15deg);
  &:hover {
    animation: ${shake} 0.5s;
    animation-iteration-count: infinite;
  }
`;

const Map: React.FC<Props> = ({ countriesData }) => {
  const dispatch: Dispatch = useDispatch();
  const viewport = useViewport();
  const sounds = useSounds();
  const [tooltipContent, setTooltipContent] =
    useState<Countries.ToolTipContent>({
      option: "",
      optionValue: "",
      name: "",
    });
  const { selectedMapFilter, position } = useSelector(
    (state: any) => state.map,
  );
  const { toggleInstructions } = useContext(ActionsContext) ?? {};
  const { handleZoomIn, handleZoomOut, handleMoveEnd } = HandleZoom();

  const handleChange = (target: string) => {
    const { jingle, santa, merryXmas } = sounds;
    const playArray = [jingle, santa, merryXmas];
    randomChristmasSound(playArray);
    dispatch({ type: ActionType.SELECT_GREETING, payload: target });
  };

  // Map data
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const markers: Countries.MapAxis[] = [
    { name: "France", coordinates: [2.349014, 48.864716] },
    { name: "South Africa", coordinates: [24.7499, -28.7282] },
    { name: "Kenya", coordinates: [37.9062, -0.0236] },
    { name: "United States of America", coordinates: [-100.8603, 38.27] },
    { name: "Australia", coordinates: [136.2092, -26.5957] },
    { name: "Nicaragua", coordinates: [-85.2072, 12.8654] },
    { name: "Argentina", coordinates: [-67.3667, -37.1833] },
    { name: "Japan", coordinates: [138.2529, 36.2048] },
    { name: "Algeria", coordinates: [1.6596, 28.0339] },
    { name: "Kazakhstan", coordinates: [66.9237, 48.0196] },
    { name: "India", coordinates: [78.9629, 20.5937] },
    { name: "Brazil", coordinates: [-51.9253, -14.235] },
  ];

  const toggleContent = (): ReactNode => (
    <>
      <GreetingCracker
        alt="greeting"
        onClick={() => handleChange("greeting")}
      />
      <DateCracker
        alt="dates"
        onClick={() => handleChange("celebrated")}
        translateY="-20px"
      />
      <FoodCracker
        alt="foods"
        onClick={() => handleChange("meal")}
        translateY="-40px"
      />
    </>
  );

  return (
    <StyledView
      countriesData={countriesData}
      width={viewport("small") ? "clamp(400px, 60vw, 1000px)" : "300px"}
      reverse={!viewport("medium")}
    >
      {viewport("medium") ? (
        <CentralRowContainer gap="30px" style={{ paddingTop: "50px" }}>
          {toggleContent()}
        </CentralRowContainer>
      ) : (
        <CentralColumnContainer>{toggleContent()}</CentralColumnContainer>
      )}
      <Card>
        <RowContainer justifyContent="flex-end">
          <RowContainer gap="10px" style={{ padding: "10px" }}>
            <Button text="+" variant="rounded" onClick={handleZoomIn} />
            <Button text="-" variant="rounded" onClick={handleZoomOut} />
          </RowContainer>
        </RowContainer>
        <RowContainer>
          <ComposableMap>
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const { name } = geo.properties;
                    const found = countriesData.find(
                      (country) => country.name === name,
                    );
                    const geogContent = () => (
                      <Geography
                        geography={geo}
                        onMouseEnter={() => {
                          if (found) {
                            const TOOLTIP =
                              found[selectedMapFilter as keyof typeof found];
                            setTooltipContent(
                              (prevState: Countries.ToolTipContent) => ({
                                ...prevState,
                                option: selectedMapFilter as string,
                                optionValue: TOOLTIP as string,
                                name,
                              }),
                            );
                          }
                        }}
                        onMouseLeave={() => {
                          setTooltipContent(
                            (prevState: Countries.ToolTipContent) => ({
                              ...prevState,
                              option: "",
                              optionValue: "",
                              name: "",
                            }),
                          );
                        }}
                        stroke="#FEFFFD"
                        strokeWidth="0.5"
                        style={{
                          default: {
                            fill: "#ffbdc4",
                            outline: "none",
                          },
                          hover: {
                            fill: "#D20018",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#008011",
                            outline: "none",
                          },
                        }}
                      />
                    );

                    return (
                      <React.Fragment key={geo.rsmKey}>
                        {found ? (
                          <Tooltip
                            option={tooltipContent.option}
                            optionValue={tooltipContent.optionValue}
                            name={tooltipContent.name}
                          >
                            {geogContent()}
                          </Tooltip>
                        ) : (
                          <>{geogContent()}</>
                        )}
                      </React.Fragment>
                    );
                  })
                }
              </Geographies>
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g
                    fill="none"
                    stroke="#008011"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>

                  <text
                    textAnchor="middle"
                    y="-27"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "11px",
                      fontWeight: "400px",
                    }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
          <StyledBaubleWrapper>
            <Image
              src={BaubleInstructions}
              alt="instructions"
              width={viewport("medium") ? "10wv" : "50px"}
              height={viewport("medium") ? "10vw" : "50px"}
              onClick={toggleInstructions}
            />
          </StyledBaubleWrapper>
        </RowContainer>
      </Card>
    </StyledView>
  );
};

export default Map;
