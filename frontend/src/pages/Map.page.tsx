import React, { useState, ReactNode } from "react";

import Loading from "../components/Loading";
// import View from "../components/View";
import Map from "../components/Map/map";
import { LoadingWrapper, ErrorWrapper, PageContainer } from "../components/Lib";
import { endpoints } from "../types/constants";
import axios from "../services/quizTest";
import useAxios from "../hooks/useAxios";

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
    <PageContainer>
      {countries && (
        <Map countriesData={countries} setTooltipContent={handleContentSet} />
      )}
    </PageContainer>
  );
};

export default MapController;
