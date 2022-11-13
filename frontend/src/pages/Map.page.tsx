import React, { useState, useEffect, ReactNode } from "react";
import styled from "styled-components";

import Loading from "../components/Loading";
import View from "../components/View";
import Map from "../components/Map/map";
import { LoadingWrapper, ErrorWrapper } from "../components/Lib";
import { endpoints } from "../types/constants";
import axios from "../services/quizTest";
import useAxios from "../hooks/useAxios";

const StledView = styled(View)`
  max-width: 600px;
`;

const MapController = () => {
  const [content, setContent] = useState<ReactNode | undefined>("");
  console.log(content);
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

  useEffect(() => console.log(content), [content]);

  const handleContentSet = (content: ReactNode): void => {
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
    </StledView>
  );
};

export default MapController;
