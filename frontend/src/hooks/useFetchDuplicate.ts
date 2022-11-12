import { useEffect } from "react";
import _ from "lodash";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { AxiosResponse, AxiosRequestConfig, Method, AxiosError } from "axios";
import { State } from "../state/reducers";
import { ActionType } from "../state/actionTypes";
import { endpoints } from "../types/constants";
// import { shuffleArray } from "../utils/sharedHelpers";

const useFetchDuplicate = (configObj: any) => {
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {},
  }: {
    axiosInstance: any;
    method: Method;
    url: string;
    requestConfig: AxiosRequestConfig;
  } = configObj;

  const { response, error, loading } = useSelector((state: State) =>
    configObj.url == endpoints.quiz ? state.quiz : _.get(state, configObj.url),
  );

  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    console.log("running hook");
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res: AxiosResponse = await axiosInstance[method.toLowerCase()](
          url,
          {
            ...requestConfig,
            signal: controller.signal,
          },
        );
        dispatch({
          type: ActionType.SET_QUESTIONS,
          payload: Object.values(res.data)[0] as any[],
        });
      } catch (err: any) {
        dispatch({
          type: ActionType.QUESTIONS_ERROR,
          payload: err as AxiosError,
        });
        console.log(err.message);
      }
    };
    fetchData();
    // Use effect clean up function
    return () => controller.abort();
  }, [loading]);

  return { response, error, loading };
};

export default useFetchDuplicate;
