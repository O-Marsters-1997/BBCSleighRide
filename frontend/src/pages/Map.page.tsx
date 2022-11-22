import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
import { ActionsContext } from "../contexts/StateActions.context";
import Map from "../components/Map/map";
import Text from "../components/Text";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ExitCracker from "../components/Svg/QuizExitCracker";
import {
  RowContainerOverlayBorderBottom,
  CentralRowContainer,
  LoadingWrapper,
  ErrorWrapper,
  PageContainer,
  CompleteOverlayContainer,
  HomePageCardOverlayWrapper,
  TextWrapper,
} from "../components/Lib";
import { endpoints, forseenErrors } from "../types/constants";
import axios from "../services";
import useAxios from "../hooks/useAxios";

const MapController = () => {
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

  const { selectedMapFilter, modalOpen } = useSelector(
    (state: State) => state.map,
  );
  const { toggleInstructions } = useContext(ActionsContext) ?? {};

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
        <Error title={`${error.message}`} />
      </ErrorWrapper>
    );
  }

  if (!selectedMapFilter) {
    return (
      <ErrorWrapper>
        <Error title={forseenErrors.database} />
      </ErrorWrapper>
    );
  }

  return (
    <PageContainer alignItems="flex-start">
      {modalOpen && (
        <CompleteOverlayContainer>
          <HomePageCardOverlayWrapper>
            <Card bordercolor="primaryAlt" borderthickness={6}>
              <RowContainerOverlayBorderBottom>
                <Text variant="h3" textAlign="center">
                  Take Santa for a sleigh ride
                </Text>
              </RowContainerOverlayBorderBottom>
              <RowContainerOverlayBorderBottom>
                <TextWrapper alignItems="center" lineHeight={1.5}>
                  <Text variant="body1">1) Select a Christmas cracker</Text>
                  <Text variant="body1">
                    2) Land Santa&apos;s Sleigh by each map pin.
                  </Text>
                  <Text variant="body1">
                    3) See what you can find out about Christmas in that
                    country!
                  </Text>
                </TextWrapper>
              </RowContainerOverlayBorderBottom>
              <CentralRowContainer style={{ padding: "1.5em 0" }}>
                <ExitCracker onClick={toggleInstructions} />
              </CentralRowContainer>
            </Card>
          </HomePageCardOverlayWrapper>
        </CompleteOverlayContainer>
      )}
      {countries && <Map countriesData={countries} />}
    </PageContainer>
  );
};

export default MapController;
