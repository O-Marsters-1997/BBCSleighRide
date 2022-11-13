import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import useSound from "use-sound";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
// import { ActionsContext } from "../../contexts/StateActions.context";
import { ActionType } from "../../state/actionTypes";
import View from "../View";
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
// import hohoho from "../assets/sounds/hohoho.mp3";
import hohoho from "../../assets/sounds/hohoho.mp3";
import jingle_bells from "../../assets/sounds/jingle_bells_cut.mp3";
import wishyoumerry from "../../assets/sounds/we_wish_you_a_merry_christmas.mp3";

interface MapAxis {
  coordinates: number[];
  name?: string;
  zoom?: any;
}

type Props = {
  countriesData: Country[];
  setTooltipContent: (content: string) => void;
};

const StyledView = styled(View)<Props>``;

const Map: React.FC<Props> = ({ countriesData, setTooltipContent }) => {
  //   const { selectGreeting } = useContext(ActionsContext) ?? {};
  const [position, setPosition] = useState<MapAxis>({
    coordinates: [10, 8],
    zoom: 1.1,
  });
  const dispatch: Dispatch = useDispatch();
  const viewport = useViewport();
  const [play1] = useSound(jingle_bells);
  const [play2] = useSound(hohoho);
  const [play3] = useSound(wishyoumerry);

  // const { selectedMapFilter } = useSelector((state: any) => state.map);

  const handleChange = (target: string) => {
    const playArray = [play1, play2, play3];
    const toPlay = playArray[Math.floor(Math.random() * playArray.length)];
    toPlay();
    dispatch({ type: ActionType.SELECT_GREETING, payload: target });
  };

  // Map Zooming functions
  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.2 }));
  };

  // const handleMoveEnd = () => {
  //   setPosition(position);
  // };

  // Map data
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  console.log(geoUrl);

  // these are set here to allow for easy adjustment (can set e.g. offset values for each individual pin, easier here than tweaking wihtin a DB)
  // const markers: MapAxis[] = [
  //   { name: "France", coordinates: [2.349014, 48.864716] },
  //   { name: "South Africa", coordinates: [24.7499, -28.7282] },
  //   { name: "Kenya", coordinates: [37.9062, -0.0236] },
  //   { name: "United States of America", coordinates: [-100.8603, 38.27] },
  //   { name: "Australia", coordinates: [136.2092, -26.5957] },
  //   { name: "Nicaragua", coordinates: [-85.2072, 12.8654] },
  //   { name: "Argentina", coordinates: [-67.3667, -37.1833] },
  //   { name: "Japan", coordinates: [138.2529, 36.2048] },
  //   { name: "Algeria", coordinates: [1.6596, 28.0339] },
  //   { name: "Kazakhstan", coordinates: [66.9237, 48.0196] },
  //   { name: "India", coordinates: [78.9629, 20.5937] },
  //   { name: "Brazil", coordinates: [-51.9253, -14.235] },
  // ];

  const toggleContent = (): ReactNode => (
    <>
      <GreetingCracker
        alt="greeting"
        onClick={() => handleChange("greeting")}
      />
      <DateCracker alt="dates" onClick={() => handleChange("date")} />
      <FoodCracker alt="foods" onClick={() => handleChange("food")} />
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
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </RowContainer>
      </Card>
    </StyledView>
  );
};

export default Map;
