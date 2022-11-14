import React, { ReactNode } from "react";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
// import { ActionsContext } from "../../contexts/StateActions.context";
import { ActionType } from "../../state/actionTypes";
import View from "../View";
import Text from "../Text";
import Button from "../Button";
import Card from "../Card";
import DateCracker from "../Svg/DateCracker";
import FoodCracker from "../Svg/FoodCracker";
import GreetingCracker from "../Svg/GreetingCracker";
import {
  CentralRowContainer,
  RowContainer,
  CentralColumnContainer,
} from "../Lib";
import { useViewport } from "../../hooks/useViewport";
import useSounds from "../../hooks/useSounds";
import { HandleZoom, randomChristmasSound } from "../../utils";

type Props = {
  countriesData: Country[];
  setTooltipContent: (content: ReactNode) => void;
};

const StyledView = styled(View)<Props>``;

const StyledTooltip = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  font-size: 2em;
  color: blue;
  background-color: yellow;
`;

const Map: React.FC<Props> = ({ countriesData, setTooltipContent }) => {
  const dispatch: Dispatch = useDispatch();
  const viewport = useViewport();
  const sounds = useSounds();
  const { selectedMapFilter, position } = useSelector(
    (state: any) => state.map,
  );
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
      <DateCracker alt="dates" onClick={() => handleChange("celebrated")} />
      <FoodCracker alt="foods" onClick={() => handleChange("meal")} />
    </>
  );

  return (
    <StyledView
      countriesData={countriesData}
      setTooltipContent={setTooltipContent}
    >
      {viewport("mediumPlus") ? (
        <CentralRowContainer>{toggleContent()}</CentralRowContainer>
      ) : (
        <CentralColumnContainer>{toggleContent()}</CentralColumnContainer>
      )}
      <Card>
        <RowContainer justifyContent="flex-end">
          <View>
            <Button text="+" onClick={handleZoomIn} />
            <Button text="-" onClick={handleZoomOut} />
          </View>
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
                            const CONTINENT = found.continent;
                            setTooltipContent(
                              `<center><b>${TOOLTIP}</b><br>${name}, ${CONTINENT}</center>`,
                            );
                          }
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
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
                          <StyledTooltip
                            arrow
                            followCursor
                            title={<Text variant="subtitle1">{name}</Text>}
                          >
                            {geogContent()}
                          </StyledTooltip>
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
        </RowContainer>
      </Card>
    </StyledView>
  );
};

export default Map;
