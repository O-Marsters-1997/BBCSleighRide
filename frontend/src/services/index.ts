const BASE_URL: string = "http://localhost:9090/";

export const getData = async (params: Endpoint) => {
  const response = await fetch(`${BASE_URL}${params}`);
  const data = await response.json();
  return data;
};
