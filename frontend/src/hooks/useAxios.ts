import { useEffect } from "react";
import _ from "lodash";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { AxiosResponse, AxiosError } from "axios";
import { State } from "../state/reducers";
import { endpoints } from "../types/constants";
import { getActionType } from "../utils";

const useFetchDuplicate = (configObj: FetchConfig) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  const { response, error, loading } = useSelector((state: State) =>
    configObj.url == endpoints.quiz ? state.quiz : _.get(state, configObj.url),
  );

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
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

    if (loading) {
      fetchData();
    }
    // Use effect clean up function
    return () => controller.abort();
  }, [loading]);

  return { response, error, loading };
};

export default useFetchDuplicate;
