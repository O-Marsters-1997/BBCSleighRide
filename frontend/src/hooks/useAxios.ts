import { useState, useEffect } from "react";
import { AxiosError, AxiosResponse, AxiosRequestConfig, Method } from "axios";

const useAxios = (configObj: any) => {
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

  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

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
        setResponse(Object.values(res.data)[0]);
      } catch (err: any) {
        console.log(err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Use effect clean up function
    return () => controller.abort();
  }, []);

  return { response, error, loading };
};

export default useAxios;
