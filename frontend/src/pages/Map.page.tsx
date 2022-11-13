import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import styled from "styled-components";
import Loading from "../components/Loading";
import View from "../components/View";
import Map from "../components/Map/map";
import { LoadingWrapper, ErrorWrapper } from "../components/Lib";
import { endpoints } from "../types/constants";
import axios from "../services/quizTest";
import useAxios from "../hooks/useAxios";

const StledView = styled(View)``;

const MapController = () => {
  const [content, setContent] = useState<string | undefined>("");
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

  const handleContentSet = (content: string): void => {
    setContent(content);
  };

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading size="medium" title="loading countries" />
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <ErrorWrapper>
        <Loading size="medium" error title={`${error.message}`} />
      </ErrorWrapper>
    );
  }

  return (
    <StledView>
      {countries && (
        <Map countriesData={countries} setTooltipContent={handleContentSet} />
      )}
      <ReactTooltip
        type="dark"
        effect="float"
        multiline
        html
        border
        borderColor="#D20018"
        scrollHide
      >
        {content}
      </ReactTooltip>
    </StledView>
  );
};

export default MapController;
