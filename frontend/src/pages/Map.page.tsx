import React from "react";

import styled from "styled-components";
import Loading from "../components/Loading";
import { LoadingWrapper } from "../components/Lib";
import { endpoints } from "../types/constants";
import axios from "../services/quizTest";
import useAxios from "../hooks/useAxios";

const StledView = styled.button`
  margin: 500px;
`;

const Map = () => {
  const {
    response: countries,
    loading,
    error,
  } = useAxios({
    axiosInstance: axios,
    method: "get",
    url: endpoints.map,
    requestConfig: {
      headers: {
        "Content-Language": "EN-US",
      },
    },
  });

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading size="medium" title="loading countries" />
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <LoadingWrapper>
        <Loading size="medium" error title={`${error.message}`} />
      </LoadingWrapper>
    );
  }

  return (
    <StledView type="button" onClick={() => console.log(countries)}>
      I am a map
    </StledView>
  );
};

export default Map;
