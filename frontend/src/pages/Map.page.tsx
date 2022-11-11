import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { State } from "../state/reducers";
import { ActionType } from "../state/actionTypes";
import { endpoints } from "../types/constants";
import { getData } from "../services";

const StledView = styled.button`
  margin: 500px;
`;

const Map = () => {
  const dispatch: Dispatch = useDispatch();
  const { countries } = useSelector((state: State) => state.map);

  const getMyCountries = async () => {
    const data = await getData(endpoints.countries);
    return dispatch({ type: ActionType.SET_COUNTRIES, payload: data });
  };

  useEffect(() => {
    getMyCountries();
  }, []);

  return (
    <StledView type="button" onClick={() => console.log(countries)}>
      I am a map
    </StledView>
  );
};

export default Map;
