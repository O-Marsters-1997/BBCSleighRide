import { useEffect } from "react";
import _ from "lodash";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { AxiosResponse, AxiosRequestConfig, Method, AxiosError } from "axios";
import { State } from "../state/reducers";
import { ActionType } from "../state/actionTypes";
import { endpoints } from "../types/constants";
// import { shuffleArray } from "../utils/sharedHelpers";

const getActionType = (url: string): ActionTypeObject => {
  const result: ActionTypeObject = { res: null, err: null };

  switch (url) {
    case endpoints.quiz:
      result.res = ActionType.SET_QUESTIONS;
      result.err = ActionType.QUESTIONS_ERROR;
      break;
    case endpoints.jokes:
      result.res = ActionType.SET_JOKE;
      result.err = ActionType.JOKE_ERROR;
      break;
    default:
      return result;
  }
  return result;
};

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
    console.log("running fetch");
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
          type: getActionType(configObj.url).res,
          payload: Object.values(res.data)[0] as any,
        });
      } catch (err: any) {
        dispatch({
          type: getActionType(configObj.url).err,
          payload: err as AxiosError,
        });
        throw new Error(err.message);
      }
    };

    fetchData();
    // Use effect clean up function
    return () => controller.abort();
  }, [loading]);

  return { response, error, loading };
};

export default useFetchDuplicate;
